import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createDataPeminjamBarang = async(req, res) =>{
     await prisma.peminjamanBarang.findMany({
      select: {
      idPeminjam: true,
      dataPeminjam: {
        select: {
          nama_dosen: true,
          nama_matakuliah: true,
          prasat: true,
          jam_praktek: true,
          tanggal_praktek: true,
          tanggal_pengambilan: true,
        },
      },
      barang: {
        select: {
          nama_barang: true,
        },
      },
      keterangan: true,
      jumlah_barang: true,
      },
      include: {
        dataPeminjam: true,
        barang: true,
      },
 
    })
    res.status(200).json({msg: "Data Added"});
  }

  

  