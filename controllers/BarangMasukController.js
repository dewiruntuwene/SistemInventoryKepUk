import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBarangMasukById = async (req, res) => {
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
    const response = await prisma.transaksiBarang.findUnique({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangMasuk",
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBarangMasuk = async (req, res) => {
  const {
    id_barang,
    jumlah_barang,
    tanggal_masuk,
    tanggal_keluar,
    kode_barang,
    harga_barang,
  } = req.body;

  try {
    // Create a new entry in the TransaksiBarang table and include the related Barang data
    const newTransaction = await prisma.$transaction([
      prisma.transaksiBarang.create({
        data: {
          tanggal_masuk,
          tanggal_keluar: null,
          jumlah_barang,
          harga_barang,
          type: "BarangMasuk",
          barangs: {
            connect: {
              kode_barang: kode_barang,
            },
          },
        },
        include: {
          barangs: true,
        },
      }),
    ]);
    // Tambahkan total stock barang
    await prisma.Barang.update({
      where: { kode_barang },
      data: {
        total_stock: {
          increment: parseInt(jumlah_barang), // Tambahkan stok barang sesuai jumlah masuk
        },
      },
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Error creating transaction" });
  }
};

export const getBarangMasuk = async (req, res) => {
  const response = await prisma.transaksiBarang.findMany({
    where: {
      type: "BarangMasuk",
    },
    include: {
      barangs: true,
    },
  });
  res.status(200).json(response);
};

export const updateBarangMasuk = async (req, res) => {
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
  } = req.body;
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);

    // Ambil data transaksi barang masuk sebelumnya
    const transaksiSebelumnya = await prisma.transaksiBarang.findUnique({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangMasuk",
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

    // Update transaksi barang masuk
    const updatedTransaksi = await prisma.transaksiBarang.update({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangMasuk",
      },
      data: {
        tanggal_masuk,
        jumlah_barang,
        nama_barang,
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


export const deleteBarangMasuk = async (req, res) => {
  try {
    const idTransaksiBarang = parseInt(req.params.id_transaksi_barang);
    await prisma.transaksiBarang.delete({
      where: {
        id_transaksi_barang: idTransaksiBarang,
        type: "BarangMasuk",
      },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
