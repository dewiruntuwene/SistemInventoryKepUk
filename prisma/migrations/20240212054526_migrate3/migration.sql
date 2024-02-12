/*
  Warnings:

  - You are about to drop the column `gudang` on the `barang` table. All the data in the column will be lost.
  - Added the required column `total_stock` to the `barang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barang" DROP COLUMN "gudang",
ADD COLUMN     "total_stock" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "dataPeminjam" ADD COLUMN     "tanggal_pengambilan" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP;
