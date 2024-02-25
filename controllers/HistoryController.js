import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateHistory = async (req, res) => {
  const { 
    id_barang,
    nama_barang, 
    hematologi,
    kardio,
    respiratory,
    integumen,
    muskulo,
    persepsi,
    kritis,
    paliatif,
    biomedik,
    kdp } = req.body;

  try {
      
      const existingHistory = await prisma.history.findFirst({
          where: {
              id_barang,
              nama_barang,
              hematologi,
              kardio,
              respiratory,
              integumen,
              muskulo,
              persepsi,
              kritis,
              paliatif,
              biomedik,
              kdp
          }
      });

      if (!existingHistory) {
          // Jika tidak ada entri History dengan nama_matakuliah yang sama, buat entri baru
          await prisma.history.create({
            data: {
              id_barang,
              nama_barang,
              hematologi: 0,
              kardio: 0,
              respiratory: 0,
              integumen: 0,
              muskulo: 0,
              persepsi: 0,
              kritis: 0,
              paliatif: 0,
              biomedik: 0,
              kdp: 0,
            },
          });
      } else {
          // Jika sudah ada entri History dengan nama_matakuliah yang sama, update jumlahnya
          await prisma.history.update({
            data: {
              id_barang,
              nama_barang,
              hematologi: historyEntry.hematologi + (barang.hematologi || 0),
              kardio: historyEntry.kardio + (barang.kardio || 0),
              respiratory: historyEntry.respiratory + (barang.respiratory || 0),
              integumen: historyEntry.integumen + (barang.integumen || 0),
              muskulo: historyEntry.muskulo + (barang.muskulo || 0),
              persepsi: historyEntry.persepsi + (barang.persepsi || 0),
              kritis: historyEntry.kritis + (barang.kritis || 0),
              paliatif: historyEntry.paliatif + (barang.paliatif || 0),
              biomedik: historyEntry.biomedik + (barang.biomedik || 0),
              kdp: historyEntry.kdp + (barang.kdp || 0),
            },
          });
      }

      res.status(200).json({ message: "History updated successfully" });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error updating history" });
  }
};
