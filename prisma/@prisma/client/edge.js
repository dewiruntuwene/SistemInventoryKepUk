
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.0
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.0",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Magang KTP\\SistemInventoryKepUk\\prisma\\@prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.0",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICJAcHJpc21hL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlcnMgewogIHVzZXJfaWQgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlcm5hbWUgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNTApCiAgcGFzc3dvcmQgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGVtYWlsICAgICAgU3RyaW5nICAgIEB1bmlxdWUgQGRiLlZhckNoYXIoNTApCiAgcm9sZSAgICAgICBSb2xlICAgICAgQGRlZmF1bHQoVVNFUikKICBjcmVhdGVkX29uIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICBsYXN0X2xvZ2luIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICByZWZyZXNoX3Rva2VuIFN0cmluZz8gQGRiLlZhckNoYXIoMjU1KQogIHBlbWluamFtICAgUGVtaW5qYW1bXQogIGtlcmFuamFuZyAgS2VyYW5qYW5nW10KfQoKbW9kZWwgUGVtaW5qYW0gewogIGlkX3BlbWluamFtICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1hX21hdGFrdWxpYWggICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIHByYXNhdCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLlZhckNoYXIoNTApCiAgamFtX3ByYWt0ZWsgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMCkKICB0YW5nZ2FsX3ByYWt0ZWsgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIHRhbmdnYWxfcGVuZ2FtYmlsYW4gRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXNlcklkICAgICAgICAgICAgICBJbnQKICB1c2VycyAgICAgICAgICAgICAgIFVzZXJzICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcl9pZF0pCiAgdHlwZSAgICAgICAgICAgICAgICBUeXBlICAgICAgICAgICAgICBAZGVmYXVsdChQRU5ESU5HKQogIHRyYW5zYWtzaUJhcmFuZyAgICAgVHJhbnNha3NpQmFyYW5nW10gICAgCiAgYmFyYW5nSGFiaXNQYWthaSAgICBCYXJhbmdIYWJpc1Bha2FpW10KICBiYXJhbmdQaW5qYW0gICAgICAgIEJhcmFuZ1BpbmphbVtdCgogIEBAbWFwKCJwZW1pbmphbSIpCn0KCm1vZGVsIE1hdGFrdWxpYWggewogIGlkX21hdGFrdWxpYWggSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSAKICBoZW1hdG9sb2dpICAgIEludAogIGthcmRpbyAgICAgICAgSW50CiAgcmVzcGlyYXRvcnkgICBJbnQKICBpbnRlZ3VtZW4gICAgIEludAogIG11c2t1bG8gICAgICAgSW50CiAgcGVyc2Vwc2kgICAgICBJbnQKICBrcml0aXMgICAgICAgIEludAogIHBhbGlhdGlmICAgICAgSW50CiAgaGlzdG9yaWVzICAgICAgIEhpc3RvcnlbXSAgCn0KCm1vZGVsIEhpc3RvcnkgewogIGlkX2hpc3RvcnkgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGJhcmFuZ0lkICAgICAgIEludAogIG1hdGFrdWxpYWhJZCAgIEludAogIG5hbWFfYmFyYW5nICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBqdW1sYWggICAgICAgICAgSW50CgogIG1hdGt1bHMgICAgICBNYXRha3VsaWFoICAgICAgICBAcmVsYXRpb24oZmllbGRzOlttYXRha3VsaWFoSWRdLCByZWZlcmVuY2VzOiBbaWRfbWF0YWt1bGlhaF0pCiAgYmFyYW5ncyAgICAgICAgICBCYXJhbmcgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOltiYXJhbmdJZF0sIHJlZmVyZW5jZXM6IFtpZF9iYXJhbmddKQp9Cgptb2RlbCBCYXJhbmcgewogIGlkX2JhcmFuZyAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWFfYmFyYW5nICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICB0b3RhbF9zdG9jayAgICAgSW50CiAgamVuaXNfYmFyYW5nICAgIFN0cmluZyAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGhhcmdhX2JhcmFuZyAgICBJbnQKICBnYW1iYXJfYmFyYW5nICAgU3RyaW5nPwogIGtvZGVfYmFyYW5nICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGtlcmFuamFuZ3MgICAgICBLZXJhbmphbmdbXQogIHRyYW5zYWtzaUJhcmFuZyBUcmFuc2Frc2lCYXJhbmdbXQogIGhpc3RvcnkgICAgICAgICBIaXN0b3J5W10KICBiYXJhbmdIYWJpc1Bha2FpICAgIEJhcmFuZ0hhYmlzUGFrYWlbXQogIGJhcmFuZ1BpbmphbSAgICBCYXJhbmdQaW5qYW1bXQoKICBAQG1hcCgiYmFyYW5ncyIpCn0KCgptb2RlbCBLZXJhbmphbmcgewogIGlkX2tlcmFuamFuZyBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYmFyYW5nSWQgICAgIEludAogIGJhcmFuZ3MgICAgICBCYXJhbmcgICAgQHJlbGF0aW9uKGZpZWxkczogW2JhcmFuZ0lkXSwgcmVmZXJlbmNlczogW2lkX2JhcmFuZ10pCiAganVtbGFoX2JhcmFuZyBJbnQ/IAogIGlzQ2hlY2tlZE91dCBTdHJpbmc/ICAgQGRlZmF1bHQoIk4iKQogIGRlbGV0ZV9hdCAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXNlcklkICAgICAgIEludAogIHVzZXJzICAgICAgICBVc2VycyAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSkKCiAgQEBtYXAoImtlcmFuamFuZ3MiKQp9Cgptb2RlbCBCYXJhbmdIYWJpc1Bha2FpIHsKICBpZF9iYXJhbmdfaGFiaXNfcGFrYWkgIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHBlbWluamFtICAgICAgICAgICAgUGVtaW5qYW0/IEByZWxhdGlvbihmaWVsZHM6IFtwZW1pbmphbUlkXSwgcmVmZXJlbmNlczogW2lkX3BlbWluamFtXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcGVtaW5qYW1JZCAgICAgICAgICBJbnQ/CiAgYmFyYW5ncyAgICAgICAgICAgICBCYXJhbmcgIEByZWxhdGlvbihmaWVsZHM6IFtiYXJhbmdJZF0sIHJlZmVyZW5jZXM6IFtpZF9iYXJhbmddKQogIGJhcmFuZ0lkICAgICAgICAgICAgSW50CiAganVtbGFoX2JhcmFuZyAgICAgICBJbnQKICBuYW1hX2JhcmFuZyAgICAgICAgIFN0cmluZwogIGtvZGVfYmFyYW5nICAgICAgICAgU3RyaW5nCiAgamVuaXNfYmFyYW5nICAgICAgICBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKfQoKbW9kZWwgQmFyYW5nUGluamFtIHsKICBpZF9iYXJhbmdfcGluamFtICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwZW1pbmphbSAgICAgICAgICAgIFBlbWluamFtPyBAcmVsYXRpb24oZmllbGRzOiBbcGVtaW5qYW1JZF0sIHJlZmVyZW5jZXM6IFtpZF9wZW1pbmphbV0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHBlbWluamFtSWQgICAgICAgICAgSW50PwogIGJhcmFuZ3MgICAgICAgICAgICAgQmFyYW5nICBAcmVsYXRpb24oZmllbGRzOiBbYmFyYW5nSWRdLCByZWZlcmVuY2VzOiBbaWRfYmFyYW5nXSkKICBiYXJhbmdJZCAgICAgICAgICAgIEludAogIGp1bWxhaF9iYXJhbmcgICAgICAgSW50CiAgbmFtYV9iYXJhbmcgICAgICAgICBTdHJpbmcKICBrb2RlX2JhcmFuZyAgICAgICAgIFN0cmluZwogIGplbmlzX2JhcmFuZyAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0Cn0KCm1vZGVsIFRyYW5zYWtzaUJhcmFuZyB7CiAgaWRfdHJhbnNha3NpX2JhcmFuZyBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGhhcmdhX2JhcmFuZyAgICAgICAgSW50PwogIGp1bWxhaF9iYXJhbmcgICAgICAgSW50PwogIGJhcmFuZ0lkICAgICAgICAgICAgSW50CiAgdHlwZSAgICAgICAgICAgICAgICBUeXBlICAgICAgQGRlZmF1bHQoUEVORElORykKICBwZW1pbmphbUlkICAgICAgICAgIEludD8KICBiYXJhbmdzICAgICAgICAgICAgIEJhcmFuZyAgQHJlbGF0aW9uKGZpZWxkczogW2JhcmFuZ0lkXSwgcmVmZXJlbmNlczogW2lkX2JhcmFuZ10pCiAgcGVtaW5qYW0gICAgICAgICAgICBQZW1pbmphbT8gQHJlbGF0aW9uKGZpZWxkczogW3BlbWluamFtSWRdLCByZWZlcmVuY2VzOiBbaWRfcGVtaW5qYW1dLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB0YW5nZ2FsX2tlbHVhciAgICAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICB0YW5nZ2FsX21hc3VrICAgICAgIFN0cmluZz8KICB0YW5nZ2FsX3BpbmphbSAgICAgICBTdHJpbmc/CiAgbmFtYV9tYXRha3VsaWFoICAgICBTdHJpbmc/CiAgbmFtYV9iYXJhbmcgICAgICAgICBTdHJpbmc/CiAga29kZV9iYXJhbmcgICAgICAgICBTdHJpbmc/CiAgQEBtYXAoInRyYW5zYWtzaUJhcmFuZyIpCn0KCmVudW0gVHlwZSB7CiAgQmFyYW5nS2VsdWFyCiAgQmFyYW5nTWFzdWsKICBCYXJhbmdQaW5qYW0KICBQRU5ESU5HCiAgQ0FOQ0VMCn0KCmVudW0gUm9sZSB7CiAgQURNSU4KICBVU0VSCn0K",
  "inlineSchemaHash": "87c6983010c3dcf66437b3a32a51998fcb6413d03017dc273ed86ebbeb3e9ae3"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_on\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjam\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Peminjam\",\"relationName\":\"PeminjamToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keranjang\",\"relationName\":\"KeranjangToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Peminjam\":{\"dbName\":\"peminjam\",\"fields\":[{\"name\":\"id_peminjam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_matakuliah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prasat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jam_praktek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_praktek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pengambilan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"PeminjamToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Type\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaksiBarang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransaksiBarang\",\"relationName\":\"PeminjamToTransaksiBarang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangHabisPakai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BarangHabisPakai\",\"relationName\":\"BarangHabisPakaiToPeminjam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangPinjam\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BarangPinjam\",\"relationName\":\"BarangPinjamToPeminjam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Matakuliah\":{\"dbName\":null,\"fields\":[{\"name\":\"id_matakuliah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hematologi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kardio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respiratory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"integumen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muskulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persepsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kritis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paliatif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"histories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"relationName\":\"HistoryToMatakuliah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"History\":{\"dbName\":null,\"fields\":[{\"name\":\"id_history\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matakuliahId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matkuls\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Matakuliah\",\"relationName\":\"HistoryToMatakuliah\",\"relationFromFields\":[\"matakuliahId\"],\"relationToFields\":[\"id_matakuliah\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Barang\",\"relationName\":\"BarangToHistory\",\"relationFromFields\":[\"barangId\"],\"relationToFields\":[\"id_barang\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Barang\":{\"dbName\":\"barangs\",\"fields\":[{\"name\":\"id_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harga_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjangs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Keranjang\",\"relationName\":\"BarangToKeranjang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaksiBarang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransaksiBarang\",\"relationName\":\"BarangToTransaksiBarang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"history\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"History\",\"relationName\":\"BarangToHistory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangHabisPakai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BarangHabisPakai\",\"relationName\":\"BarangToBarangHabisPakai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangPinjam\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BarangPinjam\",\"relationName\":\"BarangToBarangPinjam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Keranjang\":{\"dbName\":\"keranjangs\",\"fields\":[{\"name\":\"id_keranjang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Barang\",\"relationName\":\"BarangToKeranjang\",\"relationFromFields\":[\"barangId\"],\"relationToFields\":[\"id_barang\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCheckedOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delete_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"KeranjangToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BarangHabisPakai\":{\"dbName\":null,\"fields\":[{\"name\":\"id_barang_habis_pakai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjam\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Peminjam\",\"relationName\":\"BarangHabisPakaiToPeminjam\",\"relationFromFields\":[\"peminjamId\"],\"relationToFields\":[\"id_peminjam\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Barang\",\"relationName\":\"BarangToBarangHabisPakai\",\"relationFromFields\":[\"barangId\"],\"relationToFields\":[\"id_barang\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BarangPinjam\":{\"dbName\":null,\"fields\":[{\"name\":\"id_barang_pinjam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjam\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Peminjam\",\"relationName\":\"BarangPinjamToPeminjam\",\"relationFromFields\":[\"peminjamId\"],\"relationToFields\":[\"id_peminjam\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Barang\",\"relationName\":\"BarangToBarangPinjam\",\"relationFromFields\":[\"barangId\"],\"relationToFields\":[\"id_barang\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TransaksiBarang\":{\"dbName\":\"transaksiBarang\",\"fields\":[{\"name\":\"id_transaksi_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harga_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Type\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barangs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Barang\",\"relationName\":\"BarangToTransaksiBarang\",\"relationFromFields\":[\"barangId\"],\"relationToFields\":[\"id_barang\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjam\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Peminjam\",\"relationName\":\"PeminjamToTransaksiBarang\",\"relationFromFields\":[\"peminjamId\"],\"relationToFields\":[\"id_peminjam\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_keluar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_masuk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_pinjam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_matakuliah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_barang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Type\":{\"values\":[{\"name\":\"BarangKeluar\",\"dbName\":null},{\"name\":\"BarangMasuk\",\"dbName\":null},{\"name\":\"BarangPinjam\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"CANCEL\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

