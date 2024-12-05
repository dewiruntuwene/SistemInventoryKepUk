import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserTransactions = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch Pre-Order Transactions
    const preOrders = await prisma.preOrder.findMany({
      where: { userId: parseInt(userId) },
      include: {
        preOrderBarang: {
          include: { barang: true },
        },
      },
    });

    // Fetch Order Transactions
    const orders = await prisma.order.findMany({
      where: { userId: parseInt(userId) },
      include: {
        orderBarang: {
          include: { barang: true },
        },
      },
    });

    // Fetch Stok Barang
    const stokBarang = await prisma.barang.findMany();

    // Format Response
    const response = {
      userId,
      preOrderTransactions: preOrders.flatMap((po) =>
        po.preOrderBarang.map((item) => ({
          id: po.id,
          tanggal: po.tanggal,
          namaBarang: item.barang.namaBarang,
          jumlahPO: item.jumlah,
        }))
      ),
      orderTransactions: orders.flatMap((order) =>
        order.orderBarang.map((item) => ({
          id: order.id,
          tanggal: order.tanggal,
          namaBarang: item.barang.namaBarang,
          jumlahOrder: item.jumlah,
        }))
      ),
      stokBarang: stokBarang.map((item) => ({
        namaBarang: item.namaBarang,
        jumlah: item.stok,
      })),
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user transactions" });
  }
};
