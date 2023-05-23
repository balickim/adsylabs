-- CreateEnum
CREATE TYPE "PayPlan" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM_GUARANTEE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'SPECIALIST');

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "clerk_user_id" TEXT,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_customer" (
    "profile_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "pay_plan" "PayPlan" NOT NULL DEFAULT 'BASIC',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_customer_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "profile_specialist" (
    "profile_id" TEXT NOT NULL,
    "linkedin_url" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_specialist_pkey" PRIMARY KEY ("profile_id")
);
