/*
  Warnings:

  - The primary key for the `profile_specialist_tagsindustry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `profile_specialist_tagslanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `profile_specialist_tagsplatform` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `profile_specialist_tagsspecialization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tagsindustry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tagsindustry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tagslanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tagslanguage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tagsplatform` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tagsplatform` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tagsspecialization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tagsspecialization` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `tagsindustry_id` on the `profile_specialist_tagsindustry` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tagslanguage_id` on the `profile_specialist_tagslanguage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tagsplatform_id` on the `profile_specialist_tagsplatform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tagsspecialization_id` on the `profile_specialist_tagsspecialization` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "profile_specialist_tagsindustry" DROP CONSTRAINT "profile_specialist_tagsindustry_tagsindustry_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_specialist_tagslanguage" DROP CONSTRAINT "profile_specialist_tagslanguage_tagslanguage_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_specialist_tagsplatform" DROP CONSTRAINT "profile_specialist_tagsplatform_tagsplatform_id_fkey";

-- DropForeignKey
ALTER TABLE "profile_specialist_tagsspecialization" DROP CONSTRAINT "profile_specialist_tagsspecialization_tagsspecialization_i_fkey";

-- AlterTable
ALTER TABLE "profile_specialist_tagsindustry" DROP CONSTRAINT "profile_specialist_tagsindustry_pkey",
DROP COLUMN "tagsindustry_id",
ADD COLUMN     "tagsindustry_id" INTEGER NOT NULL,
ADD CONSTRAINT "profile_specialist_tagsindustry_pkey" PRIMARY KEY ("profile_id", "tagsindustry_id");

-- AlterTable
ALTER TABLE "profile_specialist_tagslanguage" DROP CONSTRAINT "profile_specialist_tagslanguage_pkey",
DROP COLUMN "tagslanguage_id",
ADD COLUMN     "tagslanguage_id" INTEGER NOT NULL,
ADD CONSTRAINT "profile_specialist_tagslanguage_pkey" PRIMARY KEY ("profile_id", "tagslanguage_id");

-- AlterTable
ALTER TABLE "profile_specialist_tagsplatform" DROP CONSTRAINT "profile_specialist_tagsplatform_pkey",
DROP COLUMN "tagsplatform_id",
ADD COLUMN     "tagsplatform_id" INTEGER NOT NULL,
ADD CONSTRAINT "profile_specialist_tagsplatform_pkey" PRIMARY KEY ("profile_id", "tagsplatform_id");

-- AlterTable
ALTER TABLE "profile_specialist_tagsspecialization" DROP CONSTRAINT "profile_specialist_tagsspecialization_pkey",
DROP COLUMN "tagsspecialization_id",
ADD COLUMN     "tagsspecialization_id" INTEGER NOT NULL,
ADD CONSTRAINT "profile_specialist_tagsspecialization_pkey" PRIMARY KEY ("profile_id", "tagsspecialization_id");

-- AlterTable
ALTER TABLE "tagsindustry" DROP CONSTRAINT "tagsindustry_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tagsindustry_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tagslanguage" DROP CONSTRAINT "tagslanguage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tagslanguage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tagsplatform" DROP CONSTRAINT "tagsplatform_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tagsplatform_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tagsspecialization" DROP CONSTRAINT "tagsspecialization_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tagsspecialization_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsspecialization" ADD CONSTRAINT "profile_specialist_tagsspecialization_tagsspecialization_i_fkey" FOREIGN KEY ("tagsspecialization_id") REFERENCES "tagsspecialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagslanguage" ADD CONSTRAINT "profile_specialist_tagslanguage_tagslanguage_id_fkey" FOREIGN KEY ("tagslanguage_id") REFERENCES "tagslanguage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsindustry" ADD CONSTRAINT "profile_specialist_tagsindustry_tagsindustry_id_fkey" FOREIGN KEY ("tagsindustry_id") REFERENCES "tagsindustry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsplatform" ADD CONSTRAINT "profile_specialist_tagsplatform_tagsplatform_id_fkey" FOREIGN KEY ("tagsplatform_id") REFERENCES "tagsplatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
