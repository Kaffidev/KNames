const https = require('https')
let nodeApi = 'api-beta.banano.cc'

const utils = require('./src/utils')

function getWalletByName (name) {
  return new Promise((resolve, reject) => {
      if(!name.includes('.k')) {
        reject(new Error('INVALID_SUFFIX'))
      }
      name = name.replace('.k', '')

      const data = JSON.stringify({
        action: 'account_history',
        account: 'ban_1mb8wg98mq3xu9bfjr4oidoadf5ht8po8txsarj1bwwhw3f6rrw58kxmgutr',
        count: 1,
        reverse: true
      })

      const options = {
        hostname: nodeApi,
        port: 443,
        path: '/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      }

      const req = https.request(options, res => {
        res.on('data', d => {
          const blocks = JSON.parse(d.toString())["history"]
          blocks.forEach(block => {
              if(!block.type === "receive") return
              const blockData = utils.splitStringBySegmentLength(block.amount.replace('5', ''), 2)
              let blockText = ''
              blockData.forEach(text => {
                if(text === '00' || text === '0') return
                blockText = blockText + utils.numberToLetters(text)
              })
              if(blockText === name) { resolve(block.account) }
              reject(new Error('CANNOT_FIND_NAME'))
          });
        })
      })

      req.write(data)
      req.end()
    })
}

module.exports = { nodeApi, getWalletByName }

getWalletByName('kaffinpx.k').then(wallet => { console.log(wallet) })
