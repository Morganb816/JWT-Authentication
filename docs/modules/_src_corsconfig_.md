[rewrite](../README.md) › [Globals](../globals.md) › ["src/corsConfig"](_src_corsconfig_.md)

# External module: "src/corsConfig"

## Index

### Object literals

* [corsConfig](_src_corsconfig_.md#const-corsconfig)

## Object literals

### `Const` corsConfig

### ▪ **corsConfig**: *object*

*Defined in [src/corsConfig.ts:9](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/corsConfig.ts#L9)*

Cors configuration for our application.

**`export`** 

**`corsoptions`** 

###  credentials

• **credentials**: *true* = true

*Defined in [src/corsConfig.ts:23](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/corsConfig.ts#L23)*

###  exposedHeaders

• **exposedHeaders**: *string[]* = [
        'auth-token',
        'Set-Cookie'
    ]

*Defined in [src/corsConfig.ts:19](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/corsConfig.ts#L19)*

###  origin

▸ **origin**(`origin`: string | undefined, `callback`: function): *void*

*Defined in [src/corsConfig.ts:10](https://github.com/Morganb816/JWT-Authentication/blob/e3bc080/src/corsConfig.ts#L10)*

**Parameters:**

▪ **origin**: *string | undefined*

▪ **callback**: *function*

▸ (`err`: Error | null, `allow?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error &#124; null |
`allow?` | undefined &#124; false &#124; true |

**Returns:** *void*
