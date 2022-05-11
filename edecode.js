#!/usr/bin/env node

const { decodeTx } = require('ethereum-tx-decoder');
 
const maybeDecodeTx = _rawTx => 
  new Promise((resolve, reject) => {
    const prefixedRawTx = '0x' + _rawTx.replace('0x', '')
    return _rawTx
      ? resolve(decodeTx(prefixedRawTx))
      : reject(new Error('Invalid raw tx given: ', _rawTx))  
  })
  

const main = () => 
  maybeDecodeTx(process.argv[2])
    .then(_res => console.info(JSON.stringify(_res)))
    .catch(_err => console.error(_err) || process.exit(1))

main()