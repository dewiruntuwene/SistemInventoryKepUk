import { PrismaClient } from "@prisma/client";
import { response } from "express";
import { where } from "sequelize";


const prisma = new PrismaClient();


export const createKeranjang = async(req, res) =>{
    const {jumlah_barang, users, barang} = req.body;
    try {
     
        const newKeranjang = await prisma.Keranjang.create({
            data: {
                users: {
                  connect: {
                    user_id: req.user.user_id
                  }
                },
                jumlah_barang: parseInt(jumlah_barang),
                barangs: {
                    connect: {
                        id_barang: barang.id_barang,
                    },
                },
            },
            include: {
                barangs: true // Mengambil data barang yang ditambahkan ke keranjang
            }
        });  
        res.status(201).json({msg: "Data Created", data: newKeranjang});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKeranjang = async(req,res) =>{
  const {jumlah_barang} = req.body
  try {
    const keranjangBaru = await prisma.Keranjang.update({
      where: {
        id_keranjang: parseInt(req.params.id_keranjang)
      },
      data: {
        jumlah_barang: parseInt(jumlah_barang)
      }
    });
    res.json({ message: 'Berhasil di Update', data: keranjangBaru });
  } catch (error) {
    console.log(error.message);
  }
}

export const getKeranjang = async(req, res) =>{
  const { id_keranjang } = req.params;
  try {
      const allKeranjang = await prisma.Keranjang.findMany({
        where: {
            isCheckedOut: 'N'
        },
        include: {
            barangs: true // Mengambil data barang dalam setiap keranjang
        }
      });
      res.json(allKeranjang);
    } catch (error) {
      console.error('Error fetching keranjang:', error);
      res.status(500).json({ error: 'Error fetching keranjang' });
    }
}


export const deleteKeranjang = async(req, res) =>{
  try {
      const idKeranjang = req.params.id_keranjang;
  
      // Hapus data peminjam berdasarkan id_peminjam
      await prisma.Keranjang.delete({
          where: {
              id_keranjang: parseInt(idKeranjang)
          }
      });
      res.status(200).json({msg: "Data Delete"});
  } catch (error) {
      console.log(error.message);
  }
}



export const createDataPeminjamBarang = async (req, res) => {
  const { nama_dosen, nama_matakuliah, prasat, jam_praktek, tanggal_praktek, tanggal_keluar, id_keranjang } = req.body;
  const { user_id } = req.params;

  // Ambil nama pengguna (username) dari sesi
  const username = req.session.username;
  console.log(username)

  try {
    await prisma.$transaction(async (tx) => {
      const keranjang = await tx.Keranjang.findMany({
        where: {
          userId: req.user.user_id,
        },
        include: {
          barangs: true
        }
      })
      if( keranjang.length == 0 ) {
        return res.json({msg: "Cart is empty"})
      }
      // const keranjang = await tx.Keranjang.findFirst({
      //   where: {
      //     id_keranjang: id_keranjang,
      //     isCheckedOut: 'N'
      //   },
      //   include: {
      //     barangs: true
      //   }
      // });

      const barangInKeranjang = await tx.Keranjang.findMany({
        where: {
          id_keranjang: id_keranjang,
          isCheckedOut: 'N'
        },
        include: {
          barangs: true
        }
      });

      const peminjam = await prisma.Peminjam.create({
        data: {
          nama_matakuliah,
          prasat,
          jam_praktek,
          tanggal_praktek,
          users: {
            connect: {
              user_id: req.user.user_id,
              username: req.user.username
            }
          },
          barangPinjam: {
            create: keranjang.map((cart =>  {
              return {
                barangId: cart.barangId,
                jumlah_barang: cart.jumlah_barang
              }
            }))
          }
        },
      });

      const transaksiBarangs = [];
      const barangIdAndJumlah = {};

      for (const item of barangInKeranjang) {
        const { id_barang, jumlah_barang } = item.barangs;
        if (!barangIdAndJumlah[id_barang]) {
          barangIdAndJumlah[id_barang] = 0;
        }
        barangIdAndJumlah[id_barang] += jumlah_barang;
      }


       await prisma.Keranjang.deleteMany({
        where: {
          userId: req.user.user_id
        }
      })

      // Declare transaksiBarang outside the loop
      // const transaksiBarang = {};

      // for (const [id_barang, jumlah_barang] of Object.entries(barangIdAndJumlah)) {
      //   const transaksiBarangData = await tx.TransaksiBarang.create({
      //     data: {
      //       barangId: id_barang,
      //       jumlah_barang,
      //       peminjamId: peminjam.id_peminjam,
      //       tanggal_keluar: tanggal_keluar,
      //       type: "BarangKeluar",
      //       nama_matakuliah: peminjam.nama_matakuliah,
      //       nama_barang: (await tx.Barang.findUnique({
      //         where: {
      //           id_barang: id_barang
      //         }
      //       })).nama_barang
      //     }
      //   });
      //   transaksiBarang[id_barang] = transaksiBarangData;
      // }

      // Tandai semua barang sebagai checkout dan kurangi stok
      // await Promise.all(barangInKeranjang.map(async (keranjang) => {
      //   await tx.Keranjang.update({
      //     where: {
      //       id_keranjang: keranjang.id_keranjang
      //     },
      //     data: {
      //       isCheckedOut: 'Y'
      //     }
      //   });

        // await tx.Barang.update({
        //   where: {
        //     id_barang: keranjang.barangs.id_barang
        //   },
        //   data: {
        //     total_stock: {
        //       decrement: keranjang.jumlah_barang
        //     }
        //   }
        // });
      // }));

      return res.json({ message: 'Transaksi berhasil' });
    });
  } catch (error) {
    console.error('Error during checkout:', error);
    
    res.status(500).json({ error: 'Error during checkout' });
  }
};

export const getDataPeminjamBarang = async(req, res) =>{
  try {
    const peminjam = await prisma.Peminjam.findMany({
      where: {
        id_peminjam: req.params.id_peminjam
      },
      select: {
        nama_matakuliah: true,
        prasat:true,
        jam_praktek: true,
        tanggal_praktek:true,
        tanggal_pengambilan: true,
        users:{
          select: {
            username:true,
          }
        },
        barangPinjam:{
          select: {
            barangId:true,
            jumlah_barang:true
          }
        }
      }
    });


    return peminjam;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
}

export const deletetDataPeminjamBarang = async(req, res) =>{
    try {
        const idPeminjam = parseInt(req.params.id_peminjam);
        // Hapus data peminjam berdasarkan id_peminjam
        await prisma.Peminjam.delete({
        where: {
            id_peminjam: idPeminjam
        }
        });
        res.status(200).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const barangKeluarPeminjam = async(req, res) => {
  try{
    
    const peminjamId = +req.params.id_peminjam; // Convert id to number
    const peminjam = await prisma.Peminjam.update({
          where: {
              id_peminjam: peminjamId
          },
          data: {
              type: 'BarangKeluar'
          },
          include: {
            barangPinjam:true
          }
      });


      // Iterate over the barangPinjam to create transaksiBarang
    for (const barangPinjam of peminjam.barangPinjam) {
      const id_barang = barangPinjam.barangId; // Assuming barangId is the correct field
      const jumlah_barang = barangPinjam.jumlah_barang; // Assuming jumlah_barang is the correct field

      await prisma.TransaksiBarang.create({
        data: {
          nama_matakuliah: peminjam.nama_matakuliah,
          nama_barang: peminjam.nama_barang,
          tanggal_masuk: null,
          jumlah_barang: jumlah_barang,
          peminjam: {
            connect: {
              id_peminjam: peminjamId
            }
          },
          type: "BarangKeluar",
          barangs: {
            connect: {
              id_barang: id_barang
            }
          }
        },
        include: {
          barangs: true // Include the related Barang model
        }
      });

      // Update Barang stock
      await prisma.Barang.update({
        where: { id_barang: id_barang },
        data: {
          total_stock: {
            decrement: jumlah_barang // Decrease stock by the jumlah_barang
          }
        }
      });
    }
  res.json(peminjam);
  }catch(error){
    console.error('Error fetching peminjam:', error);
    res.status(500).json({ error: 'Error fetching peminjam' });
  }
}

export const cancelPeminjaman = async (req, res) => {
  try {
      const peminjamId = +req.params.id_peminjam; // Convert id to number
      const peminjam = await prisma.Peminjam.update({
          where: {
              id: peminjamId
          },
          data: {
              status: 'CANCELLED'
          }
      });

      await prisma.transaksiBarang.create({
          data: {
              orderId: peminjam.id_peminjam,
              status: "CANCELLED"
          }
      });

      res.json(peminjam);
  } catch (err) {
      res.status(404).json({ error: 'Order not found' });
  }
};



export const changeStatus = async(req, res) => {
  // wrap it inside transaction
  try {
      const peminjam = await prisma.Peminjam.update({
          where: {
              id_peminjam: +req.params.id_peminjam
          },
          data: {
              status: req.body.status
          }
      })
      await prisma.transaksiBarang.create({
          data: {
              peminjamIdId: peminjam.id_peminjam,
              type: req.body.type
          }
      })
      res.json(peminjam)
  } catch(err) {
      throw new NotFoundException('Order not found', ErrorCode.ORDER_NOT_FOUND)
  }
  
}

