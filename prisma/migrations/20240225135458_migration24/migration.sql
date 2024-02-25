/*
  Warnings:

  - You are about to drop the `PeminjamBarang` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `peminjamId` to the `barang` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PeminjamBarang" DROP CONSTRAINT "PeminjamBarang_id_barang_fkey";

-- DropForeignKey
ALTER TABLE "PeminjamBarang" DROP CONSTRAINT "PeminjamBarang_id_peminjam_fkey";

-- AlterTable
ALTER TABLE "barang" ADD COLUMN     "peminjamId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PeminjamBarang";

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "barang_peminjamId_fkey" FOREIGN KEY ("peminjamId") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
