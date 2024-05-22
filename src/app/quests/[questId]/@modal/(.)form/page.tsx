import { OrderForm } from "@/components";
import React from "react";

export default function page() {
  return (
    <section className=" absolute top-0 left-0 right-0 bottom-0 min-h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-200 opacity-50 absolute top-0 left-0 right-0 bottom-0" />
      <dialog open >
        <OrderForm />
      </dialog>
    </section>
  );
}
