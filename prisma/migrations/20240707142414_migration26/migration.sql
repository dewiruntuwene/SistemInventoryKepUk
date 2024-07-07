/*
  Warnings:

  - The primary key for the `History` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `biomedik` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `hematologi` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `id_barang` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `id_peminjam` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `integumen` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `kardio` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `kdp` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `kritis` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `muskulo` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `paliatif` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `persepsi` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `respiratory` on the `History` table. All the data in the column will be lost.
  - You are about to drop the `barang` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `barangKeluar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `barangMasuk` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dataPeminjam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `peminjamanBarang` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `barangId` to the `History` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matakuliahId` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('BarangKeluar', 'BarangMasuk', 'BarangPinjam', 'PENDING', 'CANCEL');

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_id_peminjam_fkey";

-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_id_barang_fkey";

-- DropForeignKey
ALTER TABLE "barangMasuk" DROP CONSTRAINT "barangMasuk_id_barang_fkey";

-- DropForeignKey
ALTER TABLE "peminjamanBarang" DROP CONSTRAINT "peminjamanBarang_idBarang_fkey";

-- DropForeignKey
ALTER TABLE "peminjamanBarang" DROP CONSTRAINT "peminjamanBarang_idPeminjam_fkey";

-- AlterTable
ALTER TABLE "History" DROP CONSTRAINT "History_pkey",
DROP COLUMN "biomedik",
DROP COLUMN "hematologi",
DROP COLUMN "id_barang",
DROP COLUMN "id_peminjam",
DROP COLUMN "integumen",
DROP COLUMN "kardio",
DROP COLUMN "kdp",
DROP COLUMN "kritis",
DROP COLUMN "muskulo",
DROP COLUMN "paliatif",
DROP COLUMN "persepsi",
DROP COLUMN "respiratory",
ADD COLUMN     "barangId" INTEGER NOT NULL,
ADD COLUMN     "matakuliahId" INTEGER NOT NULL,
ALTER COLUMN "id_history" DROP DEFAULT,
ALTER COLUMN "id_history" SET DATA TYPE TEXT,
ADD CONSTRAINT "History_pkey" PRIMARY KEY ("id_history");
DROP SEQUENCE "History_id_history_seq";

-- DropTable
DROP TABLE "barang";

-- DropTable
DROP TABLE "barangKeluar";

-- DropTable
DROP TABLE "barangMasuk";

-- DropTable
DROP TABLE "dataPeminjam";

-- DropTable
DROP TABLE "peminjamanBarang";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255),
    "email" VARCHAR(50) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "refresh_token" VARCHAR(255),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "peminjam" (
    "id_peminjam" SERIAL NOT NULL,
    "nama_matakuliah" VARCHAR(50) NOT NULL,
    "prasat" VARCHAR(50) NOT NULL,
    "jam_praktek" VARCHAR(10) NOT NULL,
    "tanggal_praktek" VARCHAR(20),
    "tanggal_pengambilan" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "peminjam_pkey" PRIMARY KEY ("id_peminjam")
);

-- CreateTable
CREATE TABLE "Matakuliah" (
    "id_matakuliah" SERIAL NOT NULL,
    "hematologi" INTEGER NOT NULL,
    "kardio" INTEGER NOT NULL,
    "respiratory" INTEGER NOT NULL,
    "integumen" INTEGER NOT NULL,
    "muskulo" INTEGER NOT NULL,
    "persepsi" INTEGER NOT NULL,
    "kritis" INTEGER NOT NULL,
    "paliatif" INTEGER NOT NULL,

    CONSTRAINT "Matakuliah_pkey" PRIMARY KEY ("id_matakuliah")
);

-- CreateTable
CREATE TABLE "barangs" (
    "id_barang" SERIAL NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "total_stock" INTEGER NOT NULL,
    "jenis_barang" VARCHAR(50) NOT NULL,
    "harga_barang" INTEGER NOT NULL,
    "gambar_barang" TEXT,
    "kode_barang" TEXT NOT NULL,

    CONSTRAINT "barangs_pkey" PRIMARY KEY ("id_barang")
);

-- CreateTable
CREATE TABLE "keranjangs" (
    "id_keranjang" SERIAL NOT NULL,
    "barangId" INTEGER NOT NULL,
    "jumlah_barang" INTEGER,
    "isCheckedOut" TEXT DEFAULT 'N',
    "delete_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "keranjangs_pkey" PRIMARY KEY ("id_keranjang")
);

-- CreateTable
CREATE TABLE "BarangHabisPakai" (
    "id_barang_habis_pakai" SERIAL NOT NULL,
    "peminjamId" INTEGER,
    "barangId" INTEGER NOT NULL,
    "jumlah_barang" INTEGER NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "kode_barang" TEXT NOT NULL,
    "jenis_barang" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BarangHabisPakai_pkey" PRIMARY KEY ("id_barang_habis_pakai")
);

-- CreateTable
CREATE TABLE "BarangPinjam" (
    "id_barang_pinjam" SERIAL NOT NULL,
    "peminjamId" INTEGER,
    "barangId" INTEGER NOT NULL,
    "jumlah_barang" INTEGER NOT NULL,
    "nama_barang" TEXT NOT NULL,
    "kode_barang" TEXT NOT NULL,
    "jenis_barang" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BarangPinjam_pkey" PRIMARY KEY ("id_barang_pinjam")
);

-- CreateTable
CREATE TABLE "transaksiBarang" (
    "id_transaksi_barang" SERIAL NOT NULL,
    "harga_barang" INTEGER,
    "jumlah_barang" INTEGER,
    "barangId" INTEGER NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'PENDING',
    "peminjamId" INTEGER,
    "tanggal_keluar" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "tanggal_masuk" TEXT,
    "tanggal_pinjam" TEXT,
    "nama_matakuliah" TEXT,
    "nama_barang" TEXT,
    "kode_barang" TEXT,

    CONSTRAINT "transaksiBarang_pkey" PRIMARY KEY ("id_transaksi_barang")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "barangs_kode_barang_key" ON "barangs"("kode_barang");

-- AddForeignKey
ALTER TABLE "peminjam" ADD CONSTRAINT "peminjam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_matakuliahId_fkey" FOREIGN KEY ("matakuliahId") REFERENCES "Matakuliah"("id_matakuliah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barangs"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keranjangs" ADD CONSTRAINT "keranjangs_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barangs"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keranjangs" ADD CONSTRAINT "keranjangs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangHabisPakai" ADD CONSTRAINT "BarangHabisPakai_peminjamId_fkey" FOREIGN KEY ("peminjamId") REFERENCES "peminjam"("id_peminjam") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangHabisPakai" ADD CONSTRAINT "BarangHabisPakai_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barangs"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangPinjam" ADD CONSTRAINT "BarangPinjam_peminjamId_fkey" FOREIGN KEY ("peminjamId") REFERENCES "peminjam"("id_peminjam") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangPinjam" ADD CONSTRAINT "BarangPinjam_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barangs"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksiBarang" ADD CONSTRAINT "transaksiBarang_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "barangs"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksiBarang" ADD CONSTRAINT "transaksiBarang_peminjamId_fkey" FOREIGN KEY ("peminjamId") REFERENCES "peminjam"("id_peminjam") ON DELETE CASCADE ON UPDATE CASCADE;
