/*
  Warnings:

  - You are about to drop the column `satuan` on the `barang` table. All the data in the column will be lost.
  - You are about to alter the column `total_stock` on the `barangMasuk` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,0)` to `Integer`.
  - Changed the type of `total_stock` on the `barang` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `total_stock` on table `barangMasuk` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "barang" DROP CONSTRAINT "barang_nama_barang_fkey";

-- AlterTable
ALTER TABLE "barang" DROP COLUMN "satuan",
DROP COLUMN "total_stock",
ADD COLUMN     "total_stock" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "barangMasuk" ALTER COLUMN "total_stock" SET NOT NULL,
ALTER COLUMN "total_stock" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "barang" ADD CONSTRAINT "barang_id_fkey" FOREIGN KEY ("id") REFERENCES "barangMasuk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
