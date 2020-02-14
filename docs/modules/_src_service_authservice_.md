[rewrite](../README.md) › [Globals](../globals.md) › ["src/service/authService"](_src_service_authservice_.md)

# External module: "src/service/authService"

## Index

### Variables

* [CREATION](_src_service_authservice_.md#const-creation)
* [EXISTS](_src_service_authservice_.md#const-exists)
* [NOT_FOUND](_src_service_authservice_.md#const-not_found)
* [PASSWORD](_src_service_authservice_.md#const-password)
* [TOKEN](_src_service_authservice_.md#const-token)

### Functions

* [loginService](_src_service_authservice_.md#loginservice)
* [logoutService](_src_service_authservice_.md#logoutservice)
* [refreshService](_src_service_authservice_.md#refreshservice)
* [signupService](_src_service_authservice_.md#signupservice)

## Variables

### `Const` CREATION

• **CREATION**: *"CREATION"* = "CREATION"

*Defined in [src/service/authService.ts:17](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L17)*

___

### `Const` EXISTS

• **EXISTS**: *"EXISTS"* = "EXISTS"

*Defined in [src/service/authService.ts:15](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L15)*

Error string variables.
so if you cant type like me you dont need to worry.

___

### `Const` NOT_FOUND

• **NOT_FOUND**: *"NOT_FOUND"* = "NOT_FOUND"

*Defined in [src/service/authService.ts:19](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L19)*

___

### `Const` PASSWORD

• **PASSWORD**: *"PASSWORD"* = "PASSWORD"

*Defined in [src/service/authService.ts:18](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L18)*

___

### `Const` TOKEN

• **TOKEN**: *"TOKEN"* = "TOKEN"

*Defined in [src/service/authService.ts:16](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L16)*

## Functions

###  loginService

▸ **loginService**(`req`: Request, `res`: Response, `next`: NextFunction): *Promise‹void›*

*Defined in [src/service/authService.ts:30](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L30)*

Login Service
This service logs a requested user into our application responding with a set of tokens.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |
`next` | NextFunction |

**Returns:** *Promise‹void›*

Promise<void>

___

###  logoutService

▸ **logoutService**(`req`: Request, `res`: Response, `next`: NextFunction): *Promise‹void›*

*Defined in [src/service/authService.ts:143](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L143)*

Logout Service
Logout service logs a user our of our application by setting there tokens to empty strings and deleting
the refresh token they were using from our database.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |
`next` | NextFunction |

**Returns:** *Promise‹void›*

Promise<void>

___

###  refreshService

▸ **refreshService**(`req`: Request, `res`: Response, `next`: NextFunction): *Promise‹void›*

*Defined in [src/service/authService.ts:108](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L108)*

Refresh Service
Refresh service refreshes a users tokens if they have gone stale.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |
`next` | NextFunction |

**Returns:** *Promise‹void›*

Promise<void>

___

###  signupService

▸ **signupService**(`req`: Request, `res`: Response, `next`: NextFunction): *Promise‹void›*

*Defined in [src/service/authService.ts:68](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/service/authService.ts#L68)*

Signup Service
This service signs a new user up to our application and also responds with a set of tokens.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |
`next` | NextFunction |

**Returns:** *Promise‹void›*

Promise<void>
