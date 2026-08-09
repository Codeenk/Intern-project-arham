
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model EmployeeClientMapping
 * 
 */
export type EmployeeClientMapping = $Result.DefaultSelection<Prisma.$EmployeeClientMappingPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model StagingClient
 * 
 */
export type StagingClient = $Result.DefaultSelection<Prisma.$StagingClientPayload>
/**
 * Model StagingTrade
 * 
 */
export type StagingTrade = $Result.DefaultSelection<Prisma.$StagingTradePayload>
/**
 * Model SyncRun
 * 
 */
export type SyncRun = $Result.DefaultSelection<Prisma.$SyncRunPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.employeeClientMapping`: Exposes CRUD operations for the **EmployeeClientMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeClientMappings
    * const employeeClientMappings = await prisma.employeeClientMapping.findMany()
    * ```
    */
  get employeeClientMapping(): Prisma.EmployeeClientMappingDelegate<ExtArgs>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs>;

  /**
   * `prisma.stagingClient`: Exposes CRUD operations for the **StagingClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StagingClients
    * const stagingClients = await prisma.stagingClient.findMany()
    * ```
    */
  get stagingClient(): Prisma.StagingClientDelegate<ExtArgs>;

  /**
   * `prisma.stagingTrade`: Exposes CRUD operations for the **StagingTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StagingTrades
    * const stagingTrades = await prisma.stagingTrade.findMany()
    * ```
    */
  get stagingTrade(): Prisma.StagingTradeDelegate<ExtArgs>;

  /**
   * `prisma.syncRun`: Exposes CRUD operations for the **SyncRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncRuns
    * const syncRuns = await prisma.syncRun.findMany()
    * ```
    */
  get syncRun(): Prisma.SyncRunDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Employee: 'Employee',
    Client: 'Client',
    EmployeeClientMapping: 'EmployeeClientMapping',
    Trade: 'Trade',
    StagingClient: 'StagingClient',
    StagingTrade: 'StagingTrade',
    SyncRun: 'SyncRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "employee" | "client" | "employeeClientMapping" | "trade" | "stagingClient" | "stagingTrade" | "syncRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      EmployeeClientMapping: {
        payload: Prisma.$EmployeeClientMappingPayload<ExtArgs>
        fields: Prisma.EmployeeClientMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeClientMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeClientMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          findFirst: {
            args: Prisma.EmployeeClientMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeClientMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          findMany: {
            args: Prisma.EmployeeClientMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>[]
          }
          create: {
            args: Prisma.EmployeeClientMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          createMany: {
            args: Prisma.EmployeeClientMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeClientMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>[]
          }
          delete: {
            args: Prisma.EmployeeClientMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          update: {
            args: Prisma.EmployeeClientMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeClientMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeClientMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeClientMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeClientMappingPayload>
          }
          aggregate: {
            args: Prisma.EmployeeClientMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeClientMapping>
          }
          groupBy: {
            args: Prisma.EmployeeClientMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeClientMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeClientMappingCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeClientMappingCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      StagingClient: {
        payload: Prisma.$StagingClientPayload<ExtArgs>
        fields: Prisma.StagingClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StagingClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StagingClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          findFirst: {
            args: Prisma.StagingClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StagingClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          findMany: {
            args: Prisma.StagingClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>[]
          }
          create: {
            args: Prisma.StagingClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          createMany: {
            args: Prisma.StagingClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StagingClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>[]
          }
          delete: {
            args: Prisma.StagingClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          update: {
            args: Prisma.StagingClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          deleteMany: {
            args: Prisma.StagingClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StagingClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StagingClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingClientPayload>
          }
          aggregate: {
            args: Prisma.StagingClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStagingClient>
          }
          groupBy: {
            args: Prisma.StagingClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagingClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.StagingClientCountArgs<ExtArgs>
            result: $Utils.Optional<StagingClientCountAggregateOutputType> | number
          }
        }
      }
      StagingTrade: {
        payload: Prisma.$StagingTradePayload<ExtArgs>
        fields: Prisma.StagingTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StagingTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StagingTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          findFirst: {
            args: Prisma.StagingTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StagingTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          findMany: {
            args: Prisma.StagingTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>[]
          }
          create: {
            args: Prisma.StagingTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          createMany: {
            args: Prisma.StagingTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StagingTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>[]
          }
          delete: {
            args: Prisma.StagingTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          update: {
            args: Prisma.StagingTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          deleteMany: {
            args: Prisma.StagingTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StagingTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StagingTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagingTradePayload>
          }
          aggregate: {
            args: Prisma.StagingTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStagingTrade>
          }
          groupBy: {
            args: Prisma.StagingTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagingTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StagingTradeCountArgs<ExtArgs>
            result: $Utils.Optional<StagingTradeCountAggregateOutputType> | number
          }
        }
      }
      SyncRun: {
        payload: Prisma.$SyncRunPayload<ExtArgs>
        fields: Prisma.SyncRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findFirst: {
            args: Prisma.SyncRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findMany: {
            args: Prisma.SyncRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          create: {
            args: Prisma.SyncRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          createMany: {
            args: Prisma.SyncRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          delete: {
            args: Prisma.SyncRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          update: {
            args: Prisma.SyncRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          deleteMany: {
            args: Prisma.SyncRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          aggregate: {
            args: Prisma.SyncRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncRun>
          }
          groupBy: {
            args: Prisma.SyncRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncRunCountArgs<ExtArgs>
            result: $Utils.Optional<SyncRunCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    mappings: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | EmployeeCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeClientMappingWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    trades: number
    mappings: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | ClientCountOutputTypeCountTradesArgs
    mappings?: boolean | ClientCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeClientMappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    incentiveRate: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    incentiveRate: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    incentiveRate: number | null
    createdAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    incentiveRate: number | null
    createdAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    incentiveRate: number
    createdAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    incentiveRate?: true
  }

  export type EmployeeSumAggregateInputType = {
    incentiveRate?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    incentiveRate?: true
    createdAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    incentiveRate?: true
    createdAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    incentiveRate?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    incentiveRate?: boolean
    createdAt?: boolean
    mappings?: boolean | Employee$mappingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    incentiveRate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    incentiveRate?: boolean
    createdAt?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | Employee$mappingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      mappings: Prisma.$EmployeeClientMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: string
      incentiveRate: number
      createdAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends Employee$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'String'>
    readonly incentiveRate: FieldRef<"Employee", 'Float'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee.mappings
   */
  export type Employee$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    where?: EmployeeClientMappingWhereInput
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    cursor?: EmployeeClientMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeClientMappingScalarFieldEnum | EmployeeClientMappingScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    snapshotVersion: number | null
  }

  export type ClientSumAggregateOutputType = {
    snapshotVersion: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    snapshotVersion: number | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    snapshotVersion: number | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    snapshotVersion: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    snapshotVersion?: true
  }

  export type ClientSumAggregateInputType = {
    snapshotVersion?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    snapshotVersion?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    snapshotVersion?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    snapshotVersion?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    snapshotVersion: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshotVersion?: boolean
    trades?: boolean | Client$tradesArgs<ExtArgs>
    mappings?: boolean | Client$mappingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshotVersion?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    snapshotVersion?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | Client$tradesArgs<ExtArgs>
    mappings?: boolean | Client$mappingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      trades: Prisma.$TradePayload<ExtArgs>[]
      mappings: Prisma.$EmployeeClientMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
      snapshotVersion: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trades<T extends Client$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Client$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany"> | Null>
    mappings<T extends Client$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Client$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly snapshotVersion: FieldRef<"Client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.trades
   */
  export type Client$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Client.mappings
   */
  export type Client$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    where?: EmployeeClientMappingWhereInput
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    cursor?: EmployeeClientMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeClientMappingScalarFieldEnum | EmployeeClientMappingScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeClientMapping
   */

  export type AggregateEmployeeClientMapping = {
    _count: EmployeeClientMappingCountAggregateOutputType | null
    _min: EmployeeClientMappingMinAggregateOutputType | null
    _max: EmployeeClientMappingMaxAggregateOutputType | null
  }

  export type EmployeeClientMappingMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type EmployeeClientMappingMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type EmployeeClientMappingCountAggregateOutputType = {
    id: number
    employeeId: number
    clientId: number
    createdAt: number
    _all: number
  }


  export type EmployeeClientMappingMinAggregateInputType = {
    id?: true
    employeeId?: true
    clientId?: true
    createdAt?: true
  }

  export type EmployeeClientMappingMaxAggregateInputType = {
    id?: true
    employeeId?: true
    clientId?: true
    createdAt?: true
  }

  export type EmployeeClientMappingCountAggregateInputType = {
    id?: true
    employeeId?: true
    clientId?: true
    createdAt?: true
    _all?: true
  }

  export type EmployeeClientMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeClientMapping to aggregate.
     */
    where?: EmployeeClientMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeClientMappings to fetch.
     */
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeClientMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeClientMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeClientMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeClientMappings
    **/
    _count?: true | EmployeeClientMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeClientMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeClientMappingMaxAggregateInputType
  }

  export type GetEmployeeClientMappingAggregateType<T extends EmployeeClientMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeClientMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeClientMapping[P]>
      : GetScalarType<T[P], AggregateEmployeeClientMapping[P]>
  }




  export type EmployeeClientMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeClientMappingWhereInput
    orderBy?: EmployeeClientMappingOrderByWithAggregationInput | EmployeeClientMappingOrderByWithAggregationInput[]
    by: EmployeeClientMappingScalarFieldEnum[] | EmployeeClientMappingScalarFieldEnum
    having?: EmployeeClientMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeClientMappingCountAggregateInputType | true
    _min?: EmployeeClientMappingMinAggregateInputType
    _max?: EmployeeClientMappingMaxAggregateInputType
  }

  export type EmployeeClientMappingGroupByOutputType = {
    id: string
    employeeId: string
    clientId: string
    createdAt: Date
    _count: EmployeeClientMappingCountAggregateOutputType | null
    _min: EmployeeClientMappingMinAggregateOutputType | null
    _max: EmployeeClientMappingMaxAggregateOutputType | null
  }

  type GetEmployeeClientMappingGroupByPayload<T extends EmployeeClientMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeClientMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeClientMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeClientMappingGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeClientMappingGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeClientMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeClientMapping"]>

  export type EmployeeClientMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    clientId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeClientMapping"]>

  export type EmployeeClientMappingSelectScalar = {
    id?: boolean
    employeeId?: boolean
    clientId?: boolean
    createdAt?: boolean
  }

  export type EmployeeClientMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type EmployeeClientMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $EmployeeClientMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeClientMapping"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      clientId: string
      createdAt: Date
    }, ExtArgs["result"]["employeeClientMapping"]>
    composites: {}
  }

  type EmployeeClientMappingGetPayload<S extends boolean | null | undefined | EmployeeClientMappingDefaultArgs> = $Result.GetResult<Prisma.$EmployeeClientMappingPayload, S>

  type EmployeeClientMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeClientMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeClientMappingCountAggregateInputType | true
    }

  export interface EmployeeClientMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeClientMapping'], meta: { name: 'EmployeeClientMapping' } }
    /**
     * Find zero or one EmployeeClientMapping that matches the filter.
     * @param {EmployeeClientMappingFindUniqueArgs} args - Arguments to find a EmployeeClientMapping
     * @example
     * // Get one EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeClientMappingFindUniqueArgs>(args: SelectSubset<T, EmployeeClientMappingFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmployeeClientMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeClientMappingFindUniqueOrThrowArgs} args - Arguments to find a EmployeeClientMapping
     * @example
     * // Get one EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeClientMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeClientMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmployeeClientMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingFindFirstArgs} args - Arguments to find a EmployeeClientMapping
     * @example
     * // Get one EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeClientMappingFindFirstArgs>(args?: SelectSubset<T, EmployeeClientMappingFindFirstArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmployeeClientMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingFindFirstOrThrowArgs} args - Arguments to find a EmployeeClientMapping
     * @example
     * // Get one EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeClientMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeClientMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmployeeClientMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeClientMappings
     * const employeeClientMappings = await prisma.employeeClientMapping.findMany()
     * 
     * // Get first 10 EmployeeClientMappings
     * const employeeClientMappings = await prisma.employeeClientMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeClientMappingWithIdOnly = await prisma.employeeClientMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeClientMappingFindManyArgs>(args?: SelectSubset<T, EmployeeClientMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmployeeClientMapping.
     * @param {EmployeeClientMappingCreateArgs} args - Arguments to create a EmployeeClientMapping.
     * @example
     * // Create one EmployeeClientMapping
     * const EmployeeClientMapping = await prisma.employeeClientMapping.create({
     *   data: {
     *     // ... data to create a EmployeeClientMapping
     *   }
     * })
     * 
     */
    create<T extends EmployeeClientMappingCreateArgs>(args: SelectSubset<T, EmployeeClientMappingCreateArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmployeeClientMappings.
     * @param {EmployeeClientMappingCreateManyArgs} args - Arguments to create many EmployeeClientMappings.
     * @example
     * // Create many EmployeeClientMappings
     * const employeeClientMapping = await prisma.employeeClientMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeClientMappingCreateManyArgs>(args?: SelectSubset<T, EmployeeClientMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeClientMappings and returns the data saved in the database.
     * @param {EmployeeClientMappingCreateManyAndReturnArgs} args - Arguments to create many EmployeeClientMappings.
     * @example
     * // Create many EmployeeClientMappings
     * const employeeClientMapping = await prisma.employeeClientMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeClientMappings and only return the `id`
     * const employeeClientMappingWithIdOnly = await prisma.employeeClientMapping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeClientMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeClientMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmployeeClientMapping.
     * @param {EmployeeClientMappingDeleteArgs} args - Arguments to delete one EmployeeClientMapping.
     * @example
     * // Delete one EmployeeClientMapping
     * const EmployeeClientMapping = await prisma.employeeClientMapping.delete({
     *   where: {
     *     // ... filter to delete one EmployeeClientMapping
     *   }
     * })
     * 
     */
    delete<T extends EmployeeClientMappingDeleteArgs>(args: SelectSubset<T, EmployeeClientMappingDeleteArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmployeeClientMapping.
     * @param {EmployeeClientMappingUpdateArgs} args - Arguments to update one EmployeeClientMapping.
     * @example
     * // Update one EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeClientMappingUpdateArgs>(args: SelectSubset<T, EmployeeClientMappingUpdateArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmployeeClientMappings.
     * @param {EmployeeClientMappingDeleteManyArgs} args - Arguments to filter EmployeeClientMappings to delete.
     * @example
     * // Delete a few EmployeeClientMappings
     * const { count } = await prisma.employeeClientMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeClientMappingDeleteManyArgs>(args?: SelectSubset<T, EmployeeClientMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeClientMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeClientMappings
     * const employeeClientMapping = await prisma.employeeClientMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeClientMappingUpdateManyArgs>(args: SelectSubset<T, EmployeeClientMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeClientMapping.
     * @param {EmployeeClientMappingUpsertArgs} args - Arguments to update or create a EmployeeClientMapping.
     * @example
     * // Update or create a EmployeeClientMapping
     * const employeeClientMapping = await prisma.employeeClientMapping.upsert({
     *   create: {
     *     // ... data to create a EmployeeClientMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeClientMapping we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeClientMappingUpsertArgs>(args: SelectSubset<T, EmployeeClientMappingUpsertArgs<ExtArgs>>): Prisma__EmployeeClientMappingClient<$Result.GetResult<Prisma.$EmployeeClientMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmployeeClientMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingCountArgs} args - Arguments to filter EmployeeClientMappings to count.
     * @example
     * // Count the number of EmployeeClientMappings
     * const count = await prisma.employeeClientMapping.count({
     *   where: {
     *     // ... the filter for the EmployeeClientMappings we want to count
     *   }
     * })
    **/
    count<T extends EmployeeClientMappingCountArgs>(
      args?: Subset<T, EmployeeClientMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeClientMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeClientMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeClientMappingAggregateArgs>(args: Subset<T, EmployeeClientMappingAggregateArgs>): Prisma.PrismaPromise<GetEmployeeClientMappingAggregateType<T>>

    /**
     * Group by EmployeeClientMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeClientMappingGroupByArgs} args - Group by arguments.
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
      T extends EmployeeClientMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeClientMappingGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeClientMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeClientMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeClientMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeClientMapping model
   */
  readonly fields: EmployeeClientMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeClientMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClientMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeClientMapping model
   */ 
  interface EmployeeClientMappingFieldRefs {
    readonly id: FieldRef<"EmployeeClientMapping", 'String'>
    readonly employeeId: FieldRef<"EmployeeClientMapping", 'String'>
    readonly clientId: FieldRef<"EmployeeClientMapping", 'String'>
    readonly createdAt: FieldRef<"EmployeeClientMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeClientMapping findUnique
   */
  export type EmployeeClientMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeClientMapping to fetch.
     */
    where: EmployeeClientMappingWhereUniqueInput
  }

  /**
   * EmployeeClientMapping findUniqueOrThrow
   */
  export type EmployeeClientMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeClientMapping to fetch.
     */
    where: EmployeeClientMappingWhereUniqueInput
  }

  /**
   * EmployeeClientMapping findFirst
   */
  export type EmployeeClientMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeClientMapping to fetch.
     */
    where?: EmployeeClientMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeClientMappings to fetch.
     */
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeClientMappings.
     */
    cursor?: EmployeeClientMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeClientMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeClientMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeClientMappings.
     */
    distinct?: EmployeeClientMappingScalarFieldEnum | EmployeeClientMappingScalarFieldEnum[]
  }

  /**
   * EmployeeClientMapping findFirstOrThrow
   */
  export type EmployeeClientMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeClientMapping to fetch.
     */
    where?: EmployeeClientMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeClientMappings to fetch.
     */
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeClientMappings.
     */
    cursor?: EmployeeClientMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeClientMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeClientMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeClientMappings.
     */
    distinct?: EmployeeClientMappingScalarFieldEnum | EmployeeClientMappingScalarFieldEnum[]
  }

  /**
   * EmployeeClientMapping findMany
   */
  export type EmployeeClientMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeClientMappings to fetch.
     */
    where?: EmployeeClientMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeClientMappings to fetch.
     */
    orderBy?: EmployeeClientMappingOrderByWithRelationInput | EmployeeClientMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeClientMappings.
     */
    cursor?: EmployeeClientMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeClientMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeClientMappings.
     */
    skip?: number
    distinct?: EmployeeClientMappingScalarFieldEnum | EmployeeClientMappingScalarFieldEnum[]
  }

  /**
   * EmployeeClientMapping create
   */
  export type EmployeeClientMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeClientMapping.
     */
    data: XOR<EmployeeClientMappingCreateInput, EmployeeClientMappingUncheckedCreateInput>
  }

  /**
   * EmployeeClientMapping createMany
   */
  export type EmployeeClientMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeClientMappings.
     */
    data: EmployeeClientMappingCreateManyInput | EmployeeClientMappingCreateManyInput[]
  }

  /**
   * EmployeeClientMapping createManyAndReturn
   */
  export type EmployeeClientMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmployeeClientMappings.
     */
    data: EmployeeClientMappingCreateManyInput | EmployeeClientMappingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeClientMapping update
   */
  export type EmployeeClientMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeClientMapping.
     */
    data: XOR<EmployeeClientMappingUpdateInput, EmployeeClientMappingUncheckedUpdateInput>
    /**
     * Choose, which EmployeeClientMapping to update.
     */
    where: EmployeeClientMappingWhereUniqueInput
  }

  /**
   * EmployeeClientMapping updateMany
   */
  export type EmployeeClientMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeClientMappings.
     */
    data: XOR<EmployeeClientMappingUpdateManyMutationInput, EmployeeClientMappingUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeClientMappings to update
     */
    where?: EmployeeClientMappingWhereInput
  }

  /**
   * EmployeeClientMapping upsert
   */
  export type EmployeeClientMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeClientMapping to update in case it exists.
     */
    where: EmployeeClientMappingWhereUniqueInput
    /**
     * In case the EmployeeClientMapping found by the `where` argument doesn't exist, create a new EmployeeClientMapping with this data.
     */
    create: XOR<EmployeeClientMappingCreateInput, EmployeeClientMappingUncheckedCreateInput>
    /**
     * In case the EmployeeClientMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeClientMappingUpdateInput, EmployeeClientMappingUncheckedUpdateInput>
  }

  /**
   * EmployeeClientMapping delete
   */
  export type EmployeeClientMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
    /**
     * Filter which EmployeeClientMapping to delete.
     */
    where: EmployeeClientMappingWhereUniqueInput
  }

  /**
   * EmployeeClientMapping deleteMany
   */
  export type EmployeeClientMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeClientMappings to delete
     */
    where?: EmployeeClientMappingWhereInput
  }

  /**
   * EmployeeClientMapping without action
   */
  export type EmployeeClientMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeClientMapping
     */
    select?: EmployeeClientMappingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeClientMappingInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    brokerage: number | null
    snapshotVersion: number | null
  }

  export type TradeSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    brokerage: number | null
    snapshotVersion: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    tradeDate: Date | null
    symbol: string | null
    quantity: number | null
    price: number | null
    brokerage: number | null
    snapshotVersion: number | null
    createdAt: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    tradeDate: Date | null
    symbol: string | null
    quantity: number | null
    price: number | null
    brokerage: number | null
    snapshotVersion: number | null
    createdAt: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    clientId: number
    tradeDate: number
    symbol: number
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    quantity?: true
    price?: true
    brokerage?: true
    snapshotVersion?: true
  }

  export type TradeSumAggregateInputType = {
    quantity?: true
    price?: true
    brokerage?: true
    snapshotVersion?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    snapshotVersion?: true
    createdAt?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    snapshotVersion?: true
    createdAt?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    snapshotVersion?: true
    createdAt?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    clientId: string
    tradeDate: Date
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    snapshotVersion?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    snapshotVersion?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    snapshotVersion?: boolean
    createdAt?: boolean
  }

  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      tradeDate: Date
      symbol: string
      quantity: number
      price: number
      brokerage: number
      snapshotVersion: number
      createdAt: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
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
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */ 
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly clientId: FieldRef<"Trade", 'String'>
    readonly tradeDate: FieldRef<"Trade", 'DateTime'>
    readonly symbol: FieldRef<"Trade", 'String'>
    readonly quantity: FieldRef<"Trade", 'Int'>
    readonly price: FieldRef<"Trade", 'Float'>
    readonly brokerage: FieldRef<"Trade", 'Float'>
    readonly snapshotVersion: FieldRef<"Trade", 'Int'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model StagingClient
   */

  export type AggregateStagingClient = {
    _count: StagingClientCountAggregateOutputType | null
    _avg: StagingClientAvgAggregateOutputType | null
    _sum: StagingClientSumAggregateOutputType | null
    _min: StagingClientMinAggregateOutputType | null
    _max: StagingClientMaxAggregateOutputType | null
  }

  export type StagingClientAvgAggregateOutputType = {
    syncVersion: number | null
  }

  export type StagingClientSumAggregateOutputType = {
    syncVersion: number | null
  }

  export type StagingClientMinAggregateOutputType = {
    id: string | null
    syncVersion: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type StagingClientMaxAggregateOutputType = {
    id: string | null
    syncVersion: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type StagingClientCountAggregateOutputType = {
    id: number
    syncVersion: number
    name: number
    email: number
    phone: number
    createdAt: number
    _all: number
  }


  export type StagingClientAvgAggregateInputType = {
    syncVersion?: true
  }

  export type StagingClientSumAggregateInputType = {
    syncVersion?: true
  }

  export type StagingClientMinAggregateInputType = {
    id?: true
    syncVersion?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type StagingClientMaxAggregateInputType = {
    id?: true
    syncVersion?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type StagingClientCountAggregateInputType = {
    id?: true
    syncVersion?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type StagingClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StagingClient to aggregate.
     */
    where?: StagingClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingClients to fetch.
     */
    orderBy?: StagingClientOrderByWithRelationInput | StagingClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StagingClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StagingClients
    **/
    _count?: true | StagingClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StagingClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StagingClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagingClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagingClientMaxAggregateInputType
  }

  export type GetStagingClientAggregateType<T extends StagingClientAggregateArgs> = {
        [P in keyof T & keyof AggregateStagingClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStagingClient[P]>
      : GetScalarType<T[P], AggregateStagingClient[P]>
  }




  export type StagingClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StagingClientWhereInput
    orderBy?: StagingClientOrderByWithAggregationInput | StagingClientOrderByWithAggregationInput[]
    by: StagingClientScalarFieldEnum[] | StagingClientScalarFieldEnum
    having?: StagingClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagingClientCountAggregateInputType | true
    _avg?: StagingClientAvgAggregateInputType
    _sum?: StagingClientSumAggregateInputType
    _min?: StagingClientMinAggregateInputType
    _max?: StagingClientMaxAggregateInputType
  }

  export type StagingClientGroupByOutputType = {
    id: string
    syncVersion: number
    name: string
    email: string
    phone: string
    createdAt: Date
    _count: StagingClientCountAggregateOutputType | null
    _avg: StagingClientAvgAggregateOutputType | null
    _sum: StagingClientSumAggregateOutputType | null
    _min: StagingClientMinAggregateOutputType | null
    _max: StagingClientMaxAggregateOutputType | null
  }

  type GetStagingClientGroupByPayload<T extends StagingClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagingClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagingClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagingClientGroupByOutputType[P]>
            : GetScalarType<T[P], StagingClientGroupByOutputType[P]>
        }
      >
    >


  export type StagingClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncVersion?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stagingClient"]>

  export type StagingClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncVersion?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stagingClient"]>

  export type StagingClientSelectScalar = {
    id?: boolean
    syncVersion?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }


  export type $StagingClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StagingClient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      syncVersion: number
      name: string
      email: string
      phone: string
      createdAt: Date
    }, ExtArgs["result"]["stagingClient"]>
    composites: {}
  }

  type StagingClientGetPayload<S extends boolean | null | undefined | StagingClientDefaultArgs> = $Result.GetResult<Prisma.$StagingClientPayload, S>

  type StagingClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StagingClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StagingClientCountAggregateInputType | true
    }

  export interface StagingClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StagingClient'], meta: { name: 'StagingClient' } }
    /**
     * Find zero or one StagingClient that matches the filter.
     * @param {StagingClientFindUniqueArgs} args - Arguments to find a StagingClient
     * @example
     * // Get one StagingClient
     * const stagingClient = await prisma.stagingClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StagingClientFindUniqueArgs>(args: SelectSubset<T, StagingClientFindUniqueArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StagingClient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StagingClientFindUniqueOrThrowArgs} args - Arguments to find a StagingClient
     * @example
     * // Get one StagingClient
     * const stagingClient = await prisma.stagingClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StagingClientFindUniqueOrThrowArgs>(args: SelectSubset<T, StagingClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StagingClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientFindFirstArgs} args - Arguments to find a StagingClient
     * @example
     * // Get one StagingClient
     * const stagingClient = await prisma.stagingClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StagingClientFindFirstArgs>(args?: SelectSubset<T, StagingClientFindFirstArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StagingClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientFindFirstOrThrowArgs} args - Arguments to find a StagingClient
     * @example
     * // Get one StagingClient
     * const stagingClient = await prisma.stagingClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StagingClientFindFirstOrThrowArgs>(args?: SelectSubset<T, StagingClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StagingClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StagingClients
     * const stagingClients = await prisma.stagingClient.findMany()
     * 
     * // Get first 10 StagingClients
     * const stagingClients = await prisma.stagingClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stagingClientWithIdOnly = await prisma.stagingClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StagingClientFindManyArgs>(args?: SelectSubset<T, StagingClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StagingClient.
     * @param {StagingClientCreateArgs} args - Arguments to create a StagingClient.
     * @example
     * // Create one StagingClient
     * const StagingClient = await prisma.stagingClient.create({
     *   data: {
     *     // ... data to create a StagingClient
     *   }
     * })
     * 
     */
    create<T extends StagingClientCreateArgs>(args: SelectSubset<T, StagingClientCreateArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StagingClients.
     * @param {StagingClientCreateManyArgs} args - Arguments to create many StagingClients.
     * @example
     * // Create many StagingClients
     * const stagingClient = await prisma.stagingClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StagingClientCreateManyArgs>(args?: SelectSubset<T, StagingClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StagingClients and returns the data saved in the database.
     * @param {StagingClientCreateManyAndReturnArgs} args - Arguments to create many StagingClients.
     * @example
     * // Create many StagingClients
     * const stagingClient = await prisma.stagingClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StagingClients and only return the `id`
     * const stagingClientWithIdOnly = await prisma.stagingClient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StagingClientCreateManyAndReturnArgs>(args?: SelectSubset<T, StagingClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StagingClient.
     * @param {StagingClientDeleteArgs} args - Arguments to delete one StagingClient.
     * @example
     * // Delete one StagingClient
     * const StagingClient = await prisma.stagingClient.delete({
     *   where: {
     *     // ... filter to delete one StagingClient
     *   }
     * })
     * 
     */
    delete<T extends StagingClientDeleteArgs>(args: SelectSubset<T, StagingClientDeleteArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StagingClient.
     * @param {StagingClientUpdateArgs} args - Arguments to update one StagingClient.
     * @example
     * // Update one StagingClient
     * const stagingClient = await prisma.stagingClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StagingClientUpdateArgs>(args: SelectSubset<T, StagingClientUpdateArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StagingClients.
     * @param {StagingClientDeleteManyArgs} args - Arguments to filter StagingClients to delete.
     * @example
     * // Delete a few StagingClients
     * const { count } = await prisma.stagingClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StagingClientDeleteManyArgs>(args?: SelectSubset<T, StagingClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StagingClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StagingClients
     * const stagingClient = await prisma.stagingClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StagingClientUpdateManyArgs>(args: SelectSubset<T, StagingClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StagingClient.
     * @param {StagingClientUpsertArgs} args - Arguments to update or create a StagingClient.
     * @example
     * // Update or create a StagingClient
     * const stagingClient = await prisma.stagingClient.upsert({
     *   create: {
     *     // ... data to create a StagingClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StagingClient we want to update
     *   }
     * })
     */
    upsert<T extends StagingClientUpsertArgs>(args: SelectSubset<T, StagingClientUpsertArgs<ExtArgs>>): Prisma__StagingClientClient<$Result.GetResult<Prisma.$StagingClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StagingClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientCountArgs} args - Arguments to filter StagingClients to count.
     * @example
     * // Count the number of StagingClients
     * const count = await prisma.stagingClient.count({
     *   where: {
     *     // ... the filter for the StagingClients we want to count
     *   }
     * })
    **/
    count<T extends StagingClientCountArgs>(
      args?: Subset<T, StagingClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagingClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StagingClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StagingClientAggregateArgs>(args: Subset<T, StagingClientAggregateArgs>): Prisma.PrismaPromise<GetStagingClientAggregateType<T>>

    /**
     * Group by StagingClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingClientGroupByArgs} args - Group by arguments.
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
      T extends StagingClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StagingClientGroupByArgs['orderBy'] }
        : { orderBy?: StagingClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StagingClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagingClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StagingClient model
   */
  readonly fields: StagingClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StagingClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StagingClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StagingClient model
   */ 
  interface StagingClientFieldRefs {
    readonly id: FieldRef<"StagingClient", 'String'>
    readonly syncVersion: FieldRef<"StagingClient", 'Int'>
    readonly name: FieldRef<"StagingClient", 'String'>
    readonly email: FieldRef<"StagingClient", 'String'>
    readonly phone: FieldRef<"StagingClient", 'String'>
    readonly createdAt: FieldRef<"StagingClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StagingClient findUnique
   */
  export type StagingClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter, which StagingClient to fetch.
     */
    where: StagingClientWhereUniqueInput
  }

  /**
   * StagingClient findUniqueOrThrow
   */
  export type StagingClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter, which StagingClient to fetch.
     */
    where: StagingClientWhereUniqueInput
  }

  /**
   * StagingClient findFirst
   */
  export type StagingClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter, which StagingClient to fetch.
     */
    where?: StagingClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingClients to fetch.
     */
    orderBy?: StagingClientOrderByWithRelationInput | StagingClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StagingClients.
     */
    cursor?: StagingClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StagingClients.
     */
    distinct?: StagingClientScalarFieldEnum | StagingClientScalarFieldEnum[]
  }

  /**
   * StagingClient findFirstOrThrow
   */
  export type StagingClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter, which StagingClient to fetch.
     */
    where?: StagingClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingClients to fetch.
     */
    orderBy?: StagingClientOrderByWithRelationInput | StagingClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StagingClients.
     */
    cursor?: StagingClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StagingClients.
     */
    distinct?: StagingClientScalarFieldEnum | StagingClientScalarFieldEnum[]
  }

  /**
   * StagingClient findMany
   */
  export type StagingClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter, which StagingClients to fetch.
     */
    where?: StagingClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingClients to fetch.
     */
    orderBy?: StagingClientOrderByWithRelationInput | StagingClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StagingClients.
     */
    cursor?: StagingClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingClients.
     */
    skip?: number
    distinct?: StagingClientScalarFieldEnum | StagingClientScalarFieldEnum[]
  }

  /**
   * StagingClient create
   */
  export type StagingClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * The data needed to create a StagingClient.
     */
    data: XOR<StagingClientCreateInput, StagingClientUncheckedCreateInput>
  }

  /**
   * StagingClient createMany
   */
  export type StagingClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StagingClients.
     */
    data: StagingClientCreateManyInput | StagingClientCreateManyInput[]
  }

  /**
   * StagingClient createManyAndReturn
   */
  export type StagingClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StagingClients.
     */
    data: StagingClientCreateManyInput | StagingClientCreateManyInput[]
  }

  /**
   * StagingClient update
   */
  export type StagingClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * The data needed to update a StagingClient.
     */
    data: XOR<StagingClientUpdateInput, StagingClientUncheckedUpdateInput>
    /**
     * Choose, which StagingClient to update.
     */
    where: StagingClientWhereUniqueInput
  }

  /**
   * StagingClient updateMany
   */
  export type StagingClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StagingClients.
     */
    data: XOR<StagingClientUpdateManyMutationInput, StagingClientUncheckedUpdateManyInput>
    /**
     * Filter which StagingClients to update
     */
    where?: StagingClientWhereInput
  }

  /**
   * StagingClient upsert
   */
  export type StagingClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * The filter to search for the StagingClient to update in case it exists.
     */
    where: StagingClientWhereUniqueInput
    /**
     * In case the StagingClient found by the `where` argument doesn't exist, create a new StagingClient with this data.
     */
    create: XOR<StagingClientCreateInput, StagingClientUncheckedCreateInput>
    /**
     * In case the StagingClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StagingClientUpdateInput, StagingClientUncheckedUpdateInput>
  }

  /**
   * StagingClient delete
   */
  export type StagingClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
    /**
     * Filter which StagingClient to delete.
     */
    where: StagingClientWhereUniqueInput
  }

  /**
   * StagingClient deleteMany
   */
  export type StagingClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StagingClients to delete
     */
    where?: StagingClientWhereInput
  }

  /**
   * StagingClient without action
   */
  export type StagingClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingClient
     */
    select?: StagingClientSelect<ExtArgs> | null
  }


  /**
   * Model StagingTrade
   */

  export type AggregateStagingTrade = {
    _count: StagingTradeCountAggregateOutputType | null
    _avg: StagingTradeAvgAggregateOutputType | null
    _sum: StagingTradeSumAggregateOutputType | null
    _min: StagingTradeMinAggregateOutputType | null
    _max: StagingTradeMaxAggregateOutputType | null
  }

  export type StagingTradeAvgAggregateOutputType = {
    syncVersion: number | null
    quantity: number | null
    price: number | null
    brokerage: number | null
  }

  export type StagingTradeSumAggregateOutputType = {
    syncVersion: number | null
    quantity: number | null
    price: number | null
    brokerage: number | null
  }

  export type StagingTradeMinAggregateOutputType = {
    id: string | null
    syncVersion: number | null
    clientId: string | null
    tradeDate: Date | null
    symbol: string | null
    quantity: number | null
    price: number | null
    brokerage: number | null
    createdAt: Date | null
  }

  export type StagingTradeMaxAggregateOutputType = {
    id: string | null
    syncVersion: number | null
    clientId: string | null
    tradeDate: Date | null
    symbol: string | null
    quantity: number | null
    price: number | null
    brokerage: number | null
    createdAt: Date | null
  }

  export type StagingTradeCountAggregateOutputType = {
    id: number
    syncVersion: number
    clientId: number
    tradeDate: number
    symbol: number
    quantity: number
    price: number
    brokerage: number
    createdAt: number
    _all: number
  }


  export type StagingTradeAvgAggregateInputType = {
    syncVersion?: true
    quantity?: true
    price?: true
    brokerage?: true
  }

  export type StagingTradeSumAggregateInputType = {
    syncVersion?: true
    quantity?: true
    price?: true
    brokerage?: true
  }

  export type StagingTradeMinAggregateInputType = {
    id?: true
    syncVersion?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    createdAt?: true
  }

  export type StagingTradeMaxAggregateInputType = {
    id?: true
    syncVersion?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    createdAt?: true
  }

  export type StagingTradeCountAggregateInputType = {
    id?: true
    syncVersion?: true
    clientId?: true
    tradeDate?: true
    symbol?: true
    quantity?: true
    price?: true
    brokerage?: true
    createdAt?: true
    _all?: true
  }

  export type StagingTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StagingTrade to aggregate.
     */
    where?: StagingTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingTrades to fetch.
     */
    orderBy?: StagingTradeOrderByWithRelationInput | StagingTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StagingTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StagingTrades
    **/
    _count?: true | StagingTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StagingTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StagingTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagingTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagingTradeMaxAggregateInputType
  }

  export type GetStagingTradeAggregateType<T extends StagingTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateStagingTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStagingTrade[P]>
      : GetScalarType<T[P], AggregateStagingTrade[P]>
  }




  export type StagingTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StagingTradeWhereInput
    orderBy?: StagingTradeOrderByWithAggregationInput | StagingTradeOrderByWithAggregationInput[]
    by: StagingTradeScalarFieldEnum[] | StagingTradeScalarFieldEnum
    having?: StagingTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagingTradeCountAggregateInputType | true
    _avg?: StagingTradeAvgAggregateInputType
    _sum?: StagingTradeSumAggregateInputType
    _min?: StagingTradeMinAggregateInputType
    _max?: StagingTradeMaxAggregateInputType
  }

  export type StagingTradeGroupByOutputType = {
    id: string
    syncVersion: number
    clientId: string
    tradeDate: Date
    symbol: string
    quantity: number
    price: number
    brokerage: number
    createdAt: Date
    _count: StagingTradeCountAggregateOutputType | null
    _avg: StagingTradeAvgAggregateOutputType | null
    _sum: StagingTradeSumAggregateOutputType | null
    _min: StagingTradeMinAggregateOutputType | null
    _max: StagingTradeMaxAggregateOutputType | null
  }

  type GetStagingTradeGroupByPayload<T extends StagingTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagingTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagingTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagingTradeGroupByOutputType[P]>
            : GetScalarType<T[P], StagingTradeGroupByOutputType[P]>
        }
      >
    >


  export type StagingTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncVersion?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stagingTrade"]>

  export type StagingTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syncVersion?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stagingTrade"]>

  export type StagingTradeSelectScalar = {
    id?: boolean
    syncVersion?: boolean
    clientId?: boolean
    tradeDate?: boolean
    symbol?: boolean
    quantity?: boolean
    price?: boolean
    brokerage?: boolean
    createdAt?: boolean
  }


  export type $StagingTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StagingTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      syncVersion: number
      clientId: string
      tradeDate: Date
      symbol: string
      quantity: number
      price: number
      brokerage: number
      createdAt: Date
    }, ExtArgs["result"]["stagingTrade"]>
    composites: {}
  }

  type StagingTradeGetPayload<S extends boolean | null | undefined | StagingTradeDefaultArgs> = $Result.GetResult<Prisma.$StagingTradePayload, S>

  type StagingTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StagingTradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StagingTradeCountAggregateInputType | true
    }

  export interface StagingTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StagingTrade'], meta: { name: 'StagingTrade' } }
    /**
     * Find zero or one StagingTrade that matches the filter.
     * @param {StagingTradeFindUniqueArgs} args - Arguments to find a StagingTrade
     * @example
     * // Get one StagingTrade
     * const stagingTrade = await prisma.stagingTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StagingTradeFindUniqueArgs>(args: SelectSubset<T, StagingTradeFindUniqueArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StagingTrade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StagingTradeFindUniqueOrThrowArgs} args - Arguments to find a StagingTrade
     * @example
     * // Get one StagingTrade
     * const stagingTrade = await prisma.stagingTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StagingTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, StagingTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StagingTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeFindFirstArgs} args - Arguments to find a StagingTrade
     * @example
     * // Get one StagingTrade
     * const stagingTrade = await prisma.stagingTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StagingTradeFindFirstArgs>(args?: SelectSubset<T, StagingTradeFindFirstArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StagingTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeFindFirstOrThrowArgs} args - Arguments to find a StagingTrade
     * @example
     * // Get one StagingTrade
     * const stagingTrade = await prisma.stagingTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StagingTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, StagingTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StagingTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StagingTrades
     * const stagingTrades = await prisma.stagingTrade.findMany()
     * 
     * // Get first 10 StagingTrades
     * const stagingTrades = await prisma.stagingTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stagingTradeWithIdOnly = await prisma.stagingTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StagingTradeFindManyArgs>(args?: SelectSubset<T, StagingTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StagingTrade.
     * @param {StagingTradeCreateArgs} args - Arguments to create a StagingTrade.
     * @example
     * // Create one StagingTrade
     * const StagingTrade = await prisma.stagingTrade.create({
     *   data: {
     *     // ... data to create a StagingTrade
     *   }
     * })
     * 
     */
    create<T extends StagingTradeCreateArgs>(args: SelectSubset<T, StagingTradeCreateArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StagingTrades.
     * @param {StagingTradeCreateManyArgs} args - Arguments to create many StagingTrades.
     * @example
     * // Create many StagingTrades
     * const stagingTrade = await prisma.stagingTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StagingTradeCreateManyArgs>(args?: SelectSubset<T, StagingTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StagingTrades and returns the data saved in the database.
     * @param {StagingTradeCreateManyAndReturnArgs} args - Arguments to create many StagingTrades.
     * @example
     * // Create many StagingTrades
     * const stagingTrade = await prisma.stagingTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StagingTrades and only return the `id`
     * const stagingTradeWithIdOnly = await prisma.stagingTrade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StagingTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, StagingTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StagingTrade.
     * @param {StagingTradeDeleteArgs} args - Arguments to delete one StagingTrade.
     * @example
     * // Delete one StagingTrade
     * const StagingTrade = await prisma.stagingTrade.delete({
     *   where: {
     *     // ... filter to delete one StagingTrade
     *   }
     * })
     * 
     */
    delete<T extends StagingTradeDeleteArgs>(args: SelectSubset<T, StagingTradeDeleteArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StagingTrade.
     * @param {StagingTradeUpdateArgs} args - Arguments to update one StagingTrade.
     * @example
     * // Update one StagingTrade
     * const stagingTrade = await prisma.stagingTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StagingTradeUpdateArgs>(args: SelectSubset<T, StagingTradeUpdateArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StagingTrades.
     * @param {StagingTradeDeleteManyArgs} args - Arguments to filter StagingTrades to delete.
     * @example
     * // Delete a few StagingTrades
     * const { count } = await prisma.stagingTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StagingTradeDeleteManyArgs>(args?: SelectSubset<T, StagingTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StagingTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StagingTrades
     * const stagingTrade = await prisma.stagingTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StagingTradeUpdateManyArgs>(args: SelectSubset<T, StagingTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StagingTrade.
     * @param {StagingTradeUpsertArgs} args - Arguments to update or create a StagingTrade.
     * @example
     * // Update or create a StagingTrade
     * const stagingTrade = await prisma.stagingTrade.upsert({
     *   create: {
     *     // ... data to create a StagingTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StagingTrade we want to update
     *   }
     * })
     */
    upsert<T extends StagingTradeUpsertArgs>(args: SelectSubset<T, StagingTradeUpsertArgs<ExtArgs>>): Prisma__StagingTradeClient<$Result.GetResult<Prisma.$StagingTradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StagingTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeCountArgs} args - Arguments to filter StagingTrades to count.
     * @example
     * // Count the number of StagingTrades
     * const count = await prisma.stagingTrade.count({
     *   where: {
     *     // ... the filter for the StagingTrades we want to count
     *   }
     * })
    **/
    count<T extends StagingTradeCountArgs>(
      args?: Subset<T, StagingTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagingTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StagingTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StagingTradeAggregateArgs>(args: Subset<T, StagingTradeAggregateArgs>): Prisma.PrismaPromise<GetStagingTradeAggregateType<T>>

    /**
     * Group by StagingTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagingTradeGroupByArgs} args - Group by arguments.
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
      T extends StagingTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StagingTradeGroupByArgs['orderBy'] }
        : { orderBy?: StagingTradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StagingTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagingTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StagingTrade model
   */
  readonly fields: StagingTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StagingTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StagingTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StagingTrade model
   */ 
  interface StagingTradeFieldRefs {
    readonly id: FieldRef<"StagingTrade", 'String'>
    readonly syncVersion: FieldRef<"StagingTrade", 'Int'>
    readonly clientId: FieldRef<"StagingTrade", 'String'>
    readonly tradeDate: FieldRef<"StagingTrade", 'DateTime'>
    readonly symbol: FieldRef<"StagingTrade", 'String'>
    readonly quantity: FieldRef<"StagingTrade", 'Int'>
    readonly price: FieldRef<"StagingTrade", 'Float'>
    readonly brokerage: FieldRef<"StagingTrade", 'Float'>
    readonly createdAt: FieldRef<"StagingTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StagingTrade findUnique
   */
  export type StagingTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter, which StagingTrade to fetch.
     */
    where: StagingTradeWhereUniqueInput
  }

  /**
   * StagingTrade findUniqueOrThrow
   */
  export type StagingTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter, which StagingTrade to fetch.
     */
    where: StagingTradeWhereUniqueInput
  }

  /**
   * StagingTrade findFirst
   */
  export type StagingTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter, which StagingTrade to fetch.
     */
    where?: StagingTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingTrades to fetch.
     */
    orderBy?: StagingTradeOrderByWithRelationInput | StagingTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StagingTrades.
     */
    cursor?: StagingTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StagingTrades.
     */
    distinct?: StagingTradeScalarFieldEnum | StagingTradeScalarFieldEnum[]
  }

  /**
   * StagingTrade findFirstOrThrow
   */
  export type StagingTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter, which StagingTrade to fetch.
     */
    where?: StagingTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingTrades to fetch.
     */
    orderBy?: StagingTradeOrderByWithRelationInput | StagingTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StagingTrades.
     */
    cursor?: StagingTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StagingTrades.
     */
    distinct?: StagingTradeScalarFieldEnum | StagingTradeScalarFieldEnum[]
  }

  /**
   * StagingTrade findMany
   */
  export type StagingTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter, which StagingTrades to fetch.
     */
    where?: StagingTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StagingTrades to fetch.
     */
    orderBy?: StagingTradeOrderByWithRelationInput | StagingTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StagingTrades.
     */
    cursor?: StagingTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StagingTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StagingTrades.
     */
    skip?: number
    distinct?: StagingTradeScalarFieldEnum | StagingTradeScalarFieldEnum[]
  }

  /**
   * StagingTrade create
   */
  export type StagingTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * The data needed to create a StagingTrade.
     */
    data: XOR<StagingTradeCreateInput, StagingTradeUncheckedCreateInput>
  }

  /**
   * StagingTrade createMany
   */
  export type StagingTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StagingTrades.
     */
    data: StagingTradeCreateManyInput | StagingTradeCreateManyInput[]
  }

  /**
   * StagingTrade createManyAndReturn
   */
  export type StagingTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StagingTrades.
     */
    data: StagingTradeCreateManyInput | StagingTradeCreateManyInput[]
  }

  /**
   * StagingTrade update
   */
  export type StagingTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * The data needed to update a StagingTrade.
     */
    data: XOR<StagingTradeUpdateInput, StagingTradeUncheckedUpdateInput>
    /**
     * Choose, which StagingTrade to update.
     */
    where: StagingTradeWhereUniqueInput
  }

  /**
   * StagingTrade updateMany
   */
  export type StagingTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StagingTrades.
     */
    data: XOR<StagingTradeUpdateManyMutationInput, StagingTradeUncheckedUpdateManyInput>
    /**
     * Filter which StagingTrades to update
     */
    where?: StagingTradeWhereInput
  }

  /**
   * StagingTrade upsert
   */
  export type StagingTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * The filter to search for the StagingTrade to update in case it exists.
     */
    where: StagingTradeWhereUniqueInput
    /**
     * In case the StagingTrade found by the `where` argument doesn't exist, create a new StagingTrade with this data.
     */
    create: XOR<StagingTradeCreateInput, StagingTradeUncheckedCreateInput>
    /**
     * In case the StagingTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StagingTradeUpdateInput, StagingTradeUncheckedUpdateInput>
  }

  /**
   * StagingTrade delete
   */
  export type StagingTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
    /**
     * Filter which StagingTrade to delete.
     */
    where: StagingTradeWhereUniqueInput
  }

  /**
   * StagingTrade deleteMany
   */
  export type StagingTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StagingTrades to delete
     */
    where?: StagingTradeWhereInput
  }

  /**
   * StagingTrade without action
   */
  export type StagingTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagingTrade
     */
    select?: StagingTradeSelect<ExtArgs> | null
  }


  /**
   * Model SyncRun
   */

  export type AggregateSyncRun = {
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  export type SyncRunAvgAggregateOutputType = {
    version: number | null
    clientCursor: number | null
    tradeCursor: number | null
    attempt: number | null
    maxAttempts: number | null
    recordsProcessed: number | null
  }

  export type SyncRunSumAggregateOutputType = {
    version: number | null
    clientCursor: number | null
    tradeCursor: number | null
    attempt: number | null
    maxAttempts: number | null
    recordsProcessed: number | null
  }

  export type SyncRunMinAggregateOutputType = {
    id: string | null
    version: number | null
    status: string | null
    clientCursor: number | null
    tradeCursor: number | null
    attempt: number | null
    maxAttempts: number | null
    startedAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
    recordsProcessed: number | null
    error: string | null
  }

  export type SyncRunMaxAggregateOutputType = {
    id: string | null
    version: number | null
    status: string | null
    clientCursor: number | null
    tradeCursor: number | null
    attempt: number | null
    maxAttempts: number | null
    startedAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
    recordsProcessed: number | null
    error: string | null
  }

  export type SyncRunCountAggregateOutputType = {
    id: number
    version: number
    status: number
    clientCursor: number
    tradeCursor: number
    attempt: number
    maxAttempts: number
    startedAt: number
    updatedAt: number
    completedAt: number
    recordsProcessed: number
    error: number
    _all: number
  }


  export type SyncRunAvgAggregateInputType = {
    version?: true
    clientCursor?: true
    tradeCursor?: true
    attempt?: true
    maxAttempts?: true
    recordsProcessed?: true
  }

  export type SyncRunSumAggregateInputType = {
    version?: true
    clientCursor?: true
    tradeCursor?: true
    attempt?: true
    maxAttempts?: true
    recordsProcessed?: true
  }

  export type SyncRunMinAggregateInputType = {
    id?: true
    version?: true
    status?: true
    clientCursor?: true
    tradeCursor?: true
    attempt?: true
    maxAttempts?: true
    startedAt?: true
    updatedAt?: true
    completedAt?: true
    recordsProcessed?: true
    error?: true
  }

  export type SyncRunMaxAggregateInputType = {
    id?: true
    version?: true
    status?: true
    clientCursor?: true
    tradeCursor?: true
    attempt?: true
    maxAttempts?: true
    startedAt?: true
    updatedAt?: true
    completedAt?: true
    recordsProcessed?: true
    error?: true
  }

  export type SyncRunCountAggregateInputType = {
    id?: true
    version?: true
    status?: true
    clientCursor?: true
    tradeCursor?: true
    attempt?: true
    maxAttempts?: true
    startedAt?: true
    updatedAt?: true
    completedAt?: true
    recordsProcessed?: true
    error?: true
    _all?: true
  }

  export type SyncRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRun to aggregate.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncRuns
    **/
    _count?: true | SyncRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncRunMaxAggregateInputType
  }

  export type GetSyncRunAggregateType<T extends SyncRunAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncRun[P]>
      : GetScalarType<T[P], AggregateSyncRun[P]>
  }




  export type SyncRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncRunWhereInput
    orderBy?: SyncRunOrderByWithAggregationInput | SyncRunOrderByWithAggregationInput[]
    by: SyncRunScalarFieldEnum[] | SyncRunScalarFieldEnum
    having?: SyncRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncRunCountAggregateInputType | true
    _avg?: SyncRunAvgAggregateInputType
    _sum?: SyncRunSumAggregateInputType
    _min?: SyncRunMinAggregateInputType
    _max?: SyncRunMaxAggregateInputType
  }

  export type SyncRunGroupByOutputType = {
    id: string
    version: number
    status: string
    clientCursor: number
    tradeCursor: number
    attempt: number
    maxAttempts: number
    startedAt: Date
    updatedAt: Date
    completedAt: Date | null
    recordsProcessed: number
    error: string | null
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  type GetSyncRunGroupByPayload<T extends SyncRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
            : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
        }
      >
    >


  export type SyncRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    status?: boolean
    clientCursor?: boolean
    tradeCursor?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    recordsProcessed?: boolean
    error?: boolean
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    status?: boolean
    clientCursor?: boolean
    tradeCursor?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    recordsProcessed?: boolean
    error?: boolean
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectScalar = {
    id?: boolean
    version?: boolean
    status?: boolean
    clientCursor?: boolean
    tradeCursor?: boolean
    attempt?: boolean
    maxAttempts?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    recordsProcessed?: boolean
    error?: boolean
  }


  export type $SyncRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncRun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: number
      status: string
      clientCursor: number
      tradeCursor: number
      attempt: number
      maxAttempts: number
      startedAt: Date
      updatedAt: Date
      completedAt: Date | null
      recordsProcessed: number
      error: string | null
    }, ExtArgs["result"]["syncRun"]>
    composites: {}
  }

  type SyncRunGetPayload<S extends boolean | null | undefined | SyncRunDefaultArgs> = $Result.GetResult<Prisma.$SyncRunPayload, S>

  type SyncRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SyncRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SyncRunCountAggregateInputType | true
    }

  export interface SyncRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncRun'], meta: { name: 'SyncRun' } }
    /**
     * Find zero or one SyncRun that matches the filter.
     * @param {SyncRunFindUniqueArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncRunFindUniqueArgs>(args: SelectSubset<T, SyncRunFindUniqueArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SyncRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SyncRunFindUniqueOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncRunFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SyncRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncRunFindFirstArgs>(args?: SelectSubset<T, SyncRunFindFirstArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SyncRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncRunFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SyncRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncRuns
     * const syncRuns = await prisma.syncRun.findMany()
     * 
     * // Get first 10 SyncRuns
     * const syncRuns = await prisma.syncRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncRunFindManyArgs>(args?: SelectSubset<T, SyncRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SyncRun.
     * @param {SyncRunCreateArgs} args - Arguments to create a SyncRun.
     * @example
     * // Create one SyncRun
     * const SyncRun = await prisma.syncRun.create({
     *   data: {
     *     // ... data to create a SyncRun
     *   }
     * })
     * 
     */
    create<T extends SyncRunCreateArgs>(args: SelectSubset<T, SyncRunCreateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SyncRuns.
     * @param {SyncRunCreateManyArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncRunCreateManyArgs>(args?: SelectSubset<T, SyncRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncRuns and returns the data saved in the database.
     * @param {SyncRunCreateManyAndReturnArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncRuns and only return the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncRunCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SyncRun.
     * @param {SyncRunDeleteArgs} args - Arguments to delete one SyncRun.
     * @example
     * // Delete one SyncRun
     * const SyncRun = await prisma.syncRun.delete({
     *   where: {
     *     // ... filter to delete one SyncRun
     *   }
     * })
     * 
     */
    delete<T extends SyncRunDeleteArgs>(args: SelectSubset<T, SyncRunDeleteArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SyncRun.
     * @param {SyncRunUpdateArgs} args - Arguments to update one SyncRun.
     * @example
     * // Update one SyncRun
     * const syncRun = await prisma.syncRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncRunUpdateArgs>(args: SelectSubset<T, SyncRunUpdateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SyncRuns.
     * @param {SyncRunDeleteManyArgs} args - Arguments to filter SyncRuns to delete.
     * @example
     * // Delete a few SyncRuns
     * const { count } = await prisma.syncRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncRunDeleteManyArgs>(args?: SelectSubset<T, SyncRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncRuns
     * const syncRun = await prisma.syncRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncRunUpdateManyArgs>(args: SelectSubset<T, SyncRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncRun.
     * @param {SyncRunUpsertArgs} args - Arguments to update or create a SyncRun.
     * @example
     * // Update or create a SyncRun
     * const syncRun = await prisma.syncRun.upsert({
     *   create: {
     *     // ... data to create a SyncRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncRun we want to update
     *   }
     * })
     */
    upsert<T extends SyncRunUpsertArgs>(args: SelectSubset<T, SyncRunUpsertArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunCountArgs} args - Arguments to filter SyncRuns to count.
     * @example
     * // Count the number of SyncRuns
     * const count = await prisma.syncRun.count({
     *   where: {
     *     // ... the filter for the SyncRuns we want to count
     *   }
     * })
    **/
    count<T extends SyncRunCountArgs>(
      args?: Subset<T, SyncRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncRunAggregateArgs>(args: Subset<T, SyncRunAggregateArgs>): Prisma.PrismaPromise<GetSyncRunAggregateType<T>>

    /**
     * Group by SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunGroupByArgs} args - Group by arguments.
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
      T extends SyncRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncRunGroupByArgs['orderBy'] }
        : { orderBy?: SyncRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncRun model
   */
  readonly fields: SyncRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncRun model
   */ 
  interface SyncRunFieldRefs {
    readonly id: FieldRef<"SyncRun", 'String'>
    readonly version: FieldRef<"SyncRun", 'Int'>
    readonly status: FieldRef<"SyncRun", 'String'>
    readonly clientCursor: FieldRef<"SyncRun", 'Int'>
    readonly tradeCursor: FieldRef<"SyncRun", 'Int'>
    readonly attempt: FieldRef<"SyncRun", 'Int'>
    readonly maxAttempts: FieldRef<"SyncRun", 'Int'>
    readonly startedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly updatedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly completedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly recordsProcessed: FieldRef<"SyncRun", 'Int'>
    readonly error: FieldRef<"SyncRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SyncRun findUnique
   */
  export type SyncRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findUniqueOrThrow
   */
  export type SyncRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findFirst
   */
  export type SyncRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findFirstOrThrow
   */
  export type SyncRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findMany
   */
  export type SyncRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter, which SyncRuns to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun create
   */
  export type SyncRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * The data needed to create a SyncRun.
     */
    data: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
  }

  /**
   * SyncRun createMany
   */
  export type SyncRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
  }

  /**
   * SyncRun createManyAndReturn
   */
  export type SyncRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
  }

  /**
   * SyncRun update
   */
  export type SyncRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * The data needed to update a SyncRun.
     */
    data: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
    /**
     * Choose, which SyncRun to update.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun updateMany
   */
  export type SyncRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncRuns.
     */
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyInput>
    /**
     * Filter which SyncRuns to update
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun upsert
   */
  export type SyncRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * The filter to search for the SyncRun to update in case it exists.
     */
    where: SyncRunWhereUniqueInput
    /**
     * In case the SyncRun found by the `where` argument doesn't exist, create a new SyncRun with this data.
     */
    create: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
    /**
     * In case the SyncRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
  }

  /**
   * SyncRun delete
   */
  export type SyncRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Filter which SyncRun to delete.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun deleteMany
   */
  export type SyncRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRuns to delete
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun without action
   */
  export type SyncRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    incentiveRate: 'incentiveRate',
    createdAt: 'createdAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    snapshotVersion: 'snapshotVersion'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const EmployeeClientMappingScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    clientId: 'clientId',
    createdAt: 'createdAt'
  };

  export type EmployeeClientMappingScalarFieldEnum = (typeof EmployeeClientMappingScalarFieldEnum)[keyof typeof EmployeeClientMappingScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    tradeDate: 'tradeDate',
    symbol: 'symbol',
    quantity: 'quantity',
    price: 'price',
    brokerage: 'brokerage',
    snapshotVersion: 'snapshotVersion',
    createdAt: 'createdAt'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const StagingClientScalarFieldEnum: {
    id: 'id',
    syncVersion: 'syncVersion',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type StagingClientScalarFieldEnum = (typeof StagingClientScalarFieldEnum)[keyof typeof StagingClientScalarFieldEnum]


  export const StagingTradeScalarFieldEnum: {
    id: 'id',
    syncVersion: 'syncVersion',
    clientId: 'clientId',
    tradeDate: 'tradeDate',
    symbol: 'symbol',
    quantity: 'quantity',
    price: 'price',
    brokerage: 'brokerage',
    createdAt: 'createdAt'
  };

  export type StagingTradeScalarFieldEnum = (typeof StagingTradeScalarFieldEnum)[keyof typeof StagingTradeScalarFieldEnum]


  export const SyncRunScalarFieldEnum: {
    id: 'id',
    version: 'version',
    status: 'status',
    clientCursor: 'clientCursor',
    tradeCursor: 'tradeCursor',
    attempt: 'attempt',
    maxAttempts: 'maxAttempts',
    startedAt: 'startedAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt',
    recordsProcessed: 'recordsProcessed',
    error: 'error'
  };

  export type SyncRunScalarFieldEnum = (typeof SyncRunScalarFieldEnum)[keyof typeof SyncRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    incentiveRate?: FloatFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    mappings?: EmployeeClientMappingListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    incentiveRate?: SortOrder
    createdAt?: SortOrder
    mappings?: EmployeeClientMappingOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    incentiveRate?: FloatFilter<"Employee"> | number
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    mappings?: EmployeeClientMappingListRelationFilter
  }, "id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    incentiveRate?: SortOrder
    createdAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    role?: StringWithAggregatesFilter<"Employee"> | string
    incentiveRate?: FloatWithAggregatesFilter<"Employee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    snapshotVersion?: IntFilter<"Client"> | number
    trades?: TradeListRelationFilter
    mappings?: EmployeeClientMappingListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshotVersion?: SortOrder
    trades?: TradeOrderByRelationAggregateInput
    mappings?: EmployeeClientMappingOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    snapshotVersion?: IntFilter<"Client"> | number
    trades?: TradeListRelationFilter
    mappings?: EmployeeClientMappingListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshotVersion?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    snapshotVersion?: IntWithAggregatesFilter<"Client"> | number
  }

  export type EmployeeClientMappingWhereInput = {
    AND?: EmployeeClientMappingWhereInput | EmployeeClientMappingWhereInput[]
    OR?: EmployeeClientMappingWhereInput[]
    NOT?: EmployeeClientMappingWhereInput | EmployeeClientMappingWhereInput[]
    id?: StringFilter<"EmployeeClientMapping"> | string
    employeeId?: StringFilter<"EmployeeClientMapping"> | string
    clientId?: StringFilter<"EmployeeClientMapping"> | string
    createdAt?: DateTimeFilter<"EmployeeClientMapping"> | Date | string
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }

  export type EmployeeClientMappingOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type EmployeeClientMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: EmployeeClientMappingWhereInput | EmployeeClientMappingWhereInput[]
    OR?: EmployeeClientMappingWhereInput[]
    NOT?: EmployeeClientMappingWhereInput | EmployeeClientMappingWhereInput[]
    employeeId?: StringFilter<"EmployeeClientMapping"> | string
    createdAt?: DateTimeFilter<"EmployeeClientMapping"> | Date | string
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }, "id" | "clientId">

  export type EmployeeClientMappingOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    _count?: EmployeeClientMappingCountOrderByAggregateInput
    _max?: EmployeeClientMappingMaxOrderByAggregateInput
    _min?: EmployeeClientMappingMinOrderByAggregateInput
  }

  export type EmployeeClientMappingScalarWhereWithAggregatesInput = {
    AND?: EmployeeClientMappingScalarWhereWithAggregatesInput | EmployeeClientMappingScalarWhereWithAggregatesInput[]
    OR?: EmployeeClientMappingScalarWhereWithAggregatesInput[]
    NOT?: EmployeeClientMappingScalarWhereWithAggregatesInput | EmployeeClientMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeClientMapping"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeClientMapping"> | string
    clientId?: StringWithAggregatesFilter<"EmployeeClientMapping"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeClientMapping"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    clientId?: StringFilter<"Trade"> | string
    tradeDate?: DateTimeFilter<"Trade"> | Date | string
    symbol?: StringFilter<"Trade"> | string
    quantity?: IntFilter<"Trade"> | number
    price?: FloatFilter<"Trade"> | number
    brokerage?: FloatFilter<"Trade"> | number
    snapshotVersion?: IntFilter<"Trade"> | number
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    clientId?: StringFilter<"Trade"> | string
    tradeDate?: DateTimeFilter<"Trade"> | Date | string
    symbol?: StringFilter<"Trade"> | string
    quantity?: IntFilter<"Trade"> | number
    price?: FloatFilter<"Trade"> | number
    brokerage?: FloatFilter<"Trade"> | number
    snapshotVersion?: IntFilter<"Trade"> | number
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
    createdAt?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    clientId?: StringWithAggregatesFilter<"Trade"> | string
    tradeDate?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    symbol?: StringWithAggregatesFilter<"Trade"> | string
    quantity?: IntWithAggregatesFilter<"Trade"> | number
    price?: FloatWithAggregatesFilter<"Trade"> | number
    brokerage?: FloatWithAggregatesFilter<"Trade"> | number
    snapshotVersion?: IntWithAggregatesFilter<"Trade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type StagingClientWhereInput = {
    AND?: StagingClientWhereInput | StagingClientWhereInput[]
    OR?: StagingClientWhereInput[]
    NOT?: StagingClientWhereInput | StagingClientWhereInput[]
    id?: StringFilter<"StagingClient"> | string
    syncVersion?: IntFilter<"StagingClient"> | number
    name?: StringFilter<"StagingClient"> | string
    email?: StringFilter<"StagingClient"> | string
    phone?: StringFilter<"StagingClient"> | string
    createdAt?: DateTimeFilter<"StagingClient"> | Date | string
  }

  export type StagingClientOrderByWithRelationInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StagingClientWhereInput | StagingClientWhereInput[]
    OR?: StagingClientWhereInput[]
    NOT?: StagingClientWhereInput | StagingClientWhereInput[]
    syncVersion?: IntFilter<"StagingClient"> | number
    name?: StringFilter<"StagingClient"> | string
    email?: StringFilter<"StagingClient"> | string
    phone?: StringFilter<"StagingClient"> | string
    createdAt?: DateTimeFilter<"StagingClient"> | Date | string
  }, "id">

  export type StagingClientOrderByWithAggregationInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    _count?: StagingClientCountOrderByAggregateInput
    _avg?: StagingClientAvgOrderByAggregateInput
    _max?: StagingClientMaxOrderByAggregateInput
    _min?: StagingClientMinOrderByAggregateInput
    _sum?: StagingClientSumOrderByAggregateInput
  }

  export type StagingClientScalarWhereWithAggregatesInput = {
    AND?: StagingClientScalarWhereWithAggregatesInput | StagingClientScalarWhereWithAggregatesInput[]
    OR?: StagingClientScalarWhereWithAggregatesInput[]
    NOT?: StagingClientScalarWhereWithAggregatesInput | StagingClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StagingClient"> | string
    syncVersion?: IntWithAggregatesFilter<"StagingClient"> | number
    name?: StringWithAggregatesFilter<"StagingClient"> | string
    email?: StringWithAggregatesFilter<"StagingClient"> | string
    phone?: StringWithAggregatesFilter<"StagingClient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StagingClient"> | Date | string
  }

  export type StagingTradeWhereInput = {
    AND?: StagingTradeWhereInput | StagingTradeWhereInput[]
    OR?: StagingTradeWhereInput[]
    NOT?: StagingTradeWhereInput | StagingTradeWhereInput[]
    id?: StringFilter<"StagingTrade"> | string
    syncVersion?: IntFilter<"StagingTrade"> | number
    clientId?: StringFilter<"StagingTrade"> | string
    tradeDate?: DateTimeFilter<"StagingTrade"> | Date | string
    symbol?: StringFilter<"StagingTrade"> | string
    quantity?: IntFilter<"StagingTrade"> | number
    price?: FloatFilter<"StagingTrade"> | number
    brokerage?: FloatFilter<"StagingTrade"> | number
    createdAt?: DateTimeFilter<"StagingTrade"> | Date | string
  }

  export type StagingTradeOrderByWithRelationInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StagingTradeWhereInput | StagingTradeWhereInput[]
    OR?: StagingTradeWhereInput[]
    NOT?: StagingTradeWhereInput | StagingTradeWhereInput[]
    syncVersion?: IntFilter<"StagingTrade"> | number
    clientId?: StringFilter<"StagingTrade"> | string
    tradeDate?: DateTimeFilter<"StagingTrade"> | Date | string
    symbol?: StringFilter<"StagingTrade"> | string
    quantity?: IntFilter<"StagingTrade"> | number
    price?: FloatFilter<"StagingTrade"> | number
    brokerage?: FloatFilter<"StagingTrade"> | number
    createdAt?: DateTimeFilter<"StagingTrade"> | Date | string
  }, "id">

  export type StagingTradeOrderByWithAggregationInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    createdAt?: SortOrder
    _count?: StagingTradeCountOrderByAggregateInput
    _avg?: StagingTradeAvgOrderByAggregateInput
    _max?: StagingTradeMaxOrderByAggregateInput
    _min?: StagingTradeMinOrderByAggregateInput
    _sum?: StagingTradeSumOrderByAggregateInput
  }

  export type StagingTradeScalarWhereWithAggregatesInput = {
    AND?: StagingTradeScalarWhereWithAggregatesInput | StagingTradeScalarWhereWithAggregatesInput[]
    OR?: StagingTradeScalarWhereWithAggregatesInput[]
    NOT?: StagingTradeScalarWhereWithAggregatesInput | StagingTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StagingTrade"> | string
    syncVersion?: IntWithAggregatesFilter<"StagingTrade"> | number
    clientId?: StringWithAggregatesFilter<"StagingTrade"> | string
    tradeDate?: DateTimeWithAggregatesFilter<"StagingTrade"> | Date | string
    symbol?: StringWithAggregatesFilter<"StagingTrade"> | string
    quantity?: IntWithAggregatesFilter<"StagingTrade"> | number
    price?: FloatWithAggregatesFilter<"StagingTrade"> | number
    brokerage?: FloatWithAggregatesFilter<"StagingTrade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StagingTrade"> | Date | string
  }

  export type SyncRunWhereInput = {
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    id?: StringFilter<"SyncRun"> | string
    version?: IntFilter<"SyncRun"> | number
    status?: StringFilter<"SyncRun"> | string
    clientCursor?: IntFilter<"SyncRun"> | number
    tradeCursor?: IntFilter<"SyncRun"> | number
    attempt?: IntFilter<"SyncRun"> | number
    maxAttempts?: IntFilter<"SyncRun"> | number
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    updatedAt?: DateTimeFilter<"SyncRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    recordsProcessed?: IntFilter<"SyncRun"> | number
    error?: StringNullableFilter<"SyncRun"> | string | null
  }

  export type SyncRunOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    recordsProcessed?: SortOrder
    error?: SortOrderInput | SortOrder
  }

  export type SyncRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: number
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    status?: StringFilter<"SyncRun"> | string
    clientCursor?: IntFilter<"SyncRun"> | number
    tradeCursor?: IntFilter<"SyncRun"> | number
    attempt?: IntFilter<"SyncRun"> | number
    maxAttempts?: IntFilter<"SyncRun"> | number
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    updatedAt?: DateTimeFilter<"SyncRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    recordsProcessed?: IntFilter<"SyncRun"> | number
    error?: StringNullableFilter<"SyncRun"> | string | null
  }, "id" | "version">

  export type SyncRunOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    recordsProcessed?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: SyncRunCountOrderByAggregateInput
    _avg?: SyncRunAvgOrderByAggregateInput
    _max?: SyncRunMaxOrderByAggregateInput
    _min?: SyncRunMinOrderByAggregateInput
    _sum?: SyncRunSumOrderByAggregateInput
  }

  export type SyncRunScalarWhereWithAggregatesInput = {
    AND?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    OR?: SyncRunScalarWhereWithAggregatesInput[]
    NOT?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncRun"> | string
    version?: IntWithAggregatesFilter<"SyncRun"> | number
    status?: StringWithAggregatesFilter<"SyncRun"> | string
    clientCursor?: IntWithAggregatesFilter<"SyncRun"> | number
    tradeCursor?: IntWithAggregatesFilter<"SyncRun"> | number
    attempt?: IntWithAggregatesFilter<"SyncRun"> | number
    maxAttempts?: IntWithAggregatesFilter<"SyncRun"> | number
    startedAt?: DateTimeWithAggregatesFilter<"SyncRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SyncRun"> | Date | string | null
    recordsProcessed?: IntWithAggregatesFilter<"SyncRun"> | number
    error?: StringNullableWithAggregatesFilter<"SyncRun"> | string | null
  }

  export type EmployeeCreateInput = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt?: Date | string
    mappings?: EmployeeClientMappingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt?: Date | string
    mappings?: EmployeeClientMappingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: EmployeeClientMappingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: EmployeeClientMappingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    trades?: TradeCreateNestedManyWithoutClientInput
    mappings?: EmployeeClientMappingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    trades?: TradeUncheckedCreateNestedManyWithoutClientInput
    mappings?: EmployeeClientMappingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    trades?: TradeUpdateManyWithoutClientNestedInput
    mappings?: EmployeeClientMappingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    trades?: TradeUncheckedUpdateManyWithoutClientNestedInput
    mappings?: EmployeeClientMappingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeClientMappingCreateInput = {
    id?: string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutMappingsInput
    client: ClientCreateNestedOneWithoutMappingsInput
  }

  export type EmployeeClientMappingUncheckedCreateInput = {
    id?: string
    employeeId: string
    clientId: string
    createdAt?: Date | string
  }

  export type EmployeeClientMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutMappingsNestedInput
    client?: ClientUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type EmployeeClientMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeClientMappingCreateManyInput = {
    id?: string
    employeeId: string
    clientId: string
    createdAt?: Date | string
  }

  export type EmployeeClientMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeClientMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    id: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    id: string
    clientId: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyInput = {
    id: string
    clientId: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingClientCreateInput = {
    id: string
    syncVersion: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type StagingClientUncheckedCreateInput = {
    id: string
    syncVersion: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type StagingClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingClientCreateManyInput = {
    id: string
    syncVersion: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type StagingClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingTradeCreateInput = {
    id: string
    syncVersion: number
    clientId: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    createdAt?: Date | string
  }

  export type StagingTradeUncheckedCreateInput = {
    id: string
    syncVersion: number
    clientId: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    createdAt?: Date | string
  }

  export type StagingTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingTradeCreateManyInput = {
    id: string
    syncVersion: number
    clientId: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    createdAt?: Date | string
  }

  export type StagingTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StagingTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncVersion?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncRunCreateInput = {
    id?: string
    version: number
    status: string
    clientCursor?: number
    tradeCursor?: number
    attempt?: number
    maxAttempts?: number
    startedAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    recordsProcessed?: number
    error?: string | null
  }

  export type SyncRunUncheckedCreateInput = {
    id?: string
    version: number
    status: string
    clientCursor?: number
    tradeCursor?: number
    attempt?: number
    maxAttempts?: number
    startedAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    recordsProcessed?: number
    error?: string | null
  }

  export type SyncRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clientCursor?: IntFieldUpdateOperationsInput | number
    tradeCursor?: IntFieldUpdateOperationsInput | number
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clientCursor?: IntFieldUpdateOperationsInput | number
    tradeCursor?: IntFieldUpdateOperationsInput | number
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunCreateManyInput = {
    id?: string
    version: number
    status: string
    clientCursor?: number
    tradeCursor?: number
    attempt?: number
    maxAttempts?: number
    startedAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    recordsProcessed?: number
    error?: string | null
  }

  export type SyncRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clientCursor?: IntFieldUpdateOperationsInput | number
    tradeCursor?: IntFieldUpdateOperationsInput | number
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    clientCursor?: IntFieldUpdateOperationsInput | number
    tradeCursor?: IntFieldUpdateOperationsInput | number
    attempt?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeClientMappingListRelationFilter = {
    every?: EmployeeClientMappingWhereInput
    some?: EmployeeClientMappingWhereInput
    none?: EmployeeClientMappingWhereInput
  }

  export type EmployeeClientMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    incentiveRate?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    incentiveRate?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    incentiveRate?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    incentiveRate?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    incentiveRate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshotVersion?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    snapshotVersion?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshotVersion?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    snapshotVersion?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    snapshotVersion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type EmployeeClientMappingCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeClientMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeClientMappingMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    snapshotVersion?: SortOrder
  }

  export type StagingClientCountOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingClientAvgOrderByAggregateInput = {
    syncVersion?: SortOrder
  }

  export type StagingClientMaxOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingClientMinOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingClientSumOrderByAggregateInput = {
    syncVersion?: SortOrder
  }

  export type StagingTradeCountOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingTradeAvgOrderByAggregateInput = {
    syncVersion?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
  }

  export type StagingTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingTradeMinOrderByAggregateInput = {
    id?: SortOrder
    syncVersion?: SortOrder
    clientId?: SortOrder
    tradeDate?: SortOrder
    symbol?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
    createdAt?: SortOrder
  }

  export type StagingTradeSumOrderByAggregateInput = {
    syncVersion?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    brokerage?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SyncRunCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
    recordsProcessed?: SortOrder
    error?: SortOrder
  }

  export type SyncRunAvgOrderByAggregateInput = {
    version?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    recordsProcessed?: SortOrder
  }

  export type SyncRunMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
    recordsProcessed?: SortOrder
    error?: SortOrder
  }

  export type SyncRunMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    status?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
    recordsProcessed?: SortOrder
    error?: SortOrder
  }

  export type SyncRunSumOrderByAggregateInput = {
    version?: SortOrder
    clientCursor?: SortOrder
    tradeCursor?: SortOrder
    attempt?: SortOrder
    maxAttempts?: SortOrder
    recordsProcessed?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EmployeeClientMappingCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput> | EmployeeClientMappingCreateWithoutEmployeeInput[] | EmployeeClientMappingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutEmployeeInput | EmployeeClientMappingCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeClientMappingCreateManyEmployeeInputEnvelope
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
  }

  export type EmployeeClientMappingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput> | EmployeeClientMappingCreateWithoutEmployeeInput[] | EmployeeClientMappingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutEmployeeInput | EmployeeClientMappingCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeClientMappingCreateManyEmployeeInputEnvelope
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeClientMappingUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput> | EmployeeClientMappingCreateWithoutEmployeeInput[] | EmployeeClientMappingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutEmployeeInput | EmployeeClientMappingCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeClientMappingUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeClientMappingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeClientMappingCreateManyEmployeeInputEnvelope
    set?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    disconnect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    delete?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    update?: EmployeeClientMappingUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeClientMappingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeClientMappingUpdateManyWithWhereWithoutEmployeeInput | EmployeeClientMappingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
  }

  export type EmployeeClientMappingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput> | EmployeeClientMappingCreateWithoutEmployeeInput[] | EmployeeClientMappingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutEmployeeInput | EmployeeClientMappingCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeClientMappingUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeClientMappingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeClientMappingCreateManyEmployeeInputEnvelope
    set?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    disconnect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    delete?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    update?: EmployeeClientMappingUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeClientMappingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeClientMappingUpdateManyWithWhereWithoutEmployeeInput | EmployeeClientMappingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
  }

  export type TradeCreateNestedManyWithoutClientInput = {
    create?: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput> | TradeCreateWithoutClientInput[] | TradeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutClientInput | TradeCreateOrConnectWithoutClientInput[]
    createMany?: TradeCreateManyClientInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type EmployeeClientMappingCreateNestedManyWithoutClientInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput> | EmployeeClientMappingCreateWithoutClientInput[] | EmployeeClientMappingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutClientInput | EmployeeClientMappingCreateOrConnectWithoutClientInput[]
    createMany?: EmployeeClientMappingCreateManyClientInputEnvelope
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput> | TradeCreateWithoutClientInput[] | TradeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutClientInput | TradeCreateOrConnectWithoutClientInput[]
    createMany?: TradeCreateManyClientInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type EmployeeClientMappingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput> | EmployeeClientMappingCreateWithoutClientInput[] | EmployeeClientMappingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutClientInput | EmployeeClientMappingCreateOrConnectWithoutClientInput[]
    createMany?: EmployeeClientMappingCreateManyClientInputEnvelope
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TradeUpdateManyWithoutClientNestedInput = {
    create?: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput> | TradeCreateWithoutClientInput[] | TradeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutClientInput | TradeCreateOrConnectWithoutClientInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutClientInput | TradeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TradeCreateManyClientInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutClientInput | TradeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutClientInput | TradeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type EmployeeClientMappingUpdateManyWithoutClientNestedInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput> | EmployeeClientMappingCreateWithoutClientInput[] | EmployeeClientMappingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutClientInput | EmployeeClientMappingCreateOrConnectWithoutClientInput[]
    upsert?: EmployeeClientMappingUpsertWithWhereUniqueWithoutClientInput | EmployeeClientMappingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EmployeeClientMappingCreateManyClientInputEnvelope
    set?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    disconnect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    delete?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    update?: EmployeeClientMappingUpdateWithWhereUniqueWithoutClientInput | EmployeeClientMappingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EmployeeClientMappingUpdateManyWithWhereWithoutClientInput | EmployeeClientMappingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput> | TradeCreateWithoutClientInput[] | TradeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutClientInput | TradeCreateOrConnectWithoutClientInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutClientInput | TradeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TradeCreateManyClientInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutClientInput | TradeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutClientInput | TradeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type EmployeeClientMappingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput> | EmployeeClientMappingCreateWithoutClientInput[] | EmployeeClientMappingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EmployeeClientMappingCreateOrConnectWithoutClientInput | EmployeeClientMappingCreateOrConnectWithoutClientInput[]
    upsert?: EmployeeClientMappingUpsertWithWhereUniqueWithoutClientInput | EmployeeClientMappingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EmployeeClientMappingCreateManyClientInputEnvelope
    set?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    disconnect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    delete?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    connect?: EmployeeClientMappingWhereUniqueInput | EmployeeClientMappingWhereUniqueInput[]
    update?: EmployeeClientMappingUpdateWithWhereUniqueWithoutClientInput | EmployeeClientMappingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EmployeeClientMappingUpdateManyWithWhereWithoutClientInput | EmployeeClientMappingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutMappingsInput = {
    create?: XOR<EmployeeCreateWithoutMappingsInput, EmployeeUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMappingsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutMappingsInput = {
    create?: XOR<ClientCreateWithoutMappingsInput, ClientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMappingsInput
    connect?: ClientWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<EmployeeCreateWithoutMappingsInput, EmployeeUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMappingsInput
    upsert?: EmployeeUpsertWithoutMappingsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutMappingsInput, EmployeeUpdateWithoutMappingsInput>, EmployeeUncheckedUpdateWithoutMappingsInput>
  }

  export type ClientUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<ClientCreateWithoutMappingsInput, ClientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMappingsInput
    upsert?: ClientUpsertWithoutMappingsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMappingsInput, ClientUpdateWithoutMappingsInput>, ClientUncheckedUpdateWithoutMappingsInput>
  }

  export type ClientCreateNestedOneWithoutTradesInput = {
    create?: XOR<ClientCreateWithoutTradesInput, ClientUncheckedCreateWithoutTradesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTradesInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<ClientCreateWithoutTradesInput, ClientUncheckedCreateWithoutTradesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTradesInput
    upsert?: ClientUpsertWithoutTradesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTradesInput, ClientUpdateWithoutTradesInput>, ClientUncheckedUpdateWithoutTradesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EmployeeClientMappingCreateWithoutEmployeeInput = {
    id?: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutMappingsInput
  }

  export type EmployeeClientMappingUncheckedCreateWithoutEmployeeInput = {
    id?: string
    clientId: string
    createdAt?: Date | string
  }

  export type EmployeeClientMappingCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeClientMappingWhereUniqueInput
    create: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeClientMappingCreateManyEmployeeInputEnvelope = {
    data: EmployeeClientMappingCreateManyEmployeeInput | EmployeeClientMappingCreateManyEmployeeInput[]
  }

  export type EmployeeClientMappingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeClientMappingWhereUniqueInput
    update: XOR<EmployeeClientMappingUpdateWithoutEmployeeInput, EmployeeClientMappingUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeClientMappingCreateWithoutEmployeeInput, EmployeeClientMappingUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeClientMappingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeClientMappingWhereUniqueInput
    data: XOR<EmployeeClientMappingUpdateWithoutEmployeeInput, EmployeeClientMappingUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeClientMappingUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeClientMappingScalarWhereInput
    data: XOR<EmployeeClientMappingUpdateManyMutationInput, EmployeeClientMappingUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeClientMappingScalarWhereInput = {
    AND?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
    OR?: EmployeeClientMappingScalarWhereInput[]
    NOT?: EmployeeClientMappingScalarWhereInput | EmployeeClientMappingScalarWhereInput[]
    id?: StringFilter<"EmployeeClientMapping"> | string
    employeeId?: StringFilter<"EmployeeClientMapping"> | string
    clientId?: StringFilter<"EmployeeClientMapping"> | string
    createdAt?: DateTimeFilter<"EmployeeClientMapping"> | Date | string
  }

  export type TradeCreateWithoutClientInput = {
    id: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
  }

  export type TradeUncheckedCreateWithoutClientInput = {
    id: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutClientInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput>
  }

  export type TradeCreateManyClientInputEnvelope = {
    data: TradeCreateManyClientInput | TradeCreateManyClientInput[]
  }

  export type EmployeeClientMappingCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutMappingsInput
  }

  export type EmployeeClientMappingUncheckedCreateWithoutClientInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
  }

  export type EmployeeClientMappingCreateOrConnectWithoutClientInput = {
    where: EmployeeClientMappingWhereUniqueInput
    create: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput>
  }

  export type EmployeeClientMappingCreateManyClientInputEnvelope = {
    data: EmployeeClientMappingCreateManyClientInput | EmployeeClientMappingCreateManyClientInput[]
  }

  export type TradeUpsertWithWhereUniqueWithoutClientInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutClientInput, TradeUncheckedUpdateWithoutClientInput>
    create: XOR<TradeCreateWithoutClientInput, TradeUncheckedCreateWithoutClientInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutClientInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutClientInput, TradeUncheckedUpdateWithoutClientInput>
  }

  export type TradeUpdateManyWithWhereWithoutClientInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutClientInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: StringFilter<"Trade"> | string
    clientId?: StringFilter<"Trade"> | string
    tradeDate?: DateTimeFilter<"Trade"> | Date | string
    symbol?: StringFilter<"Trade"> | string
    quantity?: IntFilter<"Trade"> | number
    price?: FloatFilter<"Trade"> | number
    brokerage?: FloatFilter<"Trade"> | number
    snapshotVersion?: IntFilter<"Trade"> | number
    createdAt?: DateTimeFilter<"Trade"> | Date | string
  }

  export type EmployeeClientMappingUpsertWithWhereUniqueWithoutClientInput = {
    where: EmployeeClientMappingWhereUniqueInput
    update: XOR<EmployeeClientMappingUpdateWithoutClientInput, EmployeeClientMappingUncheckedUpdateWithoutClientInput>
    create: XOR<EmployeeClientMappingCreateWithoutClientInput, EmployeeClientMappingUncheckedCreateWithoutClientInput>
  }

  export type EmployeeClientMappingUpdateWithWhereUniqueWithoutClientInput = {
    where: EmployeeClientMappingWhereUniqueInput
    data: XOR<EmployeeClientMappingUpdateWithoutClientInput, EmployeeClientMappingUncheckedUpdateWithoutClientInput>
  }

  export type EmployeeClientMappingUpdateManyWithWhereWithoutClientInput = {
    where: EmployeeClientMappingScalarWhereInput
    data: XOR<EmployeeClientMappingUpdateManyMutationInput, EmployeeClientMappingUncheckedUpdateManyWithoutClientInput>
  }

  export type EmployeeCreateWithoutMappingsInput = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutMappingsInput = {
    id: string
    name: string
    email: string
    role: string
    incentiveRate: number
    createdAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutMappingsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutMappingsInput, EmployeeUncheckedCreateWithoutMappingsInput>
  }

  export type ClientCreateWithoutMappingsInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    trades?: TradeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutMappingsInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    trades?: TradeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutMappingsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMappingsInput, ClientUncheckedCreateWithoutMappingsInput>
  }

  export type EmployeeUpsertWithoutMappingsInput = {
    update: XOR<EmployeeUpdateWithoutMappingsInput, EmployeeUncheckedUpdateWithoutMappingsInput>
    create: XOR<EmployeeCreateWithoutMappingsInput, EmployeeUncheckedCreateWithoutMappingsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutMappingsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutMappingsInput, EmployeeUncheckedUpdateWithoutMappingsInput>
  }

  export type EmployeeUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    incentiveRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpsertWithoutMappingsInput = {
    update: XOR<ClientUpdateWithoutMappingsInput, ClientUncheckedUpdateWithoutMappingsInput>
    create: XOR<ClientCreateWithoutMappingsInput, ClientUncheckedCreateWithoutMappingsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMappingsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMappingsInput, ClientUncheckedUpdateWithoutMappingsInput>
  }

  export type ClientUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    trades?: TradeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    trades?: TradeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutTradesInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    mappings?: EmployeeClientMappingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTradesInput = {
    id: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshotVersion?: number
    mappings?: EmployeeClientMappingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTradesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTradesInput, ClientUncheckedCreateWithoutTradesInput>
  }

  export type ClientUpsertWithoutTradesInput = {
    update: XOR<ClientUpdateWithoutTradesInput, ClientUncheckedUpdateWithoutTradesInput>
    create: XOR<ClientCreateWithoutTradesInput, ClientUncheckedCreateWithoutTradesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTradesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTradesInput, ClientUncheckedUpdateWithoutTradesInput>
  }

  export type ClientUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    mappings?: EmployeeClientMappingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    mappings?: EmployeeClientMappingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type EmployeeClientMappingCreateManyEmployeeInput = {
    id?: string
    clientId: string
    createdAt?: Date | string
  }

  export type EmployeeClientMappingUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type EmployeeClientMappingUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeClientMappingUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyClientInput = {
    id: string
    tradeDate: Date | string
    symbol: string
    quantity: number
    price: number
    brokerage: number
    snapshotVersion: number
    createdAt?: Date | string
  }

  export type EmployeeClientMappingCreateManyClientInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
  }

  export type TradeUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    symbol?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    brokerage?: FloatFieldUpdateOperationsInput | number
    snapshotVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeClientMappingUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type EmployeeClientMappingUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeClientMappingUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeClientMappingDefaultArgs instead
     */
    export type EmployeeClientMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeClientMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TradeDefaultArgs instead
     */
    export type TradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StagingClientDefaultArgs instead
     */
    export type StagingClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StagingClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StagingTradeDefaultArgs instead
     */
    export type StagingTradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StagingTradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SyncRunDefaultArgs instead
     */
    export type SyncRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SyncRunDefaultArgs<ExtArgs>

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