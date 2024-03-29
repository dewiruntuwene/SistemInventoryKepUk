import { PrismaClient } from "@prisma/client";
import { promises } from "fs";

const prisma = new PrismaClient();



export const createDataPeminjamBarang = async(req, res) =>{

    const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, keranjangs } = req.body;
    try {
        const newPeminjam = await prisma.Peminjam.create({
        data: {
            nama_dosen,
            nama_matakuliah,
            prasat,
            jam_praktek,
            tanggal_praktek,
            keranjangs: {
                create: keranjangs.map(keranjang => ({
                    transaksiBarang: {
                        create: {
                            type: "BarangKeluar",
                            barang: {
                                connect: {
                                    id_barang: keranjang.transaksiBarang.barang.id_barang,
                                   
                                },
                            },
                        },
                    },
                    
                }))
            
            }
        },
        include: {
            keranjangs: {
                include: {
                    transaksiBarang: {
                        include: {
                            barang: true
                        }
                    }
                }
            }
        }
        });
        res.json(newPeminjam);
    } catch (error) {
        console.error('Error creating peminjam:', error);
        res.status(500).json({ error: 'Error creating peminjam' });
    }
}

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

export const createKeranjang = async(req, res) =>{
    const {barang, transaksiBarang} = req.body;
    try {
        const newKeranjang = await prisma.$transaction(async (prisma) => {
            await prisma.Keranjang.create({
                data: {
                    transaksiBarang: {
                        create: {
                            type: "BarangKeluar",
                            barang: {
                                connect: {
                                    id_barang: transaksiBarang.barang.id_barang,
                                },
                            },
                        },
                    },
                },
            });
        });
        
        res.status(201).json({msg: "Data Created", data: newKeranjang});
    } catch (error) {
        console.log(error.message);
    }
}


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
    try {
        // Ambil semua transaksiBarang yang memiliki type "BarangKeluar"
        const transaksiBarangKeluar = await prisma.transaksiBarang.findMany({
            where: {
                type: "BarangKeluar"
            }
        });

        
        // Ambil semua keranjang yang memiliki ID yang sesuai
        const allKeranjang = await prisma.keranjang.findMany({
            include: {
                transaksiBarang: {
                    include: {
                        barang: true
                    }
                }
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
        res.status(200).json({msg: "Data Delet"});
    } catch (error) {
        console.log(error.message);
    }
}


export const getDataPeminjamBarang = async(req, res) =>{
    const transaksiBarangKeluar = await prisma.transaksiBarang.findMany({
        where: {
            type: "BarangKeluar"
        }
    });
    
    try {
        const allPeminjam = await prisma.Peminjam.findMany({
          include: {
            keranjangs: {
              include: {
                transaksiBarang: {
                    include: {
                        barang: true
                    }
                }
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

  

