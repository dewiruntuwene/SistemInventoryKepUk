-- CreateTable
CREATE TABLE "_barangTodataPeminjam" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_barangTodataPeminjam_AB_unique" ON "_barangTodataPeminjam"("A", "B");

-- CreateIndex
CREATE INDEX "_barangTodataPeminjam_B_index" ON "_barangTodataPeminjam"("B");

-- AddForeignKey
ALTER TABLE "_barangTodataPeminjam" ADD CONSTRAINT "_barangTodataPeminjam_A_fkey" FOREIGN KEY ("A") REFERENCES "barang"("id_barang") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_barangTodataPeminjam" ADD CONSTRAINT "_barangTodataPeminjam_B_fkey" FOREIGN KEY ("B") REFERENCES "dataPeminjam"("id_peminjam") ON DELETE CASCADE ON UPDATE CASCADE;
