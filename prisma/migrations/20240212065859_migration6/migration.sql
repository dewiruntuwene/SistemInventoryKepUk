/*
  Warnings:

  - The primary key for the `barang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `barang` table. All the data in the column will be lost.
  - The primary key for the `barangKeluar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `barangKeluar` table. All the data in the column will be lost.
  - The primary key for the `barangMasuk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `barangMasuk` table. All the data in the column will be lost.
  - The primary key for the `dataPeminjam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `dataPeminjam` table. All the data in the column will be lost.
  - Added the required column `id_barang` to the `barang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_barang` to the `dataPeminjam` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "barang" DROP CONSTRAINT "barang_id_fkey";

-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_id_fkey";

-- DropForeignKey
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_id_fkey";

-- AlterTable
ALTER TABLE "barang" DROP CONSTRAINT "barang_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_barang" TEXT NOT NULL,
ADD COLUMN     "id_barang_masuk" SERIAL NOT NULL,
ADD CONSTRAINT "barang_pkey" PRIMARY KEY ("id_barang");

-- AlterTable
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_barang_keluar" SERIAL NOT NULL,
ADD CONSTRAINT "barangKeluar_pkey" PRIMARY KEY ("id_barang_keluar");

-- AlterTable
ALTER TABLE "barangMasuk" DROP CONSTRAINT "barangMasuk_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_barang_masuk" SERIAL NOT NULL,
ADD CONSTRAINT "barangMasuk_pkey" PRIMARY KEY ("id_barang_masuk");

-- AlterTable
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_barang" TEXT NOT NULL,
ADD COLUMN     "id_peminjam" SERIAL NOT NULL,
ADD CONSTRAINT "dataPeminjam_pkey" PRIMARY KEY ("id_peminjam");

-- AddForeignKey
ALTER TABLE "dataPeminjam" ADD CONSTRAINT "dataPeminjam_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "barang_id_barang_masuk_fkey" FOREIGN KEY ("id_barang_masuk") REFERENCES "barangMasuk"("id_barang_masuk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_id_barang_keluar_fkey" FOREIGN KEY ("id_barang_keluar") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
