"use client";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";

const SigninPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: "/app",
      });
    } catch (error) {
      toast.error("An error occurred while trying to signin!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="hidden sm:flex sm:col-span-2 bg-teal-500"></div>
      <div className="bg-teal-500 sm:bg-white col-span-6 sm:col-span-4 flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-3 w-full p-7 sm:p-24"
          onSubmit={handleSignin}
        >
          <p className="font-semibold">Sign In</p>
          <small>Welcome to the ExamHub.ai</small>
          <div>
            <Input
              label="Email"
              type="email"
              required
              errorMessage="Email is invalid"
              isRequired
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              isRequired
              errorMessage="Password must be minimum 8 characters long!"
            />
          </div>
          <div className="w-full text-end">
            <small className="underline">
              <Link href={"/signup"}>You do not have an account?</Link>
            </small>
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              disableRipple
              isDisabled={loading}
              isLoading={loading}
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="-mt-4">
          <small>
            <i>Or Sign in using</i>
          </small>
        </div>
        <div className="flex flex-col mt-7">
          <Button className="flex items-center bg-blue-500 text-white">
            <FaGoogle />
            Sign in using Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
