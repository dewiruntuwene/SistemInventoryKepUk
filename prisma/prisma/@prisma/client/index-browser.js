
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.2
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.2",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
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
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
