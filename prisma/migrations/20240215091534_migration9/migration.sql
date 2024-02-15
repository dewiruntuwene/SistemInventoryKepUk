/*
  Warnings:

  - Added the required column `jenis_barang` to the `barangKeluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_barang` to the `barangMasuk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barangKeluar" ADD COLUMN     "jenis_barang" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "barangMasuk" ADD COLUMN     "jenis_barang" VARCHAR(50) NOT NULL;
