/*
  Warnings:

  - You are about to drop the column `id_barang_masuk` on the `barang` table. All the data in the column will be lost.
  - Added the required column `id_peminjam` to the `barangKeluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_barang` to the `barangMasuk` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "barang" DROP CONSTRAINT "barang_id_barang_masuk_fkey";

-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_id_barang_keluar_fkey";

-- AlterTable
ALTER TABLE "barang" DROP COLUMN "id_barang_masuk";

-- AlterTable
ALTER TABLE "barangKeluar" ADD COLUMN     "id_peminjam" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "barangMasuk" ADD COLUMN     "id_barang" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "dataPeminjam" ALTER COLUMN "tanggal_pengambilan" SET DATA TYPE TIMESTAMP(6);

-- CreateTable
CREATE TABLE "History" (
    "id_history" SERIAL NOT NULL,
    "id_barang" TEXT NOT NULL,
    "nama_barang" VARCHAR(50) NOT NULL,
    "stock_awal" INTEGER NOT NULL,
    "stock_sisa" INTEGER NOT NULL,
    "hematologi" INTEGER NOT NULL,
    "kardio" INTEGER NOT NULL,
    "respiratory" INTEGER NOT NULL,
    "integumen" INTEGER NOT NULL,
    "muskulo" INTEGER NOT NULL,
    "persepsi" INTEGER NOT NULL,
    "kritis" INTEGER NOT NULL,
    "paliatif" INTEGER NOT NULL,
    "biomedik" INTEGER NOT NULL,
    "kdp" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id_history")
);

-- CreateIndex
CREATE UNIQUE INDEX "History_nama_barang_key" ON "History"("nama_barang");

-- AddForeignKey
ALTER TABLE "barangMasuk" ADD CONSTRAINT "barangMasuk_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barangKeluar" ADD CONSTRAINT "barangKeluar_id_peminjam_fkey" FOREIGN KEY ("id_peminjam") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
