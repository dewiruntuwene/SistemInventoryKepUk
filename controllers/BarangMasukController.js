import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarangMasukById = async(req, res) =>{
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        const response = await prisma.transaksiBarang.findUnique({
        where: {
            id_transaksi_barang: idTransaksiBarang,
            type: "BarangMasuk"
        }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}


export const createBarangMasuk = async(req, res) =>{
    const { id_barang, nama_barang, total_stock, jenis_barang, gambar_barang, harga_barang, BarangMasuk } = req.body;

    try {

        
        // Create a new entry in the TransaksiBarang table and include the related Barang data
        const newTransaction = await prisma.$transaction([
            prisma.transaksiBarang.create({
                data: {
                    type: "BarangMasuk",
                    barangs: {
                        connect: {
                          id_barang:id_barang,
                          
                        },
                      },
                  },
                  include: {
                    barangs: true
                  }
            })
        ]);
        // Tambahkan total stock barang
        await prisma.Barang.update({
            where: { id_barang },
            data: {
                total_stock: {
                    increment: parseInt(total_stock) // Tambahkan stok barang sesuai jumlah masuk
                },
            },
        });

        res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Error creating transaction' });
    }
}

export const getBarangMasuk = async(req, res) =>{

    const response = await prisma.transaksiBarang.findMany({
        where: {
            type: "BarangMasuk",
        },
        include: {
            barangs: true,
        },
    });
    res.status(200).json(response);

}

export const updateBarangMasuk = async(req, res) =>{
    const {nama_barang, total_stock, jenis_barang} = req.body;
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        await prisma.transaksiBarang.update(req.body,{
            where:{
                id_transaksi_barang: idTransaksiBarang,
                type: "BarangMasuk"
            },
            data: {
                barangs: {
                    id_barang,
                    nama_barang,
                    total_stock,
                    jenis_barang,
                    harga_barang,
                    gambar_barang
                }
            }
        });

        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarangMasuk = async(req, res) =>{
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        await prisma.transaksiBarang.delete({
        where: {
            id_transaksi_barang: idTransaksiBarang,
            type: "BarangMasuk"
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

