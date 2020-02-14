[rewrite](../README.md) › [Globals](../globals.md) › ["src/database/repository/accountRepository"](_src_database_repository_accountrepository_.md)

# External module: "src/database/repository/accountRepository"

## Index

### Variables

* [createAccount](_src_database_repository_accountrepository_.md#const-createaccount)
* [deleteAccount](_src_database_repository_accountrepository_.md#const-deleteaccount)
* [getAccount](_src_database_repository_accountrepository_.md#const-getaccount)

### Functions

* [createAccountModel](_src_database_repository_accountrepository_.md#createaccountmodel)

## Variables

### `Const` createAccount

• **createAccount**: *Function* = createInteraction(accountModel,
    function (model: Model<any>, acc: Account): Promise<any> {
        return createSync(model, { username: acc.username, password: acc.password })
    })

*Defined in [src/database/repository/accountRepository.ts:43](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/accountRepository.ts#L43)*

Creates an account from a given Account

**`param`** 

**`param`** 

**`returns`** Promise<any>

___

### `Const` deleteAccount

• **deleteAccount**: *Function* = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('username').equals(username);
    })

*Defined in [src/database/repository/accountRepository.ts:32](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/accountRepository.ts#L32)*

Delets an account by username.

**`param`** 

**`param`** 

**`returns`** DocumentQuery<any, any, {}>

___

### `Const` getAccount

• **getAccount**: *Function* = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('username').equals(username);
    })

*Defined in [src/database/repository/accountRepository.ts:21](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/accountRepository.ts#L21)*

Gets an account by username.

**`param`** 

**`param`** 

**`returns`** DocumentQuery<any, any, {}>

## Functions

###  createAccountModel

▸ **createAccountModel**(`connection`: typeof mongoose): *Model‹any›*

*Defined in [src/database/repository/accountRepository.ts:12](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/accountRepository.ts#L12)*

Creats a account model.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`connection` | typeof mongoose |

**Returns:** *Model‹any›*

Model<any>
