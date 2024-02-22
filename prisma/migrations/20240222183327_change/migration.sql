/*
  Warnings:

  - The primary key for the `ProductOnOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `ProductOnOrder` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`orderId`, `productId`, `size`);
