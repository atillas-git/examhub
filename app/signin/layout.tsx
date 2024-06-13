import authConfig from "@/lib/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
interface IProps {
  children: React.ReactNode;
}
const SigninLayout = async ({ children }: IProps) => {
  // const session = await getServerSession(authConfig);
  // if (session) {
  //   redirect("/app");
  // }
  return <div>{children}</div>;
};

export default SigninLayout;
