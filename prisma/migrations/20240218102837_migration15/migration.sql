-- AlterTable
ALTER TABLE "barangKeluar" ALTER COLUMN "tanggal_keluar" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "barangMasuk" ALTER COLUMN "tanggal_masuk" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
CREATE SEQUENCE datapeminjam_id_barang_keluar_seq;
ALTER TABLE "dataPeminjam" ALTER COLUMN "id_barang_keluar" SET DEFAULT nextval('datapeminjam_id_barang_keluar_seq');
ALTER SEQUENCE datapeminjam_id_barang_keluar_seq OWNED BY "dataPeminjam"."id_barang_keluar";
