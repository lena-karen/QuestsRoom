"use server";

import { IOrder } from "@/types";
import db from "../../modules/db";

export async function getQuests() {
  const quests = await db.quest.findMany();
  return quests;
  // try {
  //   const res = await fetch(process.env.API_URL + "/quests", {
  //     cache: "no-cache",
  //   }).then((data) => data.json());
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
}

export async function getQuestById(questId: string) {
  const quest = db.quest.findUnique({ where: { id: +questId } });
  return quest;
}
// try {
//   const res = await fetch(process.env.API_URL + "/quests/" + id).then(
//     (data) => data.json()
//   );
//   return res;
// } catch (error) {
//   throw new Error("err");
// }

export async function sendOrder(data: IOrder) {
  try {
    await db.order.create({ data });
    return 201;
  } catch (error) {
    console.log("error");
  }
  // try {
  //   const res = await fetch(process.env.API_URL + "/orders", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(res => res.json());
  //   return res;
  // } catch (error) {
  //   throw new Error("error");
  // }
}
