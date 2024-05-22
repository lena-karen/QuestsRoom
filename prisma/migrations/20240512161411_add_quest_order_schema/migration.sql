-- CreateEnum
CREATE TYPE "Type" AS ENUM ('horror', 'mystic', 'adventures', 'detective', 'sci_fi');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "previewImg" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "level" "Level" NOT NULL,
    "peopleCount" INTEGER[],
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "peopleCount" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "isLegal" BOOLEAN NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
