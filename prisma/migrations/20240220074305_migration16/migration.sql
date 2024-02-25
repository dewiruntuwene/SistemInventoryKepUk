/*
  Warnings:

  - You are about to drop the column `id_barang_keluar` on the `dataPeminjam` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_id_barang_keluar_fkey";

-- AlterTable
ALTER TABLE "dataPeminjam" DROP COLUMN "id_barang_keluar";

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_id_barang_keluar_fkey" FOREIGN KEY ("id_barang_keluar") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
