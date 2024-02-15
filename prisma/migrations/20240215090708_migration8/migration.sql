/*
  Warnings:

  - You are about to drop the column `gudang` on the `barangKeluar` table. All the data in the column will be lost.
  - You are about to drop the column `satuan` on the `barangKeluar` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_masuk` on the `barangKeluar` table. All the data in the column will be lost.
  - You are about to alter the column `total_stock` on the `barangKeluar` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,0)` to `Integer`.
  - You are about to drop the column `gudang` on the `barangMasuk` table. All the data in the column will be lost.
  - You are about to drop the column `satuan` on the `barangMasuk` table. All the data in the column will be lost.
  - Added the required column `id_peminjam` to the `History` table without a default value. This is not possible if the table is not empty.
  - Made the column `total_stock` on table `barangKeluar` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "barang_nama_barang_key";

-- AlterTable
ALTER TABLE "History" ADD COLUMN     "id_peminjam" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "barangKeluar" DROP COLUMN "gudang",
DROP COLUMN "satuan",
DROP COLUMN "tanggal_masuk",
ADD COLUMN     "tanggal_keluar" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "total_stock" SET NOT NULL,
ALTER COLUMN "total_stock" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "barangMasuk" DROP COLUMN "gudang",
DROP COLUMN "satuan";

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_id_peminjam_fkey" FOREIGN KEY ("id_peminjam") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
