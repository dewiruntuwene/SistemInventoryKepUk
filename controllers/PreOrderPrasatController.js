import { PrismaClient } from '@prisma/client';
import { where } from 'sequelize';
const prisma = new PrismaClient();

export const createPreOrderKeranjang = async (req, res) => {
  const { prasat, rencana_pemakaian } = req.body;

  // Validasi input
  // if (!prasat || !Array.isArray(prasat) || prasat.length === 0) {
  //     return res.status(400).json({ error: "Invalid input: prasat must be a non-empty array" });
  // }

  try {
      // Loop melalui array prasat dan buat pre-order untuk setiap item
      const preOrders = await Promise.all(
          prasat.map(async (item) => {
              if (!item.id_prasat) {
                  throw new Error(`Missing id_prasat for one of the items: ${JSON.stringify(item)}`);
              }
              return prisma.keranjangPrasat.create({
                  data: {
                      users: { connect: { user_id: req.user.user_id } },
                      prasat: { connect: { id_prasat: item.id_prasat } },
                  },
                  include: { prasat: true },
              });
          })
      );

      res.status(201).json({ message: "Pre-orders created successfully", preOrders });
  } catch (error) {
      console.error("Error creating pre-orders:", error);
      res.status(500).json({ error: "Failed to create pre-orders" });
  }
};

export const getPreOrderKeranjang = async (req, res) => {
  const { id_pre_order_paket } = req.params;
  try {
    const allPreOrderKeranjang = await prisma.keranjangPrasat.findMany({
      where: {
        userId: req.user.user_id,
      },
      include: {
        prasat: true, // Mengambil data barang dalam setiap keranjang
      },
    });
    res.json(allPreOrderKeranjang);
  } catch (error) {
    console.error("Error fetching pre-order keranjang:", error);
    res.status(500).json({ error: "Error fetching pre-order keranjang" });
  }
};


export const createDataPreOrderPrasat = async (req, res) => {
  const { rencana_pemakaian, id_preorder_keranjang } = req.body;
  const { user_id } = req.params;

  // Ambil nama pengguna (username) dari sesi
  const username = req.session.username;
  console.log(username);

  try {
    await prisma.$transaction(async (tx) => {
      const keranjangPrasat = await tx.KeranjangPrasat.findMany({
        where: {
          userId: req.user.user_id,
        },
        include: {
          prasat: {
            include: {
              barangDalamPrasat: true,
            }
          },
        },
      });
      if (keranjangPrasat.length == 0) {
        return res.json({ msg: "Cart is empty" });
      }

      const prasatInKeranjang = await tx.KeranjangPrasat.findMany({
        where: {
          id_preorder_keranjang: id_preorder_keranjang,
        },
        include: {
          prasat: true,
        },
      });

       // Buat entri PreOrder
      const preOrders = await prisma.PreOrder.create({
        data: {
          rencana_pemakaian,
          users: {
            connect: {
              user_id: req.user.user_id,
              username: req.user.username,
            },
          },
          PreOrderPrasat: {
            create: keranjangPrasat.map((cart) => {
              return {
                nama_prasat: cart.prasat.nama_prasat,
                deskripsi: cart.prasat.deskripsi,
                prasat: {
                  connect: {
                    id_prasat: cart.prasat.id_prasat,
                    nama_prasat: cart.prasat.nama_prasat,
                  },
                },
                PreOrderDetail: {
                  create: cart.prasat.barangDalamPrasat.map((barang) => ({
                    barangId: barang.barangId,
                    jumlah_barang: barang.jumlah_barang,
                  })),
                },
              };
            }),
          },
        },
      });

      await prisma.KeranjangPrasat.deleteMany({
        where: {
          userId: req.user.user_id,
        },
      });

      return res.json({ message: "Transaksi berhasil" });
    });
  } catch (error) {
    console.error("Error during checkout:", error);

    res.status(500).json({ error: "Error during checkout" });
  }
};


