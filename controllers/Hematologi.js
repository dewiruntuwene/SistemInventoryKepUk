import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateHistory = async (req, res) => {
  const history = await prisma.Hematologi.findMany({
    include: {
      peminjam: {
        where: {
          nama_matakuliah: 'hematologi',
        },
        select: {
            barang: {
                where: {
                    nama_barang: '3 Way stop cock', 
                }
            }
        },
        select: {
            keranjang: {
                _sum: {
                    jumlah_peminjama: true,
                }
            }
        }
      },
      matakuliah: {
        select: {
          hematologi: select
        }
      },
    },
  });


  res.status(200).json(history);
 
};
