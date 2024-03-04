import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from 'fs/promises'; 
import { MIMEType } from "util";

export const GAMBAR_URL = process.env.GAMBAR_URL
const __dirname = path.resolve();
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


// Konfigurasi penyimpanan dan nama file untuk multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Menyimpan file di folder 'uploads'
    },
    filename: function (req, file, cb) {
        const name = file.originalname.split('').join(__);
        const extension = MIMEType[file.mimetype];
        cb(null, name + Date.now() + '.' +extension); // Nama file disimpan sesuai dengan nama aslinya
    }
});

// Filter untuk memeriksa tipe file yang diizinkan (opsional)
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(new Error('Only JPEG and PNG images are allowed'), false);
//     }
// };

// Inisialisasi multer dengan konfigurasi yang telah ditentukan
const upload = multer({ storage: storage});

// Fungsi untuk menangani permintaan pembuatan barang dengan kemampuan unggah gambar
export const createBarang = async (req, res) => {
    try {
        upload.single('gambar_barang')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                // A error occurred when uploading
                return res.status(500).json({ error: err.message });
            } else if (err) {
                // An error occurred with unknown cause
                return res.status(500).json({ error: err.message });
            }

            // Multer has successfully uploaded the file
            const { id_barang, nama_barang, total_stock, jenis_barang } = req.body;
            const gambar_barang = GAMBAR_URL; // Path file gambar yang diunggah
            // Tambahkan data barang ke database
            const barang = await prisma.Barang.create({
                data: {
                    id_barang: id_barang,
                    nama_barang: nama_barang,
                    total_stock: parseInt(total_stock),
                    jenis_barang: jenis_barang,
                    gambar_barang: req.file.filename
                }
            });

            const responseData = {
                id_barang: barang.id_barang,
                nama_barang: barang.nama_barang,
                total_stock: barang.total_stock,
                jenis_barang: barang.jenis_barang,
                // Menggunakan path absolut menjadi relatif agar dapat digunakan di frontend
                gambar_barang: barang.gambar_barang.replace('uploads/', '') // Menghapus bagian 'public/' dari path
            };

            

            res.status(201).json({ msg: "Data Created", responseData });
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



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

