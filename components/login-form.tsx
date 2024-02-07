"use client";

import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn("github");
  }

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex flex-col m-8 items-center justify-center space-y-2">
        <h1 className="text-xl font-bold">Login</h1>
        <Input type="text" />
        <Input type="password" />
        <p>Forgot password</p>
        <Button variant={"secondary"}>Login</Button>
        <div className="flex w-full items-center justify-center gap-4">
          <div className="h-[1px] w-full bg-black" />
          <p>Or</p>
          <div className="h-[1px] w-full bg-black" />
        </div>
        <Button type="submit">Sign in with GitHub</Button>
      </form>
    </div>
  );
}
