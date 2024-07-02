import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getBarangPinjamById = async(req, res) =>{
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        const response = await prisma.transaksiBarang.findUnique({
        where: {
            id_transaksi_barang: idTransaksiBarang,
            type: "BarangPinjam"
        }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarangPinjam = async(req, res) =>{
    const { id_barang, tanggal_pinjam, harga_barang, jumlah_barang, tanggal_keluar, tanggal_masuk, kode_barang } = req.body;

    try {
        // Create a new entry in the TransaksiBarang table and include the related Barang data
        const newTransaction = await prisma.$transaction([
            prisma.transaksiBarang.create({
                data: {
                    tanggal_keluar: null,
                    tanggal_masuk: null, 
                    tanggal_pinjam,
                    jumlah_barang:jumlah_barang,
                    harga_barang,
                    peminjamId: req.params.id_peminjam,
                    type: "BarangPinjam",
                    barangs: {
                        connect: {
                          id_barang: id_barang,  
                          kode_barang: kode_barang      
                        },
                    },
                },
                include: {
                    barangs: true, // Include the related Barang model
                },
            })
        ]);
        await prisma.Barang.update({
            where: { kode_barang: kode_barang },
            data: {
                total_stock: {
                    decrement: jumlah_barang // Kurangi stok barang sesuai jumlah keluar
                }
            }
        });

        
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Error creating transaction' });
    }
}

export const getBarangPinjam = async(req, res) =>{

        const response = await prisma.transaksiBarang.findMany({
            where: {
                type: "BarangPinjam",
            },
            include: {
                barangs: true,
            },
        });
        res.status(200).json(response);
    
}



export const updateBarangPinjam = async(req, res) =>{
    const {nama_barang, total_stock, jenis_barang} = req.body;
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        await prisma.transaksiBarang.update(req.body,{
            where:{
                id_transaksi_barang: idTransaksiBarang,
                type: "BarangPinjam"
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

export const deleteBarangPinjam = async(req, res) =>{
    try {
        const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
        await prisma.transaksiBarang.delete({
        where: {
            id_transaksi_barang: idTransaksiBarang,
            type: "BarangPinjam"
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}




