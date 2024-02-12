/*
  Warnings:

  - The primary key for the `barang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `barangKeluar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `barangMasuk` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_nama_barang_fkey";

-- DropForeignKey
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_nama_barang_fkey";

-- DropIndex
DROP INDEX "dataPeminjam_nama_barang_key";

-- AlterTable
ALTER TABLE "barang" DROP CONSTRAINT "barang_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "barang_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "barang_id_seq";

-- AlterTable
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "barangKeluar_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "barangKeluar_id_seq";

-- AlterTable
ALTER TABLE "barangMasuk" DROP CONSTRAINT "barangMasuk_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "barangMasuk_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "barangMasuk_id_seq";

-- AddForeignKey
ALTER TABLE "dataPeminjam" ADD CONSTRAINT "dataPeminjam_id_fkey" FOREIGN KEY ("id") REFERENCES "barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_id_fkey" FOREIGN KEY ("id") REFERENCES "dataPeminjam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
