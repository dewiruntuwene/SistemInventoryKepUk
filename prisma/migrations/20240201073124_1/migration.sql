-- CreateTable
CREATE TABLE "account" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL,
    "last_login" TIMESTAMP(6),

    CONSTRAINT "account_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "dataPeminjam" (
    "id" SERIAL NOT NULL,
    "nama_dosen" VARCHAR(50) NOT NULL,
    "nama_matakuliah" VARCHAR(50) NOT NULL,
    "prasat" VARCHAR(50) NOT NULL,
    "jam_praktek" TIMESTAMP(6) NOT NULL,
    "tanggal_praktek" DATE,
    "nama_barang" VARCHAR(50) NOT NULL,
    "keterangan" VARCHAR(50) NOT NULL,

    CONSTRAINT "dataPeminjam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "account_username_key" ON "account"("username");

-- CreateIndex
CREATE INDEX "account_email_key" ON "account"("email");

-- CreateIndex
CREATE INDEX "dataPeminjam_nama_dosen_key" ON "dataPeminjam"("nama_dosen");

-- CreateIndex
CREATE INDEX "dataPeminjam_nama_matakuliah_key" ON "dataPeminjam"("nama_matakuliah");

-- CreateIndex
CREATE INDEX "dataPeminjam_prasat_key" ON "dataPeminjam"("prasat");

-- CreateIndex
CREATE INDEX "dataPeminjam_nama_barang_key" ON "dataPeminjam"("nama_barang");

-- CreateIndex
CREATE INDEX "dataPeminjam_keterangan_key" ON "dataPeminjam"("keterangan");
