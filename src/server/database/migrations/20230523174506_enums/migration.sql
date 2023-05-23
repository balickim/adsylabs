/*
  Warnings:

  - The `role` column on the `profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pay_plan` column on the `profile_customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PAY_PLANS" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM_GUARANTEE');

-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('CUSTOMER', 'SPECIALIST');

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "role",
ADD COLUMN     "role" "ROLES" NOT NULL DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE "profile_customer" DROP COLUMN "pay_plan",
ADD COLUMN     "pay_plan" "PAY_PLANS" NOT NULL DEFAULT 'BASIC';

-- DropEnum
DROP TYPE "PayPlan";

-- DropEnum
DROP TYPE "Role";
