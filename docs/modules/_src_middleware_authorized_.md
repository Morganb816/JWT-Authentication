[jwt-express-api](../README.md) › [Globals](../globals.md) › ["src/middleware/authorized"](_src_middleware_authorized_.md)

# External module: "src/middleware/authorized"

## Index

### Functions

* [authenticated](_src_middleware_authorized_.md#authenticated)

## Functions

###  authenticated

▸ **authenticated**(`req`: Request, `res`: Response, `next`: NextFunction): *Promise‹void›*

*Defined in [src/middleware/authorized.ts:13](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/middleware/authorized.ts#L13)*

Authenticated is our middleware we use to see if a token is valid.
If it is we pass along the users username in the response locals for
the next function to use for data access.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`req` | Request |
`res` | Response |
`next` | NextFunction |

**Returns:** *Promise‹void›*

Promise<void>
