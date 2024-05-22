"use client";
import { signOut } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import { Nav } from "./components";

const phoneNumber = "+38 (050) 555-99-55";

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean | undefined }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/signup");
  };

  return (
    <div className="h-[74px] absolute left-0 right-0 px-8 pt-4 flex items-center justify-between text-_A6A6A6">
      <Logo />
      <Nav />
      <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>

      {isLoggedIn ? (
        <button onClick={handleLogout} className="flex gap-2 items-center">
          <LogoutOutlined />
          Выйти
        </button>
      ) : (
        <Link
          href="/signup"
          className="focus:text-_F2890F flex gap-2 items-center hover:scale-110"
        >
          <Icon name="icons/person" width={18} height={18} />
          Регистрация
        </Link>
      )}
    </div>
  );
};
