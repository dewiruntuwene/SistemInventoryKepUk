/*
  Warnings:

  - You are about to drop the column `id_barang` on the `dataPeminjam` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah_barang` on the `dataPeminjam` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `dataPeminjam` table. All the data in the column will be lost.
  - You are about to drop the column `nama_barang` on the `dataPeminjam` table. All the data in the column will be lost.
  - You are about to drop the `_barangKeluarTodataPeminjam` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[gambar_barang]` on the table `barang` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_barangKeluarTodataPeminjam" DROP CONSTRAINT "_barangKeluarTodataPeminjam_A_fkey";

-- DropForeignKey
ALTER TABLE "_barangKeluarTodataPeminjam" DROP CONSTRAINT "_barangKeluarTodataPeminjam_B_fkey";

-- DropForeignKey
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_id_barang_fkey";

-- AlterTable
ALTER TABLE "barang" ADD COLUMN     "gambar_barang" TEXT;

-- AlterTable
ALTER TABLE "dataPeminjam" DROP COLUMN "id_barang",
DROP COLUMN "jumlah_barang",
DROP COLUMN "keterangan",
DROP COLUMN "nama_barang";

-- DropTable
DROP TABLE "_barangKeluarTodataPeminjam";

-- CreateIndex
CREATE UNIQUE INDEX "barang_gambar_barang_key" ON "barang"("gambar_barang");
