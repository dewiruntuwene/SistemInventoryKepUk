
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.0
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.9.0",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  username: 'username',
  password: 'password',
  email: 'email',
  role: 'role',
  created_on: 'created_on',
  last_login: 'last_login',
  refresh_token: 'refresh_token'
};

exports.Prisma.PeminjamScalarFieldEnum = {
  id_peminjam: 'id_peminjam',
  nama_matakuliah: 'nama_matakuliah',
  prasat: 'prasat',
  jam_praktek: 'jam_praktek',
  tanggal_praktek: 'tanggal_praktek',
  tanggal_pengambilan: 'tanggal_pengambilan',
  userId: 'userId',
  type: 'type'
};

exports.Prisma.MatakuliahScalarFieldEnum = {
  id_matakuliah: 'id_matakuliah',
  hematologi: 'hematologi',
  kardio: 'kardio',
  respiratory: 'respiratory',
  integumen: 'integumen',
  muskulo: 'muskulo',
  persepsi: 'persepsi',
  kritis: 'kritis',
  paliatif: 'paliatif'
};

exports.Prisma.HistoryScalarFieldEnum = {
  id_history: 'id_history',
  barangId: 'barangId',
  matakuliahId: 'matakuliahId',
  nama_barang: 'nama_barang',
  jumlah: 'jumlah'
};

exports.Prisma.BarangScalarFieldEnum = {
  id_barang: 'id_barang',
  nama_barang: 'nama_barang',
  total_stock: 'total_stock',
  jenis_barang: 'jenis_barang',
  harga_barang: 'harga_barang',
  gambar_barang: 'gambar_barang',
  kode_barang: 'kode_barang'
};

exports.Prisma.KeranjangScalarFieldEnum = {
  id_keranjang: 'id_keranjang',
  barangId: 'barangId',
  jumlah_barang: 'jumlah_barang',
  isCheckedOut: 'isCheckedOut',
  delete_at: 'delete_at',
  userId: 'userId'
};

exports.Prisma.BarangHabisPakaiScalarFieldEnum = {
  id_barang_habis_pakai: 'id_barang_habis_pakai',
  peminjamId: 'peminjamId',
  barangId: 'barangId',
  jumlah_barang: 'jumlah_barang',
  nama_barang: 'nama_barang',
  kode_barang: 'kode_barang',
  jenis_barang: 'jenis_barang',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BarangPinjamScalarFieldEnum = {
  id_barang_pinjam: 'id_barang_pinjam',
  peminjamId: 'peminjamId',
  barangId: 'barangId',
  jumlah_barang: 'jumlah_barang',
  nama_barang: 'nama_barang',
  kode_barang: 'kode_barang',
  jenis_barang: 'jenis_barang',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransaksiBarangScalarFieldEnum = {
  id_transaksi_barang: 'id_transaksi_barang',
  harga_barang: 'harga_barang',
  jumlah_barang: 'jumlah_barang',
  barangId: 'barangId',
  type: 'type',
  peminjamId: 'peminjamId',
  tanggal_keluar: 'tanggal_keluar',
  tanggal_masuk: 'tanggal_masuk',
  tanggal_pinjam: 'tanggal_pinjam',
  nama_matakuliah: 'nama_matakuliah',
  nama_barang: 'nama_barang',
  kode_barang: 'kode_barang'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.Type = exports.$Enums.Type = {
  BarangKeluar: 'BarangKeluar',
  BarangMasuk: 'BarangMasuk',
  BarangPinjam: 'BarangPinjam',
  PENDING: 'PENDING',
  CANCEL: 'CANCEL'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Peminjam: 'Peminjam',
  Matakuliah: 'Matakuliah',
  History: 'History',
  Barang: 'Barang',
  Keranjang: 'Keranjang',
  BarangHabisPakai: 'BarangHabisPakai',
  BarangPinjam: 'BarangPinjam',
  TransaksiBarang: 'TransaksiBarang'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
