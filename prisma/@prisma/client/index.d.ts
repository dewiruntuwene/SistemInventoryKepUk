
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Peminjam
 * 
 */
export type Peminjam = $Result.DefaultSelection<Prisma.$PeminjamPayload>
/**
 * Model Matakuliah
 * 
 */
export type Matakuliah = $Result.DefaultSelection<Prisma.$MatakuliahPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model Keranjang
 * 
 */
export type Keranjang = $Result.DefaultSelection<Prisma.$KeranjangPayload>
/**
 * Model BarangHabisPakai
 * 
 */
export type BarangHabisPakai = $Result.DefaultSelection<Prisma.$BarangHabisPakaiPayload>
/**
 * Model BarangPinjam
 * 
 */
export type BarangPinjam = $Result.DefaultSelection<Prisma.$BarangPinjamPayload>
/**
 * Model TransaksiBarang
 * 
 */
export type TransaksiBarang = $Result.DefaultSelection<Prisma.$TransaksiBarangPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Type: {
  BarangKeluar: 'BarangKeluar',
  BarangMasuk: 'BarangMasuk',
  BarangPinjam: 'BarangPinjam',
  PENDING: 'PENDING',
  CANCEL: 'CANCEL'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.peminjam`: Exposes CRUD operations for the **Peminjam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjams
    * const peminjams = await prisma.peminjam.findMany()
    * ```
    */
  get peminjam(): Prisma.PeminjamDelegate<ExtArgs>;

  /**
   * `prisma.matakuliah`: Exposes CRUD operations for the **Matakuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matakuliahs
    * const matakuliahs = await prisma.matakuliah.findMany()
    * ```
    */
  get matakuliah(): Prisma.MatakuliahDelegate<ExtArgs>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs>;

  /**
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs>;

  /**
   * `prisma.keranjang`: Exposes CRUD operations for the **Keranjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keranjangs
    * const keranjangs = await prisma.keranjang.findMany()
    * ```
    */
  get keranjang(): Prisma.KeranjangDelegate<ExtArgs>;

  /**
   * `prisma.barangHabisPakai`: Exposes CRUD operations for the **BarangHabisPakai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarangHabisPakais
    * const barangHabisPakais = await prisma.barangHabisPakai.findMany()
    * ```
    */
  get barangHabisPakai(): Prisma.BarangHabisPakaiDelegate<ExtArgs>;

  /**
   * `prisma.barangPinjam`: Exposes CRUD operations for the **BarangPinjam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarangPinjams
    * const barangPinjams = await prisma.barangPinjam.findMany()
    * ```
    */
  get barangPinjam(): Prisma.BarangPinjamDelegate<ExtArgs>;

  /**
   * `prisma.transaksiBarang`: Exposes CRUD operations for the **TransaksiBarang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaksiBarangs
    * const transaksiBarangs = await prisma.transaksiBarang.findMany()
    * ```
    */
  get transaksiBarang(): Prisma.TransaksiBarangDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.0
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'peminjam' | 'matakuliah' | 'history' | 'barang' | 'keranjang' | 'barangHabisPakai' | 'barangPinjam' | 'transaksiBarang'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Peminjam: {
        payload: Prisma.$PeminjamPayload<ExtArgs>
        fields: Prisma.PeminjamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          findFirst: {
            args: Prisma.PeminjamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          findMany: {
            args: Prisma.PeminjamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>[]
          }
          create: {
            args: Prisma.PeminjamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          createMany: {
            args: Prisma.PeminjamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PeminjamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          update: {
            args: Prisma.PeminjamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PeminjamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PeminjamPayload>
          }
          aggregate: {
            args: Prisma.PeminjamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePeminjam>
          }
          groupBy: {
            args: Prisma.PeminjamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PeminjamGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamCountArgs<ExtArgs>,
            result: $Utils.Optional<PeminjamCountAggregateOutputType> | number
          }
        }
      }
      Matakuliah: {
        payload: Prisma.$MatakuliahPayload<ExtArgs>
        fields: Prisma.MatakuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatakuliahFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatakuliahFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          findFirst: {
            args: Prisma.MatakuliahFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatakuliahFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          findMany: {
            args: Prisma.MatakuliahFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>[]
          }
          create: {
            args: Prisma.MatakuliahCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          createMany: {
            args: Prisma.MatakuliahCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatakuliahDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          update: {
            args: Prisma.MatakuliahUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          deleteMany: {
            args: Prisma.MatakuliahDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatakuliahUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatakuliahUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          aggregate: {
            args: Prisma.MatakuliahAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatakuliah>
          }
          groupBy: {
            args: Prisma.MatakuliahGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatakuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatakuliahCountArgs<ExtArgs>,
            result: $Utils.Optional<MatakuliahCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>,
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      Keranjang: {
        payload: Prisma.$KeranjangPayload<ExtArgs>
        fields: Prisma.KeranjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeranjangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeranjangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          findFirst: {
            args: Prisma.KeranjangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeranjangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          findMany: {
            args: Prisma.KeranjangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>[]
          }
          create: {
            args: Prisma.KeranjangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          createMany: {
            args: Prisma.KeranjangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KeranjangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          update: {
            args: Prisma.KeranjangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          deleteMany: {
            args: Prisma.KeranjangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KeranjangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KeranjangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KeranjangPayload>
          }
          aggregate: {
            args: Prisma.KeranjangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKeranjang>
          }
          groupBy: {
            args: Prisma.KeranjangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KeranjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeranjangCountArgs<ExtArgs>,
            result: $Utils.Optional<KeranjangCountAggregateOutputType> | number
          }
        }
      }
      BarangHabisPakai: {
        payload: Prisma.$BarangHabisPakaiPayload<ExtArgs>
        fields: Prisma.BarangHabisPakaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangHabisPakaiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          findFirst: {
            args: Prisma.BarangHabisPakaiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          findMany: {
            args: Prisma.BarangHabisPakaiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>[]
          }
          create: {
            args: Prisma.BarangHabisPakaiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          createMany: {
            args: Prisma.BarangHabisPakaiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BarangHabisPakaiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          update: {
            args: Prisma.BarangHabisPakaiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          deleteMany: {
            args: Prisma.BarangHabisPakaiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BarangHabisPakaiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BarangHabisPakaiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangHabisPakaiPayload>
          }
          aggregate: {
            args: Prisma.BarangHabisPakaiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBarangHabisPakai>
          }
          groupBy: {
            args: Prisma.BarangHabisPakaiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BarangHabisPakaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangHabisPakaiCountArgs<ExtArgs>,
            result: $Utils.Optional<BarangHabisPakaiCountAggregateOutputType> | number
          }
        }
      }
      BarangPinjam: {
        payload: Prisma.$BarangPinjamPayload<ExtArgs>
        fields: Prisma.BarangPinjamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangPinjamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangPinjamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          findFirst: {
            args: Prisma.BarangPinjamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangPinjamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          findMany: {
            args: Prisma.BarangPinjamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>[]
          }
          create: {
            args: Prisma.BarangPinjamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          createMany: {
            args: Prisma.BarangPinjamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BarangPinjamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          update: {
            args: Prisma.BarangPinjamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          deleteMany: {
            args: Prisma.BarangPinjamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BarangPinjamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BarangPinjamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BarangPinjamPayload>
          }
          aggregate: {
            args: Prisma.BarangPinjamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBarangPinjam>
          }
          groupBy: {
            args: Prisma.BarangPinjamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BarangPinjamGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangPinjamCountArgs<ExtArgs>,
            result: $Utils.Optional<BarangPinjamCountAggregateOutputType> | number
          }
        }
      }
      TransaksiBarang: {
        payload: Prisma.$TransaksiBarangPayload<ExtArgs>
        fields: Prisma.TransaksiBarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiBarangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiBarangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          findFirst: {
            args: Prisma.TransaksiBarangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiBarangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          findMany: {
            args: Prisma.TransaksiBarangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>[]
          }
          create: {
            args: Prisma.TransaksiBarangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          createMany: {
            args: Prisma.TransaksiBarangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransaksiBarangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          update: {
            args: Prisma.TransaksiBarangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiBarangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiBarangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransaksiBarangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiBarangPayload>
          }
          aggregate: {
            args: Prisma.TransaksiBarangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaksiBarang>
          }
          groupBy: {
            args: Prisma.TransaksiBarangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransaksiBarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiBarangCountArgs<ExtArgs>,
            result: $Utils.Optional<TransaksiBarangCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    peminjam: number
    keranjang: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjam?: boolean | UsersCountOutputTypeCountPeminjamArgs
    keranjang?: boolean | UsersCountOutputTypeCountKeranjangArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPeminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeranjangWhereInput
  }



  /**
   * Count Type PeminjamCountOutputType
   */

  export type PeminjamCountOutputType = {
    transaksiBarang: number
    barangHabisPakai: number
    barangPinjam: number
  }

  export type PeminjamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksiBarang?: boolean | PeminjamCountOutputTypeCountTransaksiBarangArgs
    barangHabisPakai?: boolean | PeminjamCountOutputTypeCountBarangHabisPakaiArgs
    barangPinjam?: boolean | PeminjamCountOutputTypeCountBarangPinjamArgs
  }

  // Custom InputTypes

  /**
   * PeminjamCountOutputType without action
   */
  export type PeminjamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeminjamCountOutputType
     */
    select?: PeminjamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PeminjamCountOutputType without action
   */
  export type PeminjamCountOutputTypeCountTransaksiBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiBarangWhereInput
  }


  /**
   * PeminjamCountOutputType without action
   */
  export type PeminjamCountOutputTypeCountBarangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangHabisPakaiWhereInput
  }


  /**
   * PeminjamCountOutputType without action
   */
  export type PeminjamCountOutputTypeCountBarangPinjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangPinjamWhereInput
  }



  /**
   * Count Type MatakuliahCountOutputType
   */

  export type MatakuliahCountOutputType = {
    histories: number
  }

  export type MatakuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | MatakuliahCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes

  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatakuliahCountOutputType
     */
    select?: MatakuliahCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }



  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    keranjangs: number
    transaksiBarang: number
    history: number
    barangHabisPakai: number
    barangPinjam: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjangs?: boolean | BarangCountOutputTypeCountKeranjangsArgs
    transaksiBarang?: boolean | BarangCountOutputTypeCountTransaksiBarangArgs
    history?: boolean | BarangCountOutputTypeCountHistoryArgs
    barangHabisPakai?: boolean | BarangCountOutputTypeCountBarangHabisPakaiArgs
    barangPinjam?: boolean | BarangCountOutputTypeCountBarangPinjamArgs
  }

  // Custom InputTypes

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountKeranjangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeranjangWhereInput
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountTransaksiBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiBarangWhereInput
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountBarangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangHabisPakaiWhereInput
  }


  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountBarangPinjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangPinjamWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    created_on: Date | null
    last_login: Date | null
    refresh_token: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    created_on: Date | null
    last_login: Date | null
    refresh_token: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    password: number
    email: number
    role: number
    created_on: number
    last_login: number
    refresh_token: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    created_on?: true
    last_login?: true
    refresh_token?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    created_on?: true
    last_login?: true
    refresh_token?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    created_on?: true
    last_login?: true
    refresh_token?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    username: string
    password: string | null
    email: string
    role: $Enums.Role
    created_on: Date
    last_login: Date | null
    refresh_token: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    created_on?: boolean
    last_login?: boolean
    refresh_token?: boolean
    peminjam?: boolean | Users$peminjamArgs<ExtArgs>
    keranjang?: boolean | Users$keranjangArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    created_on?: boolean
    last_login?: boolean
    refresh_token?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjam?: boolean | Users$peminjamArgs<ExtArgs>
    keranjang?: boolean | Users$keranjangArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      peminjam: Prisma.$PeminjamPayload<ExtArgs>[]
      keranjang: Prisma.$KeranjangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      password: string | null
      email: string
      role: $Enums.Role
      created_on: Date
      last_login: Date | null
      refresh_token: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    peminjam<T extends Users$peminjamArgs<ExtArgs> = {}>(args?: Subset<T, Users$peminjamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findMany'> | Null>;

    keranjang<T extends Users$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, Users$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly created_on: FieldRef<"Users", 'DateTime'>
    readonly last_login: FieldRef<"Users", 'DateTime'>
    readonly refresh_token: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.peminjam
   */
  export type Users$peminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    where?: PeminjamWhereInput
    orderBy?: PeminjamOrderByWithRelationInput | PeminjamOrderByWithRelationInput[]
    cursor?: PeminjamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamScalarFieldEnum | PeminjamScalarFieldEnum[]
  }


  /**
   * Users.keranjang
   */
  export type Users$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    where?: KeranjangWhereInput
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    cursor?: KeranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Peminjam
   */

  export type AggregatePeminjam = {
    _count: PeminjamCountAggregateOutputType | null
    _avg: PeminjamAvgAggregateOutputType | null
    _sum: PeminjamSumAggregateOutputType | null
    _min: PeminjamMinAggregateOutputType | null
    _max: PeminjamMaxAggregateOutputType | null
  }

  export type PeminjamAvgAggregateOutputType = {
    id_peminjam: number | null
    userId: number | null
  }

  export type PeminjamSumAggregateOutputType = {
    id_peminjam: number | null
    userId: number | null
  }

  export type PeminjamMinAggregateOutputType = {
    id_peminjam: number | null
    nama_matakuliah: string | null
    prasat: string | null
    jam_praktek: string | null
    tanggal_praktek: string | null
    tanggal_pengambilan: Date | null
    userId: number | null
    type: $Enums.Type | null
  }

  export type PeminjamMaxAggregateOutputType = {
    id_peminjam: number | null
    nama_matakuliah: string | null
    prasat: string | null
    jam_praktek: string | null
    tanggal_praktek: string | null
    tanggal_pengambilan: Date | null
    userId: number | null
    type: $Enums.Type | null
  }

  export type PeminjamCountAggregateOutputType = {
    id_peminjam: number
    nama_matakuliah: number
    prasat: number
    jam_praktek: number
    tanggal_praktek: number
    tanggal_pengambilan: number
    userId: number
    type: number
    _all: number
  }


  export type PeminjamAvgAggregateInputType = {
    id_peminjam?: true
    userId?: true
  }

  export type PeminjamSumAggregateInputType = {
    id_peminjam?: true
    userId?: true
  }

  export type PeminjamMinAggregateInputType = {
    id_peminjam?: true
    nama_matakuliah?: true
    prasat?: true
    jam_praktek?: true
    tanggal_praktek?: true
    tanggal_pengambilan?: true
    userId?: true
    type?: true
  }

  export type PeminjamMaxAggregateInputType = {
    id_peminjam?: true
    nama_matakuliah?: true
    prasat?: true
    jam_praktek?: true
    tanggal_praktek?: true
    tanggal_pengambilan?: true
    userId?: true
    type?: true
  }

  export type PeminjamCountAggregateInputType = {
    id_peminjam?: true
    nama_matakuliah?: true
    prasat?: true
    jam_praktek?: true
    tanggal_praktek?: true
    tanggal_pengambilan?: true
    userId?: true
    type?: true
    _all?: true
  }

  export type PeminjamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjam to aggregate.
     */
    where?: PeminjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjams to fetch.
     */
    orderBy?: PeminjamOrderByWithRelationInput | PeminjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peminjams
    **/
    _count?: true | PeminjamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamMaxAggregateInputType
  }

  export type GetPeminjamAggregateType<T extends PeminjamAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjam[P]>
      : GetScalarType<T[P], AggregatePeminjam[P]>
  }




  export type PeminjamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamWhereInput
    orderBy?: PeminjamOrderByWithAggregationInput | PeminjamOrderByWithAggregationInput[]
    by: PeminjamScalarFieldEnum[] | PeminjamScalarFieldEnum
    having?: PeminjamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamCountAggregateInputType | true
    _avg?: PeminjamAvgAggregateInputType
    _sum?: PeminjamSumAggregateInputType
    _min?: PeminjamMinAggregateInputType
    _max?: PeminjamMaxAggregateInputType
  }

  export type PeminjamGroupByOutputType = {
    id_peminjam: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek: string | null
    tanggal_pengambilan: Date
    userId: number
    type: $Enums.Type
    _count: PeminjamCountAggregateOutputType | null
    _avg: PeminjamAvgAggregateOutputType | null
    _sum: PeminjamSumAggregateOutputType | null
    _min: PeminjamMinAggregateOutputType | null
    _max: PeminjamMaxAggregateOutputType | null
  }

  type GetPeminjamGroupByPayload<T extends PeminjamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peminjam?: boolean
    nama_matakuliah?: boolean
    prasat?: boolean
    jam_praktek?: boolean
    tanggal_praktek?: boolean
    tanggal_pengambilan?: boolean
    userId?: boolean
    type?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    transaksiBarang?: boolean | Peminjam$transaksiBarangArgs<ExtArgs>
    barangHabisPakai?: boolean | Peminjam$barangHabisPakaiArgs<ExtArgs>
    barangPinjam?: boolean | Peminjam$barangPinjamArgs<ExtArgs>
    _count?: boolean | PeminjamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjam"]>

  export type PeminjamSelectScalar = {
    id_peminjam?: boolean
    nama_matakuliah?: boolean
    prasat?: boolean
    jam_praktek?: boolean
    tanggal_praktek?: boolean
    tanggal_pengambilan?: boolean
    userId?: boolean
    type?: boolean
  }

  export type PeminjamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    transaksiBarang?: boolean | Peminjam$transaksiBarangArgs<ExtArgs>
    barangHabisPakai?: boolean | Peminjam$barangHabisPakaiArgs<ExtArgs>
    barangPinjam?: boolean | Peminjam$barangPinjamArgs<ExtArgs>
    _count?: boolean | PeminjamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PeminjamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peminjam"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      transaksiBarang: Prisma.$TransaksiBarangPayload<ExtArgs>[]
      barangHabisPakai: Prisma.$BarangHabisPakaiPayload<ExtArgs>[]
      barangPinjam: Prisma.$BarangPinjamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_peminjam: number
      nama_matakuliah: string
      prasat: string
      jam_praktek: string
      tanggal_praktek: string | null
      tanggal_pengambilan: Date
      userId: number
      type: $Enums.Type
    }, ExtArgs["result"]["peminjam"]>
    composites: {}
  }


  type PeminjamGetPayload<S extends boolean | null | undefined | PeminjamDefaultArgs> = $Result.GetResult<Prisma.$PeminjamPayload, S>

  type PeminjamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeminjamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeminjamCountAggregateInputType | true
    }

  export interface PeminjamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peminjam'], meta: { name: 'Peminjam' } }
    /**
     * Find zero or one Peminjam that matches the filter.
     * @param {PeminjamFindUniqueArgs} args - Arguments to find a Peminjam
     * @example
     * // Get one Peminjam
     * const peminjam = await prisma.peminjam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PeminjamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamFindUniqueArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Peminjam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PeminjamFindUniqueOrThrowArgs} args - Arguments to find a Peminjam
     * @example
     * // Get one Peminjam
     * const peminjam = await prisma.peminjam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PeminjamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Peminjam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamFindFirstArgs} args - Arguments to find a Peminjam
     * @example
     * // Get one Peminjam
     * const peminjam = await prisma.peminjam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PeminjamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamFindFirstArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Peminjam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamFindFirstOrThrowArgs} args - Arguments to find a Peminjam
     * @example
     * // Get one Peminjam
     * const peminjam = await prisma.peminjam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PeminjamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Peminjams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjams
     * const peminjams = await prisma.peminjam.findMany()
     * 
     * // Get first 10 Peminjams
     * const peminjams = await prisma.peminjam.findMany({ take: 10 })
     * 
     * // Only select the `id_peminjam`
     * const peminjamWithId_peminjamOnly = await prisma.peminjam.findMany({ select: { id_peminjam: true } })
     * 
    **/
    findMany<T extends PeminjamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Peminjam.
     * @param {PeminjamCreateArgs} args - Arguments to create a Peminjam.
     * @example
     * // Create one Peminjam
     * const Peminjam = await prisma.peminjam.create({
     *   data: {
     *     // ... data to create a Peminjam
     *   }
     * })
     * 
    **/
    create<T extends PeminjamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamCreateArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Peminjams.
     *     @param {PeminjamCreateManyArgs} args - Arguments to create many Peminjams.
     *     @example
     *     // Create many Peminjams
     *     const peminjam = await prisma.peminjam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PeminjamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peminjam.
     * @param {PeminjamDeleteArgs} args - Arguments to delete one Peminjam.
     * @example
     * // Delete one Peminjam
     * const Peminjam = await prisma.peminjam.delete({
     *   where: {
     *     // ... filter to delete one Peminjam
     *   }
     * })
     * 
    **/
    delete<T extends PeminjamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamDeleteArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Peminjam.
     * @param {PeminjamUpdateArgs} args - Arguments to update one Peminjam.
     * @example
     * // Update one Peminjam
     * const peminjam = await prisma.peminjam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PeminjamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamUpdateArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Peminjams.
     * @param {PeminjamDeleteManyArgs} args - Arguments to filter Peminjams to delete.
     * @example
     * // Delete a few Peminjams
     * const { count } = await prisma.peminjam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PeminjamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PeminjamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjams
     * const peminjam = await prisma.peminjam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PeminjamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peminjam.
     * @param {PeminjamUpsertArgs} args - Arguments to update or create a Peminjam.
     * @example
     * // Update or create a Peminjam
     * const peminjam = await prisma.peminjam.upsert({
     *   create: {
     *     // ... data to create a Peminjam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjam we want to update
     *   }
     * })
    **/
    upsert<T extends PeminjamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PeminjamUpsertArgs<ExtArgs>>
    ): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Peminjams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamCountArgs} args - Arguments to filter Peminjams to count.
     * @example
     * // Count the number of Peminjams
     * const count = await prisma.peminjam.count({
     *   where: {
     *     // ... the filter for the Peminjams we want to count
     *   }
     * })
    **/
    count<T extends PeminjamCountArgs>(
      args?: Subset<T, PeminjamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeminjamAggregateArgs>(args: Subset<T, PeminjamAggregateArgs>): Prisma.PrismaPromise<GetPeminjamAggregateType<T>>

    /**
     * Group by Peminjam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeminjamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeminjamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peminjam model
   */
  readonly fields: PeminjamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peminjam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaksiBarang<T extends Peminjam$transaksiBarangArgs<ExtArgs> = {}>(args?: Subset<T, Peminjam$transaksiBarangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findMany'> | Null>;

    barangHabisPakai<T extends Peminjam$barangHabisPakaiArgs<ExtArgs> = {}>(args?: Subset<T, Peminjam$barangHabisPakaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findMany'> | Null>;

    barangPinjam<T extends Peminjam$barangPinjamArgs<ExtArgs> = {}>(args?: Subset<T, Peminjam$barangPinjamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Peminjam model
   */ 
  interface PeminjamFieldRefs {
    readonly id_peminjam: FieldRef<"Peminjam", 'Int'>
    readonly nama_matakuliah: FieldRef<"Peminjam", 'String'>
    readonly prasat: FieldRef<"Peminjam", 'String'>
    readonly jam_praktek: FieldRef<"Peminjam", 'String'>
    readonly tanggal_praktek: FieldRef<"Peminjam", 'String'>
    readonly tanggal_pengambilan: FieldRef<"Peminjam", 'DateTime'>
    readonly userId: FieldRef<"Peminjam", 'Int'>
    readonly type: FieldRef<"Peminjam", 'Type'>
  }
    

  // Custom InputTypes

  /**
   * Peminjam findUnique
   */
  export type PeminjamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter, which Peminjam to fetch.
     */
    where: PeminjamWhereUniqueInput
  }


  /**
   * Peminjam findUniqueOrThrow
   */
  export type PeminjamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter, which Peminjam to fetch.
     */
    where: PeminjamWhereUniqueInput
  }


  /**
   * Peminjam findFirst
   */
  export type PeminjamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter, which Peminjam to fetch.
     */
    where?: PeminjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjams to fetch.
     */
    orderBy?: PeminjamOrderByWithRelationInput | PeminjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjams.
     */
    cursor?: PeminjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjams.
     */
    distinct?: PeminjamScalarFieldEnum | PeminjamScalarFieldEnum[]
  }


  /**
   * Peminjam findFirstOrThrow
   */
  export type PeminjamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter, which Peminjam to fetch.
     */
    where?: PeminjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjams to fetch.
     */
    orderBy?: PeminjamOrderByWithRelationInput | PeminjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjams.
     */
    cursor?: PeminjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjams.
     */
    distinct?: PeminjamScalarFieldEnum | PeminjamScalarFieldEnum[]
  }


  /**
   * Peminjam findMany
   */
  export type PeminjamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter, which Peminjams to fetch.
     */
    where?: PeminjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjams to fetch.
     */
    orderBy?: PeminjamOrderByWithRelationInput | PeminjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peminjams.
     */
    cursor?: PeminjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjams.
     */
    skip?: number
    distinct?: PeminjamScalarFieldEnum | PeminjamScalarFieldEnum[]
  }


  /**
   * Peminjam create
   */
  export type PeminjamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * The data needed to create a Peminjam.
     */
    data: XOR<PeminjamCreateInput, PeminjamUncheckedCreateInput>
  }


  /**
   * Peminjam createMany
   */
  export type PeminjamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peminjams.
     */
    data: PeminjamCreateManyInput | PeminjamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Peminjam update
   */
  export type PeminjamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * The data needed to update a Peminjam.
     */
    data: XOR<PeminjamUpdateInput, PeminjamUncheckedUpdateInput>
    /**
     * Choose, which Peminjam to update.
     */
    where: PeminjamWhereUniqueInput
  }


  /**
   * Peminjam updateMany
   */
  export type PeminjamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peminjams.
     */
    data: XOR<PeminjamUpdateManyMutationInput, PeminjamUncheckedUpdateManyInput>
    /**
     * Filter which Peminjams to update
     */
    where?: PeminjamWhereInput
  }


  /**
   * Peminjam upsert
   */
  export type PeminjamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * The filter to search for the Peminjam to update in case it exists.
     */
    where: PeminjamWhereUniqueInput
    /**
     * In case the Peminjam found by the `where` argument doesn't exist, create a new Peminjam with this data.
     */
    create: XOR<PeminjamCreateInput, PeminjamUncheckedCreateInput>
    /**
     * In case the Peminjam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamUpdateInput, PeminjamUncheckedUpdateInput>
  }


  /**
   * Peminjam delete
   */
  export type PeminjamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    /**
     * Filter which Peminjam to delete.
     */
    where: PeminjamWhereUniqueInput
  }


  /**
   * Peminjam deleteMany
   */
  export type PeminjamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjams to delete
     */
    where?: PeminjamWhereInput
  }


  /**
   * Peminjam.transaksiBarang
   */
  export type Peminjam$transaksiBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    where?: TransaksiBarangWhereInput
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    cursor?: TransaksiBarangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiBarangScalarFieldEnum | TransaksiBarangScalarFieldEnum[]
  }


  /**
   * Peminjam.barangHabisPakai
   */
  export type Peminjam$barangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    where?: BarangHabisPakaiWhereInput
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    cursor?: BarangHabisPakaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }


  /**
   * Peminjam.barangPinjam
   */
  export type Peminjam$barangPinjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    where?: BarangPinjamWhereInput
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    cursor?: BarangPinjamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangPinjamScalarFieldEnum | BarangPinjamScalarFieldEnum[]
  }


  /**
   * Peminjam without action
   */
  export type PeminjamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
  }



  /**
   * Model Matakuliah
   */

  export type AggregateMatakuliah = {
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  export type MatakuliahAvgAggregateOutputType = {
    id_matakuliah: number | null
    hematologi: number | null
    kardio: number | null
    respiratory: number | null
    integumen: number | null
    muskulo: number | null
    persepsi: number | null
    kritis: number | null
    paliatif: number | null
  }

  export type MatakuliahSumAggregateOutputType = {
    id_matakuliah: number | null
    hematologi: number | null
    kardio: number | null
    respiratory: number | null
    integumen: number | null
    muskulo: number | null
    persepsi: number | null
    kritis: number | null
    paliatif: number | null
  }

  export type MatakuliahMinAggregateOutputType = {
    id_matakuliah: number | null
    hematologi: number | null
    kardio: number | null
    respiratory: number | null
    integumen: number | null
    muskulo: number | null
    persepsi: number | null
    kritis: number | null
    paliatif: number | null
  }

  export type MatakuliahMaxAggregateOutputType = {
    id_matakuliah: number | null
    hematologi: number | null
    kardio: number | null
    respiratory: number | null
    integumen: number | null
    muskulo: number | null
    persepsi: number | null
    kritis: number | null
    paliatif: number | null
  }

  export type MatakuliahCountAggregateOutputType = {
    id_matakuliah: number
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
    _all: number
  }


  export type MatakuliahAvgAggregateInputType = {
    id_matakuliah?: true
    hematologi?: true
    kardio?: true
    respiratory?: true
    integumen?: true
    muskulo?: true
    persepsi?: true
    kritis?: true
    paliatif?: true
  }

  export type MatakuliahSumAggregateInputType = {
    id_matakuliah?: true
    hematologi?: true
    kardio?: true
    respiratory?: true
    integumen?: true
    muskulo?: true
    persepsi?: true
    kritis?: true
    paliatif?: true
  }

  export type MatakuliahMinAggregateInputType = {
    id_matakuliah?: true
    hematologi?: true
    kardio?: true
    respiratory?: true
    integumen?: true
    muskulo?: true
    persepsi?: true
    kritis?: true
    paliatif?: true
  }

  export type MatakuliahMaxAggregateInputType = {
    id_matakuliah?: true
    hematologi?: true
    kardio?: true
    respiratory?: true
    integumen?: true
    muskulo?: true
    persepsi?: true
    kritis?: true
    paliatif?: true
  }

  export type MatakuliahCountAggregateInputType = {
    id_matakuliah?: true
    hematologi?: true
    kardio?: true
    respiratory?: true
    integumen?: true
    muskulo?: true
    persepsi?: true
    kritis?: true
    paliatif?: true
    _all?: true
  }

  export type MatakuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matakuliah to aggregate.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matakuliahs
    **/
    _count?: true | MatakuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatakuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatakuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatakuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatakuliahMaxAggregateInputType
  }

  export type GetMatakuliahAggregateType<T extends MatakuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMatakuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatakuliah[P]>
      : GetScalarType<T[P], AggregateMatakuliah[P]>
  }




  export type MatakuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatakuliahWhereInput
    orderBy?: MatakuliahOrderByWithAggregationInput | MatakuliahOrderByWithAggregationInput[]
    by: MatakuliahScalarFieldEnum[] | MatakuliahScalarFieldEnum
    having?: MatakuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatakuliahCountAggregateInputType | true
    _avg?: MatakuliahAvgAggregateInputType
    _sum?: MatakuliahSumAggregateInputType
    _min?: MatakuliahMinAggregateInputType
    _max?: MatakuliahMaxAggregateInputType
  }

  export type MatakuliahGroupByOutputType = {
    id_matakuliah: number
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  type GetMatakuliahGroupByPayload<T extends MatakuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatakuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatakuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
            : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
        }
      >
    >


  export type MatakuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_matakuliah?: boolean
    hematologi?: boolean
    kardio?: boolean
    respiratory?: boolean
    integumen?: boolean
    muskulo?: boolean
    persepsi?: boolean
    kritis?: boolean
    paliatif?: boolean
    histories?: boolean | Matakuliah$historiesArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matakuliah"]>

  export type MatakuliahSelectScalar = {
    id_matakuliah?: boolean
    hematologi?: boolean
    kardio?: boolean
    respiratory?: boolean
    integumen?: boolean
    muskulo?: boolean
    persepsi?: boolean
    kritis?: boolean
    paliatif?: boolean
  }

  export type MatakuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | Matakuliah$historiesArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MatakuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matakuliah"
    objects: {
      histories: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_matakuliah: number
      hematologi: number
      kardio: number
      respiratory: number
      integumen: number
      muskulo: number
      persepsi: number
      kritis: number
      paliatif: number
    }, ExtArgs["result"]["matakuliah"]>
    composites: {}
  }


  type MatakuliahGetPayload<S extends boolean | null | undefined | MatakuliahDefaultArgs> = $Result.GetResult<Prisma.$MatakuliahPayload, S>

  type MatakuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatakuliahFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatakuliahCountAggregateInputType | true
    }

  export interface MatakuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matakuliah'], meta: { name: 'Matakuliah' } }
    /**
     * Find zero or one Matakuliah that matches the filter.
     * @param {MatakuliahFindUniqueArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatakuliahFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahFindUniqueArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Matakuliah that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatakuliahFindUniqueOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatakuliahFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Matakuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindFirstArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatakuliahFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahFindFirstArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Matakuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindFirstOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatakuliahFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Matakuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany()
     * 
     * // Get first 10 Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany({ take: 10 })
     * 
     * // Only select the `id_matakuliah`
     * const matakuliahWithId_matakuliahOnly = await prisma.matakuliah.findMany({ select: { id_matakuliah: true } })
     * 
    **/
    findMany<T extends MatakuliahFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Matakuliah.
     * @param {MatakuliahCreateArgs} args - Arguments to create a Matakuliah.
     * @example
     * // Create one Matakuliah
     * const Matakuliah = await prisma.matakuliah.create({
     *   data: {
     *     // ... data to create a Matakuliah
     *   }
     * })
     * 
    **/
    create<T extends MatakuliahCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahCreateArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Matakuliahs.
     *     @param {MatakuliahCreateManyArgs} args - Arguments to create many Matakuliahs.
     *     @example
     *     // Create many Matakuliahs
     *     const matakuliah = await prisma.matakuliah.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatakuliahCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matakuliah.
     * @param {MatakuliahDeleteArgs} args - Arguments to delete one Matakuliah.
     * @example
     * // Delete one Matakuliah
     * const Matakuliah = await prisma.matakuliah.delete({
     *   where: {
     *     // ... filter to delete one Matakuliah
     *   }
     * })
     * 
    **/
    delete<T extends MatakuliahDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahDeleteArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Matakuliah.
     * @param {MatakuliahUpdateArgs} args - Arguments to update one Matakuliah.
     * @example
     * // Update one Matakuliah
     * const matakuliah = await prisma.matakuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatakuliahUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahUpdateArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Matakuliahs.
     * @param {MatakuliahDeleteManyArgs} args - Arguments to filter Matakuliahs to delete.
     * @example
     * // Delete a few Matakuliahs
     * const { count } = await prisma.matakuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatakuliahDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatakuliahDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matakuliahs
     * const matakuliah = await prisma.matakuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatakuliahUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matakuliah.
     * @param {MatakuliahUpsertArgs} args - Arguments to update or create a Matakuliah.
     * @example
     * // Update or create a Matakuliah
     * const matakuliah = await prisma.matakuliah.upsert({
     *   create: {
     *     // ... data to create a Matakuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matakuliah we want to update
     *   }
     * })
    **/
    upsert<T extends MatakuliahUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatakuliahUpsertArgs<ExtArgs>>
    ): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahCountArgs} args - Arguments to filter Matakuliahs to count.
     * @example
     * // Count the number of Matakuliahs
     * const count = await prisma.matakuliah.count({
     *   where: {
     *     // ... the filter for the Matakuliahs we want to count
     *   }
     * })
    **/
    count<T extends MatakuliahCountArgs>(
      args?: Subset<T, MatakuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatakuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatakuliahAggregateArgs>(args: Subset<T, MatakuliahAggregateArgs>): Prisma.PrismaPromise<GetMatakuliahAggregateType<T>>

    /**
     * Group by Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatakuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatakuliahGroupByArgs['orderBy'] }
        : { orderBy?: MatakuliahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatakuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatakuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matakuliah model
   */
  readonly fields: MatakuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matakuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatakuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    histories<T extends Matakuliah$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Matakuliah$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Matakuliah model
   */ 
  interface MatakuliahFieldRefs {
    readonly id_matakuliah: FieldRef<"Matakuliah", 'Int'>
    readonly hematologi: FieldRef<"Matakuliah", 'Int'>
    readonly kardio: FieldRef<"Matakuliah", 'Int'>
    readonly respiratory: FieldRef<"Matakuliah", 'Int'>
    readonly integumen: FieldRef<"Matakuliah", 'Int'>
    readonly muskulo: FieldRef<"Matakuliah", 'Int'>
    readonly persepsi: FieldRef<"Matakuliah", 'Int'>
    readonly kritis: FieldRef<"Matakuliah", 'Int'>
    readonly paliatif: FieldRef<"Matakuliah", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Matakuliah findUnique
   */
  export type MatakuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where: MatakuliahWhereUniqueInput
  }


  /**
   * Matakuliah findUniqueOrThrow
   */
  export type MatakuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where: MatakuliahWhereUniqueInput
  }


  /**
   * Matakuliah findFirst
   */
  export type MatakuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }


  /**
   * Matakuliah findFirstOrThrow
   */
  export type MatakuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }


  /**
   * Matakuliah findMany
   */
  export type MatakuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliahs to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }


  /**
   * Matakuliah create
   */
  export type MatakuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a Matakuliah.
     */
    data: XOR<MatakuliahCreateInput, MatakuliahUncheckedCreateInput>
  }


  /**
   * Matakuliah createMany
   */
  export type MatakuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matakuliahs.
     */
    data: MatakuliahCreateManyInput | MatakuliahCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Matakuliah update
   */
  export type MatakuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a Matakuliah.
     */
    data: XOR<MatakuliahUpdateInput, MatakuliahUncheckedUpdateInput>
    /**
     * Choose, which Matakuliah to update.
     */
    where: MatakuliahWhereUniqueInput
  }


  /**
   * Matakuliah updateMany
   */
  export type MatakuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matakuliahs.
     */
    data: XOR<MatakuliahUpdateManyMutationInput, MatakuliahUncheckedUpdateManyInput>
    /**
     * Filter which Matakuliahs to update
     */
    where?: MatakuliahWhereInput
  }


  /**
   * Matakuliah upsert
   */
  export type MatakuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the Matakuliah to update in case it exists.
     */
    where: MatakuliahWhereUniqueInput
    /**
     * In case the Matakuliah found by the `where` argument doesn't exist, create a new Matakuliah with this data.
     */
    create: XOR<MatakuliahCreateInput, MatakuliahUncheckedCreateInput>
    /**
     * In case the Matakuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatakuliahUpdateInput, MatakuliahUncheckedUpdateInput>
  }


  /**
   * Matakuliah delete
   */
  export type MatakuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter which Matakuliah to delete.
     */
    where: MatakuliahWhereUniqueInput
  }


  /**
   * Matakuliah deleteMany
   */
  export type MatakuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matakuliahs to delete
     */
    where?: MatakuliahWhereInput
  }


  /**
   * Matakuliah.histories
   */
  export type Matakuliah$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * Matakuliah without action
   */
  export type MatakuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatakuliahInclude<ExtArgs> | null
  }



  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    barangId: number | null
    matakuliahId: number | null
    jumlah: number | null
  }

  export type HistorySumAggregateOutputType = {
    barangId: number | null
    matakuliahId: number | null
    jumlah: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id_history: string | null
    barangId: number | null
    matakuliahId: number | null
    nama_barang: string | null
    jumlah: number | null
  }

  export type HistoryMaxAggregateOutputType = {
    id_history: string | null
    barangId: number | null
    matakuliahId: number | null
    nama_barang: string | null
    jumlah: number | null
  }

  export type HistoryCountAggregateOutputType = {
    id_history: number
    barangId: number
    matakuliahId: number
    nama_barang: number
    jumlah: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    barangId?: true
    matakuliahId?: true
    jumlah?: true
  }

  export type HistorySumAggregateInputType = {
    barangId?: true
    matakuliahId?: true
    jumlah?: true
  }

  export type HistoryMinAggregateInputType = {
    id_history?: true
    barangId?: true
    matakuliahId?: true
    nama_barang?: true
    jumlah?: true
  }

  export type HistoryMaxAggregateInputType = {
    id_history?: true
    barangId?: true
    matakuliahId?: true
    nama_barang?: true
    jumlah?: true
  }

  export type HistoryCountAggregateInputType = {
    id_history?: true
    barangId?: true
    matakuliahId?: true
    nama_barang?: true
    jumlah?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id_history: string
    barangId: number
    matakuliahId: number
    nama_barang: string
    jumlah: number
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_history?: boolean
    barangId?: boolean
    matakuliahId?: boolean
    nama_barang?: boolean
    jumlah?: boolean
    matkuls?: boolean | MatakuliahDefaultArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id_history?: boolean
    barangId?: boolean
    matakuliahId?: boolean
    nama_barang?: boolean
    jumlah?: boolean
  }

  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matkuls?: boolean | MatakuliahDefaultArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }


  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      matkuls: Prisma.$MatakuliahPayload<ExtArgs>
      barangs: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_history: string
      barangId: number
      matakuliahId: number
      nama_barang: string
      jumlah: number
    }, ExtArgs["result"]["history"]>
    composites: {}
  }


  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one History that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id_history`
     * const historyWithId_historyOnly = await prisma.history.findMany({ select: { id_history: true } })
     * 
    **/
    findMany<T extends HistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
    **/
    create<T extends HistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Histories.
     *     @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     *     @example
     *     // Create many Histories
     *     const history = await prisma.history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
    **/
    delete<T extends HistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
    **/
    upsert<T extends HistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>
    ): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    matkuls<T extends MatakuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatakuliahDefaultArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    barangs<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the History model
   */ 
  interface HistoryFieldRefs {
    readonly id_history: FieldRef<"History", 'String'>
    readonly barangId: FieldRef<"History", 'Int'>
    readonly matakuliahId: FieldRef<"History", 'Int'>
    readonly nama_barang: FieldRef<"History", 'String'>
    readonly jumlah: FieldRef<"History", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }


  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }


  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }


  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }


  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
  }


  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }


  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }


  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
  }


  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
  }



  /**
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    id_barang: number | null
    total_stock: number | null
    harga_barang: number | null
  }

  export type BarangSumAggregateOutputType = {
    id_barang: number | null
    total_stock: number | null
    harga_barang: number | null
  }

  export type BarangMinAggregateOutputType = {
    id_barang: number | null
    nama_barang: string | null
    total_stock: number | null
    jenis_barang: string | null
    harga_barang: number | null
    gambar_barang: string | null
    kode_barang: string | null
  }

  export type BarangMaxAggregateOutputType = {
    id_barang: number | null
    nama_barang: string | null
    total_stock: number | null
    jenis_barang: string | null
    harga_barang: number | null
    gambar_barang: string | null
    kode_barang: string | null
  }

  export type BarangCountAggregateOutputType = {
    id_barang: number
    nama_barang: number
    total_stock: number
    jenis_barang: number
    harga_barang: number
    gambar_barang: number
    kode_barang: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    id_barang?: true
    total_stock?: true
    harga_barang?: true
  }

  export type BarangSumAggregateInputType = {
    id_barang?: true
    total_stock?: true
    harga_barang?: true
  }

  export type BarangMinAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    total_stock?: true
    jenis_barang?: true
    harga_barang?: true
    gambar_barang?: true
    kode_barang?: true
  }

  export type BarangMaxAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    total_stock?: true
    jenis_barang?: true
    harga_barang?: true
    gambar_barang?: true
    kode_barang?: true
  }

  export type BarangCountAggregateInputType = {
    id_barang?: true
    nama_barang?: true
    total_stock?: true
    jenis_barang?: true
    harga_barang?: true
    gambar_barang?: true
    kode_barang?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id_barang: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang: string | null
    kode_barang: string
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama_barang?: boolean
    total_stock?: boolean
    jenis_barang?: boolean
    harga_barang?: boolean
    gambar_barang?: boolean
    kode_barang?: boolean
    keranjangs?: boolean | Barang$keranjangsArgs<ExtArgs>
    transaksiBarang?: boolean | Barang$transaksiBarangArgs<ExtArgs>
    history?: boolean | Barang$historyArgs<ExtArgs>
    barangHabisPakai?: boolean | Barang$barangHabisPakaiArgs<ExtArgs>
    barangPinjam?: boolean | Barang$barangPinjamArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id_barang?: boolean
    nama_barang?: boolean
    total_stock?: boolean
    jenis_barang?: boolean
    harga_barang?: boolean
    gambar_barang?: boolean
    kode_barang?: boolean
  }

  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjangs?: boolean | Barang$keranjangsArgs<ExtArgs>
    transaksiBarang?: boolean | Barang$transaksiBarangArgs<ExtArgs>
    history?: boolean | Barang$historyArgs<ExtArgs>
    barangHabisPakai?: boolean | Barang$barangHabisPakaiArgs<ExtArgs>
    barangPinjam?: boolean | Barang$barangPinjamArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      keranjangs: Prisma.$KeranjangPayload<ExtArgs>[]
      transaksiBarang: Prisma.$TransaksiBarangPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
      barangHabisPakai: Prisma.$BarangHabisPakaiPayload<ExtArgs>[]
      barangPinjam: Prisma.$BarangPinjamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barang: number
      nama_barang: string
      total_stock: number
      jenis_barang: string
      harga_barang: number
      gambar_barang: string | null
      kode_barang: string
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }


  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BarangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Barang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BarangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.findMany({ select: { id_barang: true } })
     * 
    **/
    findMany<T extends BarangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
    **/
    create<T extends BarangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangCreateArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Barangs.
     *     @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     *     @example
     *     // Create many Barangs
     *     const barang = await prisma.barang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BarangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
    **/
    delete<T extends BarangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BarangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BarangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BarangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
    **/
    upsert<T extends BarangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>
    ): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    keranjangs<T extends Barang$keranjangsArgs<ExtArgs> = {}>(args?: Subset<T, Barang$keranjangsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findMany'> | Null>;

    transaksiBarang<T extends Barang$transaksiBarangArgs<ExtArgs> = {}>(args?: Subset<T, Barang$transaksiBarangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findMany'> | Null>;

    history<T extends Barang$historyArgs<ExtArgs> = {}>(args?: Subset<T, Barang$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    barangHabisPakai<T extends Barang$barangHabisPakaiArgs<ExtArgs> = {}>(args?: Subset<T, Barang$barangHabisPakaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findMany'> | Null>;

    barangPinjam<T extends Barang$barangPinjamArgs<ExtArgs> = {}>(args?: Subset<T, Barang$barangPinjamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Barang model
   */ 
  interface BarangFieldRefs {
    readonly id_barang: FieldRef<"Barang", 'Int'>
    readonly nama_barang: FieldRef<"Barang", 'String'>
    readonly total_stock: FieldRef<"Barang", 'Int'>
    readonly jenis_barang: FieldRef<"Barang", 'String'>
    readonly harga_barang: FieldRef<"Barang", 'Int'>
    readonly gambar_barang: FieldRef<"Barang", 'String'>
    readonly kode_barang: FieldRef<"Barang", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }


  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }


  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
  }


  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }


  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }


  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
  }


  /**
   * Barang.keranjangs
   */
  export type Barang$keranjangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    where?: KeranjangWhereInput
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    cursor?: KeranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }


  /**
   * Barang.transaksiBarang
   */
  export type Barang$transaksiBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    where?: TransaksiBarangWhereInput
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    cursor?: TransaksiBarangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiBarangScalarFieldEnum | TransaksiBarangScalarFieldEnum[]
  }


  /**
   * Barang.history
   */
  export type Barang$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }


  /**
   * Barang.barangHabisPakai
   */
  export type Barang$barangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    where?: BarangHabisPakaiWhereInput
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    cursor?: BarangHabisPakaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }


  /**
   * Barang.barangPinjam
   */
  export type Barang$barangPinjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    where?: BarangPinjamWhereInput
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    cursor?: BarangPinjamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangPinjamScalarFieldEnum | BarangPinjamScalarFieldEnum[]
  }


  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangInclude<ExtArgs> | null
  }



  /**
   * Model Keranjang
   */

  export type AggregateKeranjang = {
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  export type KeranjangAvgAggregateOutputType = {
    id_keranjang: number | null
    barangId: number | null
    jumlah_barang: number | null
    userId: number | null
  }

  export type KeranjangSumAggregateOutputType = {
    id_keranjang: number | null
    barangId: number | null
    jumlah_barang: number | null
    userId: number | null
  }

  export type KeranjangMinAggregateOutputType = {
    id_keranjang: number | null
    barangId: number | null
    jumlah_barang: number | null
    isCheckedOut: string | null
    delete_at: Date | null
    userId: number | null
  }

  export type KeranjangMaxAggregateOutputType = {
    id_keranjang: number | null
    barangId: number | null
    jumlah_barang: number | null
    isCheckedOut: string | null
    delete_at: Date | null
    userId: number | null
  }

  export type KeranjangCountAggregateOutputType = {
    id_keranjang: number
    barangId: number
    jumlah_barang: number
    isCheckedOut: number
    delete_at: number
    userId: number
    _all: number
  }


  export type KeranjangAvgAggregateInputType = {
    id_keranjang?: true
    barangId?: true
    jumlah_barang?: true
    userId?: true
  }

  export type KeranjangSumAggregateInputType = {
    id_keranjang?: true
    barangId?: true
    jumlah_barang?: true
    userId?: true
  }

  export type KeranjangMinAggregateInputType = {
    id_keranjang?: true
    barangId?: true
    jumlah_barang?: true
    isCheckedOut?: true
    delete_at?: true
    userId?: true
  }

  export type KeranjangMaxAggregateInputType = {
    id_keranjang?: true
    barangId?: true
    jumlah_barang?: true
    isCheckedOut?: true
    delete_at?: true
    userId?: true
  }

  export type KeranjangCountAggregateInputType = {
    id_keranjang?: true
    barangId?: true
    jumlah_barang?: true
    isCheckedOut?: true
    delete_at?: true
    userId?: true
    _all?: true
  }

  export type KeranjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keranjang to aggregate.
     */
    where?: KeranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keranjangs to fetch.
     */
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keranjangs
    **/
    _count?: true | KeranjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeranjangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeranjangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeranjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeranjangMaxAggregateInputType
  }

  export type GetKeranjangAggregateType<T extends KeranjangAggregateArgs> = {
        [P in keyof T & keyof AggregateKeranjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeranjang[P]>
      : GetScalarType<T[P], AggregateKeranjang[P]>
  }




  export type KeranjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeranjangWhereInput
    orderBy?: KeranjangOrderByWithAggregationInput | KeranjangOrderByWithAggregationInput[]
    by: KeranjangScalarFieldEnum[] | KeranjangScalarFieldEnum
    having?: KeranjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeranjangCountAggregateInputType | true
    _avg?: KeranjangAvgAggregateInputType
    _sum?: KeranjangSumAggregateInputType
    _min?: KeranjangMinAggregateInputType
    _max?: KeranjangMaxAggregateInputType
  }

  export type KeranjangGroupByOutputType = {
    id_keranjang: number
    barangId: number
    jumlah_barang: number | null
    isCheckedOut: string | null
    delete_at: Date
    userId: number
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  type GetKeranjangGroupByPayload<T extends KeranjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeranjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeranjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
            : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
        }
      >
    >


  export type KeranjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_keranjang?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    isCheckedOut?: boolean
    delete_at?: boolean
    userId?: boolean
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>

  export type KeranjangSelectScalar = {
    id_keranjang?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    isCheckedOut?: boolean
    delete_at?: boolean
    userId?: boolean
  }

  export type KeranjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $KeranjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keranjang"
    objects: {
      barangs: Prisma.$BarangPayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_keranjang: number
      barangId: number
      jumlah_barang: number | null
      isCheckedOut: string | null
      delete_at: Date
      userId: number
    }, ExtArgs["result"]["keranjang"]>
    composites: {}
  }


  type KeranjangGetPayload<S extends boolean | null | undefined | KeranjangDefaultArgs> = $Result.GetResult<Prisma.$KeranjangPayload, S>

  type KeranjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KeranjangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KeranjangCountAggregateInputType | true
    }

  export interface KeranjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keranjang'], meta: { name: 'Keranjang' } }
    /**
     * Find zero or one Keranjang that matches the filter.
     * @param {KeranjangFindUniqueArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KeranjangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangFindUniqueArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Keranjang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KeranjangFindUniqueOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KeranjangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Keranjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangFindFirstArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KeranjangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangFindFirstArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Keranjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangFindFirstOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KeranjangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Keranjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keranjangs
     * const keranjangs = await prisma.keranjang.findMany()
     * 
     * // Get first 10 Keranjangs
     * const keranjangs = await prisma.keranjang.findMany({ take: 10 })
     * 
     * // Only select the `id_keranjang`
     * const keranjangWithId_keranjangOnly = await prisma.keranjang.findMany({ select: { id_keranjang: true } })
     * 
    **/
    findMany<T extends KeranjangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Keranjang.
     * @param {KeranjangCreateArgs} args - Arguments to create a Keranjang.
     * @example
     * // Create one Keranjang
     * const Keranjang = await prisma.keranjang.create({
     *   data: {
     *     // ... data to create a Keranjang
     *   }
     * })
     * 
    **/
    create<T extends KeranjangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangCreateArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Keranjangs.
     *     @param {KeranjangCreateManyArgs} args - Arguments to create many Keranjangs.
     *     @example
     *     // Create many Keranjangs
     *     const keranjang = await prisma.keranjang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KeranjangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keranjang.
     * @param {KeranjangDeleteArgs} args - Arguments to delete one Keranjang.
     * @example
     * // Delete one Keranjang
     * const Keranjang = await prisma.keranjang.delete({
     *   where: {
     *     // ... filter to delete one Keranjang
     *   }
     * })
     * 
    **/
    delete<T extends KeranjangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangDeleteArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Keranjang.
     * @param {KeranjangUpdateArgs} args - Arguments to update one Keranjang.
     * @example
     * // Update one Keranjang
     * const keranjang = await prisma.keranjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KeranjangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangUpdateArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Keranjangs.
     * @param {KeranjangDeleteManyArgs} args - Arguments to filter Keranjangs to delete.
     * @example
     * // Delete a few Keranjangs
     * const { count } = await prisma.keranjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KeranjangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KeranjangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keranjangs
     * const keranjang = await prisma.keranjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KeranjangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keranjang.
     * @param {KeranjangUpsertArgs} args - Arguments to update or create a Keranjang.
     * @example
     * // Update or create a Keranjang
     * const keranjang = await prisma.keranjang.upsert({
     *   create: {
     *     // ... data to create a Keranjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keranjang we want to update
     *   }
     * })
    **/
    upsert<T extends KeranjangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KeranjangUpsertArgs<ExtArgs>>
    ): Prisma__KeranjangClient<$Result.GetResult<Prisma.$KeranjangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangCountArgs} args - Arguments to filter Keranjangs to count.
     * @example
     * // Count the number of Keranjangs
     * const count = await prisma.keranjang.count({
     *   where: {
     *     // ... the filter for the Keranjangs we want to count
     *   }
     * })
    **/
    count<T extends KeranjangCountArgs>(
      args?: Subset<T, KeranjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeranjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeranjangAggregateArgs>(args: Subset<T, KeranjangAggregateArgs>): Prisma.PrismaPromise<GetKeranjangAggregateType<T>>

    /**
     * Group by Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeranjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeranjangGroupByArgs['orderBy'] }
        : { orderBy?: KeranjangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeranjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeranjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keranjang model
   */
  readonly fields: KeranjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keranjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeranjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    barangs<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Keranjang model
   */ 
  interface KeranjangFieldRefs {
    readonly id_keranjang: FieldRef<"Keranjang", 'Int'>
    readonly barangId: FieldRef<"Keranjang", 'Int'>
    readonly jumlah_barang: FieldRef<"Keranjang", 'Int'>
    readonly isCheckedOut: FieldRef<"Keranjang", 'String'>
    readonly delete_at: FieldRef<"Keranjang", 'DateTime'>
    readonly userId: FieldRef<"Keranjang", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Keranjang findUnique
   */
  export type KeranjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter, which Keranjang to fetch.
     */
    where: KeranjangWhereUniqueInput
  }


  /**
   * Keranjang findUniqueOrThrow
   */
  export type KeranjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter, which Keranjang to fetch.
     */
    where: KeranjangWhereUniqueInput
  }


  /**
   * Keranjang findFirst
   */
  export type KeranjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter, which Keranjang to fetch.
     */
    where?: KeranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keranjangs to fetch.
     */
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keranjangs.
     */
    cursor?: KeranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }


  /**
   * Keranjang findFirstOrThrow
   */
  export type KeranjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter, which Keranjang to fetch.
     */
    where?: KeranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keranjangs to fetch.
     */
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keranjangs.
     */
    cursor?: KeranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }


  /**
   * Keranjang findMany
   */
  export type KeranjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter, which Keranjangs to fetch.
     */
    where?: KeranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keranjangs to fetch.
     */
    orderBy?: KeranjangOrderByWithRelationInput | KeranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keranjangs.
     */
    cursor?: KeranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keranjangs.
     */
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }


  /**
   * Keranjang create
   */
  export type KeranjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * The data needed to create a Keranjang.
     */
    data: XOR<KeranjangCreateInput, KeranjangUncheckedCreateInput>
  }


  /**
   * Keranjang createMany
   */
  export type KeranjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keranjangs.
     */
    data: KeranjangCreateManyInput | KeranjangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Keranjang update
   */
  export type KeranjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * The data needed to update a Keranjang.
     */
    data: XOR<KeranjangUpdateInput, KeranjangUncheckedUpdateInput>
    /**
     * Choose, which Keranjang to update.
     */
    where: KeranjangWhereUniqueInput
  }


  /**
   * Keranjang updateMany
   */
  export type KeranjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keranjangs.
     */
    data: XOR<KeranjangUpdateManyMutationInput, KeranjangUncheckedUpdateManyInput>
    /**
     * Filter which Keranjangs to update
     */
    where?: KeranjangWhereInput
  }


  /**
   * Keranjang upsert
   */
  export type KeranjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * The filter to search for the Keranjang to update in case it exists.
     */
    where: KeranjangWhereUniqueInput
    /**
     * In case the Keranjang found by the `where` argument doesn't exist, create a new Keranjang with this data.
     */
    create: XOR<KeranjangCreateInput, KeranjangUncheckedCreateInput>
    /**
     * In case the Keranjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeranjangUpdateInput, KeranjangUncheckedUpdateInput>
  }


  /**
   * Keranjang delete
   */
  export type KeranjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
    /**
     * Filter which Keranjang to delete.
     */
    where: KeranjangWhereUniqueInput
  }


  /**
   * Keranjang deleteMany
   */
  export type KeranjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keranjangs to delete
     */
    where?: KeranjangWhereInput
  }


  /**
   * Keranjang without action
   */
  export type KeranjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keranjang
     */
    select?: KeranjangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KeranjangInclude<ExtArgs> | null
  }



  /**
   * Model BarangHabisPakai
   */

  export type AggregateBarangHabisPakai = {
    _count: BarangHabisPakaiCountAggregateOutputType | null
    _avg: BarangHabisPakaiAvgAggregateOutputType | null
    _sum: BarangHabisPakaiSumAggregateOutputType | null
    _min: BarangHabisPakaiMinAggregateOutputType | null
    _max: BarangHabisPakaiMaxAggregateOutputType | null
  }

  export type BarangHabisPakaiAvgAggregateOutputType = {
    id_barang_habis_pakai: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
  }

  export type BarangHabisPakaiSumAggregateOutputType = {
    id_barang_habis_pakai: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
  }

  export type BarangHabisPakaiMinAggregateOutputType = {
    id_barang_habis_pakai: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
    nama_barang: string | null
    kode_barang: string | null
    jenis_barang: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangHabisPakaiMaxAggregateOutputType = {
    id_barang_habis_pakai: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
    nama_barang: string | null
    kode_barang: string | null
    jenis_barang: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangHabisPakaiCountAggregateOutputType = {
    id_barang_habis_pakai: number
    peminjamId: number
    barangId: number
    jumlah_barang: number
    nama_barang: number
    kode_barang: number
    jenis_barang: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarangHabisPakaiAvgAggregateInputType = {
    id_barang_habis_pakai?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
  }

  export type BarangHabisPakaiSumAggregateInputType = {
    id_barang_habis_pakai?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
  }

  export type BarangHabisPakaiMinAggregateInputType = {
    id_barang_habis_pakai?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangHabisPakaiMaxAggregateInputType = {
    id_barang_habis_pakai?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangHabisPakaiCountAggregateInputType = {
    id_barang_habis_pakai?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarangHabisPakaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangHabisPakai to aggregate.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarangHabisPakais
    **/
    _count?: true | BarangHabisPakaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangHabisPakaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangHabisPakaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangHabisPakaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangHabisPakaiMaxAggregateInputType
  }

  export type GetBarangHabisPakaiAggregateType<T extends BarangHabisPakaiAggregateArgs> = {
        [P in keyof T & keyof AggregateBarangHabisPakai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarangHabisPakai[P]>
      : GetScalarType<T[P], AggregateBarangHabisPakai[P]>
  }




  export type BarangHabisPakaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangHabisPakaiWhereInput
    orderBy?: BarangHabisPakaiOrderByWithAggregationInput | BarangHabisPakaiOrderByWithAggregationInput[]
    by: BarangHabisPakaiScalarFieldEnum[] | BarangHabisPakaiScalarFieldEnum
    having?: BarangHabisPakaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangHabisPakaiCountAggregateInputType | true
    _avg?: BarangHabisPakaiAvgAggregateInputType
    _sum?: BarangHabisPakaiSumAggregateInputType
    _min?: BarangHabisPakaiMinAggregateInputType
    _max?: BarangHabisPakaiMaxAggregateInputType
  }

  export type BarangHabisPakaiGroupByOutputType = {
    id_barang_habis_pakai: number
    peminjamId: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt: Date
    updatedAt: Date
    _count: BarangHabisPakaiCountAggregateOutputType | null
    _avg: BarangHabisPakaiAvgAggregateOutputType | null
    _sum: BarangHabisPakaiSumAggregateOutputType | null
    _min: BarangHabisPakaiMinAggregateOutputType | null
    _max: BarangHabisPakaiMaxAggregateOutputType | null
  }

  type GetBarangHabisPakaiGroupByPayload<T extends BarangHabisPakaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangHabisPakaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangHabisPakaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangHabisPakaiGroupByOutputType[P]>
            : GetScalarType<T[P], BarangHabisPakaiGroupByOutputType[P]>
        }
      >
    >


  export type BarangHabisPakaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang_habis_pakai?: boolean
    peminjamId?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
    jenis_barang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peminjam?: boolean | BarangHabisPakai$peminjamArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangHabisPakai"]>

  export type BarangHabisPakaiSelectScalar = {
    id_barang_habis_pakai?: boolean
    peminjamId?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
    jenis_barang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarangHabisPakaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjam?: boolean | BarangHabisPakai$peminjamArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }


  export type $BarangHabisPakaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarangHabisPakai"
    objects: {
      peminjam: Prisma.$PeminjamPayload<ExtArgs> | null
      barangs: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barang_habis_pakai: number
      peminjamId: number | null
      barangId: number
      jumlah_barang: number
      nama_barang: string
      kode_barang: string
      jenis_barang: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barangHabisPakai"]>
    composites: {}
  }


  type BarangHabisPakaiGetPayload<S extends boolean | null | undefined | BarangHabisPakaiDefaultArgs> = $Result.GetResult<Prisma.$BarangHabisPakaiPayload, S>

  type BarangHabisPakaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarangHabisPakaiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarangHabisPakaiCountAggregateInputType | true
    }

  export interface BarangHabisPakaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarangHabisPakai'], meta: { name: 'BarangHabisPakai' } }
    /**
     * Find zero or one BarangHabisPakai that matches the filter.
     * @param {BarangHabisPakaiFindUniqueArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BarangHabisPakaiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiFindUniqueArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BarangHabisPakai that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BarangHabisPakaiFindUniqueOrThrowArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BarangHabisPakai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindFirstArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BarangHabisPakaiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiFindFirstArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BarangHabisPakai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindFirstOrThrowArgs} args - Arguments to find a BarangHabisPakai
     * @example
     * // Get one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BarangHabisPakais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarangHabisPakais
     * const barangHabisPakais = await prisma.barangHabisPakai.findMany()
     * 
     * // Get first 10 BarangHabisPakais
     * const barangHabisPakais = await prisma.barangHabisPakai.findMany({ take: 10 })
     * 
     * // Only select the `id_barang_habis_pakai`
     * const barangHabisPakaiWithId_barang_habis_pakaiOnly = await prisma.barangHabisPakai.findMany({ select: { id_barang_habis_pakai: true } })
     * 
    **/
    findMany<T extends BarangHabisPakaiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BarangHabisPakai.
     * @param {BarangHabisPakaiCreateArgs} args - Arguments to create a BarangHabisPakai.
     * @example
     * // Create one BarangHabisPakai
     * const BarangHabisPakai = await prisma.barangHabisPakai.create({
     *   data: {
     *     // ... data to create a BarangHabisPakai
     *   }
     * })
     * 
    **/
    create<T extends BarangHabisPakaiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiCreateArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BarangHabisPakais.
     *     @param {BarangHabisPakaiCreateManyArgs} args - Arguments to create many BarangHabisPakais.
     *     @example
     *     // Create many BarangHabisPakais
     *     const barangHabisPakai = await prisma.barangHabisPakai.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BarangHabisPakaiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BarangHabisPakai.
     * @param {BarangHabisPakaiDeleteArgs} args - Arguments to delete one BarangHabisPakai.
     * @example
     * // Delete one BarangHabisPakai
     * const BarangHabisPakai = await prisma.barangHabisPakai.delete({
     *   where: {
     *     // ... filter to delete one BarangHabisPakai
     *   }
     * })
     * 
    **/
    delete<T extends BarangHabisPakaiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiDeleteArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BarangHabisPakai.
     * @param {BarangHabisPakaiUpdateArgs} args - Arguments to update one BarangHabisPakai.
     * @example
     * // Update one BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BarangHabisPakaiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiUpdateArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BarangHabisPakais.
     * @param {BarangHabisPakaiDeleteManyArgs} args - Arguments to filter BarangHabisPakais to delete.
     * @example
     * // Delete a few BarangHabisPakais
     * const { count } = await prisma.barangHabisPakai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BarangHabisPakaiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangHabisPakaiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarangHabisPakais
     * const barangHabisPakai = await prisma.barangHabisPakai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BarangHabisPakaiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BarangHabisPakai.
     * @param {BarangHabisPakaiUpsertArgs} args - Arguments to update or create a BarangHabisPakai.
     * @example
     * // Update or create a BarangHabisPakai
     * const barangHabisPakai = await prisma.barangHabisPakai.upsert({
     *   create: {
     *     // ... data to create a BarangHabisPakai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarangHabisPakai we want to update
     *   }
     * })
    **/
    upsert<T extends BarangHabisPakaiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BarangHabisPakaiUpsertArgs<ExtArgs>>
    ): Prisma__BarangHabisPakaiClient<$Result.GetResult<Prisma.$BarangHabisPakaiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BarangHabisPakais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiCountArgs} args - Arguments to filter BarangHabisPakais to count.
     * @example
     * // Count the number of BarangHabisPakais
     * const count = await prisma.barangHabisPakai.count({
     *   where: {
     *     // ... the filter for the BarangHabisPakais we want to count
     *   }
     * })
    **/
    count<T extends BarangHabisPakaiCountArgs>(
      args?: Subset<T, BarangHabisPakaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangHabisPakaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangHabisPakaiAggregateArgs>(args: Subset<T, BarangHabisPakaiAggregateArgs>): Prisma.PrismaPromise<GetBarangHabisPakaiAggregateType<T>>

    /**
     * Group by BarangHabisPakai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangHabisPakaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangHabisPakaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangHabisPakaiGroupByArgs['orderBy'] }
        : { orderBy?: BarangHabisPakaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangHabisPakaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangHabisPakaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarangHabisPakai model
   */
  readonly fields: BarangHabisPakaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarangHabisPakai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangHabisPakaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    peminjam<T extends BarangHabisPakai$peminjamArgs<ExtArgs> = {}>(args?: Subset<T, BarangHabisPakai$peminjamArgs<ExtArgs>>): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    barangs<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BarangHabisPakai model
   */ 
  interface BarangHabisPakaiFieldRefs {
    readonly id_barang_habis_pakai: FieldRef<"BarangHabisPakai", 'Int'>
    readonly peminjamId: FieldRef<"BarangHabisPakai", 'Int'>
    readonly barangId: FieldRef<"BarangHabisPakai", 'Int'>
    readonly jumlah_barang: FieldRef<"BarangHabisPakai", 'Int'>
    readonly nama_barang: FieldRef<"BarangHabisPakai", 'String'>
    readonly kode_barang: FieldRef<"BarangHabisPakai", 'String'>
    readonly jenis_barang: FieldRef<"BarangHabisPakai", 'String'>
    readonly createdAt: FieldRef<"BarangHabisPakai", 'DateTime'>
    readonly updatedAt: FieldRef<"BarangHabisPakai", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BarangHabisPakai findUnique
   */
  export type BarangHabisPakaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }


  /**
   * BarangHabisPakai findUniqueOrThrow
   */
  export type BarangHabisPakaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }


  /**
   * BarangHabisPakai findFirst
   */
  export type BarangHabisPakaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangHabisPakais.
     */
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }


  /**
   * BarangHabisPakai findFirstOrThrow
   */
  export type BarangHabisPakaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakai to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangHabisPakais.
     */
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }


  /**
   * BarangHabisPakai findMany
   */
  export type BarangHabisPakaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter, which BarangHabisPakais to fetch.
     */
    where?: BarangHabisPakaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangHabisPakais to fetch.
     */
    orderBy?: BarangHabisPakaiOrderByWithRelationInput | BarangHabisPakaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarangHabisPakais.
     */
    cursor?: BarangHabisPakaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangHabisPakais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangHabisPakais.
     */
    skip?: number
    distinct?: BarangHabisPakaiScalarFieldEnum | BarangHabisPakaiScalarFieldEnum[]
  }


  /**
   * BarangHabisPakai create
   */
  export type BarangHabisPakaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to create a BarangHabisPakai.
     */
    data: XOR<BarangHabisPakaiCreateInput, BarangHabisPakaiUncheckedCreateInput>
  }


  /**
   * BarangHabisPakai createMany
   */
  export type BarangHabisPakaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarangHabisPakais.
     */
    data: BarangHabisPakaiCreateManyInput | BarangHabisPakaiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BarangHabisPakai update
   */
  export type BarangHabisPakaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The data needed to update a BarangHabisPakai.
     */
    data: XOR<BarangHabisPakaiUpdateInput, BarangHabisPakaiUncheckedUpdateInput>
    /**
     * Choose, which BarangHabisPakai to update.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }


  /**
   * BarangHabisPakai updateMany
   */
  export type BarangHabisPakaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarangHabisPakais.
     */
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyInput>
    /**
     * Filter which BarangHabisPakais to update
     */
    where?: BarangHabisPakaiWhereInput
  }


  /**
   * BarangHabisPakai upsert
   */
  export type BarangHabisPakaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * The filter to search for the BarangHabisPakai to update in case it exists.
     */
    where: BarangHabisPakaiWhereUniqueInput
    /**
     * In case the BarangHabisPakai found by the `where` argument doesn't exist, create a new BarangHabisPakai with this data.
     */
    create: XOR<BarangHabisPakaiCreateInput, BarangHabisPakaiUncheckedCreateInput>
    /**
     * In case the BarangHabisPakai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangHabisPakaiUpdateInput, BarangHabisPakaiUncheckedUpdateInput>
  }


  /**
   * BarangHabisPakai delete
   */
  export type BarangHabisPakaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
    /**
     * Filter which BarangHabisPakai to delete.
     */
    where: BarangHabisPakaiWhereUniqueInput
  }


  /**
   * BarangHabisPakai deleteMany
   */
  export type BarangHabisPakaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangHabisPakais to delete
     */
    where?: BarangHabisPakaiWhereInput
  }


  /**
   * BarangHabisPakai.peminjam
   */
  export type BarangHabisPakai$peminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    where?: PeminjamWhereInput
  }


  /**
   * BarangHabisPakai without action
   */
  export type BarangHabisPakaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangHabisPakai
     */
    select?: BarangHabisPakaiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangHabisPakaiInclude<ExtArgs> | null
  }



  /**
   * Model BarangPinjam
   */

  export type AggregateBarangPinjam = {
    _count: BarangPinjamCountAggregateOutputType | null
    _avg: BarangPinjamAvgAggregateOutputType | null
    _sum: BarangPinjamSumAggregateOutputType | null
    _min: BarangPinjamMinAggregateOutputType | null
    _max: BarangPinjamMaxAggregateOutputType | null
  }

  export type BarangPinjamAvgAggregateOutputType = {
    id_barang_pinjam: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
  }

  export type BarangPinjamSumAggregateOutputType = {
    id_barang_pinjam: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
  }

  export type BarangPinjamMinAggregateOutputType = {
    id_barang_pinjam: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
    nama_barang: string | null
    kode_barang: string | null
    jenis_barang: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangPinjamMaxAggregateOutputType = {
    id_barang_pinjam: number | null
    peminjamId: number | null
    barangId: number | null
    jumlah_barang: number | null
    nama_barang: string | null
    kode_barang: string | null
    jenis_barang: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangPinjamCountAggregateOutputType = {
    id_barang_pinjam: number
    peminjamId: number
    barangId: number
    jumlah_barang: number
    nama_barang: number
    kode_barang: number
    jenis_barang: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarangPinjamAvgAggregateInputType = {
    id_barang_pinjam?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
  }

  export type BarangPinjamSumAggregateInputType = {
    id_barang_pinjam?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
  }

  export type BarangPinjamMinAggregateInputType = {
    id_barang_pinjam?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangPinjamMaxAggregateInputType = {
    id_barang_pinjam?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangPinjamCountAggregateInputType = {
    id_barang_pinjam?: true
    peminjamId?: true
    barangId?: true
    jumlah_barang?: true
    nama_barang?: true
    kode_barang?: true
    jenis_barang?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarangPinjamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangPinjam to aggregate.
     */
    where?: BarangPinjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangPinjams to fetch.
     */
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangPinjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangPinjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangPinjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarangPinjams
    **/
    _count?: true | BarangPinjamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangPinjamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangPinjamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangPinjamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangPinjamMaxAggregateInputType
  }

  export type GetBarangPinjamAggregateType<T extends BarangPinjamAggregateArgs> = {
        [P in keyof T & keyof AggregateBarangPinjam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarangPinjam[P]>
      : GetScalarType<T[P], AggregateBarangPinjam[P]>
  }




  export type BarangPinjamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangPinjamWhereInput
    orderBy?: BarangPinjamOrderByWithAggregationInput | BarangPinjamOrderByWithAggregationInput[]
    by: BarangPinjamScalarFieldEnum[] | BarangPinjamScalarFieldEnum
    having?: BarangPinjamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangPinjamCountAggregateInputType | true
    _avg?: BarangPinjamAvgAggregateInputType
    _sum?: BarangPinjamSumAggregateInputType
    _min?: BarangPinjamMinAggregateInputType
    _max?: BarangPinjamMaxAggregateInputType
  }

  export type BarangPinjamGroupByOutputType = {
    id_barang_pinjam: number
    peminjamId: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt: Date
    updatedAt: Date
    _count: BarangPinjamCountAggregateOutputType | null
    _avg: BarangPinjamAvgAggregateOutputType | null
    _sum: BarangPinjamSumAggregateOutputType | null
    _min: BarangPinjamMinAggregateOutputType | null
    _max: BarangPinjamMaxAggregateOutputType | null
  }

  type GetBarangPinjamGroupByPayload<T extends BarangPinjamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangPinjamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangPinjamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangPinjamGroupByOutputType[P]>
            : GetScalarType<T[P], BarangPinjamGroupByOutputType[P]>
        }
      >
    >


  export type BarangPinjamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang_pinjam?: boolean
    peminjamId?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
    jenis_barang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peminjam?: boolean | BarangPinjam$peminjamArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barangPinjam"]>

  export type BarangPinjamSelectScalar = {
    id_barang_pinjam?: boolean
    peminjamId?: boolean
    barangId?: boolean
    jumlah_barang?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
    jenis_barang?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarangPinjamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjam?: boolean | BarangPinjam$peminjamArgs<ExtArgs>
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
  }


  export type $BarangPinjamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarangPinjam"
    objects: {
      peminjam: Prisma.$PeminjamPayload<ExtArgs> | null
      barangs: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barang_pinjam: number
      peminjamId: number | null
      barangId: number
      jumlah_barang: number
      nama_barang: string
      kode_barang: string
      jenis_barang: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barangPinjam"]>
    composites: {}
  }


  type BarangPinjamGetPayload<S extends boolean | null | undefined | BarangPinjamDefaultArgs> = $Result.GetResult<Prisma.$BarangPinjamPayload, S>

  type BarangPinjamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarangPinjamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarangPinjamCountAggregateInputType | true
    }

  export interface BarangPinjamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarangPinjam'], meta: { name: 'BarangPinjam' } }
    /**
     * Find zero or one BarangPinjam that matches the filter.
     * @param {BarangPinjamFindUniqueArgs} args - Arguments to find a BarangPinjam
     * @example
     * // Get one BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BarangPinjamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamFindUniqueArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BarangPinjam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BarangPinjamFindUniqueOrThrowArgs} args - Arguments to find a BarangPinjam
     * @example
     * // Get one BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BarangPinjamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BarangPinjam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamFindFirstArgs} args - Arguments to find a BarangPinjam
     * @example
     * // Get one BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BarangPinjamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamFindFirstArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BarangPinjam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamFindFirstOrThrowArgs} args - Arguments to find a BarangPinjam
     * @example
     * // Get one BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BarangPinjamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BarangPinjams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarangPinjams
     * const barangPinjams = await prisma.barangPinjam.findMany()
     * 
     * // Get first 10 BarangPinjams
     * const barangPinjams = await prisma.barangPinjam.findMany({ take: 10 })
     * 
     * // Only select the `id_barang_pinjam`
     * const barangPinjamWithId_barang_pinjamOnly = await prisma.barangPinjam.findMany({ select: { id_barang_pinjam: true } })
     * 
    **/
    findMany<T extends BarangPinjamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BarangPinjam.
     * @param {BarangPinjamCreateArgs} args - Arguments to create a BarangPinjam.
     * @example
     * // Create one BarangPinjam
     * const BarangPinjam = await prisma.barangPinjam.create({
     *   data: {
     *     // ... data to create a BarangPinjam
     *   }
     * })
     * 
    **/
    create<T extends BarangPinjamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamCreateArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BarangPinjams.
     *     @param {BarangPinjamCreateManyArgs} args - Arguments to create many BarangPinjams.
     *     @example
     *     // Create many BarangPinjams
     *     const barangPinjam = await prisma.barangPinjam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BarangPinjamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BarangPinjam.
     * @param {BarangPinjamDeleteArgs} args - Arguments to delete one BarangPinjam.
     * @example
     * // Delete one BarangPinjam
     * const BarangPinjam = await prisma.barangPinjam.delete({
     *   where: {
     *     // ... filter to delete one BarangPinjam
     *   }
     * })
     * 
    **/
    delete<T extends BarangPinjamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamDeleteArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BarangPinjam.
     * @param {BarangPinjamUpdateArgs} args - Arguments to update one BarangPinjam.
     * @example
     * // Update one BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BarangPinjamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamUpdateArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BarangPinjams.
     * @param {BarangPinjamDeleteManyArgs} args - Arguments to filter BarangPinjams to delete.
     * @example
     * // Delete a few BarangPinjams
     * const { count } = await prisma.barangPinjam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BarangPinjamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BarangPinjamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarangPinjams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarangPinjams
     * const barangPinjam = await prisma.barangPinjam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BarangPinjamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BarangPinjam.
     * @param {BarangPinjamUpsertArgs} args - Arguments to update or create a BarangPinjam.
     * @example
     * // Update or create a BarangPinjam
     * const barangPinjam = await prisma.barangPinjam.upsert({
     *   create: {
     *     // ... data to create a BarangPinjam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarangPinjam we want to update
     *   }
     * })
    **/
    upsert<T extends BarangPinjamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BarangPinjamUpsertArgs<ExtArgs>>
    ): Prisma__BarangPinjamClient<$Result.GetResult<Prisma.$BarangPinjamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BarangPinjams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamCountArgs} args - Arguments to filter BarangPinjams to count.
     * @example
     * // Count the number of BarangPinjams
     * const count = await prisma.barangPinjam.count({
     *   where: {
     *     // ... the filter for the BarangPinjams we want to count
     *   }
     * })
    **/
    count<T extends BarangPinjamCountArgs>(
      args?: Subset<T, BarangPinjamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangPinjamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarangPinjam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangPinjamAggregateArgs>(args: Subset<T, BarangPinjamAggregateArgs>): Prisma.PrismaPromise<GetBarangPinjamAggregateType<T>>

    /**
     * Group by BarangPinjam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangPinjamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangPinjamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangPinjamGroupByArgs['orderBy'] }
        : { orderBy?: BarangPinjamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangPinjamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangPinjamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarangPinjam model
   */
  readonly fields: BarangPinjamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarangPinjam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangPinjamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    peminjam<T extends BarangPinjam$peminjamArgs<ExtArgs> = {}>(args?: Subset<T, BarangPinjam$peminjamArgs<ExtArgs>>): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    barangs<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BarangPinjam model
   */ 
  interface BarangPinjamFieldRefs {
    readonly id_barang_pinjam: FieldRef<"BarangPinjam", 'Int'>
    readonly peminjamId: FieldRef<"BarangPinjam", 'Int'>
    readonly barangId: FieldRef<"BarangPinjam", 'Int'>
    readonly jumlah_barang: FieldRef<"BarangPinjam", 'Int'>
    readonly nama_barang: FieldRef<"BarangPinjam", 'String'>
    readonly kode_barang: FieldRef<"BarangPinjam", 'String'>
    readonly jenis_barang: FieldRef<"BarangPinjam", 'String'>
    readonly createdAt: FieldRef<"BarangPinjam", 'DateTime'>
    readonly updatedAt: FieldRef<"BarangPinjam", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BarangPinjam findUnique
   */
  export type BarangPinjamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter, which BarangPinjam to fetch.
     */
    where: BarangPinjamWhereUniqueInput
  }


  /**
   * BarangPinjam findUniqueOrThrow
   */
  export type BarangPinjamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter, which BarangPinjam to fetch.
     */
    where: BarangPinjamWhereUniqueInput
  }


  /**
   * BarangPinjam findFirst
   */
  export type BarangPinjamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter, which BarangPinjam to fetch.
     */
    where?: BarangPinjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangPinjams to fetch.
     */
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangPinjams.
     */
    cursor?: BarangPinjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangPinjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangPinjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangPinjams.
     */
    distinct?: BarangPinjamScalarFieldEnum | BarangPinjamScalarFieldEnum[]
  }


  /**
   * BarangPinjam findFirstOrThrow
   */
  export type BarangPinjamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter, which BarangPinjam to fetch.
     */
    where?: BarangPinjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangPinjams to fetch.
     */
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarangPinjams.
     */
    cursor?: BarangPinjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangPinjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangPinjams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarangPinjams.
     */
    distinct?: BarangPinjamScalarFieldEnum | BarangPinjamScalarFieldEnum[]
  }


  /**
   * BarangPinjam findMany
   */
  export type BarangPinjamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter, which BarangPinjams to fetch.
     */
    where?: BarangPinjamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarangPinjams to fetch.
     */
    orderBy?: BarangPinjamOrderByWithRelationInput | BarangPinjamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarangPinjams.
     */
    cursor?: BarangPinjamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarangPinjams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarangPinjams.
     */
    skip?: number
    distinct?: BarangPinjamScalarFieldEnum | BarangPinjamScalarFieldEnum[]
  }


  /**
   * BarangPinjam create
   */
  export type BarangPinjamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * The data needed to create a BarangPinjam.
     */
    data: XOR<BarangPinjamCreateInput, BarangPinjamUncheckedCreateInput>
  }


  /**
   * BarangPinjam createMany
   */
  export type BarangPinjamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarangPinjams.
     */
    data: BarangPinjamCreateManyInput | BarangPinjamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BarangPinjam update
   */
  export type BarangPinjamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * The data needed to update a BarangPinjam.
     */
    data: XOR<BarangPinjamUpdateInput, BarangPinjamUncheckedUpdateInput>
    /**
     * Choose, which BarangPinjam to update.
     */
    where: BarangPinjamWhereUniqueInput
  }


  /**
   * BarangPinjam updateMany
   */
  export type BarangPinjamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarangPinjams.
     */
    data: XOR<BarangPinjamUpdateManyMutationInput, BarangPinjamUncheckedUpdateManyInput>
    /**
     * Filter which BarangPinjams to update
     */
    where?: BarangPinjamWhereInput
  }


  /**
   * BarangPinjam upsert
   */
  export type BarangPinjamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * The filter to search for the BarangPinjam to update in case it exists.
     */
    where: BarangPinjamWhereUniqueInput
    /**
     * In case the BarangPinjam found by the `where` argument doesn't exist, create a new BarangPinjam with this data.
     */
    create: XOR<BarangPinjamCreateInput, BarangPinjamUncheckedCreateInput>
    /**
     * In case the BarangPinjam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangPinjamUpdateInput, BarangPinjamUncheckedUpdateInput>
  }


  /**
   * BarangPinjam delete
   */
  export type BarangPinjamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
    /**
     * Filter which BarangPinjam to delete.
     */
    where: BarangPinjamWhereUniqueInput
  }


  /**
   * BarangPinjam deleteMany
   */
  export type BarangPinjamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarangPinjams to delete
     */
    where?: BarangPinjamWhereInput
  }


  /**
   * BarangPinjam.peminjam
   */
  export type BarangPinjam$peminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    where?: PeminjamWhereInput
  }


  /**
   * BarangPinjam without action
   */
  export type BarangPinjamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangPinjam
     */
    select?: BarangPinjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BarangPinjamInclude<ExtArgs> | null
  }



  /**
   * Model TransaksiBarang
   */

  export type AggregateTransaksiBarang = {
    _count: TransaksiBarangCountAggregateOutputType | null
    _avg: TransaksiBarangAvgAggregateOutputType | null
    _sum: TransaksiBarangSumAggregateOutputType | null
    _min: TransaksiBarangMinAggregateOutputType | null
    _max: TransaksiBarangMaxAggregateOutputType | null
  }

  export type TransaksiBarangAvgAggregateOutputType = {
    id_transaksi_barang: number | null
    harga_barang: number | null
    jumlah_barang: number | null
    barangId: number | null
    peminjamId: number | null
  }

  export type TransaksiBarangSumAggregateOutputType = {
    id_transaksi_barang: number | null
    harga_barang: number | null
    jumlah_barang: number | null
    barangId: number | null
    peminjamId: number | null
  }

  export type TransaksiBarangMinAggregateOutputType = {
    id_transaksi_barang: number | null
    harga_barang: number | null
    jumlah_barang: number | null
    barangId: number | null
    type: $Enums.Type | null
    peminjamId: number | null
    tanggal_keluar: Date | null
    tanggal_masuk: string | null
    tanggal_pinjam: string | null
    nama_matakuliah: string | null
    nama_barang: string | null
    kode_barang: string | null
  }

  export type TransaksiBarangMaxAggregateOutputType = {
    id_transaksi_barang: number | null
    harga_barang: number | null
    jumlah_barang: number | null
    barangId: number | null
    type: $Enums.Type | null
    peminjamId: number | null
    tanggal_keluar: Date | null
    tanggal_masuk: string | null
    tanggal_pinjam: string | null
    nama_matakuliah: string | null
    nama_barang: string | null
    kode_barang: string | null
  }

  export type TransaksiBarangCountAggregateOutputType = {
    id_transaksi_barang: number
    harga_barang: number
    jumlah_barang: number
    barangId: number
    type: number
    peminjamId: number
    tanggal_keluar: number
    tanggal_masuk: number
    tanggal_pinjam: number
    nama_matakuliah: number
    nama_barang: number
    kode_barang: number
    _all: number
  }


  export type TransaksiBarangAvgAggregateInputType = {
    id_transaksi_barang?: true
    harga_barang?: true
    jumlah_barang?: true
    barangId?: true
    peminjamId?: true
  }

  export type TransaksiBarangSumAggregateInputType = {
    id_transaksi_barang?: true
    harga_barang?: true
    jumlah_barang?: true
    barangId?: true
    peminjamId?: true
  }

  export type TransaksiBarangMinAggregateInputType = {
    id_transaksi_barang?: true
    harga_barang?: true
    jumlah_barang?: true
    barangId?: true
    type?: true
    peminjamId?: true
    tanggal_keluar?: true
    tanggal_masuk?: true
    tanggal_pinjam?: true
    nama_matakuliah?: true
    nama_barang?: true
    kode_barang?: true
  }

  export type TransaksiBarangMaxAggregateInputType = {
    id_transaksi_barang?: true
    harga_barang?: true
    jumlah_barang?: true
    barangId?: true
    type?: true
    peminjamId?: true
    tanggal_keluar?: true
    tanggal_masuk?: true
    tanggal_pinjam?: true
    nama_matakuliah?: true
    nama_barang?: true
    kode_barang?: true
  }

  export type TransaksiBarangCountAggregateInputType = {
    id_transaksi_barang?: true
    harga_barang?: true
    jumlah_barang?: true
    barangId?: true
    type?: true
    peminjamId?: true
    tanggal_keluar?: true
    tanggal_masuk?: true
    tanggal_pinjam?: true
    nama_matakuliah?: true
    nama_barang?: true
    kode_barang?: true
    _all?: true
  }

  export type TransaksiBarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiBarang to aggregate.
     */
    where?: TransaksiBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangs to fetch.
     */
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransaksiBarangs
    **/
    _count?: true | TransaksiBarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiBarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiBarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiBarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiBarangMaxAggregateInputType
  }

  export type GetTransaksiBarangAggregateType<T extends TransaksiBarangAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksiBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksiBarang[P]>
      : GetScalarType<T[P], AggregateTransaksiBarang[P]>
  }




  export type TransaksiBarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiBarangWhereInput
    orderBy?: TransaksiBarangOrderByWithAggregationInput | TransaksiBarangOrderByWithAggregationInput[]
    by: TransaksiBarangScalarFieldEnum[] | TransaksiBarangScalarFieldEnum
    having?: TransaksiBarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiBarangCountAggregateInputType | true
    _avg?: TransaksiBarangAvgAggregateInputType
    _sum?: TransaksiBarangSumAggregateInputType
    _min?: TransaksiBarangMinAggregateInputType
    _max?: TransaksiBarangMaxAggregateInputType
  }

  export type TransaksiBarangGroupByOutputType = {
    id_transaksi_barang: number
    harga_barang: number | null
    jumlah_barang: number | null
    barangId: number
    type: $Enums.Type
    peminjamId: number | null
    tanggal_keluar: Date | null
    tanggal_masuk: string | null
    tanggal_pinjam: string | null
    nama_matakuliah: string | null
    nama_barang: string | null
    kode_barang: string | null
    _count: TransaksiBarangCountAggregateOutputType | null
    _avg: TransaksiBarangAvgAggregateOutputType | null
    _sum: TransaksiBarangSumAggregateOutputType | null
    _min: TransaksiBarangMinAggregateOutputType | null
    _max: TransaksiBarangMaxAggregateOutputType | null
  }

  type GetTransaksiBarangGroupByPayload<T extends TransaksiBarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiBarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiBarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiBarangGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiBarangGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiBarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi_barang?: boolean
    harga_barang?: boolean
    jumlah_barang?: boolean
    barangId?: boolean
    type?: boolean
    peminjamId?: boolean
    tanggal_keluar?: boolean
    tanggal_masuk?: boolean
    tanggal_pinjam?: boolean
    nama_matakuliah?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
    peminjam?: boolean | TransaksiBarang$peminjamArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiBarang"]>

  export type TransaksiBarangSelectScalar = {
    id_transaksi_barang?: boolean
    harga_barang?: boolean
    jumlah_barang?: boolean
    barangId?: boolean
    type?: boolean
    peminjamId?: boolean
    tanggal_keluar?: boolean
    tanggal_masuk?: boolean
    tanggal_pinjam?: boolean
    nama_matakuliah?: boolean
    nama_barang?: boolean
    kode_barang?: boolean
  }

  export type TransaksiBarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barangs?: boolean | BarangDefaultArgs<ExtArgs>
    peminjam?: boolean | TransaksiBarang$peminjamArgs<ExtArgs>
  }


  export type $TransaksiBarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransaksiBarang"
    objects: {
      barangs: Prisma.$BarangPayload<ExtArgs>
      peminjam: Prisma.$PeminjamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transaksi_barang: number
      harga_barang: number | null
      jumlah_barang: number | null
      barangId: number
      type: $Enums.Type
      peminjamId: number | null
      tanggal_keluar: Date | null
      tanggal_masuk: string | null
      tanggal_pinjam: string | null
      nama_matakuliah: string | null
      nama_barang: string | null
      kode_barang: string | null
    }, ExtArgs["result"]["transaksiBarang"]>
    composites: {}
  }


  type TransaksiBarangGetPayload<S extends boolean | null | undefined | TransaksiBarangDefaultArgs> = $Result.GetResult<Prisma.$TransaksiBarangPayload, S>

  type TransaksiBarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransaksiBarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransaksiBarangCountAggregateInputType | true
    }

  export interface TransaksiBarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransaksiBarang'], meta: { name: 'TransaksiBarang' } }
    /**
     * Find zero or one TransaksiBarang that matches the filter.
     * @param {TransaksiBarangFindUniqueArgs} args - Arguments to find a TransaksiBarang
     * @example
     * // Get one TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransaksiBarangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangFindUniqueArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TransaksiBarang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransaksiBarangFindUniqueOrThrowArgs} args - Arguments to find a TransaksiBarang
     * @example
     * // Get one TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransaksiBarangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TransaksiBarang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangFindFirstArgs} args - Arguments to find a TransaksiBarang
     * @example
     * // Get one TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransaksiBarangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangFindFirstArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TransaksiBarang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangFindFirstOrThrowArgs} args - Arguments to find a TransaksiBarang
     * @example
     * // Get one TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransaksiBarangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TransaksiBarangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaksiBarangs
     * const transaksiBarangs = await prisma.transaksiBarang.findMany()
     * 
     * // Get first 10 TransaksiBarangs
     * const transaksiBarangs = await prisma.transaksiBarang.findMany({ take: 10 })
     * 
     * // Only select the `id_transaksi_barang`
     * const transaksiBarangWithId_transaksi_barangOnly = await prisma.transaksiBarang.findMany({ select: { id_transaksi_barang: true } })
     * 
    **/
    findMany<T extends TransaksiBarangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TransaksiBarang.
     * @param {TransaksiBarangCreateArgs} args - Arguments to create a TransaksiBarang.
     * @example
     * // Create one TransaksiBarang
     * const TransaksiBarang = await prisma.transaksiBarang.create({
     *   data: {
     *     // ... data to create a TransaksiBarang
     *   }
     * })
     * 
    **/
    create<T extends TransaksiBarangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangCreateArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TransaksiBarangs.
     *     @param {TransaksiBarangCreateManyArgs} args - Arguments to create many TransaksiBarangs.
     *     @example
     *     // Create many TransaksiBarangs
     *     const transaksiBarang = await prisma.transaksiBarang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransaksiBarangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransaksiBarang.
     * @param {TransaksiBarangDeleteArgs} args - Arguments to delete one TransaksiBarang.
     * @example
     * // Delete one TransaksiBarang
     * const TransaksiBarang = await prisma.transaksiBarang.delete({
     *   where: {
     *     // ... filter to delete one TransaksiBarang
     *   }
     * })
     * 
    **/
    delete<T extends TransaksiBarangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangDeleteArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TransaksiBarang.
     * @param {TransaksiBarangUpdateArgs} args - Arguments to update one TransaksiBarang.
     * @example
     * // Update one TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransaksiBarangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangUpdateArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TransaksiBarangs.
     * @param {TransaksiBarangDeleteManyArgs} args - Arguments to filter TransaksiBarangs to delete.
     * @example
     * // Delete a few TransaksiBarangs
     * const { count } = await prisma.transaksiBarang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransaksiBarangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiBarangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaksiBarangs
     * const transaksiBarang = await prisma.transaksiBarang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransaksiBarangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransaksiBarang.
     * @param {TransaksiBarangUpsertArgs} args - Arguments to update or create a TransaksiBarang.
     * @example
     * // Update or create a TransaksiBarang
     * const transaksiBarang = await prisma.transaksiBarang.upsert({
     *   create: {
     *     // ... data to create a TransaksiBarang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaksiBarang we want to update
     *   }
     * })
    **/
    upsert<T extends TransaksiBarangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiBarangUpsertArgs<ExtArgs>>
    ): Prisma__TransaksiBarangClient<$Result.GetResult<Prisma.$TransaksiBarangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TransaksiBarangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangCountArgs} args - Arguments to filter TransaksiBarangs to count.
     * @example
     * // Count the number of TransaksiBarangs
     * const count = await prisma.transaksiBarang.count({
     *   where: {
     *     // ... the filter for the TransaksiBarangs we want to count
     *   }
     * })
    **/
    count<T extends TransaksiBarangCountArgs>(
      args?: Subset<T, TransaksiBarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiBarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaksiBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiBarangAggregateArgs>(args: Subset<T, TransaksiBarangAggregateArgs>): Prisma.PrismaPromise<GetTransaksiBarangAggregateType<T>>

    /**
     * Group by TransaksiBarang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiBarangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransaksiBarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiBarangGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiBarangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransaksiBarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransaksiBarang model
   */
  readonly fields: TransaksiBarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransaksiBarang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiBarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    barangs<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    peminjam<T extends TransaksiBarang$peminjamArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiBarang$peminjamArgs<ExtArgs>>): Prisma__PeminjamClient<$Result.GetResult<Prisma.$PeminjamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TransaksiBarang model
   */ 
  interface TransaksiBarangFieldRefs {
    readonly id_transaksi_barang: FieldRef<"TransaksiBarang", 'Int'>
    readonly harga_barang: FieldRef<"TransaksiBarang", 'Int'>
    readonly jumlah_barang: FieldRef<"TransaksiBarang", 'Int'>
    readonly barangId: FieldRef<"TransaksiBarang", 'Int'>
    readonly type: FieldRef<"TransaksiBarang", 'Type'>
    readonly peminjamId: FieldRef<"TransaksiBarang", 'Int'>
    readonly tanggal_keluar: FieldRef<"TransaksiBarang", 'DateTime'>
    readonly tanggal_masuk: FieldRef<"TransaksiBarang", 'String'>
    readonly tanggal_pinjam: FieldRef<"TransaksiBarang", 'String'>
    readonly nama_matakuliah: FieldRef<"TransaksiBarang", 'String'>
    readonly nama_barang: FieldRef<"TransaksiBarang", 'String'>
    readonly kode_barang: FieldRef<"TransaksiBarang", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TransaksiBarang findUnique
   */
  export type TransaksiBarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarang to fetch.
     */
    where: TransaksiBarangWhereUniqueInput
  }


  /**
   * TransaksiBarang findUniqueOrThrow
   */
  export type TransaksiBarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarang to fetch.
     */
    where: TransaksiBarangWhereUniqueInput
  }


  /**
   * TransaksiBarang findFirst
   */
  export type TransaksiBarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarang to fetch.
     */
    where?: TransaksiBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangs to fetch.
     */
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiBarangs.
     */
    cursor?: TransaksiBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiBarangs.
     */
    distinct?: TransaksiBarangScalarFieldEnum | TransaksiBarangScalarFieldEnum[]
  }


  /**
   * TransaksiBarang findFirstOrThrow
   */
  export type TransaksiBarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarang to fetch.
     */
    where?: TransaksiBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangs to fetch.
     */
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiBarangs.
     */
    cursor?: TransaksiBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiBarangs.
     */
    distinct?: TransaksiBarangScalarFieldEnum | TransaksiBarangScalarFieldEnum[]
  }


  /**
   * TransaksiBarang findMany
   */
  export type TransaksiBarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiBarangs to fetch.
     */
    where?: TransaksiBarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiBarangs to fetch.
     */
    orderBy?: TransaksiBarangOrderByWithRelationInput | TransaksiBarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransaksiBarangs.
     */
    cursor?: TransaksiBarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiBarangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiBarangs.
     */
    skip?: number
    distinct?: TransaksiBarangScalarFieldEnum | TransaksiBarangScalarFieldEnum[]
  }


  /**
   * TransaksiBarang create
   */
  export type TransaksiBarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * The data needed to create a TransaksiBarang.
     */
    data: XOR<TransaksiBarangCreateInput, TransaksiBarangUncheckedCreateInput>
  }


  /**
   * TransaksiBarang createMany
   */
  export type TransaksiBarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransaksiBarangs.
     */
    data: TransaksiBarangCreateManyInput | TransaksiBarangCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TransaksiBarang update
   */
  export type TransaksiBarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * The data needed to update a TransaksiBarang.
     */
    data: XOR<TransaksiBarangUpdateInput, TransaksiBarangUncheckedUpdateInput>
    /**
     * Choose, which TransaksiBarang to update.
     */
    where: TransaksiBarangWhereUniqueInput
  }


  /**
   * TransaksiBarang updateMany
   */
  export type TransaksiBarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransaksiBarangs.
     */
    data: XOR<TransaksiBarangUpdateManyMutationInput, TransaksiBarangUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiBarangs to update
     */
    where?: TransaksiBarangWhereInput
  }


  /**
   * TransaksiBarang upsert
   */
  export type TransaksiBarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * The filter to search for the TransaksiBarang to update in case it exists.
     */
    where: TransaksiBarangWhereUniqueInput
    /**
     * In case the TransaksiBarang found by the `where` argument doesn't exist, create a new TransaksiBarang with this data.
     */
    create: XOR<TransaksiBarangCreateInput, TransaksiBarangUncheckedCreateInput>
    /**
     * In case the TransaksiBarang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiBarangUpdateInput, TransaksiBarangUncheckedUpdateInput>
  }


  /**
   * TransaksiBarang delete
   */
  export type TransaksiBarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
    /**
     * Filter which TransaksiBarang to delete.
     */
    where: TransaksiBarangWhereUniqueInput
  }


  /**
   * TransaksiBarang deleteMany
   */
  export type TransaksiBarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiBarangs to delete
     */
    where?: TransaksiBarangWhereInput
  }


  /**
   * TransaksiBarang.peminjam
   */
  export type TransaksiBarang$peminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjam
     */
    select?: PeminjamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PeminjamInclude<ExtArgs> | null
    where?: PeminjamWhereInput
  }


  /**
   * TransaksiBarang without action
   */
  export type TransaksiBarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiBarang
     */
    select?: TransaksiBarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransaksiBarangInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    created_on: 'created_on',
    last_login: 'last_login',
    refresh_token: 'refresh_token'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PeminjamScalarFieldEnum: {
    id_peminjam: 'id_peminjam',
    nama_matakuliah: 'nama_matakuliah',
    prasat: 'prasat',
    jam_praktek: 'jam_praktek',
    tanggal_praktek: 'tanggal_praktek',
    tanggal_pengambilan: 'tanggal_pengambilan',
    userId: 'userId',
    type: 'type'
  };

  export type PeminjamScalarFieldEnum = (typeof PeminjamScalarFieldEnum)[keyof typeof PeminjamScalarFieldEnum]


  export const MatakuliahScalarFieldEnum: {
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

  export type MatakuliahScalarFieldEnum = (typeof MatakuliahScalarFieldEnum)[keyof typeof MatakuliahScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id_history: 'id_history',
    barangId: 'barangId',
    matakuliahId: 'matakuliahId',
    nama_barang: 'nama_barang',
    jumlah: 'jumlah'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const BarangScalarFieldEnum: {
    id_barang: 'id_barang',
    nama_barang: 'nama_barang',
    total_stock: 'total_stock',
    jenis_barang: 'jenis_barang',
    harga_barang: 'harga_barang',
    gambar_barang: 'gambar_barang',
    kode_barang: 'kode_barang'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const KeranjangScalarFieldEnum: {
    id_keranjang: 'id_keranjang',
    barangId: 'barangId',
    jumlah_barang: 'jumlah_barang',
    isCheckedOut: 'isCheckedOut',
    delete_at: 'delete_at',
    userId: 'userId'
  };

  export type KeranjangScalarFieldEnum = (typeof KeranjangScalarFieldEnum)[keyof typeof KeranjangScalarFieldEnum]


  export const BarangHabisPakaiScalarFieldEnum: {
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

  export type BarangHabisPakaiScalarFieldEnum = (typeof BarangHabisPakaiScalarFieldEnum)[keyof typeof BarangHabisPakaiScalarFieldEnum]


  export const BarangPinjamScalarFieldEnum: {
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

  export type BarangPinjamScalarFieldEnum = (typeof BarangPinjamScalarFieldEnum)[keyof typeof BarangPinjamScalarFieldEnum]


  export const TransaksiBarangScalarFieldEnum: {
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

  export type TransaksiBarangScalarFieldEnum = (typeof TransaksiBarangScalarFieldEnum)[keyof typeof TransaksiBarangScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_on?: DateTimeFilter<"Users"> | Date | string
    last_login?: DateTimeNullableFilter<"Users"> | Date | string | null
    refresh_token?: StringNullableFilter<"Users"> | string | null
    peminjam?: PeminjamListRelationFilter
    keranjang?: KeranjangListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    created_on?: SortOrder
    last_login?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    peminjam?: PeminjamOrderByRelationAggregateInput
    keranjang?: KeranjangOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    created_on?: DateTimeFilter<"Users"> | Date | string
    last_login?: DateTimeNullableFilter<"Users"> | Date | string | null
    refresh_token?: StringNullableFilter<"Users"> | string | null
    peminjam?: PeminjamListRelationFilter
    keranjang?: KeranjangListRelationFilter
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    created_on?: SortOrder
    last_login?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    created_on?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    last_login?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type PeminjamWhereInput = {
    AND?: PeminjamWhereInput | PeminjamWhereInput[]
    OR?: PeminjamWhereInput[]
    NOT?: PeminjamWhereInput | PeminjamWhereInput[]
    id_peminjam?: IntFilter<"Peminjam"> | number
    nama_matakuliah?: StringFilter<"Peminjam"> | string
    prasat?: StringFilter<"Peminjam"> | string
    jam_praktek?: StringFilter<"Peminjam"> | string
    tanggal_praktek?: StringNullableFilter<"Peminjam"> | string | null
    tanggal_pengambilan?: DateTimeFilter<"Peminjam"> | Date | string
    userId?: IntFilter<"Peminjam"> | number
    type?: EnumTypeFilter<"Peminjam"> | $Enums.Type
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    transaksiBarang?: TransaksiBarangListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
    barangPinjam?: BarangPinjamListRelationFilter
  }

  export type PeminjamOrderByWithRelationInput = {
    id_peminjam?: SortOrder
    nama_matakuliah?: SortOrder
    prasat?: SortOrder
    jam_praktek?: SortOrder
    tanggal_praktek?: SortOrderInput | SortOrder
    tanggal_pengambilan?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    users?: UsersOrderByWithRelationInput
    transaksiBarang?: TransaksiBarangOrderByRelationAggregateInput
    barangHabisPakai?: BarangHabisPakaiOrderByRelationAggregateInput
    barangPinjam?: BarangPinjamOrderByRelationAggregateInput
  }

  export type PeminjamWhereUniqueInput = Prisma.AtLeast<{
    id_peminjam?: number
    AND?: PeminjamWhereInput | PeminjamWhereInput[]
    OR?: PeminjamWhereInput[]
    NOT?: PeminjamWhereInput | PeminjamWhereInput[]
    nama_matakuliah?: StringFilter<"Peminjam"> | string
    prasat?: StringFilter<"Peminjam"> | string
    jam_praktek?: StringFilter<"Peminjam"> | string
    tanggal_praktek?: StringNullableFilter<"Peminjam"> | string | null
    tanggal_pengambilan?: DateTimeFilter<"Peminjam"> | Date | string
    userId?: IntFilter<"Peminjam"> | number
    type?: EnumTypeFilter<"Peminjam"> | $Enums.Type
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    transaksiBarang?: TransaksiBarangListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
    barangPinjam?: BarangPinjamListRelationFilter
  }, "id_peminjam">

  export type PeminjamOrderByWithAggregationInput = {
    id_peminjam?: SortOrder
    nama_matakuliah?: SortOrder
    prasat?: SortOrder
    jam_praktek?: SortOrder
    tanggal_praktek?: SortOrderInput | SortOrder
    tanggal_pengambilan?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    _count?: PeminjamCountOrderByAggregateInput
    _avg?: PeminjamAvgOrderByAggregateInput
    _max?: PeminjamMaxOrderByAggregateInput
    _min?: PeminjamMinOrderByAggregateInput
    _sum?: PeminjamSumOrderByAggregateInput
  }

  export type PeminjamScalarWhereWithAggregatesInput = {
    AND?: PeminjamScalarWhereWithAggregatesInput | PeminjamScalarWhereWithAggregatesInput[]
    OR?: PeminjamScalarWhereWithAggregatesInput[]
    NOT?: PeminjamScalarWhereWithAggregatesInput | PeminjamScalarWhereWithAggregatesInput[]
    id_peminjam?: IntWithAggregatesFilter<"Peminjam"> | number
    nama_matakuliah?: StringWithAggregatesFilter<"Peminjam"> | string
    prasat?: StringWithAggregatesFilter<"Peminjam"> | string
    jam_praktek?: StringWithAggregatesFilter<"Peminjam"> | string
    tanggal_praktek?: StringNullableWithAggregatesFilter<"Peminjam"> | string | null
    tanggal_pengambilan?: DateTimeWithAggregatesFilter<"Peminjam"> | Date | string
    userId?: IntWithAggregatesFilter<"Peminjam"> | number
    type?: EnumTypeWithAggregatesFilter<"Peminjam"> | $Enums.Type
  }

  export type MatakuliahWhereInput = {
    AND?: MatakuliahWhereInput | MatakuliahWhereInput[]
    OR?: MatakuliahWhereInput[]
    NOT?: MatakuliahWhereInput | MatakuliahWhereInput[]
    id_matakuliah?: IntFilter<"Matakuliah"> | number
    hematologi?: IntFilter<"Matakuliah"> | number
    kardio?: IntFilter<"Matakuliah"> | number
    respiratory?: IntFilter<"Matakuliah"> | number
    integumen?: IntFilter<"Matakuliah"> | number
    muskulo?: IntFilter<"Matakuliah"> | number
    persepsi?: IntFilter<"Matakuliah"> | number
    kritis?: IntFilter<"Matakuliah"> | number
    paliatif?: IntFilter<"Matakuliah"> | number
    histories?: HistoryListRelationFilter
  }

  export type MatakuliahOrderByWithRelationInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
    histories?: HistoryOrderByRelationAggregateInput
  }

  export type MatakuliahWhereUniqueInput = Prisma.AtLeast<{
    id_matakuliah?: number
    AND?: MatakuliahWhereInput | MatakuliahWhereInput[]
    OR?: MatakuliahWhereInput[]
    NOT?: MatakuliahWhereInput | MatakuliahWhereInput[]
    hematologi?: IntFilter<"Matakuliah"> | number
    kardio?: IntFilter<"Matakuliah"> | number
    respiratory?: IntFilter<"Matakuliah"> | number
    integumen?: IntFilter<"Matakuliah"> | number
    muskulo?: IntFilter<"Matakuliah"> | number
    persepsi?: IntFilter<"Matakuliah"> | number
    kritis?: IntFilter<"Matakuliah"> | number
    paliatif?: IntFilter<"Matakuliah"> | number
    histories?: HistoryListRelationFilter
  }, "id_matakuliah">

  export type MatakuliahOrderByWithAggregationInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
    _count?: MatakuliahCountOrderByAggregateInput
    _avg?: MatakuliahAvgOrderByAggregateInput
    _max?: MatakuliahMaxOrderByAggregateInput
    _min?: MatakuliahMinOrderByAggregateInput
    _sum?: MatakuliahSumOrderByAggregateInput
  }

  export type MatakuliahScalarWhereWithAggregatesInput = {
    AND?: MatakuliahScalarWhereWithAggregatesInput | MatakuliahScalarWhereWithAggregatesInput[]
    OR?: MatakuliahScalarWhereWithAggregatesInput[]
    NOT?: MatakuliahScalarWhereWithAggregatesInput | MatakuliahScalarWhereWithAggregatesInput[]
    id_matakuliah?: IntWithAggregatesFilter<"Matakuliah"> | number
    hematologi?: IntWithAggregatesFilter<"Matakuliah"> | number
    kardio?: IntWithAggregatesFilter<"Matakuliah"> | number
    respiratory?: IntWithAggregatesFilter<"Matakuliah"> | number
    integumen?: IntWithAggregatesFilter<"Matakuliah"> | number
    muskulo?: IntWithAggregatesFilter<"Matakuliah"> | number
    persepsi?: IntWithAggregatesFilter<"Matakuliah"> | number
    kritis?: IntWithAggregatesFilter<"Matakuliah"> | number
    paliatif?: IntWithAggregatesFilter<"Matakuliah"> | number
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id_history?: StringFilter<"History"> | string
    barangId?: IntFilter<"History"> | number
    matakuliahId?: IntFilter<"History"> | number
    nama_barang?: StringFilter<"History"> | string
    jumlah?: IntFilter<"History"> | number
    matkuls?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id_history?: SortOrder
    barangId?: SortOrder
    matakuliahId?: SortOrder
    nama_barang?: SortOrder
    jumlah?: SortOrder
    matkuls?: MatakuliahOrderByWithRelationInput
    barangs?: BarangOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id_history?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    barangId?: IntFilter<"History"> | number
    matakuliahId?: IntFilter<"History"> | number
    nama_barang?: StringFilter<"History"> | string
    jumlah?: IntFilter<"History"> | number
    matkuls?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }, "id_history">

  export type HistoryOrderByWithAggregationInput = {
    id_history?: SortOrder
    barangId?: SortOrder
    matakuliahId?: SortOrder
    nama_barang?: SortOrder
    jumlah?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id_history?: StringWithAggregatesFilter<"History"> | string
    barangId?: IntWithAggregatesFilter<"History"> | number
    matakuliahId?: IntWithAggregatesFilter<"History"> | number
    nama_barang?: StringWithAggregatesFilter<"History"> | string
    jumlah?: IntWithAggregatesFilter<"History"> | number
  }

  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id_barang?: IntFilter<"Barang"> | number
    nama_barang?: StringFilter<"Barang"> | string
    total_stock?: IntFilter<"Barang"> | number
    jenis_barang?: StringFilter<"Barang"> | string
    harga_barang?: IntFilter<"Barang"> | number
    gambar_barang?: StringNullableFilter<"Barang"> | string | null
    kode_barang?: StringFilter<"Barang"> | string
    keranjangs?: KeranjangListRelationFilter
    transaksiBarang?: TransaksiBarangListRelationFilter
    history?: HistoryListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
    barangPinjam?: BarangPinjamListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    total_stock?: SortOrder
    jenis_barang?: SortOrder
    harga_barang?: SortOrder
    gambar_barang?: SortOrderInput | SortOrder
    kode_barang?: SortOrder
    keranjangs?: KeranjangOrderByRelationAggregateInput
    transaksiBarang?: TransaksiBarangOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    barangHabisPakai?: BarangHabisPakaiOrderByRelationAggregateInput
    barangPinjam?: BarangPinjamOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id_barang?: number
    kode_barang?: string
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    nama_barang?: StringFilter<"Barang"> | string
    total_stock?: IntFilter<"Barang"> | number
    jenis_barang?: StringFilter<"Barang"> | string
    harga_barang?: IntFilter<"Barang"> | number
    gambar_barang?: StringNullableFilter<"Barang"> | string | null
    keranjangs?: KeranjangListRelationFilter
    transaksiBarang?: TransaksiBarangListRelationFilter
    history?: HistoryListRelationFilter
    barangHabisPakai?: BarangHabisPakaiListRelationFilter
    barangPinjam?: BarangPinjamListRelationFilter
  }, "id_barang" | "kode_barang">

  export type BarangOrderByWithAggregationInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    total_stock?: SortOrder
    jenis_barang?: SortOrder
    harga_barang?: SortOrder
    gambar_barang?: SortOrderInput | SortOrder
    kode_barang?: SortOrder
    _count?: BarangCountOrderByAggregateInput
    _avg?: BarangAvgOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
    _sum?: BarangSumOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id_barang?: IntWithAggregatesFilter<"Barang"> | number
    nama_barang?: StringWithAggregatesFilter<"Barang"> | string
    total_stock?: IntWithAggregatesFilter<"Barang"> | number
    jenis_barang?: StringWithAggregatesFilter<"Barang"> | string
    harga_barang?: IntWithAggregatesFilter<"Barang"> | number
    gambar_barang?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    kode_barang?: StringWithAggregatesFilter<"Barang"> | string
  }

  export type KeranjangWhereInput = {
    AND?: KeranjangWhereInput | KeranjangWhereInput[]
    OR?: KeranjangWhereInput[]
    NOT?: KeranjangWhereInput | KeranjangWhereInput[]
    id_keranjang?: IntFilter<"Keranjang"> | number
    barangId?: IntFilter<"Keranjang"> | number
    jumlah_barang?: IntNullableFilter<"Keranjang"> | number | null
    isCheckedOut?: StringNullableFilter<"Keranjang"> | string | null
    delete_at?: DateTimeFilter<"Keranjang"> | Date | string
    userId?: IntFilter<"Keranjang"> | number
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type KeranjangOrderByWithRelationInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    isCheckedOut?: SortOrderInput | SortOrder
    delete_at?: SortOrder
    userId?: SortOrder
    barangs?: BarangOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type KeranjangWhereUniqueInput = Prisma.AtLeast<{
    id_keranjang?: number
    AND?: KeranjangWhereInput | KeranjangWhereInput[]
    OR?: KeranjangWhereInput[]
    NOT?: KeranjangWhereInput | KeranjangWhereInput[]
    barangId?: IntFilter<"Keranjang"> | number
    jumlah_barang?: IntNullableFilter<"Keranjang"> | number | null
    isCheckedOut?: StringNullableFilter<"Keranjang"> | string | null
    delete_at?: DateTimeFilter<"Keranjang"> | Date | string
    userId?: IntFilter<"Keranjang"> | number
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id_keranjang">

  export type KeranjangOrderByWithAggregationInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    isCheckedOut?: SortOrderInput | SortOrder
    delete_at?: SortOrder
    userId?: SortOrder
    _count?: KeranjangCountOrderByAggregateInput
    _avg?: KeranjangAvgOrderByAggregateInput
    _max?: KeranjangMaxOrderByAggregateInput
    _min?: KeranjangMinOrderByAggregateInput
    _sum?: KeranjangSumOrderByAggregateInput
  }

  export type KeranjangScalarWhereWithAggregatesInput = {
    AND?: KeranjangScalarWhereWithAggregatesInput | KeranjangScalarWhereWithAggregatesInput[]
    OR?: KeranjangScalarWhereWithAggregatesInput[]
    NOT?: KeranjangScalarWhereWithAggregatesInput | KeranjangScalarWhereWithAggregatesInput[]
    id_keranjang?: IntWithAggregatesFilter<"Keranjang"> | number
    barangId?: IntWithAggregatesFilter<"Keranjang"> | number
    jumlah_barang?: IntNullableWithAggregatesFilter<"Keranjang"> | number | null
    isCheckedOut?: StringNullableWithAggregatesFilter<"Keranjang"> | string | null
    delete_at?: DateTimeWithAggregatesFilter<"Keranjang"> | Date | string
    userId?: IntWithAggregatesFilter<"Keranjang"> | number
  }

  export type BarangHabisPakaiWhereInput = {
    AND?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    OR?: BarangHabisPakaiWhereInput[]
    NOT?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    id_barang_habis_pakai?: IntFilter<"BarangHabisPakai"> | number
    peminjamId?: IntNullableFilter<"BarangHabisPakai"> | number | null
    barangId?: IntFilter<"BarangHabisPakai"> | number
    jumlah_barang?: IntFilter<"BarangHabisPakai"> | number
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    jenis_barang?: StringFilter<"BarangHabisPakai"> | string
    createdAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
    updatedAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }

  export type BarangHabisPakaiOrderByWithRelationInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peminjam?: PeminjamOrderByWithRelationInput
    barangs?: BarangOrderByWithRelationInput
  }

  export type BarangHabisPakaiWhereUniqueInput = Prisma.AtLeast<{
    id_barang_habis_pakai?: number
    AND?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    OR?: BarangHabisPakaiWhereInput[]
    NOT?: BarangHabisPakaiWhereInput | BarangHabisPakaiWhereInput[]
    peminjamId?: IntNullableFilter<"BarangHabisPakai"> | number | null
    barangId?: IntFilter<"BarangHabisPakai"> | number
    jumlah_barang?: IntFilter<"BarangHabisPakai"> | number
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    jenis_barang?: StringFilter<"BarangHabisPakai"> | string
    createdAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
    updatedAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }, "id_barang_habis_pakai">

  export type BarangHabisPakaiOrderByWithAggregationInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarangHabisPakaiCountOrderByAggregateInput
    _avg?: BarangHabisPakaiAvgOrderByAggregateInput
    _max?: BarangHabisPakaiMaxOrderByAggregateInput
    _min?: BarangHabisPakaiMinOrderByAggregateInput
    _sum?: BarangHabisPakaiSumOrderByAggregateInput
  }

  export type BarangHabisPakaiScalarWhereWithAggregatesInput = {
    AND?: BarangHabisPakaiScalarWhereWithAggregatesInput | BarangHabisPakaiScalarWhereWithAggregatesInput[]
    OR?: BarangHabisPakaiScalarWhereWithAggregatesInput[]
    NOT?: BarangHabisPakaiScalarWhereWithAggregatesInput | BarangHabisPakaiScalarWhereWithAggregatesInput[]
    id_barang_habis_pakai?: IntWithAggregatesFilter<"BarangHabisPakai"> | number
    peminjamId?: IntNullableWithAggregatesFilter<"BarangHabisPakai"> | number | null
    barangId?: IntWithAggregatesFilter<"BarangHabisPakai"> | number
    jumlah_barang?: IntWithAggregatesFilter<"BarangHabisPakai"> | number
    nama_barang?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
    kode_barang?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
    jenis_barang?: StringWithAggregatesFilter<"BarangHabisPakai"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BarangHabisPakai"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarangHabisPakai"> | Date | string
  }

  export type BarangPinjamWhereInput = {
    AND?: BarangPinjamWhereInput | BarangPinjamWhereInput[]
    OR?: BarangPinjamWhereInput[]
    NOT?: BarangPinjamWhereInput | BarangPinjamWhereInput[]
    id_barang_pinjam?: IntFilter<"BarangPinjam"> | number
    peminjamId?: IntNullableFilter<"BarangPinjam"> | number | null
    barangId?: IntFilter<"BarangPinjam"> | number
    jumlah_barang?: IntFilter<"BarangPinjam"> | number
    nama_barang?: StringFilter<"BarangPinjam"> | string
    kode_barang?: StringFilter<"BarangPinjam"> | string
    jenis_barang?: StringFilter<"BarangPinjam"> | string
    createdAt?: DateTimeFilter<"BarangPinjam"> | Date | string
    updatedAt?: DateTimeFilter<"BarangPinjam"> | Date | string
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }

  export type BarangPinjamOrderByWithRelationInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peminjam?: PeminjamOrderByWithRelationInput
    barangs?: BarangOrderByWithRelationInput
  }

  export type BarangPinjamWhereUniqueInput = Prisma.AtLeast<{
    id_barang_pinjam?: number
    AND?: BarangPinjamWhereInput | BarangPinjamWhereInput[]
    OR?: BarangPinjamWhereInput[]
    NOT?: BarangPinjamWhereInput | BarangPinjamWhereInput[]
    peminjamId?: IntNullableFilter<"BarangPinjam"> | number | null
    barangId?: IntFilter<"BarangPinjam"> | number
    jumlah_barang?: IntFilter<"BarangPinjam"> | number
    nama_barang?: StringFilter<"BarangPinjam"> | string
    kode_barang?: StringFilter<"BarangPinjam"> | string
    jenis_barang?: StringFilter<"BarangPinjam"> | string
    createdAt?: DateTimeFilter<"BarangPinjam"> | Date | string
    updatedAt?: DateTimeFilter<"BarangPinjam"> | Date | string
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
  }, "id_barang_pinjam">

  export type BarangPinjamOrderByWithAggregationInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarangPinjamCountOrderByAggregateInput
    _avg?: BarangPinjamAvgOrderByAggregateInput
    _max?: BarangPinjamMaxOrderByAggregateInput
    _min?: BarangPinjamMinOrderByAggregateInput
    _sum?: BarangPinjamSumOrderByAggregateInput
  }

  export type BarangPinjamScalarWhereWithAggregatesInput = {
    AND?: BarangPinjamScalarWhereWithAggregatesInput | BarangPinjamScalarWhereWithAggregatesInput[]
    OR?: BarangPinjamScalarWhereWithAggregatesInput[]
    NOT?: BarangPinjamScalarWhereWithAggregatesInput | BarangPinjamScalarWhereWithAggregatesInput[]
    id_barang_pinjam?: IntWithAggregatesFilter<"BarangPinjam"> | number
    peminjamId?: IntNullableWithAggregatesFilter<"BarangPinjam"> | number | null
    barangId?: IntWithAggregatesFilter<"BarangPinjam"> | number
    jumlah_barang?: IntWithAggregatesFilter<"BarangPinjam"> | number
    nama_barang?: StringWithAggregatesFilter<"BarangPinjam"> | string
    kode_barang?: StringWithAggregatesFilter<"BarangPinjam"> | string
    jenis_barang?: StringWithAggregatesFilter<"BarangPinjam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BarangPinjam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarangPinjam"> | Date | string
  }

  export type TransaksiBarangWhereInput = {
    AND?: TransaksiBarangWhereInput | TransaksiBarangWhereInput[]
    OR?: TransaksiBarangWhereInput[]
    NOT?: TransaksiBarangWhereInput | TransaksiBarangWhereInput[]
    id_transaksi_barang?: IntFilter<"TransaksiBarang"> | number
    harga_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    jumlah_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    barangId?: IntFilter<"TransaksiBarang"> | number
    type?: EnumTypeFilter<"TransaksiBarang"> | $Enums.Type
    peminjamId?: IntNullableFilter<"TransaksiBarang"> | number | null
    tanggal_keluar?: DateTimeNullableFilter<"TransaksiBarang"> | Date | string | null
    tanggal_masuk?: StringNullableFilter<"TransaksiBarang"> | string | null
    tanggal_pinjam?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_matakuliah?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
    kode_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
  }

  export type TransaksiBarangOrderByWithRelationInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrderInput | SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    barangId?: SortOrder
    type?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    tanggal_keluar?: SortOrderInput | SortOrder
    tanggal_masuk?: SortOrderInput | SortOrder
    tanggal_pinjam?: SortOrderInput | SortOrder
    nama_matakuliah?: SortOrderInput | SortOrder
    nama_barang?: SortOrderInput | SortOrder
    kode_barang?: SortOrderInput | SortOrder
    barangs?: BarangOrderByWithRelationInput
    peminjam?: PeminjamOrderByWithRelationInput
  }

  export type TransaksiBarangWhereUniqueInput = Prisma.AtLeast<{
    id_transaksi_barang?: number
    AND?: TransaksiBarangWhereInput | TransaksiBarangWhereInput[]
    OR?: TransaksiBarangWhereInput[]
    NOT?: TransaksiBarangWhereInput | TransaksiBarangWhereInput[]
    harga_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    jumlah_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    barangId?: IntFilter<"TransaksiBarang"> | number
    type?: EnumTypeFilter<"TransaksiBarang"> | $Enums.Type
    peminjamId?: IntNullableFilter<"TransaksiBarang"> | number | null
    tanggal_keluar?: DateTimeNullableFilter<"TransaksiBarang"> | Date | string | null
    tanggal_masuk?: StringNullableFilter<"TransaksiBarang"> | string | null
    tanggal_pinjam?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_matakuliah?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
    kode_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
    barangs?: XOR<BarangRelationFilter, BarangWhereInput>
    peminjam?: XOR<PeminjamNullableRelationFilter, PeminjamWhereInput> | null
  }, "id_transaksi_barang">

  export type TransaksiBarangOrderByWithAggregationInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrderInput | SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    barangId?: SortOrder
    type?: SortOrder
    peminjamId?: SortOrderInput | SortOrder
    tanggal_keluar?: SortOrderInput | SortOrder
    tanggal_masuk?: SortOrderInput | SortOrder
    tanggal_pinjam?: SortOrderInput | SortOrder
    nama_matakuliah?: SortOrderInput | SortOrder
    nama_barang?: SortOrderInput | SortOrder
    kode_barang?: SortOrderInput | SortOrder
    _count?: TransaksiBarangCountOrderByAggregateInput
    _avg?: TransaksiBarangAvgOrderByAggregateInput
    _max?: TransaksiBarangMaxOrderByAggregateInput
    _min?: TransaksiBarangMinOrderByAggregateInput
    _sum?: TransaksiBarangSumOrderByAggregateInput
  }

  export type TransaksiBarangScalarWhereWithAggregatesInput = {
    AND?: TransaksiBarangScalarWhereWithAggregatesInput | TransaksiBarangScalarWhereWithAggregatesInput[]
    OR?: TransaksiBarangScalarWhereWithAggregatesInput[]
    NOT?: TransaksiBarangScalarWhereWithAggregatesInput | TransaksiBarangScalarWhereWithAggregatesInput[]
    id_transaksi_barang?: IntWithAggregatesFilter<"TransaksiBarang"> | number
    harga_barang?: IntNullableWithAggregatesFilter<"TransaksiBarang"> | number | null
    jumlah_barang?: IntNullableWithAggregatesFilter<"TransaksiBarang"> | number | null
    barangId?: IntWithAggregatesFilter<"TransaksiBarang"> | number
    type?: EnumTypeWithAggregatesFilter<"TransaksiBarang"> | $Enums.Type
    peminjamId?: IntNullableWithAggregatesFilter<"TransaksiBarang"> | number | null
    tanggal_keluar?: DateTimeNullableWithAggregatesFilter<"TransaksiBarang"> | Date | string | null
    tanggal_masuk?: StringNullableWithAggregatesFilter<"TransaksiBarang"> | string | null
    tanggal_pinjam?: StringNullableWithAggregatesFilter<"TransaksiBarang"> | string | null
    nama_matakuliah?: StringNullableWithAggregatesFilter<"TransaksiBarang"> | string | null
    nama_barang?: StringNullableWithAggregatesFilter<"TransaksiBarang"> | string | null
    kode_barang?: StringNullableWithAggregatesFilter<"TransaksiBarang"> | string | null
  }

  export type UsersCreateInput = {
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    peminjam?: PeminjamCreateNestedManyWithoutUsersInput
    keranjang?: KeranjangCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    peminjam?: PeminjamUncheckedCreateNestedManyWithoutUsersInput
    keranjang?: KeranjangUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    peminjam?: PeminjamUpdateManyWithoutUsersNestedInput
    keranjang?: KeranjangUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    peminjam?: PeminjamUncheckedUpdateManyWithoutUsersNestedInput
    keranjang?: KeranjangUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeminjamCreateInput = {
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    users: UsersCreateNestedOneWithoutPeminjamInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUncheckedCreateInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    userId: number
    type?: $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUpdateInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    users?: UsersUpdateOneRequiredWithoutPeminjamNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamCreateManyInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    userId: number
    type?: $Enums.Type
  }

  export type PeminjamUpdateManyMutationInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type PeminjamUncheckedUpdateManyInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type MatakuliahCreateInput = {
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
    histories?: HistoryCreateNestedManyWithoutMatkulsInput
  }

  export type MatakuliahUncheckedCreateInput = {
    id_matakuliah?: number
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
    histories?: HistoryUncheckedCreateNestedManyWithoutMatkulsInput
  }

  export type MatakuliahUpdateInput = {
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
    histories?: HistoryUpdateManyWithoutMatkulsNestedInput
  }

  export type MatakuliahUncheckedUpdateInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
    histories?: HistoryUncheckedUpdateManyWithoutMatkulsNestedInput
  }

  export type MatakuliahCreateManyInput = {
    id_matakuliah?: number
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
  }

  export type MatakuliahUpdateManyMutationInput = {
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
  }

  export type MatakuliahUncheckedUpdateManyInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryCreateInput = {
    id_history?: string
    nama_barang: string
    jumlah: number
    matkuls: MatakuliahCreateNestedOneWithoutHistoriesInput
    barangs: BarangCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id_history?: string
    barangId: number
    matakuliahId: number
    nama_barang: string
    jumlah: number
  }

  export type HistoryUpdateInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    matkuls?: MatakuliahUpdateOneRequiredWithoutHistoriesNestedInput
    barangs?: BarangUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    barangId?: IntFieldUpdateOperationsInput | number
    matakuliahId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryCreateManyInput = {
    id_history?: string
    barangId: number
    matakuliahId: number
    nama_barang: string
    jumlah: number
  }

  export type HistoryUpdateManyMutationInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    barangId?: IntFieldUpdateOperationsInput | number
    matakuliahId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type BarangCreateInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutBarangsInput
    history?: HistoryCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangUncheckedCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput
    history?: HistoryUncheckedCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangUpdateInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutBarangsNestedInput
    history?: HistoryUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUncheckedUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput
    history?: HistoryUncheckedUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type BarangCreateManyInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
  }

  export type BarangUpdateManyMutationInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
  }

  export type BarangUncheckedUpdateManyInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
  }

  export type KeranjangCreateInput = {
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    barangs: BarangCreateNestedOneWithoutKeranjangsInput
    users: UsersCreateNestedOneWithoutKeranjangInput
  }

  export type KeranjangUncheckedCreateInput = {
    id_keranjang?: number
    barangId: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    userId: number
  }

  export type KeranjangUpdateInput = {
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    barangs?: BarangUpdateOneRequiredWithoutKeranjangsNestedInput
    users?: UsersUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type KeranjangUncheckedUpdateInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type KeranjangCreateManyInput = {
    id_keranjang?: number
    barangId: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    userId: number
  }

  export type KeranjangUpdateManyMutationInput = {
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeranjangUncheckedUpdateManyInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BarangHabisPakaiCreateInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjam?: PeminjamCreateNestedOneWithoutBarangHabisPakaiInput
    barangs: BarangCreateNestedOneWithoutBarangHabisPakaiInput
  }

  export type BarangHabisPakaiUncheckedCreateInput = {
    id_barang_habis_pakai?: number
    peminjamId?: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangHabisPakaiUpdateInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjam?: PeminjamUpdateOneWithoutBarangHabisPakaiNestedInput
    barangs?: BarangUpdateOneRequiredWithoutBarangHabisPakaiNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangHabisPakaiCreateManyInput = {
    id_barang_habis_pakai?: number
    peminjamId?: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangHabisPakaiUpdateManyMutationInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangHabisPakaiUncheckedUpdateManyInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamCreateInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjam?: PeminjamCreateNestedOneWithoutBarangPinjamInput
    barangs: BarangCreateNestedOneWithoutBarangPinjamInput
  }

  export type BarangPinjamUncheckedCreateInput = {
    id_barang_pinjam?: number
    peminjamId?: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamUpdateInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjam?: PeminjamUpdateOneWithoutBarangPinjamNestedInput
    barangs?: BarangUpdateOneRequiredWithoutBarangPinjamNestedInput
  }

  export type BarangPinjamUncheckedUpdateInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamCreateManyInput = {
    id_barang_pinjam?: number
    peminjamId?: number | null
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamUpdateManyMutationInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamUncheckedUpdateManyInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiBarangCreateInput = {
    harga_barang?: number | null
    jumlah_barang?: number | null
    type?: $Enums.Type
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
    barangs: BarangCreateNestedOneWithoutTransaksiBarangInput
    peminjam?: PeminjamCreateNestedOneWithoutTransaksiBarangInput
  }

  export type TransaksiBarangUncheckedCreateInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    barangId: number
    type?: $Enums.Type
    peminjamId?: number | null
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type TransaksiBarangUpdateInput = {
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
    barangs?: BarangUpdateOneRequiredWithoutTransaksiBarangNestedInput
    peminjam?: PeminjamUpdateOneWithoutTransaksiBarangNestedInput
  }

  export type TransaksiBarangUncheckedUpdateInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiBarangCreateManyInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    barangId: number
    type?: $Enums.Type
    peminjamId?: number | null
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type TransaksiBarangUpdateManyMutationInput = {
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiBarangUncheckedUpdateManyInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PeminjamListRelationFilter = {
    every?: PeminjamWhereInput
    some?: PeminjamWhereInput
    none?: PeminjamWhereInput
  }

  export type KeranjangListRelationFilter = {
    every?: KeranjangWhereInput
    some?: KeranjangWhereInput
    none?: KeranjangWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PeminjamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeranjangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_on?: SortOrder
    last_login?: SortOrder
    refresh_token?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_on?: SortOrder
    last_login?: SortOrder
    refresh_token?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_on?: SortOrder
    last_login?: SortOrder
    refresh_token?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TransaksiBarangListRelationFilter = {
    every?: TransaksiBarangWhereInput
    some?: TransaksiBarangWhereInput
    none?: TransaksiBarangWhereInput
  }

  export type BarangHabisPakaiListRelationFilter = {
    every?: BarangHabisPakaiWhereInput
    some?: BarangHabisPakaiWhereInput
    none?: BarangHabisPakaiWhereInput
  }

  export type BarangPinjamListRelationFilter = {
    every?: BarangPinjamWhereInput
    some?: BarangPinjamWhereInput
    none?: BarangPinjamWhereInput
  }

  export type TransaksiBarangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangHabisPakaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangPinjamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeminjamCountOrderByAggregateInput = {
    id_peminjam?: SortOrder
    nama_matakuliah?: SortOrder
    prasat?: SortOrder
    jam_praktek?: SortOrder
    tanggal_praktek?: SortOrder
    tanggal_pengambilan?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type PeminjamAvgOrderByAggregateInput = {
    id_peminjam?: SortOrder
    userId?: SortOrder
  }

  export type PeminjamMaxOrderByAggregateInput = {
    id_peminjam?: SortOrder
    nama_matakuliah?: SortOrder
    prasat?: SortOrder
    jam_praktek?: SortOrder
    tanggal_praktek?: SortOrder
    tanggal_pengambilan?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type PeminjamMinOrderByAggregateInput = {
    id_peminjam?: SortOrder
    nama_matakuliah?: SortOrder
    prasat?: SortOrder
    jam_praktek?: SortOrder
    tanggal_praktek?: SortOrder
    tanggal_pengambilan?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type PeminjamSumOrderByAggregateInput = {
    id_peminjam?: SortOrder
    userId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatakuliahCountOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
  }

  export type MatakuliahAvgOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
  }

  export type MatakuliahMaxOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
  }

  export type MatakuliahMinOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
  }

  export type MatakuliahSumOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    hematologi?: SortOrder
    kardio?: SortOrder
    respiratory?: SortOrder
    integumen?: SortOrder
    muskulo?: SortOrder
    persepsi?: SortOrder
    kritis?: SortOrder
    paliatif?: SortOrder
  }

  export type MatakuliahRelationFilter = {
    is?: MatakuliahWhereInput
    isNot?: MatakuliahWhereInput
  }

  export type BarangRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type HistoryCountOrderByAggregateInput = {
    id_history?: SortOrder
    barangId?: SortOrder
    matakuliahId?: SortOrder
    nama_barang?: SortOrder
    jumlah?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    barangId?: SortOrder
    matakuliahId?: SortOrder
    jumlah?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id_history?: SortOrder
    barangId?: SortOrder
    matakuliahId?: SortOrder
    nama_barang?: SortOrder
    jumlah?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id_history?: SortOrder
    barangId?: SortOrder
    matakuliahId?: SortOrder
    nama_barang?: SortOrder
    jumlah?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    barangId?: SortOrder
    matakuliahId?: SortOrder
    jumlah?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    total_stock?: SortOrder
    jenis_barang?: SortOrder
    harga_barang?: SortOrder
    gambar_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type BarangAvgOrderByAggregateInput = {
    id_barang?: SortOrder
    total_stock?: SortOrder
    harga_barang?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    total_stock?: SortOrder
    jenis_barang?: SortOrder
    harga_barang?: SortOrder
    gambar_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id_barang?: SortOrder
    nama_barang?: SortOrder
    total_stock?: SortOrder
    jenis_barang?: SortOrder
    harga_barang?: SortOrder
    gambar_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type BarangSumOrderByAggregateInput = {
    id_barang?: SortOrder
    total_stock?: SortOrder
    harga_barang?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type KeranjangCountOrderByAggregateInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    isCheckedOut?: SortOrder
    delete_at?: SortOrder
    userId?: SortOrder
  }

  export type KeranjangAvgOrderByAggregateInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    userId?: SortOrder
  }

  export type KeranjangMaxOrderByAggregateInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    isCheckedOut?: SortOrder
    delete_at?: SortOrder
    userId?: SortOrder
  }

  export type KeranjangMinOrderByAggregateInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    isCheckedOut?: SortOrder
    delete_at?: SortOrder
    userId?: SortOrder
  }

  export type KeranjangSumOrderByAggregateInput = {
    id_keranjang?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PeminjamNullableRelationFilter = {
    is?: PeminjamWhereInput | null
    isNot?: PeminjamWhereInput | null
  }

  export type BarangHabisPakaiCountOrderByAggregateInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangHabisPakaiAvgOrderByAggregateInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type BarangHabisPakaiMaxOrderByAggregateInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangHabisPakaiMinOrderByAggregateInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangHabisPakaiSumOrderByAggregateInput = {
    id_barang_habis_pakai?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type BarangPinjamCountOrderByAggregateInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangPinjamAvgOrderByAggregateInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type BarangPinjamMaxOrderByAggregateInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangPinjamMinOrderByAggregateInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
    jenis_barang?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangPinjamSumOrderByAggregateInput = {
    id_barang_pinjam?: SortOrder
    peminjamId?: SortOrder
    barangId?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type TransaksiBarangCountOrderByAggregateInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrder
    jumlah_barang?: SortOrder
    barangId?: SortOrder
    type?: SortOrder
    peminjamId?: SortOrder
    tanggal_keluar?: SortOrder
    tanggal_masuk?: SortOrder
    tanggal_pinjam?: SortOrder
    nama_matakuliah?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type TransaksiBarangAvgOrderByAggregateInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrder
    jumlah_barang?: SortOrder
    barangId?: SortOrder
    peminjamId?: SortOrder
  }

  export type TransaksiBarangMaxOrderByAggregateInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrder
    jumlah_barang?: SortOrder
    barangId?: SortOrder
    type?: SortOrder
    peminjamId?: SortOrder
    tanggal_keluar?: SortOrder
    tanggal_masuk?: SortOrder
    tanggal_pinjam?: SortOrder
    nama_matakuliah?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type TransaksiBarangMinOrderByAggregateInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrder
    jumlah_barang?: SortOrder
    barangId?: SortOrder
    type?: SortOrder
    peminjamId?: SortOrder
    tanggal_keluar?: SortOrder
    tanggal_masuk?: SortOrder
    tanggal_pinjam?: SortOrder
    nama_matakuliah?: SortOrder
    nama_barang?: SortOrder
    kode_barang?: SortOrder
  }

  export type TransaksiBarangSumOrderByAggregateInput = {
    id_transaksi_barang?: SortOrder
    harga_barang?: SortOrder
    jumlah_barang?: SortOrder
    barangId?: SortOrder
    peminjamId?: SortOrder
  }

  export type PeminjamCreateNestedManyWithoutUsersInput = {
    create?: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput> | PeminjamCreateWithoutUsersInput[] | PeminjamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PeminjamCreateOrConnectWithoutUsersInput | PeminjamCreateOrConnectWithoutUsersInput[]
    createMany?: PeminjamCreateManyUsersInputEnvelope
    connect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
  }

  export type KeranjangCreateNestedManyWithoutUsersInput = {
    create?: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput> | KeranjangCreateWithoutUsersInput[] | KeranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutUsersInput | KeranjangCreateOrConnectWithoutUsersInput[]
    createMany?: KeranjangCreateManyUsersInputEnvelope
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
  }

  export type PeminjamUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput> | PeminjamCreateWithoutUsersInput[] | PeminjamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PeminjamCreateOrConnectWithoutUsersInput | PeminjamCreateOrConnectWithoutUsersInput[]
    createMany?: PeminjamCreateManyUsersInputEnvelope
    connect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
  }

  export type KeranjangUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput> | KeranjangCreateWithoutUsersInput[] | KeranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutUsersInput | KeranjangCreateOrConnectWithoutUsersInput[]
    createMany?: KeranjangCreateManyUsersInputEnvelope
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PeminjamUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput> | PeminjamCreateWithoutUsersInput[] | PeminjamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PeminjamCreateOrConnectWithoutUsersInput | PeminjamCreateOrConnectWithoutUsersInput[]
    upsert?: PeminjamUpsertWithWhereUniqueWithoutUsersInput | PeminjamUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PeminjamCreateManyUsersInputEnvelope
    set?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    disconnect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    delete?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    connect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    update?: PeminjamUpdateWithWhereUniqueWithoutUsersInput | PeminjamUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PeminjamUpdateManyWithWhereWithoutUsersInput | PeminjamUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PeminjamScalarWhereInput | PeminjamScalarWhereInput[]
  }

  export type KeranjangUpdateManyWithoutUsersNestedInput = {
    create?: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput> | KeranjangCreateWithoutUsersInput[] | KeranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutUsersInput | KeranjangCreateOrConnectWithoutUsersInput[]
    upsert?: KeranjangUpsertWithWhereUniqueWithoutUsersInput | KeranjangUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: KeranjangCreateManyUsersInputEnvelope
    set?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    disconnect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    delete?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    update?: KeranjangUpdateWithWhereUniqueWithoutUsersInput | KeranjangUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: KeranjangUpdateManyWithWhereWithoutUsersInput | KeranjangUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeminjamUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput> | PeminjamCreateWithoutUsersInput[] | PeminjamUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PeminjamCreateOrConnectWithoutUsersInput | PeminjamCreateOrConnectWithoutUsersInput[]
    upsert?: PeminjamUpsertWithWhereUniqueWithoutUsersInput | PeminjamUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PeminjamCreateManyUsersInputEnvelope
    set?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    disconnect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    delete?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    connect?: PeminjamWhereUniqueInput | PeminjamWhereUniqueInput[]
    update?: PeminjamUpdateWithWhereUniqueWithoutUsersInput | PeminjamUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PeminjamUpdateManyWithWhereWithoutUsersInput | PeminjamUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PeminjamScalarWhereInput | PeminjamScalarWhereInput[]
  }

  export type KeranjangUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput> | KeranjangCreateWithoutUsersInput[] | KeranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutUsersInput | KeranjangCreateOrConnectWithoutUsersInput[]
    upsert?: KeranjangUpsertWithWhereUniqueWithoutUsersInput | KeranjangUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: KeranjangCreateManyUsersInputEnvelope
    set?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    disconnect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    delete?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    update?: KeranjangUpdateWithWhereUniqueWithoutUsersInput | KeranjangUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: KeranjangUpdateManyWithWhereWithoutUsersInput | KeranjangUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPeminjamInput = {
    create?: XOR<UsersCreateWithoutPeminjamInput, UsersUncheckedCreateWithoutPeminjamInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPeminjamInput
    connect?: UsersWhereUniqueInput
  }

  export type TransaksiBarangCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput> | TransaksiBarangCreateWithoutPeminjamInput[] | TransaksiBarangUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutPeminjamInput | TransaksiBarangCreateOrConnectWithoutPeminjamInput[]
    createMany?: TransaksiBarangCreateManyPeminjamInputEnvelope
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
  }

  export type BarangHabisPakaiCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput> | BarangHabisPakaiCreateWithoutPeminjamInput[] | BarangHabisPakaiUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutPeminjamInput | BarangHabisPakaiCreateOrConnectWithoutPeminjamInput[]
    createMany?: BarangHabisPakaiCreateManyPeminjamInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type BarangPinjamCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput> | BarangPinjamCreateWithoutPeminjamInput[] | BarangPinjamUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutPeminjamInput | BarangPinjamCreateOrConnectWithoutPeminjamInput[]
    createMany?: BarangPinjamCreateManyPeminjamInputEnvelope
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
  }

  export type TransaksiBarangUncheckedCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput> | TransaksiBarangCreateWithoutPeminjamInput[] | TransaksiBarangUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutPeminjamInput | TransaksiBarangCreateOrConnectWithoutPeminjamInput[]
    createMany?: TransaksiBarangCreateManyPeminjamInputEnvelope
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
  }

  export type BarangHabisPakaiUncheckedCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput> | BarangHabisPakaiCreateWithoutPeminjamInput[] | BarangHabisPakaiUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutPeminjamInput | BarangHabisPakaiCreateOrConnectWithoutPeminjamInput[]
    createMany?: BarangHabisPakaiCreateManyPeminjamInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type BarangPinjamUncheckedCreateNestedManyWithoutPeminjamInput = {
    create?: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput> | BarangPinjamCreateWithoutPeminjamInput[] | BarangPinjamUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutPeminjamInput | BarangPinjamCreateOrConnectWithoutPeminjamInput[]
    createMany?: BarangPinjamCreateManyPeminjamInputEnvelope
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type UsersUpdateOneRequiredWithoutPeminjamNestedInput = {
    create?: XOR<UsersCreateWithoutPeminjamInput, UsersUncheckedCreateWithoutPeminjamInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPeminjamInput
    upsert?: UsersUpsertWithoutPeminjamInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPeminjamInput, UsersUpdateWithoutPeminjamInput>, UsersUncheckedUpdateWithoutPeminjamInput>
  }

  export type TransaksiBarangUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput> | TransaksiBarangCreateWithoutPeminjamInput[] | TransaksiBarangUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutPeminjamInput | TransaksiBarangCreateOrConnectWithoutPeminjamInput[]
    upsert?: TransaksiBarangUpsertWithWhereUniqueWithoutPeminjamInput | TransaksiBarangUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: TransaksiBarangCreateManyPeminjamInputEnvelope
    set?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    disconnect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    delete?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    update?: TransaksiBarangUpdateWithWhereUniqueWithoutPeminjamInput | TransaksiBarangUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: TransaksiBarangUpdateManyWithWhereWithoutPeminjamInput | TransaksiBarangUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
  }

  export type BarangHabisPakaiUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput> | BarangHabisPakaiCreateWithoutPeminjamInput[] | BarangHabisPakaiUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutPeminjamInput | BarangHabisPakaiCreateOrConnectWithoutPeminjamInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutPeminjamInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: BarangHabisPakaiCreateManyPeminjamInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutPeminjamInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutPeminjamInput | BarangHabisPakaiUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type BarangPinjamUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput> | BarangPinjamCreateWithoutPeminjamInput[] | BarangPinjamUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutPeminjamInput | BarangPinjamCreateOrConnectWithoutPeminjamInput[]
    upsert?: BarangPinjamUpsertWithWhereUniqueWithoutPeminjamInput | BarangPinjamUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: BarangPinjamCreateManyPeminjamInputEnvelope
    set?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    disconnect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    delete?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    update?: BarangPinjamUpdateWithWhereUniqueWithoutPeminjamInput | BarangPinjamUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: BarangPinjamUpdateManyWithWhereWithoutPeminjamInput | BarangPinjamUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
  }

  export type TransaksiBarangUncheckedUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput> | TransaksiBarangCreateWithoutPeminjamInput[] | TransaksiBarangUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutPeminjamInput | TransaksiBarangCreateOrConnectWithoutPeminjamInput[]
    upsert?: TransaksiBarangUpsertWithWhereUniqueWithoutPeminjamInput | TransaksiBarangUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: TransaksiBarangCreateManyPeminjamInputEnvelope
    set?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    disconnect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    delete?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    update?: TransaksiBarangUpdateWithWhereUniqueWithoutPeminjamInput | TransaksiBarangUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: TransaksiBarangUpdateManyWithWhereWithoutPeminjamInput | TransaksiBarangUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput> | BarangHabisPakaiCreateWithoutPeminjamInput[] | BarangHabisPakaiUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutPeminjamInput | BarangHabisPakaiCreateOrConnectWithoutPeminjamInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutPeminjamInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: BarangHabisPakaiCreateManyPeminjamInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutPeminjamInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutPeminjamInput | BarangHabisPakaiUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type BarangPinjamUncheckedUpdateManyWithoutPeminjamNestedInput = {
    create?: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput> | BarangPinjamCreateWithoutPeminjamInput[] | BarangPinjamUncheckedCreateWithoutPeminjamInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutPeminjamInput | BarangPinjamCreateOrConnectWithoutPeminjamInput[]
    upsert?: BarangPinjamUpsertWithWhereUniqueWithoutPeminjamInput | BarangPinjamUpsertWithWhereUniqueWithoutPeminjamInput[]
    createMany?: BarangPinjamCreateManyPeminjamInputEnvelope
    set?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    disconnect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    delete?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    update?: BarangPinjamUpdateWithWhereUniqueWithoutPeminjamInput | BarangPinjamUpdateWithWhereUniqueWithoutPeminjamInput[]
    updateMany?: BarangPinjamUpdateManyWithWhereWithoutPeminjamInput | BarangPinjamUpdateManyWithWhereWithoutPeminjamInput[]
    deleteMany?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
  }

  export type HistoryCreateNestedManyWithoutMatkulsInput = {
    create?: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput> | HistoryCreateWithoutMatkulsInput[] | HistoryUncheckedCreateWithoutMatkulsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMatkulsInput | HistoryCreateOrConnectWithoutMatkulsInput[]
    createMany?: HistoryCreateManyMatkulsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutMatkulsInput = {
    create?: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput> | HistoryCreateWithoutMatkulsInput[] | HistoryUncheckedCreateWithoutMatkulsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMatkulsInput | HistoryCreateOrConnectWithoutMatkulsInput[]
    createMany?: HistoryCreateManyMatkulsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUpdateManyWithoutMatkulsNestedInput = {
    create?: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput> | HistoryCreateWithoutMatkulsInput[] | HistoryUncheckedCreateWithoutMatkulsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMatkulsInput | HistoryCreateOrConnectWithoutMatkulsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutMatkulsInput | HistoryUpsertWithWhereUniqueWithoutMatkulsInput[]
    createMany?: HistoryCreateManyMatkulsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutMatkulsInput | HistoryUpdateWithWhereUniqueWithoutMatkulsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutMatkulsInput | HistoryUpdateManyWithWhereWithoutMatkulsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutMatkulsNestedInput = {
    create?: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput> | HistoryCreateWithoutMatkulsInput[] | HistoryUncheckedCreateWithoutMatkulsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutMatkulsInput | HistoryCreateOrConnectWithoutMatkulsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutMatkulsInput | HistoryUpsertWithWhereUniqueWithoutMatkulsInput[]
    createMany?: HistoryCreateManyMatkulsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutMatkulsInput | HistoryUpdateWithWhereUniqueWithoutMatkulsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutMatkulsInput | HistoryUpdateManyWithWhereWithoutMatkulsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type MatakuliahCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<MatakuliahCreateWithoutHistoriesInput, MatakuliahUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutHistoriesInput
    connect?: MatakuliahWhereUniqueInput
  }

  export type BarangCreateNestedOneWithoutHistoryInput = {
    create?: XOR<BarangCreateWithoutHistoryInput, BarangUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: BarangCreateOrConnectWithoutHistoryInput
    connect?: BarangWhereUniqueInput
  }

  export type MatakuliahUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<MatakuliahCreateWithoutHistoriesInput, MatakuliahUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutHistoriesInput
    upsert?: MatakuliahUpsertWithoutHistoriesInput
    connect?: MatakuliahWhereUniqueInput
    update?: XOR<XOR<MatakuliahUpdateToOneWithWhereWithoutHistoriesInput, MatakuliahUpdateWithoutHistoriesInput>, MatakuliahUncheckedUpdateWithoutHistoriesInput>
  }

  export type BarangUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<BarangCreateWithoutHistoryInput, BarangUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: BarangCreateOrConnectWithoutHistoryInput
    upsert?: BarangUpsertWithoutHistoryInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutHistoryInput, BarangUpdateWithoutHistoryInput>, BarangUncheckedUpdateWithoutHistoryInput>
  }

  export type KeranjangCreateNestedManyWithoutBarangsInput = {
    create?: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput> | KeranjangCreateWithoutBarangsInput[] | KeranjangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutBarangsInput | KeranjangCreateOrConnectWithoutBarangsInput[]
    createMany?: KeranjangCreateManyBarangsInputEnvelope
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
  }

  export type TransaksiBarangCreateNestedManyWithoutBarangsInput = {
    create?: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput> | TransaksiBarangCreateWithoutBarangsInput[] | TransaksiBarangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutBarangsInput | TransaksiBarangCreateOrConnectWithoutBarangsInput[]
    createMany?: TransaksiBarangCreateManyBarangsInputEnvelope
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutBarangsInput = {
    create?: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput> | HistoryCreateWithoutBarangsInput[] | HistoryUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutBarangsInput | HistoryCreateOrConnectWithoutBarangsInput[]
    createMany?: HistoryCreateManyBarangsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type BarangHabisPakaiCreateNestedManyWithoutBarangsInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput> | BarangHabisPakaiCreateWithoutBarangsInput[] | BarangHabisPakaiUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutBarangsInput | BarangHabisPakaiCreateOrConnectWithoutBarangsInput[]
    createMany?: BarangHabisPakaiCreateManyBarangsInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type BarangPinjamCreateNestedManyWithoutBarangsInput = {
    create?: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput> | BarangPinjamCreateWithoutBarangsInput[] | BarangPinjamUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutBarangsInput | BarangPinjamCreateOrConnectWithoutBarangsInput[]
    createMany?: BarangPinjamCreateManyBarangsInputEnvelope
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
  }

  export type KeranjangUncheckedCreateNestedManyWithoutBarangsInput = {
    create?: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput> | KeranjangCreateWithoutBarangsInput[] | KeranjangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutBarangsInput | KeranjangCreateOrConnectWithoutBarangsInput[]
    createMany?: KeranjangCreateManyBarangsInputEnvelope
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
  }

  export type TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput = {
    create?: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput> | TransaksiBarangCreateWithoutBarangsInput[] | TransaksiBarangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutBarangsInput | TransaksiBarangCreateOrConnectWithoutBarangsInput[]
    createMany?: TransaksiBarangCreateManyBarangsInputEnvelope
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutBarangsInput = {
    create?: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput> | HistoryCreateWithoutBarangsInput[] | HistoryUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutBarangsInput | HistoryCreateOrConnectWithoutBarangsInput[]
    createMany?: HistoryCreateManyBarangsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput> | BarangHabisPakaiCreateWithoutBarangsInput[] | BarangHabisPakaiUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutBarangsInput | BarangHabisPakaiCreateOrConnectWithoutBarangsInput[]
    createMany?: BarangHabisPakaiCreateManyBarangsInputEnvelope
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
  }

  export type BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput = {
    create?: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput> | BarangPinjamCreateWithoutBarangsInput[] | BarangPinjamUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutBarangsInput | BarangPinjamCreateOrConnectWithoutBarangsInput[]
    createMany?: BarangPinjamCreateManyBarangsInputEnvelope
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
  }

  export type KeranjangUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput> | KeranjangCreateWithoutBarangsInput[] | KeranjangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutBarangsInput | KeranjangCreateOrConnectWithoutBarangsInput[]
    upsert?: KeranjangUpsertWithWhereUniqueWithoutBarangsInput | KeranjangUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: KeranjangCreateManyBarangsInputEnvelope
    set?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    disconnect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    delete?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    update?: KeranjangUpdateWithWhereUniqueWithoutBarangsInput | KeranjangUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: KeranjangUpdateManyWithWhereWithoutBarangsInput | KeranjangUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
  }

  export type TransaksiBarangUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput> | TransaksiBarangCreateWithoutBarangsInput[] | TransaksiBarangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutBarangsInput | TransaksiBarangCreateOrConnectWithoutBarangsInput[]
    upsert?: TransaksiBarangUpsertWithWhereUniqueWithoutBarangsInput | TransaksiBarangUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: TransaksiBarangCreateManyBarangsInputEnvelope
    set?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    disconnect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    delete?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    update?: TransaksiBarangUpdateWithWhereUniqueWithoutBarangsInput | TransaksiBarangUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: TransaksiBarangUpdateManyWithWhereWithoutBarangsInput | TransaksiBarangUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput> | HistoryCreateWithoutBarangsInput[] | HistoryUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutBarangsInput | HistoryCreateOrConnectWithoutBarangsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutBarangsInput | HistoryUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: HistoryCreateManyBarangsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutBarangsInput | HistoryUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutBarangsInput | HistoryUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type BarangHabisPakaiUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput> | BarangHabisPakaiCreateWithoutBarangsInput[] | BarangHabisPakaiUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutBarangsInput | BarangHabisPakaiCreateOrConnectWithoutBarangsInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutBarangsInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: BarangHabisPakaiCreateManyBarangsInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutBarangsInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutBarangsInput | BarangHabisPakaiUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type BarangPinjamUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput> | BarangPinjamCreateWithoutBarangsInput[] | BarangPinjamUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutBarangsInput | BarangPinjamCreateOrConnectWithoutBarangsInput[]
    upsert?: BarangPinjamUpsertWithWhereUniqueWithoutBarangsInput | BarangPinjamUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: BarangPinjamCreateManyBarangsInputEnvelope
    set?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    disconnect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    delete?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    update?: BarangPinjamUpdateWithWhereUniqueWithoutBarangsInput | BarangPinjamUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: BarangPinjamUpdateManyWithWhereWithoutBarangsInput | BarangPinjamUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
  }

  export type KeranjangUncheckedUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput> | KeranjangCreateWithoutBarangsInput[] | KeranjangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: KeranjangCreateOrConnectWithoutBarangsInput | KeranjangCreateOrConnectWithoutBarangsInput[]
    upsert?: KeranjangUpsertWithWhereUniqueWithoutBarangsInput | KeranjangUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: KeranjangCreateManyBarangsInputEnvelope
    set?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    disconnect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    delete?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    connect?: KeranjangWhereUniqueInput | KeranjangWhereUniqueInput[]
    update?: KeranjangUpdateWithWhereUniqueWithoutBarangsInput | KeranjangUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: KeranjangUpdateManyWithWhereWithoutBarangsInput | KeranjangUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
  }

  export type TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput> | TransaksiBarangCreateWithoutBarangsInput[] | TransaksiBarangUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: TransaksiBarangCreateOrConnectWithoutBarangsInput | TransaksiBarangCreateOrConnectWithoutBarangsInput[]
    upsert?: TransaksiBarangUpsertWithWhereUniqueWithoutBarangsInput | TransaksiBarangUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: TransaksiBarangCreateManyBarangsInputEnvelope
    set?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    disconnect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    delete?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    connect?: TransaksiBarangWhereUniqueInput | TransaksiBarangWhereUniqueInput[]
    update?: TransaksiBarangUpdateWithWhereUniqueWithoutBarangsInput | TransaksiBarangUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: TransaksiBarangUpdateManyWithWhereWithoutBarangsInput | TransaksiBarangUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput> | HistoryCreateWithoutBarangsInput[] | HistoryUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutBarangsInput | HistoryCreateOrConnectWithoutBarangsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutBarangsInput | HistoryUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: HistoryCreateManyBarangsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutBarangsInput | HistoryUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutBarangsInput | HistoryUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput> | BarangHabisPakaiCreateWithoutBarangsInput[] | BarangHabisPakaiUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangHabisPakaiCreateOrConnectWithoutBarangsInput | BarangHabisPakaiCreateOrConnectWithoutBarangsInput[]
    upsert?: BarangHabisPakaiUpsertWithWhereUniqueWithoutBarangsInput | BarangHabisPakaiUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: BarangHabisPakaiCreateManyBarangsInputEnvelope
    set?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    disconnect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    delete?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    connect?: BarangHabisPakaiWhereUniqueInput | BarangHabisPakaiWhereUniqueInput[]
    update?: BarangHabisPakaiUpdateWithWhereUniqueWithoutBarangsInput | BarangHabisPakaiUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: BarangHabisPakaiUpdateManyWithWhereWithoutBarangsInput | BarangHabisPakaiUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
  }

  export type BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput = {
    create?: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput> | BarangPinjamCreateWithoutBarangsInput[] | BarangPinjamUncheckedCreateWithoutBarangsInput[]
    connectOrCreate?: BarangPinjamCreateOrConnectWithoutBarangsInput | BarangPinjamCreateOrConnectWithoutBarangsInput[]
    upsert?: BarangPinjamUpsertWithWhereUniqueWithoutBarangsInput | BarangPinjamUpsertWithWhereUniqueWithoutBarangsInput[]
    createMany?: BarangPinjamCreateManyBarangsInputEnvelope
    set?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    disconnect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    delete?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    connect?: BarangPinjamWhereUniqueInput | BarangPinjamWhereUniqueInput[]
    update?: BarangPinjamUpdateWithWhereUniqueWithoutBarangsInput | BarangPinjamUpdateWithWhereUniqueWithoutBarangsInput[]
    updateMany?: BarangPinjamUpdateManyWithWhereWithoutBarangsInput | BarangPinjamUpdateManyWithWhereWithoutBarangsInput[]
    deleteMany?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
  }

  export type BarangCreateNestedOneWithoutKeranjangsInput = {
    create?: XOR<BarangCreateWithoutKeranjangsInput, BarangUncheckedCreateWithoutKeranjangsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutKeranjangsInput
    connect?: BarangWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<UsersCreateWithoutKeranjangInput, UsersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: UsersCreateOrConnectWithoutKeranjangInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarangUpdateOneRequiredWithoutKeranjangsNestedInput = {
    create?: XOR<BarangCreateWithoutKeranjangsInput, BarangUncheckedCreateWithoutKeranjangsInput>
    connectOrCreate?: BarangCreateOrConnectWithoutKeranjangsInput
    upsert?: BarangUpsertWithoutKeranjangsInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutKeranjangsInput, BarangUpdateWithoutKeranjangsInput>, BarangUncheckedUpdateWithoutKeranjangsInput>
  }

  export type UsersUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<UsersCreateWithoutKeranjangInput, UsersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: UsersCreateOrConnectWithoutKeranjangInput
    upsert?: UsersUpsertWithoutKeranjangInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutKeranjangInput, UsersUpdateWithoutKeranjangInput>, UsersUncheckedUpdateWithoutKeranjangInput>
  }

  export type PeminjamCreateNestedOneWithoutBarangHabisPakaiInput = {
    create?: XOR<PeminjamCreateWithoutBarangHabisPakaiInput, PeminjamUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutBarangHabisPakaiInput
    connect?: PeminjamWhereUniqueInput
  }

  export type BarangCreateNestedOneWithoutBarangHabisPakaiInput = {
    create?: XOR<BarangCreateWithoutBarangHabisPakaiInput, BarangUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: BarangCreateOrConnectWithoutBarangHabisPakaiInput
    connect?: BarangWhereUniqueInput
  }

  export type PeminjamUpdateOneWithoutBarangHabisPakaiNestedInput = {
    create?: XOR<PeminjamCreateWithoutBarangHabisPakaiInput, PeminjamUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutBarangHabisPakaiInput
    upsert?: PeminjamUpsertWithoutBarangHabisPakaiInput
    disconnect?: PeminjamWhereInput | boolean
    delete?: PeminjamWhereInput | boolean
    connect?: PeminjamWhereUniqueInput
    update?: XOR<XOR<PeminjamUpdateToOneWithWhereWithoutBarangHabisPakaiInput, PeminjamUpdateWithoutBarangHabisPakaiInput>, PeminjamUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type BarangUpdateOneRequiredWithoutBarangHabisPakaiNestedInput = {
    create?: XOR<BarangCreateWithoutBarangHabisPakaiInput, BarangUncheckedCreateWithoutBarangHabisPakaiInput>
    connectOrCreate?: BarangCreateOrConnectWithoutBarangHabisPakaiInput
    upsert?: BarangUpsertWithoutBarangHabisPakaiInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutBarangHabisPakaiInput, BarangUpdateWithoutBarangHabisPakaiInput>, BarangUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type PeminjamCreateNestedOneWithoutBarangPinjamInput = {
    create?: XOR<PeminjamCreateWithoutBarangPinjamInput, PeminjamUncheckedCreateWithoutBarangPinjamInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutBarangPinjamInput
    connect?: PeminjamWhereUniqueInput
  }

  export type BarangCreateNestedOneWithoutBarangPinjamInput = {
    create?: XOR<BarangCreateWithoutBarangPinjamInput, BarangUncheckedCreateWithoutBarangPinjamInput>
    connectOrCreate?: BarangCreateOrConnectWithoutBarangPinjamInput
    connect?: BarangWhereUniqueInput
  }

  export type PeminjamUpdateOneWithoutBarangPinjamNestedInput = {
    create?: XOR<PeminjamCreateWithoutBarangPinjamInput, PeminjamUncheckedCreateWithoutBarangPinjamInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutBarangPinjamInput
    upsert?: PeminjamUpsertWithoutBarangPinjamInput
    disconnect?: PeminjamWhereInput | boolean
    delete?: PeminjamWhereInput | boolean
    connect?: PeminjamWhereUniqueInput
    update?: XOR<XOR<PeminjamUpdateToOneWithWhereWithoutBarangPinjamInput, PeminjamUpdateWithoutBarangPinjamInput>, PeminjamUncheckedUpdateWithoutBarangPinjamInput>
  }

  export type BarangUpdateOneRequiredWithoutBarangPinjamNestedInput = {
    create?: XOR<BarangCreateWithoutBarangPinjamInput, BarangUncheckedCreateWithoutBarangPinjamInput>
    connectOrCreate?: BarangCreateOrConnectWithoutBarangPinjamInput
    upsert?: BarangUpsertWithoutBarangPinjamInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutBarangPinjamInput, BarangUpdateWithoutBarangPinjamInput>, BarangUncheckedUpdateWithoutBarangPinjamInput>
  }

  export type BarangCreateNestedOneWithoutTransaksiBarangInput = {
    create?: XOR<BarangCreateWithoutTransaksiBarangInput, BarangUncheckedCreateWithoutTransaksiBarangInput>
    connectOrCreate?: BarangCreateOrConnectWithoutTransaksiBarangInput
    connect?: BarangWhereUniqueInput
  }

  export type PeminjamCreateNestedOneWithoutTransaksiBarangInput = {
    create?: XOR<PeminjamCreateWithoutTransaksiBarangInput, PeminjamUncheckedCreateWithoutTransaksiBarangInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutTransaksiBarangInput
    connect?: PeminjamWhereUniqueInput
  }

  export type BarangUpdateOneRequiredWithoutTransaksiBarangNestedInput = {
    create?: XOR<BarangCreateWithoutTransaksiBarangInput, BarangUncheckedCreateWithoutTransaksiBarangInput>
    connectOrCreate?: BarangCreateOrConnectWithoutTransaksiBarangInput
    upsert?: BarangUpsertWithoutTransaksiBarangInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutTransaksiBarangInput, BarangUpdateWithoutTransaksiBarangInput>, BarangUncheckedUpdateWithoutTransaksiBarangInput>
  }

  export type PeminjamUpdateOneWithoutTransaksiBarangNestedInput = {
    create?: XOR<PeminjamCreateWithoutTransaksiBarangInput, PeminjamUncheckedCreateWithoutTransaksiBarangInput>
    connectOrCreate?: PeminjamCreateOrConnectWithoutTransaksiBarangInput
    upsert?: PeminjamUpsertWithoutTransaksiBarangInput
    disconnect?: PeminjamWhereInput | boolean
    delete?: PeminjamWhereInput | boolean
    connect?: PeminjamWhereUniqueInput
    update?: XOR<XOR<PeminjamUpdateToOneWithWhereWithoutTransaksiBarangInput, PeminjamUpdateWithoutTransaksiBarangInput>, PeminjamUncheckedUpdateWithoutTransaksiBarangInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PeminjamCreateWithoutUsersInput = {
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUncheckedCreateWithoutUsersInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamCreateOrConnectWithoutUsersInput = {
    where: PeminjamWhereUniqueInput
    create: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput>
  }

  export type PeminjamCreateManyUsersInputEnvelope = {
    data: PeminjamCreateManyUsersInput | PeminjamCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type KeranjangCreateWithoutUsersInput = {
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    barangs: BarangCreateNestedOneWithoutKeranjangsInput
  }

  export type KeranjangUncheckedCreateWithoutUsersInput = {
    id_keranjang?: number
    barangId: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
  }

  export type KeranjangCreateOrConnectWithoutUsersInput = {
    where: KeranjangWhereUniqueInput
    create: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput>
  }

  export type KeranjangCreateManyUsersInputEnvelope = {
    data: KeranjangCreateManyUsersInput | KeranjangCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamUpsertWithWhereUniqueWithoutUsersInput = {
    where: PeminjamWhereUniqueInput
    update: XOR<PeminjamUpdateWithoutUsersInput, PeminjamUncheckedUpdateWithoutUsersInput>
    create: XOR<PeminjamCreateWithoutUsersInput, PeminjamUncheckedCreateWithoutUsersInput>
  }

  export type PeminjamUpdateWithWhereUniqueWithoutUsersInput = {
    where: PeminjamWhereUniqueInput
    data: XOR<PeminjamUpdateWithoutUsersInput, PeminjamUncheckedUpdateWithoutUsersInput>
  }

  export type PeminjamUpdateManyWithWhereWithoutUsersInput = {
    where: PeminjamScalarWhereInput
    data: XOR<PeminjamUpdateManyMutationInput, PeminjamUncheckedUpdateManyWithoutUsersInput>
  }

  export type PeminjamScalarWhereInput = {
    AND?: PeminjamScalarWhereInput | PeminjamScalarWhereInput[]
    OR?: PeminjamScalarWhereInput[]
    NOT?: PeminjamScalarWhereInput | PeminjamScalarWhereInput[]
    id_peminjam?: IntFilter<"Peminjam"> | number
    nama_matakuliah?: StringFilter<"Peminjam"> | string
    prasat?: StringFilter<"Peminjam"> | string
    jam_praktek?: StringFilter<"Peminjam"> | string
    tanggal_praktek?: StringNullableFilter<"Peminjam"> | string | null
    tanggal_pengambilan?: DateTimeFilter<"Peminjam"> | Date | string
    userId?: IntFilter<"Peminjam"> | number
    type?: EnumTypeFilter<"Peminjam"> | $Enums.Type
  }

  export type KeranjangUpsertWithWhereUniqueWithoutUsersInput = {
    where: KeranjangWhereUniqueInput
    update: XOR<KeranjangUpdateWithoutUsersInput, KeranjangUncheckedUpdateWithoutUsersInput>
    create: XOR<KeranjangCreateWithoutUsersInput, KeranjangUncheckedCreateWithoutUsersInput>
  }

  export type KeranjangUpdateWithWhereUniqueWithoutUsersInput = {
    where: KeranjangWhereUniqueInput
    data: XOR<KeranjangUpdateWithoutUsersInput, KeranjangUncheckedUpdateWithoutUsersInput>
  }

  export type KeranjangUpdateManyWithWhereWithoutUsersInput = {
    where: KeranjangScalarWhereInput
    data: XOR<KeranjangUpdateManyMutationInput, KeranjangUncheckedUpdateManyWithoutUsersInput>
  }

  export type KeranjangScalarWhereInput = {
    AND?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
    OR?: KeranjangScalarWhereInput[]
    NOT?: KeranjangScalarWhereInput | KeranjangScalarWhereInput[]
    id_keranjang?: IntFilter<"Keranjang"> | number
    barangId?: IntFilter<"Keranjang"> | number
    jumlah_barang?: IntNullableFilter<"Keranjang"> | number | null
    isCheckedOut?: StringNullableFilter<"Keranjang"> | string | null
    delete_at?: DateTimeFilter<"Keranjang"> | Date | string
    userId?: IntFilter<"Keranjang"> | number
  }

  export type UsersCreateWithoutPeminjamInput = {
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    keranjang?: KeranjangCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPeminjamInput = {
    user_id?: number
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    keranjang?: KeranjangUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPeminjamInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPeminjamInput, UsersUncheckedCreateWithoutPeminjamInput>
  }

  export type TransaksiBarangCreateWithoutPeminjamInput = {
    harga_barang?: number | null
    jumlah_barang?: number | null
    type?: $Enums.Type
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
    barangs: BarangCreateNestedOneWithoutTransaksiBarangInput
  }

  export type TransaksiBarangUncheckedCreateWithoutPeminjamInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    barangId: number
    type?: $Enums.Type
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type TransaksiBarangCreateOrConnectWithoutPeminjamInput = {
    where: TransaksiBarangWhereUniqueInput
    create: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput>
  }

  export type TransaksiBarangCreateManyPeminjamInputEnvelope = {
    data: TransaksiBarangCreateManyPeminjamInput | TransaksiBarangCreateManyPeminjamInput[]
    skipDuplicates?: boolean
  }

  export type BarangHabisPakaiCreateWithoutPeminjamInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barangs: BarangCreateNestedOneWithoutBarangHabisPakaiInput
  }

  export type BarangHabisPakaiUncheckedCreateWithoutPeminjamInput = {
    id_barang_habis_pakai?: number
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangHabisPakaiCreateOrConnectWithoutPeminjamInput = {
    where: BarangHabisPakaiWhereUniqueInput
    create: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput>
  }

  export type BarangHabisPakaiCreateManyPeminjamInputEnvelope = {
    data: BarangHabisPakaiCreateManyPeminjamInput | BarangHabisPakaiCreateManyPeminjamInput[]
    skipDuplicates?: boolean
  }

  export type BarangPinjamCreateWithoutPeminjamInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barangs: BarangCreateNestedOneWithoutBarangPinjamInput
  }

  export type BarangPinjamUncheckedCreateWithoutPeminjamInput = {
    id_barang_pinjam?: number
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamCreateOrConnectWithoutPeminjamInput = {
    where: BarangPinjamWhereUniqueInput
    create: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput>
  }

  export type BarangPinjamCreateManyPeminjamInputEnvelope = {
    data: BarangPinjamCreateManyPeminjamInput | BarangPinjamCreateManyPeminjamInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPeminjamInput = {
    update: XOR<UsersUpdateWithoutPeminjamInput, UsersUncheckedUpdateWithoutPeminjamInput>
    create: XOR<UsersCreateWithoutPeminjamInput, UsersUncheckedCreateWithoutPeminjamInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPeminjamInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPeminjamInput, UsersUncheckedUpdateWithoutPeminjamInput>
  }

  export type UsersUpdateWithoutPeminjamInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: KeranjangUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPeminjamInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: KeranjangUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TransaksiBarangUpsertWithWhereUniqueWithoutPeminjamInput = {
    where: TransaksiBarangWhereUniqueInput
    update: XOR<TransaksiBarangUpdateWithoutPeminjamInput, TransaksiBarangUncheckedUpdateWithoutPeminjamInput>
    create: XOR<TransaksiBarangCreateWithoutPeminjamInput, TransaksiBarangUncheckedCreateWithoutPeminjamInput>
  }

  export type TransaksiBarangUpdateWithWhereUniqueWithoutPeminjamInput = {
    where: TransaksiBarangWhereUniqueInput
    data: XOR<TransaksiBarangUpdateWithoutPeminjamInput, TransaksiBarangUncheckedUpdateWithoutPeminjamInput>
  }

  export type TransaksiBarangUpdateManyWithWhereWithoutPeminjamInput = {
    where: TransaksiBarangScalarWhereInput
    data: XOR<TransaksiBarangUpdateManyMutationInput, TransaksiBarangUncheckedUpdateManyWithoutPeminjamInput>
  }

  export type TransaksiBarangScalarWhereInput = {
    AND?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
    OR?: TransaksiBarangScalarWhereInput[]
    NOT?: TransaksiBarangScalarWhereInput | TransaksiBarangScalarWhereInput[]
    id_transaksi_barang?: IntFilter<"TransaksiBarang"> | number
    harga_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    jumlah_barang?: IntNullableFilter<"TransaksiBarang"> | number | null
    barangId?: IntFilter<"TransaksiBarang"> | number
    type?: EnumTypeFilter<"TransaksiBarang"> | $Enums.Type
    peminjamId?: IntNullableFilter<"TransaksiBarang"> | number | null
    tanggal_keluar?: DateTimeNullableFilter<"TransaksiBarang"> | Date | string | null
    tanggal_masuk?: StringNullableFilter<"TransaksiBarang"> | string | null
    tanggal_pinjam?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_matakuliah?: StringNullableFilter<"TransaksiBarang"> | string | null
    nama_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
    kode_barang?: StringNullableFilter<"TransaksiBarang"> | string | null
  }

  export type BarangHabisPakaiUpsertWithWhereUniqueWithoutPeminjamInput = {
    where: BarangHabisPakaiWhereUniqueInput
    update: XOR<BarangHabisPakaiUpdateWithoutPeminjamInput, BarangHabisPakaiUncheckedUpdateWithoutPeminjamInput>
    create: XOR<BarangHabisPakaiCreateWithoutPeminjamInput, BarangHabisPakaiUncheckedCreateWithoutPeminjamInput>
  }

  export type BarangHabisPakaiUpdateWithWhereUniqueWithoutPeminjamInput = {
    where: BarangHabisPakaiWhereUniqueInput
    data: XOR<BarangHabisPakaiUpdateWithoutPeminjamInput, BarangHabisPakaiUncheckedUpdateWithoutPeminjamInput>
  }

  export type BarangHabisPakaiUpdateManyWithWhereWithoutPeminjamInput = {
    where: BarangHabisPakaiScalarWhereInput
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamInput>
  }

  export type BarangHabisPakaiScalarWhereInput = {
    AND?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
    OR?: BarangHabisPakaiScalarWhereInput[]
    NOT?: BarangHabisPakaiScalarWhereInput | BarangHabisPakaiScalarWhereInput[]
    id_barang_habis_pakai?: IntFilter<"BarangHabisPakai"> | number
    peminjamId?: IntNullableFilter<"BarangHabisPakai"> | number | null
    barangId?: IntFilter<"BarangHabisPakai"> | number
    jumlah_barang?: IntFilter<"BarangHabisPakai"> | number
    nama_barang?: StringFilter<"BarangHabisPakai"> | string
    kode_barang?: StringFilter<"BarangHabisPakai"> | string
    jenis_barang?: StringFilter<"BarangHabisPakai"> | string
    createdAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
    updatedAt?: DateTimeFilter<"BarangHabisPakai"> | Date | string
  }

  export type BarangPinjamUpsertWithWhereUniqueWithoutPeminjamInput = {
    where: BarangPinjamWhereUniqueInput
    update: XOR<BarangPinjamUpdateWithoutPeminjamInput, BarangPinjamUncheckedUpdateWithoutPeminjamInput>
    create: XOR<BarangPinjamCreateWithoutPeminjamInput, BarangPinjamUncheckedCreateWithoutPeminjamInput>
  }

  export type BarangPinjamUpdateWithWhereUniqueWithoutPeminjamInput = {
    where: BarangPinjamWhereUniqueInput
    data: XOR<BarangPinjamUpdateWithoutPeminjamInput, BarangPinjamUncheckedUpdateWithoutPeminjamInput>
  }

  export type BarangPinjamUpdateManyWithWhereWithoutPeminjamInput = {
    where: BarangPinjamScalarWhereInput
    data: XOR<BarangPinjamUpdateManyMutationInput, BarangPinjamUncheckedUpdateManyWithoutPeminjamInput>
  }

  export type BarangPinjamScalarWhereInput = {
    AND?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
    OR?: BarangPinjamScalarWhereInput[]
    NOT?: BarangPinjamScalarWhereInput | BarangPinjamScalarWhereInput[]
    id_barang_pinjam?: IntFilter<"BarangPinjam"> | number
    peminjamId?: IntNullableFilter<"BarangPinjam"> | number | null
    barangId?: IntFilter<"BarangPinjam"> | number
    jumlah_barang?: IntFilter<"BarangPinjam"> | number
    nama_barang?: StringFilter<"BarangPinjam"> | string
    kode_barang?: StringFilter<"BarangPinjam"> | string
    jenis_barang?: StringFilter<"BarangPinjam"> | string
    createdAt?: DateTimeFilter<"BarangPinjam"> | Date | string
    updatedAt?: DateTimeFilter<"BarangPinjam"> | Date | string
  }

  export type HistoryCreateWithoutMatkulsInput = {
    id_history?: string
    nama_barang: string
    jumlah: number
    barangs: BarangCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutMatkulsInput = {
    id_history?: string
    barangId: number
    nama_barang: string
    jumlah: number
  }

  export type HistoryCreateOrConnectWithoutMatkulsInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput>
  }

  export type HistoryCreateManyMatkulsInputEnvelope = {
    data: HistoryCreateManyMatkulsInput | HistoryCreateManyMatkulsInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutMatkulsInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutMatkulsInput, HistoryUncheckedUpdateWithoutMatkulsInput>
    create: XOR<HistoryCreateWithoutMatkulsInput, HistoryUncheckedCreateWithoutMatkulsInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutMatkulsInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutMatkulsInput, HistoryUncheckedUpdateWithoutMatkulsInput>
  }

  export type HistoryUpdateManyWithWhereWithoutMatkulsInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutMatkulsInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id_history?: StringFilter<"History"> | string
    barangId?: IntFilter<"History"> | number
    matakuliahId?: IntFilter<"History"> | number
    nama_barang?: StringFilter<"History"> | string
    jumlah?: IntFilter<"History"> | number
  }

  export type MatakuliahCreateWithoutHistoriesInput = {
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
  }

  export type MatakuliahUncheckedCreateWithoutHistoriesInput = {
    id_matakuliah?: number
    hematologi: number
    kardio: number
    respiratory: number
    integumen: number
    muskulo: number
    persepsi: number
    kritis: number
    paliatif: number
  }

  export type MatakuliahCreateOrConnectWithoutHistoriesInput = {
    where: MatakuliahWhereUniqueInput
    create: XOR<MatakuliahCreateWithoutHistoriesInput, MatakuliahUncheckedCreateWithoutHistoriesInput>
  }

  export type BarangCreateWithoutHistoryInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateWithoutHistoryInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangUncheckedCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangCreateOrConnectWithoutHistoryInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutHistoryInput, BarangUncheckedCreateWithoutHistoryInput>
  }

  export type MatakuliahUpsertWithoutHistoriesInput = {
    update: XOR<MatakuliahUpdateWithoutHistoriesInput, MatakuliahUncheckedUpdateWithoutHistoriesInput>
    create: XOR<MatakuliahCreateWithoutHistoriesInput, MatakuliahUncheckedCreateWithoutHistoriesInput>
    where?: MatakuliahWhereInput
  }

  export type MatakuliahUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: MatakuliahWhereInput
    data: XOR<MatakuliahUpdateWithoutHistoriesInput, MatakuliahUncheckedUpdateWithoutHistoriesInput>
  }

  export type MatakuliahUpdateWithoutHistoriesInput = {
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
  }

  export type MatakuliahUncheckedUpdateWithoutHistoriesInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    hematologi?: IntFieldUpdateOperationsInput | number
    kardio?: IntFieldUpdateOperationsInput | number
    respiratory?: IntFieldUpdateOperationsInput | number
    integumen?: IntFieldUpdateOperationsInput | number
    muskulo?: IntFieldUpdateOperationsInput | number
    persepsi?: IntFieldUpdateOperationsInput | number
    kritis?: IntFieldUpdateOperationsInput | number
    paliatif?: IntFieldUpdateOperationsInput | number
  }

  export type BarangUpsertWithoutHistoryInput = {
    update: XOR<BarangUpdateWithoutHistoryInput, BarangUncheckedUpdateWithoutHistoryInput>
    create: XOR<BarangCreateWithoutHistoryInput, BarangUncheckedCreateWithoutHistoryInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutHistoryInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutHistoryInput, BarangUncheckedUpdateWithoutHistoryInput>
  }

  export type BarangUpdateWithoutHistoryInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateWithoutHistoryInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUncheckedUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type KeranjangCreateWithoutBarangsInput = {
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    users: UsersCreateNestedOneWithoutKeranjangInput
  }

  export type KeranjangUncheckedCreateWithoutBarangsInput = {
    id_keranjang?: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    userId: number
  }

  export type KeranjangCreateOrConnectWithoutBarangsInput = {
    where: KeranjangWhereUniqueInput
    create: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput>
  }

  export type KeranjangCreateManyBarangsInputEnvelope = {
    data: KeranjangCreateManyBarangsInput | KeranjangCreateManyBarangsInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiBarangCreateWithoutBarangsInput = {
    harga_barang?: number | null
    jumlah_barang?: number | null
    type?: $Enums.Type
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
    peminjam?: PeminjamCreateNestedOneWithoutTransaksiBarangInput
  }

  export type TransaksiBarangUncheckedCreateWithoutBarangsInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    type?: $Enums.Type
    peminjamId?: number | null
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type TransaksiBarangCreateOrConnectWithoutBarangsInput = {
    where: TransaksiBarangWhereUniqueInput
    create: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput>
  }

  export type TransaksiBarangCreateManyBarangsInputEnvelope = {
    data: TransaksiBarangCreateManyBarangsInput | TransaksiBarangCreateManyBarangsInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutBarangsInput = {
    id_history?: string
    nama_barang: string
    jumlah: number
    matkuls: MatakuliahCreateNestedOneWithoutHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutBarangsInput = {
    id_history?: string
    matakuliahId: number
    nama_barang: string
    jumlah: number
  }

  export type HistoryCreateOrConnectWithoutBarangsInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput>
  }

  export type HistoryCreateManyBarangsInputEnvelope = {
    data: HistoryCreateManyBarangsInput | HistoryCreateManyBarangsInput[]
    skipDuplicates?: boolean
  }

  export type BarangHabisPakaiCreateWithoutBarangsInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjam?: PeminjamCreateNestedOneWithoutBarangHabisPakaiInput
  }

  export type BarangHabisPakaiUncheckedCreateWithoutBarangsInput = {
    id_barang_habis_pakai?: number
    peminjamId?: number | null
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangHabisPakaiCreateOrConnectWithoutBarangsInput = {
    where: BarangHabisPakaiWhereUniqueInput
    create: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput>
  }

  export type BarangHabisPakaiCreateManyBarangsInputEnvelope = {
    data: BarangHabisPakaiCreateManyBarangsInput | BarangHabisPakaiCreateManyBarangsInput[]
    skipDuplicates?: boolean
  }

  export type BarangPinjamCreateWithoutBarangsInput = {
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjam?: PeminjamCreateNestedOneWithoutBarangPinjamInput
  }

  export type BarangPinjamUncheckedCreateWithoutBarangsInput = {
    id_barang_pinjam?: number
    peminjamId?: number | null
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamCreateOrConnectWithoutBarangsInput = {
    where: BarangPinjamWhereUniqueInput
    create: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput>
  }

  export type BarangPinjamCreateManyBarangsInputEnvelope = {
    data: BarangPinjamCreateManyBarangsInput | BarangPinjamCreateManyBarangsInput[]
    skipDuplicates?: boolean
  }

  export type KeranjangUpsertWithWhereUniqueWithoutBarangsInput = {
    where: KeranjangWhereUniqueInput
    update: XOR<KeranjangUpdateWithoutBarangsInput, KeranjangUncheckedUpdateWithoutBarangsInput>
    create: XOR<KeranjangCreateWithoutBarangsInput, KeranjangUncheckedCreateWithoutBarangsInput>
  }

  export type KeranjangUpdateWithWhereUniqueWithoutBarangsInput = {
    where: KeranjangWhereUniqueInput
    data: XOR<KeranjangUpdateWithoutBarangsInput, KeranjangUncheckedUpdateWithoutBarangsInput>
  }

  export type KeranjangUpdateManyWithWhereWithoutBarangsInput = {
    where: KeranjangScalarWhereInput
    data: XOR<KeranjangUpdateManyMutationInput, KeranjangUncheckedUpdateManyWithoutBarangsInput>
  }

  export type TransaksiBarangUpsertWithWhereUniqueWithoutBarangsInput = {
    where: TransaksiBarangWhereUniqueInput
    update: XOR<TransaksiBarangUpdateWithoutBarangsInput, TransaksiBarangUncheckedUpdateWithoutBarangsInput>
    create: XOR<TransaksiBarangCreateWithoutBarangsInput, TransaksiBarangUncheckedCreateWithoutBarangsInput>
  }

  export type TransaksiBarangUpdateWithWhereUniqueWithoutBarangsInput = {
    where: TransaksiBarangWhereUniqueInput
    data: XOR<TransaksiBarangUpdateWithoutBarangsInput, TransaksiBarangUncheckedUpdateWithoutBarangsInput>
  }

  export type TransaksiBarangUpdateManyWithWhereWithoutBarangsInput = {
    where: TransaksiBarangScalarWhereInput
    data: XOR<TransaksiBarangUpdateManyMutationInput, TransaksiBarangUncheckedUpdateManyWithoutBarangsInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutBarangsInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutBarangsInput, HistoryUncheckedUpdateWithoutBarangsInput>
    create: XOR<HistoryCreateWithoutBarangsInput, HistoryUncheckedCreateWithoutBarangsInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutBarangsInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutBarangsInput, HistoryUncheckedUpdateWithoutBarangsInput>
  }

  export type HistoryUpdateManyWithWhereWithoutBarangsInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutBarangsInput>
  }

  export type BarangHabisPakaiUpsertWithWhereUniqueWithoutBarangsInput = {
    where: BarangHabisPakaiWhereUniqueInput
    update: XOR<BarangHabisPakaiUpdateWithoutBarangsInput, BarangHabisPakaiUncheckedUpdateWithoutBarangsInput>
    create: XOR<BarangHabisPakaiCreateWithoutBarangsInput, BarangHabisPakaiUncheckedCreateWithoutBarangsInput>
  }

  export type BarangHabisPakaiUpdateWithWhereUniqueWithoutBarangsInput = {
    where: BarangHabisPakaiWhereUniqueInput
    data: XOR<BarangHabisPakaiUpdateWithoutBarangsInput, BarangHabisPakaiUncheckedUpdateWithoutBarangsInput>
  }

  export type BarangHabisPakaiUpdateManyWithWhereWithoutBarangsInput = {
    where: BarangHabisPakaiScalarWhereInput
    data: XOR<BarangHabisPakaiUpdateManyMutationInput, BarangHabisPakaiUncheckedUpdateManyWithoutBarangsInput>
  }

  export type BarangPinjamUpsertWithWhereUniqueWithoutBarangsInput = {
    where: BarangPinjamWhereUniqueInput
    update: XOR<BarangPinjamUpdateWithoutBarangsInput, BarangPinjamUncheckedUpdateWithoutBarangsInput>
    create: XOR<BarangPinjamCreateWithoutBarangsInput, BarangPinjamUncheckedCreateWithoutBarangsInput>
  }

  export type BarangPinjamUpdateWithWhereUniqueWithoutBarangsInput = {
    where: BarangPinjamWhereUniqueInput
    data: XOR<BarangPinjamUpdateWithoutBarangsInput, BarangPinjamUncheckedUpdateWithoutBarangsInput>
  }

  export type BarangPinjamUpdateManyWithWhereWithoutBarangsInput = {
    where: BarangPinjamScalarWhereInput
    data: XOR<BarangPinjamUpdateManyMutationInput, BarangPinjamUncheckedUpdateManyWithoutBarangsInput>
  }

  export type BarangCreateWithoutKeranjangsInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutBarangsInput
    history?: HistoryCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateWithoutKeranjangsInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput
    history?: HistoryUncheckedCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangCreateOrConnectWithoutKeranjangsInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutKeranjangsInput, BarangUncheckedCreateWithoutKeranjangsInput>
  }

  export type UsersCreateWithoutKeranjangInput = {
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    peminjam?: PeminjamCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutKeranjangInput = {
    user_id?: number
    username: string
    password?: string | null
    email: string
    role?: $Enums.Role
    created_on?: Date | string
    last_login?: Date | string | null
    refresh_token?: string | null
    peminjam?: PeminjamUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutKeranjangInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutKeranjangInput, UsersUncheckedCreateWithoutKeranjangInput>
  }

  export type BarangUpsertWithoutKeranjangsInput = {
    update: XOR<BarangUpdateWithoutKeranjangsInput, BarangUncheckedUpdateWithoutKeranjangsInput>
    create: XOR<BarangCreateWithoutKeranjangsInput, BarangUncheckedCreateWithoutKeranjangsInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutKeranjangsInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutKeranjangsInput, BarangUncheckedUpdateWithoutKeranjangsInput>
  }

  export type BarangUpdateWithoutKeranjangsInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    transaksiBarang?: TransaksiBarangUpdateManyWithoutBarangsNestedInput
    history?: HistoryUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateWithoutKeranjangsInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput
    history?: HistoryUncheckedUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type UsersUpsertWithoutKeranjangInput = {
    update: XOR<UsersUpdateWithoutKeranjangInput, UsersUncheckedUpdateWithoutKeranjangInput>
    create: XOR<UsersCreateWithoutKeranjangInput, UsersUncheckedCreateWithoutKeranjangInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutKeranjangInput, UsersUncheckedUpdateWithoutKeranjangInput>
  }

  export type UsersUpdateWithoutKeranjangInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    peminjam?: PeminjamUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutKeranjangInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    peminjam?: PeminjamUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PeminjamCreateWithoutBarangHabisPakaiInput = {
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    users: UsersCreateNestedOneWithoutPeminjamInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUncheckedCreateWithoutBarangHabisPakaiInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    userId: number
    type?: $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamCreateOrConnectWithoutBarangHabisPakaiInput = {
    where: PeminjamWhereUniqueInput
    create: XOR<PeminjamCreateWithoutBarangHabisPakaiInput, PeminjamUncheckedCreateWithoutBarangHabisPakaiInput>
  }

  export type BarangCreateWithoutBarangHabisPakaiInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutBarangsInput
    history?: HistoryCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateWithoutBarangHabisPakaiInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangUncheckedCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput
    history?: HistoryUncheckedCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangCreateOrConnectWithoutBarangHabisPakaiInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutBarangHabisPakaiInput, BarangUncheckedCreateWithoutBarangHabisPakaiInput>
  }

  export type PeminjamUpsertWithoutBarangHabisPakaiInput = {
    update: XOR<PeminjamUpdateWithoutBarangHabisPakaiInput, PeminjamUncheckedUpdateWithoutBarangHabisPakaiInput>
    create: XOR<PeminjamCreateWithoutBarangHabisPakaiInput, PeminjamUncheckedCreateWithoutBarangHabisPakaiInput>
    where?: PeminjamWhereInput
  }

  export type PeminjamUpdateToOneWithWhereWithoutBarangHabisPakaiInput = {
    where?: PeminjamWhereInput
    data: XOR<PeminjamUpdateWithoutBarangHabisPakaiInput, PeminjamUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type PeminjamUpdateWithoutBarangHabisPakaiInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    users?: UsersUpdateOneRequiredWithoutPeminjamNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateWithoutBarangHabisPakaiInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutPeminjamNestedInput
  }

  export type BarangUpsertWithoutBarangHabisPakaiInput = {
    update: XOR<BarangUpdateWithoutBarangHabisPakaiInput, BarangUncheckedUpdateWithoutBarangHabisPakaiInput>
    create: XOR<BarangCreateWithoutBarangHabisPakaiInput, BarangUncheckedCreateWithoutBarangHabisPakaiInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutBarangHabisPakaiInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutBarangHabisPakaiInput, BarangUncheckedUpdateWithoutBarangHabisPakaiInput>
  }

  export type BarangUpdateWithoutBarangHabisPakaiInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutBarangsNestedInput
    history?: HistoryUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateWithoutBarangHabisPakaiInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUncheckedUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput
    history?: HistoryUncheckedUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type PeminjamCreateWithoutBarangPinjamInput = {
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    users: UsersCreateNestedOneWithoutPeminjamInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUncheckedCreateWithoutBarangPinjamInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    userId: number
    type?: $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamCreateOrConnectWithoutBarangPinjamInput = {
    where: PeminjamWhereUniqueInput
    create: XOR<PeminjamCreateWithoutBarangPinjamInput, PeminjamUncheckedCreateWithoutBarangPinjamInput>
  }

  export type BarangCreateWithoutBarangPinjamInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangCreateNestedManyWithoutBarangsInput
    history?: HistoryCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateWithoutBarangPinjamInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangUncheckedCreateNestedManyWithoutBarangsInput
    transaksiBarang?: TransaksiBarangUncheckedCreateNestedManyWithoutBarangsInput
    history?: HistoryUncheckedCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangCreateOrConnectWithoutBarangPinjamInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutBarangPinjamInput, BarangUncheckedCreateWithoutBarangPinjamInput>
  }

  export type PeminjamUpsertWithoutBarangPinjamInput = {
    update: XOR<PeminjamUpdateWithoutBarangPinjamInput, PeminjamUncheckedUpdateWithoutBarangPinjamInput>
    create: XOR<PeminjamCreateWithoutBarangPinjamInput, PeminjamUncheckedCreateWithoutBarangPinjamInput>
    where?: PeminjamWhereInput
  }

  export type PeminjamUpdateToOneWithWhereWithoutBarangPinjamInput = {
    where?: PeminjamWhereInput
    data: XOR<PeminjamUpdateWithoutBarangPinjamInput, PeminjamUncheckedUpdateWithoutBarangPinjamInput>
  }

  export type PeminjamUpdateWithoutBarangPinjamInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    users?: UsersUpdateOneRequiredWithoutPeminjamNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateWithoutBarangPinjamInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamNestedInput
  }

  export type BarangUpsertWithoutBarangPinjamInput = {
    update: XOR<BarangUpdateWithoutBarangPinjamInput, BarangUncheckedUpdateWithoutBarangPinjamInput>
    create: XOR<BarangCreateWithoutBarangPinjamInput, BarangUncheckedCreateWithoutBarangPinjamInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutBarangPinjamInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutBarangPinjamInput, BarangUncheckedUpdateWithoutBarangPinjamInput>
  }

  export type BarangUpdateWithoutBarangPinjamInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUpdateManyWithoutBarangsNestedInput
    history?: HistoryUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateWithoutBarangPinjamInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUncheckedUpdateManyWithoutBarangsNestedInput
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutBarangsNestedInput
    history?: HistoryUncheckedUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type BarangCreateWithoutTransaksiBarangInput = {
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangCreateNestedManyWithoutBarangsInput
    history?: HistoryCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutBarangsInput
  }

  export type BarangUncheckedCreateWithoutTransaksiBarangInput = {
    id_barang?: number
    nama_barang: string
    total_stock: number
    jenis_barang: string
    harga_barang: number
    gambar_barang?: string | null
    kode_barang: string
    keranjangs?: KeranjangUncheckedCreateNestedManyWithoutBarangsInput
    history?: HistoryUncheckedCreateNestedManyWithoutBarangsInput
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutBarangsInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutBarangsInput
  }

  export type BarangCreateOrConnectWithoutTransaksiBarangInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutTransaksiBarangInput, BarangUncheckedCreateWithoutTransaksiBarangInput>
  }

  export type PeminjamCreateWithoutTransaksiBarangInput = {
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
    users: UsersCreateNestedOneWithoutPeminjamInput
    barangHabisPakai?: BarangHabisPakaiCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamUncheckedCreateWithoutTransaksiBarangInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    userId: number
    type?: $Enums.Type
    barangHabisPakai?: BarangHabisPakaiUncheckedCreateNestedManyWithoutPeminjamInput
    barangPinjam?: BarangPinjamUncheckedCreateNestedManyWithoutPeminjamInput
  }

  export type PeminjamCreateOrConnectWithoutTransaksiBarangInput = {
    where: PeminjamWhereUniqueInput
    create: XOR<PeminjamCreateWithoutTransaksiBarangInput, PeminjamUncheckedCreateWithoutTransaksiBarangInput>
  }

  export type BarangUpsertWithoutTransaksiBarangInput = {
    update: XOR<BarangUpdateWithoutTransaksiBarangInput, BarangUncheckedUpdateWithoutTransaksiBarangInput>
    create: XOR<BarangCreateWithoutTransaksiBarangInput, BarangUncheckedCreateWithoutTransaksiBarangInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutTransaksiBarangInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutTransaksiBarangInput, BarangUncheckedUpdateWithoutTransaksiBarangInput>
  }

  export type BarangUpdateWithoutTransaksiBarangInput = {
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUpdateManyWithoutBarangsNestedInput
    history?: HistoryUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutBarangsNestedInput
  }

  export type BarangUncheckedUpdateWithoutTransaksiBarangInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    total_stock?: IntFieldUpdateOperationsInput | number
    jenis_barang?: StringFieldUpdateOperationsInput | string
    harga_barang?: IntFieldUpdateOperationsInput | number
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: StringFieldUpdateOperationsInput | string
    keranjangs?: KeranjangUncheckedUpdateManyWithoutBarangsNestedInput
    history?: HistoryUncheckedUpdateManyWithoutBarangsNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutBarangsNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutBarangsNestedInput
  }

  export type PeminjamUpsertWithoutTransaksiBarangInput = {
    update: XOR<PeminjamUpdateWithoutTransaksiBarangInput, PeminjamUncheckedUpdateWithoutTransaksiBarangInput>
    create: XOR<PeminjamCreateWithoutTransaksiBarangInput, PeminjamUncheckedCreateWithoutTransaksiBarangInput>
    where?: PeminjamWhereInput
  }

  export type PeminjamUpdateToOneWithWhereWithoutTransaksiBarangInput = {
    where?: PeminjamWhereInput
    data: XOR<PeminjamUpdateWithoutTransaksiBarangInput, PeminjamUncheckedUpdateWithoutTransaksiBarangInput>
  }

  export type PeminjamUpdateWithoutTransaksiBarangInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    users?: UsersUpdateOneRequiredWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateWithoutTransaksiBarangInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamCreateManyUsersInput = {
    id_peminjam?: number
    nama_matakuliah: string
    prasat: string
    jam_praktek: string
    tanggal_praktek?: string | null
    tanggal_pengambilan?: Date | string
    type?: $Enums.Type
  }

  export type KeranjangCreateManyUsersInput = {
    id_keranjang?: number
    barangId: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
  }

  export type PeminjamUpdateWithoutUsersInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    transaksiBarang?: TransaksiBarangUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateWithoutUsersInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    transaksiBarang?: TransaksiBarangUncheckedUpdateManyWithoutPeminjamNestedInput
    barangHabisPakai?: BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamNestedInput
    barangPinjam?: BarangPinjamUncheckedUpdateManyWithoutPeminjamNestedInput
  }

  export type PeminjamUncheckedUpdateManyWithoutUsersInput = {
    id_peminjam?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    prasat?: StringFieldUpdateOperationsInput | string
    jam_praktek?: StringFieldUpdateOperationsInput | string
    tanggal_praktek?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengambilan?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
  }

  export type KeranjangUpdateWithoutUsersInput = {
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    barangs?: BarangUpdateOneRequiredWithoutKeranjangsNestedInput
  }

  export type KeranjangUncheckedUpdateWithoutUsersInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeranjangUncheckedUpdateManyWithoutUsersInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiBarangCreateManyPeminjamInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    barangId: number
    type?: $Enums.Type
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type BarangHabisPakaiCreateManyPeminjamInput = {
    id_barang_habis_pakai?: number
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamCreateManyPeminjamInput = {
    id_barang_pinjam?: number
    barangId: number
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiBarangUpdateWithoutPeminjamInput = {
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
    barangs?: BarangUpdateOneRequiredWithoutTransaksiBarangNestedInput
  }

  export type TransaksiBarangUncheckedUpdateWithoutPeminjamInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiBarangUncheckedUpdateManyWithoutPeminjamInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    barangId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarangHabisPakaiUpdateWithoutPeminjamInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barangs?: BarangUpdateOneRequiredWithoutBarangHabisPakaiNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateWithoutPeminjamInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutPeminjamInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamUpdateWithoutPeminjamInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barangs?: BarangUpdateOneRequiredWithoutBarangPinjamNestedInput
  }

  export type BarangPinjamUncheckedUpdateWithoutPeminjamInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamUncheckedUpdateManyWithoutPeminjamInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCreateManyMatkulsInput = {
    id_history?: string
    barangId: number
    nama_barang: string
    jumlah: number
  }

  export type HistoryUpdateWithoutMatkulsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    barangs?: BarangUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutMatkulsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    barangId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyWithoutMatkulsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    barangId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type KeranjangCreateManyBarangsInput = {
    id_keranjang?: number
    jumlah_barang?: number | null
    isCheckedOut?: string | null
    delete_at?: Date | string
    userId: number
  }

  export type TransaksiBarangCreateManyBarangsInput = {
    id_transaksi_barang?: number
    harga_barang?: number | null
    jumlah_barang?: number | null
    type?: $Enums.Type
    peminjamId?: number | null
    tanggal_keluar?: Date | string | null
    tanggal_masuk?: string | null
    tanggal_pinjam?: string | null
    nama_matakuliah?: string | null
    nama_barang?: string | null
    kode_barang?: string | null
  }

  export type HistoryCreateManyBarangsInput = {
    id_history?: string
    matakuliahId: number
    nama_barang: string
    jumlah: number
  }

  export type BarangHabisPakaiCreateManyBarangsInput = {
    id_barang_habis_pakai?: number
    peminjamId?: number | null
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangPinjamCreateManyBarangsInput = {
    id_barang_pinjam?: number
    peminjamId?: number | null
    jumlah_barang: number
    nama_barang: string
    kode_barang: string
    jenis_barang: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeranjangUpdateWithoutBarangsInput = {
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type KeranjangUncheckedUpdateWithoutBarangsInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type KeranjangUncheckedUpdateManyWithoutBarangsInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    isCheckedOut?: NullableStringFieldUpdateOperationsInput | string | null
    delete_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiBarangUpdateWithoutBarangsInput = {
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
    peminjam?: PeminjamUpdateOneWithoutTransaksiBarangNestedInput
  }

  export type TransaksiBarangUncheckedUpdateWithoutBarangsInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiBarangUncheckedUpdateManyWithoutBarangsInput = {
    id_transaksi_barang?: IntFieldUpdateOperationsInput | number
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal_keluar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_masuk?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pinjam?: NullableStringFieldUpdateOperationsInput | string | null
    nama_matakuliah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kode_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoryUpdateWithoutBarangsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    matkuls?: MatakuliahUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutBarangsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    matakuliahId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyWithoutBarangsInput = {
    id_history?: StringFieldUpdateOperationsInput | string
    matakuliahId?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
  }

  export type BarangHabisPakaiUpdateWithoutBarangsInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjam?: PeminjamUpdateOneWithoutBarangHabisPakaiNestedInput
  }

  export type BarangHabisPakaiUncheckedUpdateWithoutBarangsInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangHabisPakaiUncheckedUpdateManyWithoutBarangsInput = {
    id_barang_habis_pakai?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamUpdateWithoutBarangsInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjam?: PeminjamUpdateOneWithoutBarangPinjamNestedInput
  }

  export type BarangPinjamUncheckedUpdateWithoutBarangsInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangPinjamUncheckedUpdateManyWithoutBarangsInput = {
    id_barang_pinjam?: IntFieldUpdateOperationsInput | number
    peminjamId?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    nama_barang?: StringFieldUpdateOperationsInput | string
    kode_barang?: StringFieldUpdateOperationsInput | string
    jenis_barang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeminjamCountOutputTypeDefaultArgs instead
     */
    export type PeminjamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeminjamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatakuliahCountOutputTypeDefaultArgs instead
     */
    export type MatakuliahCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangCountOutputTypeDefaultArgs instead
     */
    export type BarangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeminjamDefaultArgs instead
     */
    export type PeminjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeminjamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatakuliahDefaultArgs instead
     */
    export type MatakuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatakuliahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryDefaultArgs instead
     */
    export type HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangDefaultArgs instead
     */
    export type BarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KeranjangDefaultArgs instead
     */
    export type KeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KeranjangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangHabisPakaiDefaultArgs instead
     */
    export type BarangHabisPakaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangHabisPakaiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangPinjamDefaultArgs instead
     */
    export type BarangPinjamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangPinjamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransaksiBarangDefaultArgs instead
     */
    export type TransaksiBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransaksiBarangDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}