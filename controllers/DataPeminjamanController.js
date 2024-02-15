import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDataPeminjam = async(req, res) =>{
    try{
        const response = await prisma.dataPeminjam.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getDataPeminjamById = async(req, res) =>{
    try {
        const response = await prisma.dataPeminjam.findUnique({
            where:{
                id_peminjam: Number(req.params.id_peminjam)
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createDataPeminjam = async(req, res) =>{
    const {id_peminjam, id_barang, nama_dosen, nama_matakuliah, prasat,jam_praktek,tanggal_praktek, nama_barang, keterangan} = req.body;
    try {
        const dataPeminjam = await prisma.dataPeminjam.create({
            data: {
                id_peminjam: id_peminjam,
                id_barang,
                nama_dosen: nama_dosen, 
                nama_matakuliah: nama_matakuliah, 
                prasat: prasat,
                jam_praktek: jam_praktek,
                tanggal_praktek: tanggal_praktek, 
                nama_barang: nama_barang, 
                keterangan: keterangan 
            }
        });
        await prisma.barang.update({
            where: { id_barang: id_barang },
            data: {
                total_stock: {
                    decrement: 1 // Kurangi stok barang sebanyak 1
                }
            }
        });

        await prisma.barang.update({
            where: { id_barang: id_barang },
            data: {
                total_stock: {
                    decrement: 1 // Kurangi stok barang sebanyak 1
                }
            }
        });

        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDataPeminjam = async(req, res) =>{
    try {
        await prisma.dataPeminjam.update(req.body,{
            where:{
                id_peminjam: req.params.id_peminjam
            }
        });

        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDataPeminjam = async(req, res) =>{
    try {
        const dataPeminjam = await prisma.dataPeminjam.findUnique({
            where: {
                id_peminjam: req.params.id_peminjam
            }
        });

        await prisma.dataPeminjam.delete({
            where: {
                id_peminjam: req.params.id_peminjam
            }
        });

        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

