[jwt-express-api](../README.md) › [Globals](../globals.md) › ["src/util/hash"](_src_util_hash_.md)

# External module: "src/util/hash"

## Index

### Functions

* [checkStringAgainstHash](_src_util_hash_.md#checkstringagainsthash)
* [hashString](_src_util_hash_.md#hashstring)

## Functions

###  checkStringAgainstHash

▸ **checkStringAgainstHash**(`str`: string, `hash`: string): *boolean*

*Defined in [src/util/hash.ts:18](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/hash.ts#L18)*

Checks if a given string is equal to a given hash.

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`hash` | string |

**Returns:** *boolean*

boolean

___

###  hashString

▸ **hashString**(`str`: string): *string*

*Defined in [src/util/hash.ts:8](https://github.com/Morganb816/JWT-Authentication/blob/f809911/src/util/hash.ts#L8)*

Hashes a given string into a secure string

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

string
