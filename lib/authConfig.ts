import { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "@/models/User";

export interface NSession extends Session {
  id: string | undefined;
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
        console.log(user);
        if (!user) {
          return null;
        }
        const compared = await compare(credentials.password, user.password);
        if (!compared) {
          return null;
        }
        console.log(user);
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
    async session({ session, token }) {
      return session;
    },
  },
};
export default authConfig;
