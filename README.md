# KNames 🙈
### Easy Banano potassium-rich on-chain decentralised domains!

> Do you think vanity urls are cool, ok so you can use KNames for no-effort cool vanity names.

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
console.log(KNames.getDataByName('myexclusivedomain')) // Returns some numbers and it will logged in console.
```
And send 5.(Some numbers here) bananos to KNames Wallet `ban_3name8cc7cci77jggyqi68us4pagun5qf3bg3u5pfxgwitc4femsh5sua3j9`
Cool right?

### Browserify
To use with browsers, you can use browserify to build a JS file for browsers.
> To install: `npm i browserify --global`
> To build: `browserify index.js --standalone KNames > browser/index.js`

### Limitations
* You can only use .k domain at this time.
* You cant edit your name if you publish it.
* Only lower case letters can be used.

## Api

### getWalletByName(KName)
##### Get ban_ address of KName
##### Returns promise with wallet.

### getNameByWallet(Wallet)
##### Get KName name address by ban_ wallet
##### Returns promise with wallet.

### createDataByName(KName)
##### Makes name banano-data.
##### Returns data.

### nodeApi
##### RPC node to communicate.
##### You can use like nodeApi = address.com.