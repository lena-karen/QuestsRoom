import React from "react";
import { SignUpForm } from "@/components";

export default function SignUpPage() {
  return (
    <section
      id="signup"
      className=" min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="default-title">Регистрация</h2>
      <SignUpForm />
    </section>
  );
}
