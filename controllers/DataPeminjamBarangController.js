import { PrismaClient } from "@prisma/client";
import { promises } from "fs";
import { connect } from "http2";
import { type } from "os";
import { where } from "sequelize";

const prisma = new PrismaClient();


export const createKeranjang = async(req, res) =>{
    const {barang, user} = req.body;
    try {
        const newKeranjang = await prisma.Keranjang.create({
            data: {
                barangs: {
                    connect: {
                        id_barang: barang.id_barang,
                    },
                },
            },
            include: {
                barangs: true // Mengambil data barang yang ditambahkan ke keranjang
            }
        });  
        res.status(201).json({msg: "Data Created", data: newKeranjang});
    } catch (error) {
        console.log(error.message);
    }
}



export const createDataPeminjamBarang = async (req, res) => {
  const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, keranjangs } = req.body;
    try {
      await prisma.$transaction(async(tx) => {
        
        const keranjang = await tx.Keranjang.findFirst({
          where: {
            id_keranjang: req.params.id_keranjang
          }
        });

        const barang = await tx.Barang.findFirst({
          where: {
            id_barang: req.params.id_barang
          }
        });
    
        // Buat Peminjam
        const peminjam = await tx.Peminjam.create({
          data: {
            nama_dosen,
            nama_matakuliah,
            prasat,
            jam_praktek,
            tanggal_praktek,
            keranjangId: keranjang.id_keranjang
          }
        })

        // Buat TransaksiBarang type BarangKeluar
        await tx.TransaksiBarang.create({
          data: {
            peminjam: { 
              connect: { id_peminjam: peminjam.id_peminjam }
            },
              type: "BarangKeluar",
              barangs: {
                connect: {
                  id_barang: barang.id_barang,        
                },
            },
          },
          include: {
              barangs: true, // Include the related Barang model
          },
        })
        
        // Setelah itu hapus semua barang yang ada di keranjang
        await tx.Keranjang.delete({
          where: {
            id_keranjang: +req.params.id_keranjang
          }
        })

        return res.json({peminjam});
      })

      
      
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Error during checkout' });
  }
}



// export const createDataPeminjamBarang = async(req, res) =>{

//     const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, keranjangs } = req.body;
//     try {
//         const newPeminjam = await prisma.$transaction([
//             prisma.Peminjam.create({
//                 data: {
//                     nama_dosen,
//                     nama_matakuliah,
//                     prasat,
//                     jam_praktek,
//                     tanggal_praktek,
//                     keranjangs: {
//                         create: keranjangs.map(keranjang => ({
//                             barang: {
//                                 connect: {
//                                     id_barang: keranjang.barang.id_barang,
//                                 }
//                             }
//                         }))
//                     },
//                 },
//                 include: {
//                     keranjangs: {
//                         include: {
//                             barang: true
//                         }
//                     }
//                 },
//             })
//         ]);

//         res.json(newPeminjam);
//     } catch (error) {
//         console.error('Error creating peminjam:', error);
//         res.status(500).json({ error: 'Error creating peminjam' });
//     }
// }

// export const createDataPeminjamBarang = async(req, res) =>{

//     const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, keranjangs } = req.body;
//     try {
//         const newPeminjam = await prisma.Peminjam.create({
//         data: {
//             nama_dosen,
//             nama_matakuliah,
//             prasat,
//             jam_praktek,
//             tanggal_praktek,
//             keranjangs: {
//             create: keranjangs.map(keranjang => ({
//                 barangKeluar: {
//                     create:{
//                         id_barang: keranjang.barangKeluar.id_barang,
//                         nama_barang: keranjang.barangKeluar.nama_barang,
//                         total_stock: keranjang.barangKeluar.total_stock,
//                         jenis_barang: keranjang.barangKeluar.jenis_barang,
//                         gambar_barang: keranjang.barangKeluar.gambar_barang
//                     }
                    
//                 },
//                 }))
            
//             }
//         },
//         include: {
//             keranjangs: {
//             include: {
//                 barangKeluar: true,
//                 keranjangId : true
//             }
//             }
//         }
//         });
//         res.json(newPeminjam);
//     } catch (error) {
//         console.error('Error creating peminjam:', error);
//         res.status(500).json({ error: 'Error creating peminjam' });
//     }
// }

 


// export const createKeranjang = async(req, res) =>{
//     const {barangKeluar} = req.body;
//     try {
//         const newKeranjang = await prisma.Keranjang.create({
//             data: {
//                 barangKeluar: {
//                         create:{
//                             id_barang: barangKeluar.id_barang,
//                             nama_barang: barangKeluar.nama_barang,
//                             total_stock: barangKeluar.total_stock,
//                             jenis_barang: barangKeluar.jenis_barang,
//                             gambar_barang: barangKeluar.gambar_barang
//                         }
                            
//                     },
                    
//             },
//             include: {
//                 barangKeluar: true
//             }
//         });
       
//         res.status(201).json({msg: "Data Created", data: newKeranjang});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getKeranjang = async(req, res) =>{
    const { id_keranjang } = req.params;
    try {
        const allKeranjang = await prisma.Keranjang.findMany({
            include: {
                barangs: true // Mengambil data barang dalam setiap keranjang
            }
        });
        res.json(allKeranjang);
      } catch (error) {
        console.error('Error fetching keranjang:', error);
        res.status(500).json({ error: 'Error fetching keranjang' });
      }
}

// export const getKeranjang = async(req, res) =>{
//     try {
//         const allKeranjang = await prisma.Keranjang.findMany({
//             include: {
//                 barangKeluar: true
//             }
//         });
//         res.json(allKeranjang);
//       } catch (error) {
//         console.error('Error fetching keranjang:', error);
//         res.status(500).json({ error: 'Error fetching keranjang' });
//       }
// }


export const deleteKeranjang = async(req, res) =>{
    try {
        const idKeranjang = req.params.id_keranjang;
    
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.Keranjang.delete({
            where: {
                id_keranjang: parseInt(idKeranjang)
            }
        });
        res.status(200).json({msg: "Data Delete"});
    } catch (error) {
        console.log(error.message);
    }
}


export const getDataPeminjamBarang = async(req, res) =>{
    
    try {
        const allPeminjam = await prisma.Peminjam.findMany({
          where: {
            id_peminjam: req.params.id_peminjam
          },
          select: {
            nama_dosen: true,
            nama_matakuliah: true,
            prasat:true,
            tanggal_praktek:true,
            keranjangs: {
              select: {
                barangs:true
              }
            }
          }
        });
        res.json(allPeminjam);
      } catch (error) {
        console.error('Error fetching peminjam:', error);
        res.status(500).json({ error: 'Error fetching peminjam' });
      }
}


export const deletetDataPeminjamBarang = async(req, res) =>{
    try {
        const idPeminjam = parseInt(req.params.id_peminjam);
    
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.Peminjam.delete({
        where: {
            id_peminjam: idPeminjam
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

  

