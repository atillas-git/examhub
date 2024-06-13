import { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "@/models/User";
import mongoose from "mongoose";
import { User as UserType } from "@/types";

export interface NSession extends Session {
  id: mongoose.Types.ObjectId | undefined;
  username : string;
  email:string
}

const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await User.findOne({
          email: credentials.email,
        });
        if (!user) {
          return null;
        }
        const compared = await compare(credentials.password, user.password);
        if (!compared) {
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
    async session({ session, token,user }) {
      const us : UserType | null = await User.findById(token.sub);
      if(us){
        (session as NSession).id = us._id;
        (session as NSession).username= us.username;
        (session as NSession).email = us.email;
      }
      return session;
    },
  },
};
export default authConfig;
