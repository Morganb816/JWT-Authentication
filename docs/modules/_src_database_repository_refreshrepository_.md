[rewrite](../README.md) › [Globals](../globals.md) › ["src/database/repository/refreshRepository"](_src_database_repository_refreshrepository_.md)

# External module: "src/database/repository/refreshRepository"

## Index

### Variables

* [createRefresh](_src_database_repository_refreshrepository_.md#const-createrefresh)
* [deleteRefresh](_src_database_repository_refreshrepository_.md#const-deleterefresh)
* [getRefresh](_src_database_repository_refreshrepository_.md#const-getrefresh)

### Functions

* [createRefreshModel](_src_database_repository_refreshrepository_.md#createrefreshmodel)

## Variables

### `Const` createRefresh

• **createRefresh**: *Function* = createInteraction(refreshModel,
    function (model: Model<any>, data: RefreshInterface): Promise<any[]> {
        return createSync(model, { token: data.token, username: data.username });
    })

*Defined in [src/database/repository/refreshRepository.ts:43](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/refreshRepository.ts#L43)*

Creates a new refresh token for a specific user.

**`param`** 

**`param`** 

**`returns`** Promise<any[]>

___

### `Const` deleteRefresh

• **deleteRefresh**: *Function* = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('token').equals(token);
    })

*Defined in [src/database/repository/refreshRepository.ts:33](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/refreshRepository.ts#L33)*

Delets a refresh token by the token

**`param`** 

**`param`** 

**`returns`** DocumentQuery<any, any, {}>

___

### `Const` getRefresh

• **getRefresh**: *Function* = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('token').equals(token);
    })

*Defined in [src/database/repository/refreshRepository.ts:22](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/refreshRepository.ts#L22)*

Gets a refresh token by the token

**`param`** 

**`param`** 

**`returns`** DocumentQuery<any, any, {}>

## Functions

###  createRefreshModel

▸ **createRefreshModel**(`connection`: typeof mongoose): *Model‹any›*

*Defined in [src/database/repository/refreshRepository.ts:12](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/database/repository/refreshRepository.ts#L12)*

Creates a new refresh model.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`connection` | typeof mongoose |

**Returns:** *Model‹any›*

Model<any>
