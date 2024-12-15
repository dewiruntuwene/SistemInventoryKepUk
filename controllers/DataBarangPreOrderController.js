import { PrismaClient } from '@prisma/client';
import { where } from 'sequelize';
const prisma = new PrismaClient();


export const updateStatusDekan =  async (req, res) => {
    try {
        const currentDate = new Date(); // Ambil tanggal saat ini

        // Format tanggal ke dalam format "12 Desember 2024"
        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(currentDate);

         await prisma.ContainerDataBarangPreOrder.update({
            where: {
                id_container: parseInt(req.params.id_container), // Identifikasi data yang akan diupdate
            },
            data: {
                status_dekan: 'APPROVED', // Perbarui status_dekan
                tanggal_update_dekan: formattedDate,
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}

export const updateStatusWarek1 = async (req, res) => {
    try {
        const currentDate = new Date(); // Ambil tanggal saat ini

        // Format tanggal ke dalam format "12 Desember 2024"
        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(currentDate);

        await prisma.ContainerDataBarangPreOrder.update({
            where: {
                id_container: parseInt(req.params.id_container), // Identifikasi data yang akan diupdate
            },
            data: {
                status_warek1: 'APPROVED', // Perbarui status_warek1
                tanggal_update_warek1: formattedDate, // Simpan tanggal yang telah diformat
            },
        });

        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
};


export const updateStatusWarek2 =  async (req, res) => {
    try {
        const currentDate = new Date(); // Ambil tanggal saat ini

        // Format tanggal ke dalam format "12 Desember 2024"
        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(currentDate);

         await prisma.ContainerDataBarangPreOrder.update({
            where: {
                id_container: parseInt(req.params.id_container), // Identifikasi data yang akan diupdate
            },
            data: {
                status_warek2: 'APPROVED', // Perbarui status_dekan
                tanggal_update_warek2: formattedDate,
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}

export const updateStatusPm =  async (req, res) => {
    try {
        const currentDate = new Date(); // Ambil tanggal saat ini

        // Format tanggal ke dalam format "12 Desember 2024"
        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(currentDate);

         await prisma.ContainerDataBarangPreOrder.update({
            where: {
                id_container: parseInt(req.params.id_container), // Identifikasi data yang akan diupdate
            },
            data: {
                status_pm: 'APPROVED', // Perbarui status_dekan
                tanggal_update_pm: formattedDate,
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}

export const updateStatusAdmin =  async (req, res) => {
    try {
        const currentDate = new Date(); // Ambil tanggal saat ini

        // Format tanggal ke dalam format "12 Desember 2024"
        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(currentDate);

         await prisma.ContainerDataBarangPreOrder.update({
            where: {
                id_container: parseInt(req.params.id_container), // Identifikasi data yang akan diupdate
            },
            data: {
                status_admin: 'APPROVED', // Perbarui status_dekan
                tanggal_update_admin: formattedDate,
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}

export const approvedDataBarangPreOrder = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            // where: {
            //   ContainerDataBarangPreOrder: {
            //     status_admin: 'APPROVED',
            //   },
            // },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const approvedDataBarangPreOrderKaprodi = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}
 

export const approvedDataBarangPreOrderdekan = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
                status_dekan: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const approvedDataBarangPreOrderWarek1 = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
                status_dekan: 'APPROVED',
                status_warek1: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const approvedDataBarangPreOrderWarek2 = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
                status_dekan: 'APPROVED',
                status_warek1: 'APPROVED',
                status_warek2: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const approvedDataBarangPreOrderPm = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
                status_dekan: 'APPROVED',
                status_warek1: 'APPROVED',
                status_warek2: 'APPROVED',
                status_pm: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const approvedDataBarangPreOrderAdmin = async (req, res) => {
    try {
        const result = await prisma.dataBarangPreOrder.findMany({
            where: {
              ContainerDataBarangPreOrder: {
                status_kaprodi: 'APPROVED',
                status_dekan: 'APPROVED',
                status_warek1: 'APPROVED',
                status_warek2: 'APPROVED',
                status_pm: 'APPROVED',
                status_admin: 'APPROVED',
              },
            },
            include: {
              ContainerDataBarangPreOrder: true, // Include related container data if needed
            },
        });
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error data" });
    }
}

export const updateSudahDiBeli =  async (req, res) => {
    try {
    
         await prisma.DataBarangPreOrder.update({
            where: {
                id_barang_preorder: parseInt(req.params.id_barang_preorder), // Identifikasi data yang akan diupdate
            },
            data: {
                sudah_dibeli: 'YES', // Perbarui status_dekan
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}

export const updateSudahDiTerima =  async (req, res) => {
    try {
    
         await prisma.DataBarangPreOrder.update({
            where: {
                id_barang_preorder: parseInt(req.params.id_barang_preorder), // Identifikasi data yang akan diupdate
            },
            data: {
                sudah_diterima: 'YES', // Perbarui status_dekan
            },
        });
      
        res.status(200).json({ msg: "Data Updated" });
    } catch (error) {
        console.error("Error update data:", error);
        res.status(500).json({ error: "Error update data" });
    }
}
 
  
 
  