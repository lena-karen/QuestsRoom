"use client";

import { Icon } from "@/components/Icon/Icon";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { AllIconTypes } from "../../../../../types";

interface IOption {
  id: string;
  title: string;
  icon: AllIconTypes;
  iconSize: [number, number];
}
const sortOptions: IOption[] = [
  {
    id: "all",
    title: "Все квесты",
    icon: "icons/all-quests",
    iconSize: [26, 30],
  },
  {
    id: "adventures",
    title: "Приключения",
    icon: "icons/adventures-quests",
    iconSize: [36, 30],
  },
  {
    id: "horror",
    title: "Ужасы",
    icon: "icons/horror-quests",
    iconSize: [30, 30],
  },
  {
    id: "mystic",
    title: "Мистика",
    icon: "icons/mistic-quests",
    iconSize: [30, 30],
  },
  {
    id: "detective",
    title: "Детектив",
    icon: "icons/detective-quests",
    iconSize: [40, 30],
  },
  {
    id: "sci-fi",
    title: "Sci-fi",
    icon: "icons/sciFi-quests",
    iconSize: [28, 30],
  },
];
export const SortBlock = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const currentFilter = params.get("filter");

  // useEffect(() => {
  //   params.set("filter", "all");
  //   replace(`${pathname}?${params.toString()}`);
  // }, []);

  const handleFilter = (id: string) => {
    params.set("filter", id);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="h-[36px] flex mb-[63px] items-center ">
      {sortOptions.map((option, ind) => (
        <div
          key={option.id}
          className={clsx(
            "text-_E6E6E6 flex items-center justify-center  cursor-pointer "
          )}
          onClick={() => handleFilter(option.id)}
        >
          <div className="flex gap-3 hover:scale-110">
            <Icon
              name={option.icon}
              width={option.iconSize[0]}
              height={option.iconSize[1]}
            />
            <p
              className={clsx({
                "border-_FEC432 border-b-2":
                  currentFilter === option.id || (!currentFilter && ind === 0),
              })}
            >
              {option.title}
            </p>
          </div>

          {ind !== sortOptions.length - 1 && (
            <div className="h-[36px] w-[1px] mx-10 bg-_615E5C rounded-sm " />
          )}
        </div>
      ))}
    </div>
  );
};
