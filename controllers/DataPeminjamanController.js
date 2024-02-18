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
    const {id_peminjam, id_barang, id_barang_keluar, nama_dosen, nama_matakuliah, prasat,jam_praktek,tanggal_praktek, tanggal_pengambilan, nama_barang, keterangan, tanggal_keluar, jenis_barang} = req.body;
    try {
        // Cari barang berdasarkan id_barang yang disediakan
        const { id_barang } = req.body.barang.connect;
        const existingBarang = await prisma.barang.findUnique({ where: { id_barang } });

        // Periksa apakah barang ada
        if (!existingBarang) {
            return res.status(400).json({ error: "Barang tidak ditemukan." });
        }

        const newDataPeminjam = await prisma.dataPeminjam.create({
            data: {
                id_peminjam,
                nama_dosen, 
                nama_matakuliah, 
                prasat,
                jam_praktek,
                tanggal_praktek, 
                tanggal_pengambilan,
                nama_barang, 
                keterangan,
                barang: { connect: { id_barang } }
            },
        });

        // Create barangKeluar entry for the borrowed item
        const newBarangKeluar = await prisma.barangKeluar.create({
            data: {
                id_barang_keluar,
                id_barang,
                nama_barang,
                tanggal_keluar,
                total_stock: 1, // Assuming one item is being borrowed
                jenis_barang: "-" // You may need to adjust this according to your data model
            }
        });

        await prisma.barang.update({
            where: { id_barang },
            data: {
                total_stock: {
                    decrement: 1 // Kurangi stok barang sebanyak 1
                },
            },
        });

        

       
        res.status(201).json({msg: "Data Created", data: newDataPeminjam});
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

