import { PrismaClient } from "@prisma/client";
import { response } from "express";
import { where } from "sequelize";

const prisma = new PrismaClient();


// Membuat Prasat
export const createPrasat = async (req, res) => {
  const { id_prasat, nama_prasat, deskripsi, created_by, barangDalamPrasat } = req.body;
  const { user_id } = req.params;

  const username = req.session?.username; // Pastikan sesi ada
  console.log(username);

  try {
    await prisma.$transaction(async (tx) => {
      const prasat = await prisma.Prasat.create({
        data: {
          nama_prasat,
          deskripsi,
          users: { connect: { user_id: req.user.user_id } },
        },
      });

      // Validasi barangDalamPrasat
      if (!Array.isArray(barangDalamPrasat)) {
        throw new Error("barangDalamPrasat harus berupa array");
      }

      // Buat barangData
      const barangData = barangDalamPrasat.map((item) => ({
        prasatId: prasat.id_prasat,
        barangId: item.barangId,
        jumlah_barang: item.jumlah_barang,
      }));

      // Insert barang dalam Prasat
      await tx.barangDalamPrasat.createMany({
        data: barangData,
      });

      return res.json({ message: "Prasat berhasil dibuat" });
    });
  } catch (error) {
    console.error("Error during make it:", error);
    res.status(500).json({ error: "Error during make it" });
  }
};


export const updatePrasat = async (req, res) => {
  const id_prasat = parseInt(req.params.id_prasat);
  const { nama_prasat, deskripsi, created_by, barangDalamPrasat } = req.body;

  try {
    //const id_prasat = parseInt(req.params.id_prasat);
    await prisma.$transaction(async (tx) => {
      // Update data prasat
      const updatedPrasat = await tx.prasat.update({
        where: { id_prasat },
        data: { nama_prasat, deskripsi, created_by },
      });

      // Validasi barangDalamPrasat
      if (Array.isArray(barangDalamPrasat) && barangDalamPrasat.length > 0) {
        // Hapus barang lama
        await tx.barangDalamPrasat.deleteMany({
          where: { prasatId: id_prasat },
        });

        // Tambahkan barang baru
        const barangData = barangDalamPrasat.map((item) => ({
          prasatId: id_prasat,
          barangId: item.barangId,
          jumlah_barang: item.jumlah_barang,
        }));

        await tx.barangDalamPrasat.createMany({ data: barangData });
      }

      res.json({ message: "Prasat berhasil diperbarui", updatedPrasat });
    });
  } catch (error) {
    console.error("Error during updatePrasat:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat memperbarui prasat" });
  }
};

export const getDataPrasat = async (req, res) => {
  try {
    // Ambil semua data prasat dari database
    const dataPrasat = await prisma.prasat.findMany({
      include: {
        barangDalamPrasat: true, // Jika ada relasi ke barang, tambahkan include ini
      },
    });

    res.json({
      message: "Data prasat berhasil diambil",
      data: dataPrasat,
    });
  } catch (error) {
    console.error("Error fetching data prasat:", error);
    res.status(500).json({
      error: "Terjadi kesalahan saat mengambil data prasat",
    });
  }
};
