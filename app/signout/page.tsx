"use client";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Signout = () => {
  const router = useRouter();
  return (
    <div className="h-screen p-7 bg-teal-500 text-white flex flex-col items-center justify-center gap-3">
      <p className="text-2xl font-semibold">
        Are you sure you want to signout?
      </p>
      <div className="flex gap-3 items-center">
        <Button variant="shadow" onClick={() => router.back()}>
          No, take me back!
        </Button>
        <Button
          variant="solid"
          onClick={() => signOut({ callbackUrl: "/signin" })}
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export default Signout;
