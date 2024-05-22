"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      className="h-screen w-screen flex flex-col gap-2 items-center justify-center text-_E6E6E6 text-4xl"
      id="error"
    >
      <p>Упс! </p>
      <p>Что-то пошло не так! </p>
    </div>
  );
}
