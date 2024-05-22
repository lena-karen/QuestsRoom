"use client";
import { ROUTES } from '@/constants';
import { wordsToLowelcase } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    title: "КВЕСТЫ",
    url: ROUTES.HOME,
  },
  {
    title: "НОВИЧКАМ",
    url: ROUTES.BEGINNER,
  },
  {
    title: "ОТЗЫВЫ",
    url: ROUTES.FEEDBACK,
  },
  {
    title: "АКЦИИ",
    url: ROUTES.OFFERS,
  },
  {
    title: "КОНТАКТЫ",
    url: ROUTES.CONTACT,
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-12 text-_A6A6A6">
      {menuItems.map((item) => (
        <Link href={item.url} key={item.title} className = 'hover:scale-150'>
          <p className={clsx( { "text-_FEC432": pathname === item.url }, 'text-sm  font-semibold',)}>
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
