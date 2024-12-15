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
  const { rencana_pemakaian, id_preorder_keranjang, jumlah_barang } = req.body;
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
                id_preorder_detail: true,
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
            jumlah: detailItem.jumlah_barang,
            jumlah_barang_po: detailItem.jumlah_barang,
            nama_prasat: prasatItem.nama_prasat,
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
    id_preorder_detail: id_preorder_detail, // ID detail pre-order yang ingin diperbarui
  },
  data: {
    jumlah_barang, // Nilai baru jumlah barang
  },
  include: {
    barang: true, // Sertakan data relasi untuk mendapatkan nama_barang
  },
});

// Validasi jika tidak ditemukan
if (!updatedPreOrderDetail) {
  throw new Error("Detail PreOrder tidak ditemukan.");
}

// Cari item yang spesifik di TransaksiOrderPreOrder berdasarkan kriteria unik
const transaksiToUpdate = await prisma.TransaksiOrderPreOrder.findFirst({
  where: {
    nama_barang: updatedPreOrderDetail.barang.nama_barang, // Nama barang harus cocok
    nama_prasat: updatedPreOrderDetail.nama_prasat,       // Nama prasat harus cocok
    // Tambahkan filter spesifik lain jika diperlukan
  },
});

// Validasi jika transaksi tidak ditemukan
if (!transaksiToUpdate) {
  throw new Error("Transaksi yang sesuai tidak ditemukan.");
}

// Perbarui jumlah hanya pada transaksi yang spesifik
await prisma.TransaksiOrderPreOrder.update({
  where: {
    id_transaksi: transaksiToUpdate.id_transaksi, // Gunakan ID unik
  },
  data: {
    jumlah: jumlah_barang, // Perbarui jumlah
    jumlah_barang_po: jumlah_barang
  },
});


    return res.json({ message: "Jumlah Barang and Transaction Updated" });
  } catch (error) {
    console.error("Error during update:", error);

    res.status(500).json({ error: "Error during update" });
  }
};

// Dapat pre order detail untuk transaksi order pre order
export const getAllPreOrderDetailBarang = async (req, res) => {
  try {
    const { keterangan } = req.body; // Ambil keterangan dari body request

    const currentDate = new Date(); // Ambil tanggal saat ini

    // Format tanggal ke dalam format "12 Desember 2024"
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    // Pastikan keterangan diisi
    if (!keterangan) {
      return res.status(400).json({ error: 'Keterangan is required' });
    }

    // Membuat ContainerDataBarangPreOrder terlebih dahulu
    const containerDataBarang = await prisma.ContainerDataBarangPreOrder.create({
      data: {
        keterangan: keterangan, // Keterangan dari body request
        status_kaprodi: 'APPROVED',
        tanggal_update_kaprodi: formattedDate,
      },
    });

    // Mengambil data preOrder yang telah disetujui
    const preOrders = await prisma.PreOrder.findMany({
      where: {
        status: 'APPROVED',
      },
      select: {
        PreOrderPrasat: {
          select: {
            PreOrderDetail: {
              select: {
                jumlah_barang: true,
                barang: {
                  select: {
                    nama_barang: true,
                    kode_barang: true,
                    harga_barang: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Flatten the array and group by barang.nama_barang
    const groupedBarang = {};
    preOrders.forEach(preOrder => {
      preOrder.PreOrderPrasat.forEach(prasat => {
        prasat.PreOrderDetail.forEach(detail => {
          const { nama_barang, kode_barang, harga_barang } = detail.barang;
          const key = nama_barang;

          if (!groupedBarang[key]) {
            groupedBarang[key] = {
              nama_barang,
              kode_barang,
              harga_barang,
              total_jumlah: 0,
              kalkulasi_harga: 0,
            };
          }
          groupedBarang[key].total_jumlah += detail.jumlah_barang;
          groupedBarang[key].kalkulasi_harga =
            groupedBarang[key].harga_barang * groupedBarang[key].total_jumlah;
        });
      });
    });

    // Convert groupedBarang to an array
    const result = Object.values(groupedBarang);

    // Insert data into DataBarangPreOrder with the same containerId
    for (const item of result) {
      await prisma.DataBarangPreOrder.create({
        data: {
          nama_barang: item.nama_barang,
          kode_barang: item.kode_barang,
          harga_barang: item.harga_barang,
          total_jumlah: item.total_jumlah,
          kalkulasi_harga: item.kalkulasi_harga,
          idContainer: containerDataBarang.id_container, // Gunakan id_container yang baru dibuat
        },
      });
    }

    res.json({ message: 'Data processed and inserted successfully', data: result });
  } catch (error) {
    console.error('Error fetching pre-order detail barang:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






// Get data barang di dalam prasat by user id untuk ketika order nanti tinggal pilih prasatnya barangnya langsung ada 
export const getPreOrderDetailsByPrasat = async (req, res) => {

  try {
    const result = await prisma.preOrder.findMany({
        where: {
          userId: req.user.user_id,
          status: "APPROVED",
          // PreOrderPrasat: {
          //   some: {
          //     prasatId: parseInt(req.params.prasatId),
          //   },
          // },
        },
        include: {
          PreOrderPrasat: {
            include: {
              PreOrderDetail: {
                include: {
                  barang: true,
                },
              },
            },
          },
        },
      });
    
    
    res.json(result);
  } catch (error) {
    console.error("Error fetching pre-order detail barang:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


