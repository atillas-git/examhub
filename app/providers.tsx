"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
interface IProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: IProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default AppProviders;
