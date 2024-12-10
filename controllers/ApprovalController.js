import { PrismaClient } from '@prisma/client';
import { where } from 'sequelize';
const prisma = new PrismaClient();


export const approvePreOrder = async (req, res) => {
    const id_pre_order_paket = parseInt(req.params.id_pre_order_paket);
    const { userId, level_approval, remarks } = req.body;
  
    try {
      // Ambil data PreOrder
      const preOrder = await prisma.PreOrder.findUnique({
        where: { id_pre_order_paket },
        include: {
          approvals: true, // Ambil semua approval terkait
        },
      });
  
      if (!preOrder) {
        return res.status(404).json({ error: "PreOrder not found" });
      }
  
      // Validasi approval sebelumnya
      const previousApproval = await prisma.Approval.findFirst({
        where: {
          preOrder: { some: { id_pre_order_paket } },
          level_approval: level_approval - 1, // Approval sebelumnya
          is_approved: true, // Harus sudah disetujui
        },
      });
  
      if (level_approval > 1 && !previousApproval) {
        return res.status(400).json({ error: "Previous approval is required" });
      }
  
      // Buat atau update approval
      const approval = await prisma.Approval.upsert({
        where: {
          userId_level_approval: {
            userId,
            level_approval,
          },
        },
        create: {
          userId,
          level_approval,
          remarks,
          is_approved: true,
          preOrder: {
            connect: { id_pre_order_paket },
          },
        },
        update: {
          remarks,
          is_approved: true,
          tanggal_approve: new Date(),
        },
      });
  
      // Periksa jika semua level sudah disetujui
      const allApprovals = await prisma.Approval.findMany({
        where: {
          preOrder: { some: { id_pre_order_paket } },
        },
      });
  
      const isFullyApproved = allApprovals.every((app) => app.is_approved);
  
      if (isFullyApproved) {
        await prisma.PreOrder.update({
          where: { id_pre_order_paket },
          data: { status: "FULLY_APPROVED" },
        });
      }
  
      res.json({ message: "Approval completed", approval });
    } catch (error) {
      console.error("Error approving PreOrder:", error);
      res.status(500).json({ error: "Error approving PreOrder" });
    }
};
  