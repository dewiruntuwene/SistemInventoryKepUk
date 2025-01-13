import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserTransactions = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch Pre-Order Transactions
    const response = await prisma.TransaksiOrderPreOrder.findMany({
      select: {
        user: {
          select: {
            username: true,
          },
        },
        tanggal: true,
        nama_barang: true,
        jumlah: true,
        nama_prasat: true,
        jenis_transaksi: true,
        transaksi_type: true,
      },
      where: {
        user_id: req.user.user_id,
      },
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user transactions" });
  }
};

export const getUserTransactionsAll = async (req, res) => {
  try {
    // Fetch Pre-Order Transactions and Group by Username
    const response = await prisma.TransaksiOrderPreOrder.findMany({
      select: {
        user: {
          select: {
            username: true,
          },
        },
        tanggal: true,
        nama_barang: true,
        jumlah: true,
        nama_prasat: true,
        jenis_transaksi: true,
        transaksi_type: true,
      },
    });

    // Group transactions by username
    const groupedTransactions = response.reduce((group, transaksi) => {
      const username = transaksi.user.username;

      if (!group[username]) {
        group[username] = [];
      }
      group[username].push({
        tanggal: transaksi.tanggal,
        nama_barang: transaksi.nama_barang,
        jumlah: transaksi.jumlah,
        nama_prasat: transaksi.nama_prasat,
        jenis_transaksi: transaksi.jenis_transaksi,
        transaksi_type: transaksi.transaksi_type,
      });

      return group;
    }, {});

    res.json(groupedTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user transactions" });
  }
};


export const getSisaBarang1 = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch Pre-Order Transactions
    const response = await prisma.TransaksiOrderPreOrder.groupBy({
      by: ["nama_prasat"],
      where: {
        transaksi_type: 'Pre-Order',
      }
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user transactions" });
  }
};

export const getSisaBarang = async (req, res) => {
  const { userId } = req.params;

  try {
    // Ambil semua data transaksi dengan kondisi pre-order
    const response = await prisma.transaksiOrderPreOrder.findMany({
      where: {
        user_id: req.user.user_id,
        transaksi_type: 'Pre-Order', // Filter untuk pre-order
      },
      select: {
        nama_barang: true,
        jumlah_barang_po: true,
        nama_prasat: true,
      },
    });

    // Kelompokkan data berdasarkan nama_prasat
    const groupedData = response.reduce((acc, item) => {
      // Jika grup berdasarkan nama_prasat belum ada, buat grup baru
      if (!acc[item.nama_prasat]) {
        acc[item.nama_prasat] = [];
      }
      // Masukkan item ke dalam grup yang sesuai
      acc[item.nama_prasat].push({
        nama_prasat: item.nama_prasat,
        nama_barang: item.nama_barang,
        jumlah_barang_po: item.jumlah_barang_po,
      });
      return acc;
    }, {});

    res.json(groupedData);
    return groupedData;
  } catch (error) {
    console.error('Error fetching grouped items:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};