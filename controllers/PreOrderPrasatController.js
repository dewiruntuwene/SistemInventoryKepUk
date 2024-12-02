import { PrismaClient } from '@prisma/client';
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
          prasat: true,
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
              };
            }),
          },
        },
      });

      // const transaksiBarangs = [];
      // const barangIdAndJumlah = {};

      // for (const item of prasatInKeranjang) {
      //   const { id_barang, jumlah_barang } = item.barangs;
      //   if (!barangIdAndJumlah[id_barang]) {
      //     barangIdAndJumlah[id_barang] = 0;
      //   }
      //   barangIdAndJumlah[id_barang] += jumlah_barang;
      // }

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
        users: {
          select: {
            username: true,
          },
        },
        PreOrderPrasat: {
          select: {
            nama_prasat: true,
            deskripsi: true,
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