export const getDataPreOrderPrasat = async (req, res) => {
  try {
    const preOrders = await prisma.PreOrder.findMany({
      where: {
        userId: req.user.user_id,
      },
      select: {
        id_pre_order_paket: true,
        rencana_pemakaian: true,
        tanggal_disetujui: true,
        status: true,
        users: {
          select: {
            username: true,
          },
        },
        PreOrderPrasat: {
          select: {
            nama_prasat: true,
            deskripsi: true,
            PreOrderDetail: {
              select: {
                jumlah_barang: true,
                barang: {
                  select: {
                    nama_barang: true,
                    kode_barang: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    res.json(preOrders);
  } catch (error) {
    console.error("Error fetching pre-order data:", error);
    res.status(500).json({ error: "Failed to fetch pre-order data" });
  }
};


export const getAllDataPreOrderPrasat = async (req, res) => {
  try {
    const preOrders = await prisma.PreOrder.findMany({
      select: {
        id_pre_order_paket: true,
        rencana_pemakaian: true,
        tanggal_disetujui: true,
        status: true,
        users: {
          select: {
            username: true,
          },
        },
        PreOrderPrasat: {
          select: {
            nama_prasat: true,
            deskripsi: true,
            PreOrderDetail: {
              select: {
                jumlah_barang: true,
                barang: {
                  select: {
                    nama_barang: true,
                    kode_barang: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    res.json(preOrders);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};


export const updateApproveKaprodiPreOrder = async (req, res) => {
  const id_pre_order_paket = parseInt(req.params.id_pre_order_paket);
  const username = req.session.username;

  console.log("Username:", username);

  try {
    // Ambil data PreOrder berdasarkan ID
    const preOrder = await prisma.PreOrder.findUnique({
      where: {
        id_pre_order_paket: id_pre_order_paket,
      },
      include: {
        users: {
          select: {
            username: true,
          },
        },
        PreOrderPrasat: {
          select: {
            nama_prasat: true,
            deskripsi: true,
            PreOrderDetail: {
              select: {
                jumlah_barang: true,
                barang: {
                  select: {
                    nama_barang: true,
                    kode_barang: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    

    // Jika PreOrder tidak ditemukan
    if (!preOrder) {
      return res.status(404).json({ error: "PreOrder not found" });
    }

    // Validasi jika PreOrderPrasat kosong
    if (!preOrder.PreOrderPrasat || preOrder.PreOrderPrasat.length === 0) {
      return res.status(404).json({ error: "No items found in PreOrderPrasat" });
    }

    // Update status PreOrder menjadi APPROVED
    await prisma.PreOrder.update({
      where: {
        id_pre_order_paket: id_pre_order_paket,
      },
      data: {
        status: "APPROVED",
      },
    });

    // Tambahkan transaksi untuk setiap barang di PreOrderPrasat
    const transaksiPromises = preOrder.PreOrderPrasat.flatMap((prasatItem) => {
      // Pastikan preOrderDetail ada dan bukan undefined
      // if (!item.preOrderDetail || item.preOrderDetail.length === 0) {
      //   console.error("PreOrderDetail is missing or empty for item:", item);
      //   return []; // Kembalikan array kosong jika tidak ada detail
      // }

      // Iterasi barangDalamPrasat untuk mendapatkan semua barang
      return prasatItem.PreOrderDetail.map((detailItem) => {
        // Validasi barang
        if (!detailItem.barang || !detailItem.barang.nama_barang) {
          console.error("Barang data is missing or incomplete:", detailItem);
          throw new Error("Invalid barang data");
        }
    
        return prisma.TransaksiOrderPreOrder.create({
          data: {
            user_id: preOrder.userId,
            tanggal: new Date(),
            transaksi_type: "Pre-Order",
            nama_barang: detailItem.barang.nama_barang,
            jumlah: detailItem.jumlah_barang || 0,
            jenis_transaksi: "Debit",
          },
        });
      });
    });

    // Tunggu semua transaksi selesai dibuat
    await Promise.all(transaksiPromises);

    return res.json({ message: "Your Transaction Approved and Transactions Created" });
  } catch (error) {
    console.error("Error during checkout:", error);

    res.status(500).json({ error: "Error during approval and transaction creation" });
  }
};


export const updateRejectedKaprodiPreOrder = async (req, res) => {
  const { user_id } = req.params;

  // Ambil nama pengguna (username) dari sesi
  const username = req.session.username;
  console.log(username);

  try {
    await prisma.PreOrder.update({
      where: {
        id_pre_order_paket: parseInt(req.params.id_pre_order_paket),
      },
      data: {
        status: 'REJECTED',
      },
    });
    return res.json({ message: "Your Transaction Approved" });
  } catch (error) {
    console.error("Error during checkout:", error);

    res.status(500).json({ error: "Error during checkout" });
  }
};


// Update jumlah barang di tabel PreOrderPrasat
export const updateJumlahBarangPreOrderPrasat = async (req, res) => {
  const { jumlah_barang } = req.body;

  try {
    const id_preorder_detail = parseInt(req.params.id_preorder_detail);

    // Update jumlah_barang di PreOrderDetail
    const updatedPreOrderDetail = await prisma.PreOrderDetail.update({
      where: {
        id_preorder_detail: id_preorder_detail,
      },
      data: {
        jumlah_barang,
      },
      include: {
        barang: true, // Untuk mendapatkan nama_barang terkait
      },
    });

    // Perbarui jumlah di TransaksiOrderPreOrder berdasarkan nama_barang
    await prisma.TransaksiOrderPreOrder.updateMany({
      where: {
        nama_barang: updatedPreOrderDetail.barang.nama_barang,
      },
      data: {
        jumlah: jumlah_barang,
      },
    });

    return res.json({ message: "Jumlah Barang and Transaction Updated" });
  } catch (error) {
    console.error("Error during update:", error);

    res.status(500).json({ error: "Error during update" });
  }
};
