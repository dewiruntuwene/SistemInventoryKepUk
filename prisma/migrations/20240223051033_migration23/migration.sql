/*
  Warnings:

  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to drop the `_barangTodataPeminjam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_barangTodataPeminjam" DROP CONSTRAINT "_barangTodataPeminjam_A_fkey";

-- DropForeignKey
ALTER TABLE "_barangTodataPeminjam" DROP CONSTRAINT "_barangTodataPeminjam_B_fkey";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "role" SET DEFAULT 'USER';

-- DropTable
DROP TABLE "_barangTodataPeminjam";

-- CreateTable
CREATE TABLE "PeminjamBarang" (
    "id_barang" TEXT NOT NULL,
    "id_peminjam" INTEGER NOT NULL,

    CONSTRAINT "PeminjamBarang_pkey" PRIMARY KEY ("id_barang","id_peminjam")
);

-- AddForeignKey
ALTER TABLE "PeminjamBarang" ADD CONSTRAINT "PeminjamBarang_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "barang"("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeminjamBarang" ADD CONSTRAINT "PeminjamBarang_id_peminjam_fkey" FOREIGN KEY ("id_peminjam") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE RESTRICT ON UPDATE CASCADE;
