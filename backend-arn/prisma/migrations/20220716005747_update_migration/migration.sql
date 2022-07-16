-- DropEnum
DROP TYPE "Tecnology";

-- DropEnum
DROP TYPE "Zones";

-- CreateTable
CREATE TABLE "Zones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tecnology_pkey" PRIMARY KEY ("id")
);
