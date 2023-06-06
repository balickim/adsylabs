yarn run v1.22.19
$ /Users/balu/Balitec/ads_bridge-app/node_modules/.bin/prisma migrate diff --from-empty --to-schema-datamodel ./src/server/database/schema.prisma --script
-- CreateEnum
CREATE TYPE "PAY_PLANS" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM_GUARANTEE');

-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('CUSTOMER', 'SPECIALIST');

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "role" "ROLES" NOT NULL DEFAULT 'CUSTOMER',
    "clerk_user_id" TEXT,
    "name" TEXT,
    "surname" TEXT,
    "image_url" TEXT,
    "background_image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_customer" (
    "profile_id" TEXT NOT NULL,
    "company_name" TEXT,
    "pay_plan" "PAY_PLANS" NOT NULL DEFAULT 'BASIC',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_customer_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "profile_specialist" (
    "profile_id" TEXT NOT NULL,
    "linkedin_url" TEXT,
    "title" VARCHAR(100),
    "description" VARCHAR(500),
    "case_studies_urls" TEXT[],
    "custom_tags_specialization" TEXT[],
    "custom_tags_language" TEXT[],
    "custom_tags_industry" TEXT[],
    "custom_tags_platform" TEXT[],
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_specialist_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "tagsspecialization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tagsspecialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tagslanguage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tagslanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tagsindustry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tagsindustry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tagsplatform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tagsplatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_specialist_tagsspecialization" (
    "profile_id" TEXT NOT NULL,
    "tagsspecialization_id" TEXT NOT NULL,

    CONSTRAINT "profile_specialist_tagsspecialization_pkey" PRIMARY KEY ("profile_id","tagsspecialization_id")
);

-- CreateTable
CREATE TABLE "profile_specialist_tagslanguage" (
    "profile_id" TEXT NOT NULL,
    "tagslanguage_id" TEXT NOT NULL,

    CONSTRAINT "profile_specialist_tagslanguage_pkey" PRIMARY KEY ("profile_id","tagslanguage_id")
);

-- CreateTable
CREATE TABLE "profile_specialist_tagsindustry" (
    "profile_id" TEXT NOT NULL,
    "tagsindustry_id" TEXT NOT NULL,

    CONSTRAINT "profile_specialist_tagsindustry_pkey" PRIMARY KEY ("profile_id","tagsindustry_id")
);

-- CreateTable
CREATE TABLE "profile_specialist_tagsplatform" (
    "profile_id" TEXT NOT NULL,
    "tagsplatform_id" TEXT NOT NULL,

    CONSTRAINT "profile_specialist_tagsplatform_pkey" PRIMARY KEY ("profile_id","tagsplatform_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_clerk_user_id_key" ON "profile"("clerk_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tagsspecialization_name_key" ON "tagsspecialization"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tagslanguage_name_key" ON "tagslanguage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tagsindustry_name_key" ON "tagsindustry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tagsplatform_name_key" ON "tagsplatform"("name");

-- AddForeignKey
ALTER TABLE "profile_customer" ADD CONSTRAINT "profile_customer_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist" ADD CONSTRAINT "profile_specialist_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsspecialization" ADD CONSTRAINT "profile_specialist_tagsspecialization_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile_specialist"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsspecialization" ADD CONSTRAINT "profile_specialist_tagsspecialization_tagsspecialization_i_fkey" FOREIGN KEY ("tagsspecialization_id") REFERENCES "tagsspecialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagslanguage" ADD CONSTRAINT "profile_specialist_tagslanguage_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile_specialist"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagslanguage" ADD CONSTRAINT "profile_specialist_tagslanguage_tagslanguage_id_fkey" FOREIGN KEY ("tagslanguage_id") REFERENCES "tagslanguage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsindustry" ADD CONSTRAINT "profile_specialist_tagsindustry_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile_specialist"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsindustry" ADD CONSTRAINT "profile_specialist_tagsindustry_tagsindustry_id_fkey" FOREIGN KEY ("tagsindustry_id") REFERENCES "tagsindustry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsplatform" ADD CONSTRAINT "profile_specialist_tagsplatform_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile_specialist"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_specialist_tagsplatform" ADD CONSTRAINT "profile_specialist_tagsplatform_tagsplatform_id_fkey" FOREIGN KEY ("tagsplatform_id") REFERENCES "tagsplatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

Done in 0.71s.
