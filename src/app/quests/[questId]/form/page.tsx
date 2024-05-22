"use client";

import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

export default function Page({ params }: { params: { questId: string } }) {
  const router = useRouter();
  const questId = params.questId;

  useLayoutEffect(() => {
    router.replace(`/quests/${questId}`);
  }, [router]);
  return null;
}
