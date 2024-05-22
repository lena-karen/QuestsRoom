import React from "react";

export default function QuestLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
