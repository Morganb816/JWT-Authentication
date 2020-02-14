[rewrite](../README.md) › [Globals](../globals.md) › ["src/database/util/index"](_src_database_util_index_.md)

# External module: "src/database/util/index"

## Index

### Functions

* [createDatabaseConnection](_src_database_util_index_.md#createdatabaseconnection)
* [createInteraction](_src_database_util_index_.md#createinteraction)
* [createSync](_src_database_util_index_.md#createsync)

## Functions

###  createDatabaseConnection

▸ **createDatabaseConnection**(`url`: string): *Promise‹typeof mongoose›*

*Defined in [src/database/util/index.ts:8](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/util/index.ts#L8)*

Create Database Connection does exactly what you think it would.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹typeof mongoose›*

Promise<typeof mongoose>

___

###  createInteraction

▸ **createInteraction**(`model`: Model‹any› | undefined, `func`: Function): *Function*

*Defined in [src/database/util/index.ts:41](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/util/index.ts#L41)*

 * Create Interaction creates a connection between a model and the database connection.
If the model is not loaded yet or is broken we catch that so we dont have to check
every time we want interact with a model.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`model` | Model‹any› &#124; undefined |
`func` | Function |

**Returns:** *Function*

Function

___

###  createSync

▸ **createSync**(`model`: Model‹any›, `data`: any): *Promise‹any›*

*Defined in [src/database/util/index.ts:24](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/util/index.ts#L24)*

Create sync is a synchronus version of mongoose's create method.
It "decallbackify's" the function.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`model` | Model‹any› |
`data` | any |

**Returns:** *Promise‹any›*

Promise<any>
