/*
  Warnings:

  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Plan_pkey" PRIMARY KEY ("id");
