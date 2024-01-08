/*
  Warnings:

  - You are about to drop the column `count` on the `ProductOnOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ProductOnOrder` DROP COLUMN `count`,
    ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 1;
