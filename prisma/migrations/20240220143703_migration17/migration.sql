-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "barangKeluar" DROP CONSTRAINT "barangKeluar_id_barang_keluar_fkey";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "created_on" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_on" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "last_login" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "last_login" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "barangKeluar" ALTER COLUMN "tanggal_keluar" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "barangMasuk" ALTER COLUMN "tanggal_masuk" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "dataPeminjam" ALTER COLUMN "tanggal_pengambilan" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "_barangKeluarTodataPeminjam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_barangKeluarTodataPeminjam_AB_unique" ON "_barangKeluarTodataPeminjam"("A", "B");

-- CreateIndex
CREATE INDEX "_barangKeluarTodataPeminjam_B_index" ON "_barangKeluarTodataPeminjam"("B");

-- AddForeignKey
ALTER TABLE "_barangKeluarTodataPeminjam" ADD CONSTRAINT "_barangKeluarTodataPeminjam_A_fkey" FOREIGN KEY ("A") REFERENCES "barangKeluar"("id_barang_keluar") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_barangKeluarTodataPeminjam" ADD CONSTRAINT "_barangKeluarTodataPeminjam_B_fkey" FOREIGN KEY ("B") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE CASCADE ON UPDATE CASCADE;
