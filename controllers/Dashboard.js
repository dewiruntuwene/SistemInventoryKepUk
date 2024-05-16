import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Endpoint untuk mendapatkan pemberitahuan tentang stok barang yang rendah
export const dashboardNotif = async(req, res) => {
  try {
    // Cari barang dengan stok yang rendah
    const lowStockItems = await prisma.barang.findMany({
      where: {
        total_stock: {
          lt: 30 // Ambang batas stok rendah
        }
      },
      select: {
        kode_barang: true,
        nama_barang: true,
        jenis_barang: true,
        total_stock: true
      }
    });

    res.json(lowStockItems); // Kirim data pemberitahuan ke frontend
  } catch (error) {
    console.error('Error fetching low stock items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

