import { PrismaClient } from "@prisma/client";
import { promises } from "fs";
import { connect } from "http2";
import { type } from "os";
import { where } from "sequelize";

const prisma = new PrismaClient();


export const createKeranjang = async(req, res) =>{
    const {barang, jumlah_barang} = req.body;
    try {
        const newKeranjang = await prisma.Keranjang.create({
            data: {
                jumlah_barang: parseInt(jumlah_barang),
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
  const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, jumlah_barang } = req.body;
  const {id_keranjang} = req.params
    try {
      await prisma.$transaction(async(tx) => {
        
        const keranjang = await tx.Keranjang.findFirst({
          where: {
            id_keranjang: id_keranjang
          }
        });
        console.log(keranjang)

        const barangInKeranjang = await tx.Keranjang.findMany({
          where: {
            id_keranjang: id_keranjang,
            isCheckedOut: 'N'
          },
          include: {
            barangs:true
          }
        });

        for (const keranjang of barangInKeranjang) {
          const barang = keranjang.barangs
          const jumlah_barang = keranjang.jumlah_barang
  
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
          });
  
          // Buat TransaksiBarang type BarangKeluar
          await tx.TransaksiBarang.create({
            data: {
              jumlah_barang: jumlah_barang,
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
          });
  
          // Tandai barang sebagai sudah checkout (soft delete)
          await tx.Keranjang.update({
            where: {
              id_keranjang: keranjang.id_keranjang
            },
            data: {
              isCheckedOut: 'Y'
            }
          });

          // Kurangi total_stock di model Barang
          await tx.Barang.update({
            where: {
              id_barang: barang.id_barang
            },
            data: {
              total_stock: {
                decrement: jumlah_barang
              }
            }
          });
        }


        return res.json({ message: 'Transaksi berhasil' });
      })
    
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Error during checkout' });
  }
}


export const getKeranjang = async(req, res) =>{
    const { id_keranjang } = req.params;
    try {
        const allKeranjang = await prisma.Keranjang.findMany({
          where: {
              isCheckedOut: 'N'
          },
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
            id_peminjam:true,
            nama_dosen: true,
            nama_matakuliah: true,
            prasat:true,
            jam_praktek: true,
            tanggal_praktek:true,
            tanggal_pengambilan: true,
            keranjangs:{
              select: {
                jumlah_barang:true,
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

  

