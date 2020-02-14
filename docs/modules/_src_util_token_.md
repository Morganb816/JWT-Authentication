[jwt-express-api](../README.md) › [Globals](../globals.md) › ["src/util/token"](_src_util_token_.md)

# External module: "src/util/token"

## Index

### Functions

* [createRefreshToken](_src_util_token_.md#createrefreshtoken)
* [createToken](_src_util_token_.md#createtoken)
* [getSecret](_src_util_token_.md#getsecret)
* [verifyToken](_src_util_token_.md#verifytoken)

## Functions

###  createRefreshToken

▸ **createRefreshToken**(): *string*

*Defined in [src/util/token.ts:29](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/token.ts#L29)*

Creates a refresh token.

**`export`** 

**Returns:** *string*

string

___

###  createToken

▸ **createToken**(`payload`: any): *string*

*Defined in [src/util/token.ts:21](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/token.ts#L21)*

Creates a token from a given payload

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *string*

string

___

###  getSecret

▸ **getSecret**(): *string*

*Defined in [src/util/token.ts:8](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/token.ts#L8)*

Retreives this applications secret string used for creating tokens

**Returns:** *string*

string

___

###  verifyToken

▸ **verifyToken**(`token`: string): *Promise‹string›*

*Defined in [src/util/token.ts:38](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/token.ts#L38)*

Verifys a token with our applications secret

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹string›*

Promise<string>
