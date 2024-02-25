/*
  Warnings:

  - You are about to drop the column `peminjamId` on the `barang` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "barang" DROP CONSTRAINT "barang_peminjamId_fkey";

-- AlterTable
ALTER TABLE "barang" DROP COLUMN "peminjamId";

-- CreateTable
CREATE TABLE "peminjamanBarang" (
    "id_peminjamanBarang" SERIAL NOT NULL,
    "jumlah_barang" INTEGER NOT NULL,
    "idPeminjam" INTEGER NOT NULL,
    "idBarang" TEXT NOT NULL,

    CONSTRAINT "peminjamanBarang_pkey" PRIMARY KEY ("id_peminjamanBarang")
);

-- AddForeignKey
ALTER TABLE "peminjamanBarang" ADD CONSTRAINT "peminjamanBarang_idPeminjam_fkey" FOREIGN KEY ("idPeminjam") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peminjamanBarang" ADD CONSTRAINT "peminjamanBarang_idBarang_fkey" FOREIGN KEY ("idBarang") REFERENCES "barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;
