[jwt-express-api](../README.md) › [Globals](../globals.md) › ["src/service/util"](_src_service_util_.md)

# External module: "src/service/util"

## Index

### Variables

* [AUTH_TOKEN](_src_service_util_.md#const-auth_token)
* [REFRESH_TOKEN](_src_service_util_.md#const-refresh_token)

### Functions

* [destroyTokens](_src_service_util_.md#destroytokens)
* [setAuth](_src_service_util_.md#setauth)
* [setRefresh](_src_service_util_.md#setrefresh)
* [setTokens](_src_service_util_.md#settokens)

## Variables

### `Const` AUTH_TOKEN

• **AUTH_TOKEN**: *"auth-token"* = "auth-token"

*Defined in [src/service/util.ts:6](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L6)*

Token name variables for if you cant spell like me.

___

### `Const` REFRESH_TOKEN

• **REFRESH_TOKEN**: *"refresh-token"* = "refresh-token"

*Defined in [src/service/util.ts:7](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L7)*

## Functions

###  destroyTokens

▸ **destroyTokens**(`res`: Response): *Response*

*Defined in [src/service/util.ts:52](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L52)*

Destroy tokens is used to clear all tokens for our user.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`res` | Response |

**Returns:** *Response*

Response

___

###  setAuth

▸ **setAuth**(`res`: Response, `auth`: string): *Response*

*Defined in [src/service/util.ts:16](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L16)*

Set auth sets the authorization token on the headers of our response.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`res` | Response |
`auth` | string |

**Returns:** *Response*

Response

___

###  setRefresh

▸ **setRefresh**(`res`: Response, `refresh`: string): *Response*

*Defined in [src/service/util.ts:28](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L28)*

Set refresh set the refresh token cookie on our respose.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`res` | Response |
`refresh` | string |

**Returns:** *Response*

Response

___

###  setTokens

▸ **setTokens**(`res`: Response, `auth`: string, `refresh`: string): *Response*

*Defined in [src/service/util.ts:42](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/service/util.ts#L42)*

Set tokens sets both auth and refresh tokens on our response and returns the response.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`res` | Response | - |
`auth` | string | - |
`refresh` | string |   |

**Returns:** *Response*
