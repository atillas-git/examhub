"use client";
import { Button, Input } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/signup", {
        email: email,
        username: username,
        password: password,
      });
      router.replace("/signin");
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response?.status !== 404 &&
        typeof error.response?.data === "string"
      ) {
        toast.error(error.response?.data);
      }
      console.log(error);
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
          onSubmit={handleSignup}
        >
          <p className="font-semibold">Sign In</p>
          <small>Welcome to the ExamHub.ai</small>
          <div>
            <Input
              label="Username"
              type="text"
              required
              errorMessage="Username is invalid"
              isRequired
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
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
              <Link href={"/signin"}>You already have an account?</Link>
            </small>
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              disableRipple
              isDisabled={loading}
              isLoading={loading}
            >
              Sign up
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
            Sign up using Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
