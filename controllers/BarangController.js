import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

export const GAMBAR_URL = process.env.GAMBAR_URL;
const __dirname = path.resolve();

const prisma = new PrismaClient();

export const getBarang = async (req, res) => {
  try {
    const response = await prisma.Barang.findMany();
    console.log('Response:', response); // Tambahkan log
    res.status(200).json(response);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json(error.message);
  }
};

export const getBarangById = async (req, res) => {
  try {
    const response = await prisma.Barang.findUnique({
      where: {
        id_barang: req.params.id_barang,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Konfigurasi penyimpanan dan nama file untuk multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Menyimpan file di folder 'uploads'
  },
 
});



// Inisialisasi multer dengan konfigurasi yang telah ditentukan
// Fungsi untuk menangani permintaan pembuatan barang dengan kemampuan unggah gambar
export const createBarang = async (req, res) => {
  const { kode_barang, nama_barang, total_stock, jenis_barang, harga_barang } =
    req.body;
  const gambar_barang = GAMBAR_URL; // Path file gambar yang diunggah

  // Buat URL gambar yang mengarah ke domain Anda
  const gambarUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  try {
    // Tambahkan data barang ke database
    console.log(req.body);
    const barang = await prisma.Barang.create({
      data: {
        kode_barang: kode_barang,
        nama_barang: nama_barang,
        total_stock: parseInt(total_stock),
        jenis_barang: jenis_barang,
        harga_barang: parseInt(harga_barang),
        gambar_barang: req?.file?.filename,
        //gambar_barang: gambarUrl,
      },
    });

    const responseData = {
      id_barang: barang.id_barang,
      kode_barang: barang.kode_barang,
      nama_barang: barang.nama_barang,
      total_stock: barang.total_stock,
      jenis_barang: barang.jenis_barang,
      harga_barang: barang.harga_barang,
      // Menggunakan path absolut menjadi relatif agar dapat digunakan di frontend
      //gambar_barang: barang.gambar_barang.replace("uploads/", ""), // Menghapus bagian 'public/' dari path
      gambar_barang: gambarUrl, // Kembalikan URL gambar ke frontend
    };
    res.status(201).json({ msg: "Data Created", responseData });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBarang = async (req, res) => {
  const { nama_barang, total_stock, jenis_barang, harga_barang, kode_barang } = req.body;

  try {
    await prisma.Barang.update({
      where: {
        id_barang: parseInt(req.params.id_barang),
      },
      data: {
        kode_barang,
        nama_barang,
        total_stock: parseInt(total_stock),
        jenis_barang,
        harga_barang: parseInt(harga_barang),
        gambar_barang: req.file ? req.file.filename : undefined, // Hanya update jika file ada
      },
    });

    res.status(200).json({ msg: "Data Updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};


export const deletedBarang = async (req, res) => {
  const id_barang = parseInt(req.params.id_barang);
  try {
    await prisma.Barang.delete({
      where: {
        id_barang: id_barang,
      },
    });
    if (!deletedBarang) {
      return res.status(404).json({ error: "Barang not found" });
    }

    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

