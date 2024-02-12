/*
  Warnings:

  - The primary key for the `dataPeminjam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `tanggal_praktek` column on the `dataPeminjam` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nama_barang]` on the table `dataPeminjam` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `jam_praktek` on the `dataPeminjam` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "dataPeminjam_keterangan_key";

-- DropIndex
DROP INDEX "dataPeminjam_nama_barang_key";

-- DropIndex
DROP INDEX "dataPeminjam_nama_dosen_key";

-- DropIndex
DROP INDEX "dataPeminjam_nama_matakuliah_key";

-- DropIndex
DROP INDEX "dataPeminjam_prasat_key";

-- AlterTable
ALTER TABLE "dataPeminjam" DROP CONSTRAINT "dataPeminjam_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "jam_praktek",
ADD COLUMN     "jam_praktek" VARCHAR(10) NOT NULL,
DROP COLUMN "tanggal_praktek",
ADD COLUMN     "tanggal_praktek" VARCHAR(20),
ADD CONSTRAINT "dataPeminjam_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "dataPeminjam_id_seq";

-- DropTable
DROP TABLE "account";

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "barang" (
    "id" SERIAL NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "satuan" VARCHAR(50) NOT NULL,
    "gudang" VARCHAR(50) NOT NULL,
    "jenis_barang" VARCHAR(50) NOT NULL,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barangMasuk" (
    "id" SERIAL NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "tanggal_masuk" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "satuan" VARCHAR(50) NOT NULL,
    "gudang" VARCHAR(50) NOT NULL,
    "total_stock" DECIMAL(12,0),

    CONSTRAINT "barangMasuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barangKeluar" (
    "id" SERIAL NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "tanggal_masuk" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "satuan" VARCHAR(50) NOT NULL,
    "gudang" VARCHAR(50) NOT NULL,
    "total_stock" DECIMAL(12,0),

    CONSTRAINT "barangKeluar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "barang_nama_barang_key" ON "barang"("nama_barang");

-- CreateIndex
CREATE UNIQUE INDEX "barangMasuk_nama_barang_key" ON "barangMasuk"("nama_barang");

-- CreateIndex
CREATE UNIQUE INDEX "barangKeluar_nama_barang_key" ON "barangKeluar"("nama_barang");

-- CreateIndex
CREATE UNIQUE INDEX "dataPeminjam_nama_barang_key" ON "dataPeminjam"("nama_barang");

-- AddForeignKey
ALTER TABLE "dataPeminjam" ADD CONSTRAINT "dataPeminjam_nama_barang_fkey" FOREIGN KEY ("nama_barang") REFERENCES "barang"("nama_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "barang_nama_barang_fkey" FOREIGN KEY ("nama_barang") REFERENCES "barangMasuk"("nama_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_nama_barang_fkey" FOREIGN KEY ("nama_barang") REFERENCES "dataPeminjam"("nama_barang") ON DELETE RESTRICT ON UPDATE CASCADE;
