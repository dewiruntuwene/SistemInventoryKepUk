import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarang = async(req, res) =>{
    try{
        const response = await prisma.dataPeminjam.findMany({
            id_barang,
            nama_barang,
            stock_awal,
            nama_matakuliah
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
