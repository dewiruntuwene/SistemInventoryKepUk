import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarangMasuk = async(req, res) =>{
    try{
        const response = await prisma.barangMasuk.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getBarangMasukById = async(req, res) =>{
    try {
        const response = await prisma.barangMasuk.findUnique({
            where:{
                id_barangMasuk: req.params.id_barangMasuk
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarangMasuk = async(req, res) =>{
    const {id_barang_masuk, id_barang, nama_barang, tanggal_masuk, total_stock, jenis_barang, gambar_barang} = req.body;
    try {
        const newBarangMasuk = await prisma.BarangMasuk.create({
            data: {
                id_barang_masuk,
                id_barang,
                nama_barang: nama_barang,
                tanggal_masuk: tanggal_masuk,
                total_stock: parseInt(total_stock),
                jenis_barang:jenis_barang,
                gambar_barang: gambar_barang,
                harga_barang: parseInt(harga_barang)
            }
        });

        // Tambahkan total stock barang
        await prisma.Barang.update({
            where: { id_barang },
            data: {
                total_stock: {
                    increment: parseInt(total_stock) // Tambahkan stok barang sesuai jumlah masuk
                },
            },
        });
        res.status(201).json({msg: "Data Created", data: newBarangMasuk});
    } catch (error) {
        console.log(error.message);
    }
}

export const buatBarangMasuk = async(req, res) =>{
    const { id_barang, nama_barang, total_stock, jenis_barang, gambar_barang, harga_barang, BarangMasuk } = req.body;

    try {
         // Validate the presence of id_barang
        
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

export const ambilBarangMasuk = async(req, res) =>{

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
        await prisma.BarangMasuk.update(req.body,{
            where:{
                id_barangMasuk: req.params.id_barangMasuk
            },
            data: {
                nama_barang:nama_barang, 
                total_stock:parseInt(total_stock),
                jenis_barang:jenis_barang
            }
        });

        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarangMasuk = async(req, res) =>{
    try {
        const idBarangMasuk = parseInt(req.params.id_barang_masuk);
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.barangMasuk.delete({
        where: {
            id_barang_masuk: idBarangMasuk
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

