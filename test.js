const KNames = require('./index')
let testWallet = "ban_1njsxspwdds1sz5ysfseozbachn6mtj6sj6qrxa1j3bmacaqapdeaaspsxsp"

KNames.getNameByWallet(testWallet).then(name => {
    KNames.getWalletByName(name).then(wallet => {
        if(wallet === testWallet) {
            console.log('Test pass')
        } else {
            throw new Error(`Test cannot pass!
                            Debug info: ${name}, ${wallet}`)
        }
    })
})