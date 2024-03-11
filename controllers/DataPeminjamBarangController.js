import { PrismaClient } from "@prisma/client";

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
                jumlah_pemesanan: keranjang.jumlah_pemesanan,
                barangKeluar: {
                    create:{
                        id_barang: keranjang.barangKeluar.id_barang,
                        nama_barang: keranjang.barangKeluar.nama_barang,
                        total_stock: keranjang.barangKeluar.total_stock,
                        jenis_barang: keranjang.barangKeluar.jenis_barang,
                        gambar_barang: keranjang.barangKeluar.gambar_barang
                      }
                    
                },
                }))
            
            }
        },
        include: {
            keranjangs: {
            include: {
                barangKeluar: true
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



export const createKeranjang = async(req, res) =>{
    const {jumlah_pemesanan, barangKeluar} = req.body;
    try {
        const newKeranjang = await prisma.Keranjang.create({
            data: {
                    barangKeluar: {
                        create:{
                            id_barang: barangKeluar.id_barang,
                            nama_barang: barangKeluar.nama_barang,
                            total_stock: barangKeluar.total_stock,
                            jenis_barang: barangKeluar.jenis_barang,
                            gambar_barang: barangKeluar.gambar_barang
                        }
                            
                    },
                    
            },

            include: {
                barangKeluar: true
            }
        });
       
        res.status(201).json({msg: "Data Created", data: newKeranjang});
    } catch (error) {
        console.log(error.message);
    }
}

export const getKeranjang = async(req, res) =>{
    try {
        const allKeranjang = await prisma.Keranjang.findMany({
            include: {
                barangKeluar: true
            }
        });
        res.json(allKeranjang);
      } catch (error) {
        console.error('Error fetching keranjang:', error);
        res.status(500).json({ error: 'Error fetching keranjang' });
      }
}


export const getDataPeminjamBarang = async(req, res) =>{
    try {
        const allPeminjam = await prisma.Peminjam.findMany({
          include: {
            keranjangs: {
              include: {
                barangKeluar: true
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

  

