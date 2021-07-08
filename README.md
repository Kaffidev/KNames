# KNames
Easy Banano potassium-rich on-chain decentralised domains!

Do u think vanity urls are cool, ok so u can use KNames for no-effort cool vanity names.

## Usage
```JS
const KNames = require('KNames')
KNames.getWalletByName('kaffinpx.k').then(wallet => { console.log(wallet) }) // Returns ban_ wallet address
```

## How-to
To create a name in Banano blockchain, you must spend 5-6 bananos.
And you must get data from name using getDataByName function.

```js
const KNames = require('KNames')
KNames.getDataByName('myExclusiveDomain') // Returns some numbers
```
And send 5.(Some numbers here) bananos to KNames Wallet ``ban_3name8cc7cci77jggyqi68us4pagun5qf3bg3u5pfxgwitc4femsh5sua3j9``
Cool right?
