import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export const updateHistory = async (req, res) => {
//   const history = await prisma.History.findMany({
//     include: {
//       barang: {
//         select: {
//           id_barang: true,
//           nama_barang: true,
//         },
//       },
//       matakuliah: {
//         select: {
//           hematologi: select
//         }
//       },
//     },
//   });


//   res.status(200).json(history);
 
// };


export const updateHistory = async (req, res) => {
  const history = await prisma.Peminjam.groupBy({
    by: ['nama_matakuliah'],
    where: {
      jumlah_peminjam: {
        notIn: ['']
      }
    },
    sum: {
      jumlah_peminjam: true
    },
    having: {
      nama_barang:true
    }
  });


  res.status(200).json(history);
 
};