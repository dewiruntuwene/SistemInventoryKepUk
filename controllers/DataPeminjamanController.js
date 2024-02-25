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
    const {id_peminjam, nama_dosen, nama_matakuliah, prasat,jam_praktek,tanggal_praktek, tanggal_pengambilan} = req.body;
    try {
        const newDataPeminjam = await prisma.dataPeminjam.create({
            data: {
                id_peminjam,
                nama_dosen, 
                nama_matakuliah, 
                prasat,
                jam_praktek,
                tanggal_praktek, 
                tanggal_pengambilan
            },
        });
       
        res.status(201).json({msg: "Data Created", data: newDataPeminjam});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDataPeminjam = async(req, res) =>{
    const {id_peminjam, id_barang, id_barang_keluar, nama_dosen, nama_matakuliah, prasat,jam_praktek,tanggal_praktek, tanggal_pengambilan, nama_barang, keterangan, tanggal_keluar, jenis_barang, jumlah_barang} = req.body;
    try {
        await prisma.dataPeminjam.update(req.body,{
            where:{
                id_peminjam: req.params.id_peminjam
            },
            data: {
                id_peminjam,
                nama_dosen, 
                nama_matakuliah, 
                prasat,
                jam_praktek,
                tanggal_praktek, 
                tanggal_pengambilan
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDataPeminjam = async(req, res) =>{
    try {
        const idPeminjam = parseInt(req.params.id_peminjam);
    
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.dataPeminjam.delete({
        where: {
            id_peminjam: idPeminjam
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

