"use server";

import db from "@/modules/db";
import { ISignUp } from "@/types";
import { compareHashedPassword, hashPassword } from "@/utils";
import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";

export async function signUp(userData: ISignUp) {
  try {
    const hashedPassword = await hashPassword(userData.password);

    await db.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        id: Date.now().toString(),
      },
    });
    cookies().set({ name: "isAuth", value: "true" });
    await db.$disconnect();
    return { status: "ok" };
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      await db.$disconnect();
      return { status: error.code };
    } else {
      await db.$disconnect();
      throw new Error(error);
    }
  }
}

export async function logIn(userData: ISignUp) {
  try {
    const user = await db.user.findUnique({
      where: { email: userData.email },
    });

    if (user) {
      const isPasswordEqual = compareHashedPassword(
        userData.password,
        user?.password
      );
      if (isPasswordEqual) {
        cookies().set({ name: "isAuth", value: "true" });
        await db.$disconnect();
        return { status: "ok" };
      } else {
        await db.$disconnect();
        throw new Error("Wrong user data");
      }
    }
    if (!user) {
      await db.$disconnect();
      throw new Error("Wrong user data");
    }
  } catch (error: any) {
    console.log(error);
    await db.$disconnect();
    throw new Error(error);
  }
}

export async function signOut() {
  cookies().set({ name: "isAuth", value: "false" });
}
