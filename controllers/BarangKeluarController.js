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
    const {id_barang_keluar, id_barang, nama_barang, total_stock, jenis_barang, tanggal_keluar} = req.body;
    try {
        const newBarangKeluar = await prisma.barangKeluar.create({
            data: {
                id_barang_keluar: id_barang_keluar,
                id_barang,
                nama_barang: nama_barang,
                tanggal_keluar: tanggal_keluar,
                total_stock: total_stock,
                jenis_barang:jenis_barang
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
        await prisma.barangKeluar.delete({
            where:{
                id_barang: req.params.id_barang
            }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

