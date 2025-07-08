/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `kos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `kos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kos" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "kos_slug_key" ON "kos"("slug");
