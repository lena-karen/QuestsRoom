import { Icon } from "@/components";
import { gameType } from "@/types";
import Link from "next/link";
import React from "react";

export const GameItem = ({
  id,
  title,
  previewImg,
  peopleCount,
  level,
}: gameType) => {
  const imageStyle = {
    backgroundImage: `url('${previewImg}')`,
  };

  return (
    <Link
      href={`/quests/${id}`}
      style={imageStyle}
      className="hover:scale-120 cursor-pointer w-[344px] h-[232px] flex flex-col justify-end"
    >
      <p className="default-title">
        {title}
      </p>
      <div className=" ml-[21px] mb-[20px] flex gap-3 text-_E6E6E6 text-[13px] font-medium">
        <div className="flex gap-1">
          <Icon name="icons/person" width={13} height={16} />
          <p>{peopleCount[0] + "-" + peopleCount[1] + " человек"}</p>
        </div>
        <div className="flex gap-3">
          <Icon name="icons/puzzle" width={16} height={16} />
          <p>{level}</p>
        </div>
      </div>
    </Link>
  );
};
