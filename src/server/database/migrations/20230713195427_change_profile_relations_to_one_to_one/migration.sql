/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profile_id]` on the table `profile_customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profile_id]` on the table `profile_specialist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "profile_id_key" ON "profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_customer_profile_id_key" ON "profile_customer"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_specialist_profile_id_key" ON "profile_specialist"("profile_id");
