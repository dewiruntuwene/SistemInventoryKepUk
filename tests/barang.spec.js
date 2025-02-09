import { expect } from 'chai';
import { assert } from 'chai';
import { getBarang } from "../controllers/BarangController.js";
import request from 'supertest'; // Import supertest
import app from '../index.js';
import sinon from 'sinon';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// describe("Test /barang", () => {
//   describe("Barang on /sync", () => {
//     it("Barang should be okay", async () => {
//       const res = await request(app).get('/barang'); // Ganti '/barang' dengan route yang sesuai
//       expect(res.status).to.equal(200); // Memeriksa status respons
//       expect(res.body).to.be.an('array'); // Memeriksa apakah respons adalah array
//       expect(res.body).to.have.length.above(0); // Memeriksa apakah ada data dalam array
//     });
//   });
// });

// describe("Test /barang", () => {
//   let res;
//   let sandbox;

//   beforeEach(() => {
//     // Membuat objek mock untuk 'res'
//     res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub().returnsThis()
//     };
//     sandbox = sinon.createSandbox();
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it("Barang should be okay", async () => {
//     // Mocking prisma.Barang.findMany()
//     const mockResponse = [{ id_barang: 2, nama_barang: 'Masker', total_stock: 39, jenis_barang: 'Barang Habis Pakai', harga_barang: 30000, gambar_barang: '1733891522856-1711378417244-Face-mask 1.png', kode_barang: 'A002' }];
//     const stub = sandbox.stub(prisma.Barang, 'findMany').resolves(mockResponse);
  
//     const req = {};  // Anda dapat menambahkan properti untuk req jika diperlukan
  
//     // Memanggil fungsi getBarang dengan objek mock req dan res
//     await getBarang(req, res);
  
//     // Verifikasi bahwa status 200 dipanggil dengan benar
//     expect(res.status.calledWith(200), "Expected res.status to be called with 200").to.be.true;
  
//     // Verifikasi bahwa json dipanggil dengan response yang benar
//     expect(res.json.calledWith(mockResponse), "Expected res.json to be called with mockResponse").to.be.true;
  
//     // Memastikan stub prisma.Barang.findMany() dipanggil sekali
//     expect(stub.calledOnce).to.be.true;
//   });
  
//   it("should handle error correctly", async () => {
//     // Simulasi error pada prisma.Barang.findMany()
//     const errorMessage = 'Database error';
//     const stub = sandbox.stub(prisma.Barang, 'findMany').rejects(new Error(errorMessage));
  
//     const req = {};  // req dapat berisi properti tambahan jika perlu
  
//     // Memanggil fungsi getBarang dengan objek mock req dan res
//     await getBarang(req, res);
  
//     // Verifikasi bahwa status 500 dipanggil
//     expect(res.status.calledWith(500), "Expected res.status to be called with 500").to.be.true;
  
//     // Verifikasi bahwa json dipanggil dengan error message
//     expect(res.json.calledWith(errorMessage), "Expected res.json to be called with errorMessage").to.be.true;
  
//     // Memastikan stub prisma.Barang.findMany() dipanggil sekali
//     expect(stub.calledOnce).to.be.true;
//   });
  
// });

// describe("Test /barang", () => {
//   describe("Barang on /sync", () => {
//     it("Barang should be okay", () => {
//       return getBarang().then(actualResult => { // Tunggu Promise selesai dengan .then()
//         expect(actualResult).to.equal("OK");
//       });
//     });
//   });
// });


describe('Barang Service - getBarang', () => {
  let prismaFindManyStub;

  beforeEach(() => {
    // Stub the prisma.Barang.findMany() method
    prismaFindManyStub = sinon.stub(prisma.Barang, 'findMany');
  });

  afterEach(() => {
    // Restore the stub after each test
    prismaFindManyStub.restore();
  });

  it('should return a list of barang with status 200', async () => {
    // Mock data to be returned by the stubbed function
    const mockBarangData = [
      { id_barang: 2, nama_barang: 'Masker', total_stock: 39, jenis_barang: 'Barang Habis Pakai', harga_barang: 30000, gambar_barang: '1733891522856-1711378417244-Face-mask 1.png', kode_barang: 'A002' },
    ];
    
    // Make the stubbed function return the mock data
    prismaFindManyStub.resolves(mockBarangData);

    // Simulate request and response objects
    const req = {}; // Empty request
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    // Call the function directly
    await getBarang(req, res);

    // Assertions
    expect(res.status.calledWith(500)).to.be(true);
    expect(res.json.calledWith(mockBarangData)).to.be(true);
  });

  it('should handle errors and return status 500 if database query fails', async () => {
    // Simulate an error in the database query
    prismaFindManyStub.rejects(new Error('Database error'));

    // Simulate request and response objects
    const req = {}; // Empty request
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    // Call the function directly
    await getBarang(req, res);

    // Assertions
    expect(res.status.calledWith(500)).to.be.true;
    expect(res.json.calledWith('Database error')).to.be.true;
  });
});