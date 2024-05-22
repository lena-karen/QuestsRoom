import React, { Suspense } from "react";
import { gameType } from "@/types";
import { GameItem } from "../GameItem/GameItem";
import { Loader } from "@/components";

export const GamesBlock = ({ quests }: { quests: gameType[] }) => {
  return (
    <div className="flex gap-6 flex-wrap">
      {quests.map((game) => (
        <Suspense fallback={<Loader />}>
          <GameItem key={game.id} {...game} />
        </Suspense>
      ))}
    </div>
  );
};
