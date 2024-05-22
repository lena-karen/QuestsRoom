import { getQuests } from "@/app/actions";
import { notFound } from "next/navigation";
import React from "react";
import { gameType } from "../../../types";
import { GamesBlock, SortBlock } from "./components";

export const AllGames = async ({ filter }: { filter: string }) => {
  const quests = await getQuests() as gameType[];

  if (!quests) {
    notFound();
  }

  let filteredQuests: gameType[] = quests;

  if (filter !== "all" && filter) {
    filteredQuests = quests?.filter((quest: gameType) => quest.type === filter);
  } else {
    filteredQuests = quests;
  }

  return (
    <div className="wrapper mx-[100px] pt-[123px] pb-10">
      <div className="flex flex-col ">
        <p className="text-sm font-medium text-_F2890F mb-2">квесты в Одессе</p>
        <h1 className="text-[64px] font-[800] text-_FFFFFF mb-12">
          Выберите тематику
        </h1>
      </div>

      <SortBlock />

      {filteredQuests && <GamesBlock quests={filteredQuests} />}
    </div>
  );
};
