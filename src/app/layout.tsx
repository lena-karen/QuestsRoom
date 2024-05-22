import { Header, Socials } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import clsx from 'clsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quests Library",
  description: "Choose the quest you like",
};

export default function RootLayout({
  children,
  modal,
  form,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  form: React.ReactNode;
}>) {
  const isLoggedIn = cookies().get("isAuth")?.value === "true";
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-black')}>
        <AntdRegistry>
          <Header isLoggedIn={!!isLoggedIn} />
          {children}
          {modal}
          {form}
          <Socials />
        </AntdRegistry>
      </body>
    </html>
  );
}
