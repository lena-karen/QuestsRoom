import { SignUpForm } from "@/components";
import React from "react";

export default function page() {
  return (
    <section
      id="signup"
      className="backgroundImage min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="default-title">Вход</h2>
      <SignUpForm />
    </section>
  );
}
