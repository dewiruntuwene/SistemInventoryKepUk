/*
  Warnings:

  - You are about to drop the column `tanggal_pengambilan` on the `peminjam` table. All the data in the column will be lost.
  - You are about to drop the `BarangPinjam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matakuliah` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BarangPinjam" DROP CONSTRAINT "BarangPinjam_barangId_fkey";

-- DropForeignKey
ALTER TABLE "BarangPinjam" DROP CONSTRAINT "BarangPinjam_peminjamId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_matakuliahId_fkey";

-- AlterTable
ALTER TABLE "peminjam" DROP COLUMN "tanggal_pengambilan",
ADD COLUMN     "ruangan_lab" TEXT,
ADD COLUMN     "tanggal_kembali_alat" TEXT,
ADD COLUMN     "tanggal_order" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "transaksiBarang" ADD COLUMN     "keterangan" TEXT,
ALTER COLUMN "tanggal_keluar" DROP DEFAULT,
ALTER COLUMN "tanggal_keluar" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "BarangPinjam";

-- DropTable
DROP TABLE "Matakuliah";
