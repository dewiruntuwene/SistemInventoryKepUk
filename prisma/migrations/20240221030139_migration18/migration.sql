/*
  Warnings:

  - You are about to drop the column `stock_awal` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `stock_sisa` on the `History` table. All the data in the column will be lost.
  - Added the required column `jumlah_barang` to the `dataPeminjam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "stock_awal",
DROP COLUMN "stock_sisa";

-- AlterTable
ALTER TABLE "dataPeminjam" ADD COLUMN     "jumlah_barang" INTEGER NOT NULL;
