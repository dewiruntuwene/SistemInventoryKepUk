/*
  Warnings:

  - Added the required column `id_barang` to the `barangKeluar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_id_peminjam_fkey";

-- AlterTable
ALTER TABLE "barangKeluar" ADD COLUMN     "id_barang" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "dataPeminjam" ADD COLUMN     "id_barang_keluar" SERIAL NOT NULL;

-- AddForeignKey
ALTER TABLE "dataPeminjam" ADD CONSTRAINT "dataPeminjam_id_barang_keluar_fkey" FOREIGN KEY ("id_barang_keluar") REFERENCES "barangKeluar"("id_barang_keluar") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;
