/*
  Warnings:

  - You are about to drop the `Zones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Zones";

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CityDetails" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "tecnologyId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,

    CONSTRAINT "CityDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CityDetails_cityId_key" ON "CityDetails"("cityId");

-- CreateIndex
CREATE UNIQUE INDEX "CityDetails_zoneId_key" ON "CityDetails"("zoneId");

-- CreateIndex
CREATE UNIQUE INDEX "CityDetails_tecnologyId_key" ON "CityDetails"("tecnologyId");

-- CreateIndex
CREATE UNIQUE INDEX "CityDetails_planId_key" ON "CityDetails"("planId");

-- AddForeignKey
ALTER TABLE "CityDetails" ADD CONSTRAINT "CityDetails_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityDetails" ADD CONSTRAINT "CityDetails_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityDetails" ADD CONSTRAINT "CityDetails_tecnologyId_fkey" FOREIGN KEY ("tecnologyId") REFERENCES "Tecnology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityDetails" ADD CONSTRAINT "CityDetails_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
