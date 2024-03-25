import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarangKeluar = async(req, res) =>{
    try{
        const response = await prisma.barangKeluar.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getBarangKeluarById = async(req, res) =>{
    try {
        const response = await prisma.barangKeluar.findUnique({
            where:{
                id_barang: req.params.id_barang
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarangKeluar = async(req, res) =>{
    const {id_barang_keluar, id_barang, nama_barang, total_stock, jenis_barang, tanggal_keluar, gambar_barang} = req.body;
    try {
        const newBarangKeluar = await prisma.BarangKeluar.create({
            data: {
                id_barang_keluar: id_barang_keluar,
                id_barang,
                nama_barang: nama_barang,
                tanggal_keluar: tanggal_keluar,
                total_stock: total_stock,
                jenis_barang:jenis_barang,
                gambar_barang: gambar_barang
            }
        });

        // Tambahkan total stock barang
        await prisma.barang.update({
            where: { id_barang: id_barang },
            data: {
                total_stock: {
                    decrement: total_stock // Kurangi stok barang sesuai jumlah keluar
                }
            }
        });
        res.status(201).json({msg: "Data Created", data: newBarangKeluar});
    } catch (error) {
        console.log(error.message);
    }
}

export const buatBarangKeluar = async(req, res) =>{
    const { barangId,id_barang, nama_barang, total_stock, jenis_barang, gambar_barang, harga_barang, barang } = req.body;

    try {
         // Validate the presence of id_barang
        
        // Create a new entry in the TransaksiBarang table and include the related Barang data
        const newTransaction = await prisma.$transaction([
            prisma.transaksiBarang.create({
                data: {
                    type: "BarangKeluar",
                    barang: {
                        connect: {
                          id_barang: id_barang,
                          
                        },
                    },
                },
                include: {
                    barang: true, // Include the related Barang model
                },
            })
        ]);
        await prisma.barang.update({
            where: { id_barang: id_barang },
            data: {
                total_stock: {
                    decrement: total_stock // Kurangi stok barang sesuai jumlah keluar
                }
            }
        });

        
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Error creating transaction' });
    }
}

export const ambilBarangKeluar = async(req, res) =>{

        const response = await prisma.transaksiBarang.findMany({
            where: {
                type: "BarangKeluar",
            },
            include: {
                barang: true,
            },
        });
        res.status(200).json(response);
    
}



export const updateBarangKeluar = async(req, res) =>{
    const {nama_barang, total_stock, jenis_barang} = req.body;
    try {
        await prisma.barangKeluar.update(req.body,{
            where:{
                id_barang: req.params.id_barang
            },
            data: {
                nama_barang:nama_barang, 
                total_stock:total_stock,
                jenis_barang:jenis_barang
            }
        });

        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarangKeluar = async(req, res) =>{
    try {
        const idBarangKeluar = parseInt(req.params.id_barang_keluar);
        await prisma.barangKeluar.delete({
        where: {
            id_barang_keluar: idBarangKeluar
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}




