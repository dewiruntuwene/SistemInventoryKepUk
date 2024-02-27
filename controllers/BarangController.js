import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarang = async(req, res) =>{
    try{
        const response = await prisma.barang.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getBarangById = async(req, res) =>{
    try {
        const response = await prisma.barang.findUnique({
            where:{
                id_barang: req.params.id_barang
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarang = async(req, res) =>{
    const {id_barang, nama_barang, total_stock, jenis_barang, gambar_barang} = req.body;
    try {
        const barang = await prisma.Barang.create({
            data: {
                id_barang: id_barang, 
                nama_barang:nama_barang, 
                total_stock:total_stock,
                jenis_barang:jenis_barang,
                gambar_barang
            }
        });
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBarang = async(req, res) =>{
    const {nama_barang, total_stock, jenis_barang} = req.body;
    try {
        await prisma.Barang.update(req.body,{
            data: {
                nama_barang:nama_barang, 
                total_stock:total_stock,
                jenis_barang:jenis_barang
            },
            where:{
                id_barang: req.params.id_barang
            }
        });

        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarang = async(req, res) =>{
    try {
        const idBarang = parseInt(req.params.id_peminjam);
    
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.dataPeminjam.delete({
        where: {
            id_barang: idBarang
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

