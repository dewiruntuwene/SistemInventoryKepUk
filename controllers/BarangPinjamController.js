import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarangPinjamById = async (req, res) => {
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
    const response = await prisma.transaksiBarang.findUnique({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangPinjam",
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBarangPinjam = async (req, res) => {
  const {
    id_barang,
    tanggal_pinjam,
    harga_barang,
    jumlah_barang,
    tanggal_keluar,
    tanggal_masuk,
    kode_barang,
  } = req.body;

  try {
    // Create a new entry in the TransaksiBarang table and include the related Barang data
    const newTransaction = await prisma.$transaction([
      prisma.transaksiBarang.create({
        data: {
          tanggal_keluar: null,
          tanggal_masuk: null,
          tanggal_pinjam,
          jumlah_barang: jumlah_barang,
          harga_barang,
          peminjamId: req.params.id_peminjam,
          type: "BarangPinjam",
          barangs: {
            connect: {
              id_barang: id_barang,
              kode_barang: kode_barang,
            },
          },
        },
        include: {
          barangs: true, // Include the related Barang model
        },
      }),
    ]);
    await prisma.Barang.update({
      where: { kode_barang: kode_barang },
      data: {
        total_stock: {
          decrement: jumlah_barang, // Kurangi stok barang sesuai jumlah keluar
        },
      },
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Error creating transaction" });
  }
};

export const getBarangPinjam = async (req, res) => {
  const response = await prisma.transaksiBarang.findMany({
    where: {
      type: "BarangPinjam",
    },
    include: {
      barangs: true,
    },
  });
  res.status(200).json(response);
};

export const updateBarangPinjam = async (req, res) => {
  const {
    tanggal_masuk,
    kode_barang,
    nama_barang,
    total_stock,
    jenis_barang,
    id_barang,
    harga_barang,
    gambar_barang,
    jumlah_barang,
    keterangan
  } = req.body;
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);

    // Ambil data transaksi barang masuk sebelumnya
    const transaksiSebelumnya = await prisma.transaksiBarang.findUnique({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangPinjam",
      },
      include: {
        barangs: true,
      },
    });

    if (!transaksiSebelumnya) {
      return res.status(404).json({ msg: "Transaksi tidak ditemukan" });
    }

    // Kurangi total stock dengan jumlah barang sebelumnya
    await prisma.Barang.update({
      where: { kode_barang },
      data: {
        total_stock: {
          decrement: parseInt(transaksiSebelumnya.jumlah_barang),
        },
      },
    });

    // Update transaksi barang pinjam
    const updatedTransaksi = await prisma.transaksiBarang.update({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangPinjam",
      },
      data: {
        tanggal_masuk,
        jumlah_barang,
        nama_barang,
        keterangan,
        barangs: {
          connect: {
            id_barang: id_barang,
            kode_barang: kode_barang,
          },
        },
      },
      include: {
        barangs: true,
      },
    });

    // Tambahkan total stock barang dengan jumlah barang baru
    await prisma.Barang.update({
      where: { kode_barang },
      data: {
        total_stock: {
          increment: parseInt(jumlah_barang),
        },
      },
    });

    res.status(200).json({ msg: "Data Updated", updatedTransaksi });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deleteBarangPinjam = async (req, res) => {
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
    await prisma.transaksiBarang.delete({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangPinjam",
      },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
