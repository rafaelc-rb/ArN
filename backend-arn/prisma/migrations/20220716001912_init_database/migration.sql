-- CreateEnum
CREATE TYPE "Zones" AS ENUM ('RURAL', 'URBAN');

-- CreateEnum
CREATE TYPE "Tecnology" AS ENUM ('RADIO', 'FIBER');

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "mb" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
