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
