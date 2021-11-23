const starGateBankTx = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const protoSigning = require("@cosmjs/proto-signing");
const crypto = require("@cosmjs/crypto");
const encoding = require("@cosmjs/encoding");
const proto_signing = require("@cosmjs/proto-signing");
const {SHA3} = require("crypto-js");
const {defaultRegistryTypes} = require("@cosmjs/stargate");

function createDefaultRegistry() {
    return new proto_signing.Registry(defaultRegistryTypes);
}

async function MnemonicWallet(mnemonic, hdPath = makeHdPath(), bip39Password = "", prefix = "persistence") {
    const wallet = await protoSigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic,
        {
            bip39Password: bip39Password,
            hdPaths: [hdPath],
            prefix: prefix,
        });
    const [firstAccount] = await wallet.getAccounts();
    return [wallet, firstAccount.address]
}

function makeHdPath(accountNumber = "0", addressIndex = "0", coinType = "750") {
    return crypto.stringToPath("m/44'/" + coinType + "'/" + accountNumber + "'/0/" + addressIndex)
}


function SendCoinMsg(fromAddress, toAddress, amount, denom) {
    return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: starGateBankTx.MsgSend.fromPartial({
            fromAddress: fromAddress,
            toAddress: toAddress,
            amount: [{
                denom: denom,
                amount: String(amount),
            }],
        }),
    };
}

function fee(amount, denom, gas = 2000000) {
    return {
        amount: protoSigning.coins(amount, denom),
        gas: String(gas),
    };
}

function generateHash(txBytes){
    return encoding.toHex(crypto.sha256(txBytes)).toUpperCase()
}

// eth address verification
let isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};

// eth address verification
let isChecksumAddress = function (address) {
    // Check each case
    address = address.replace('0x','');
    let addressHash = SHA3(address.toLowerCase());
    for (let i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};

// cosmos address vereification
function isBech32Address(address, prefix){
    try{
        let decodedAddress = encoding.Bech32.decode(address)
        return decodedAddress.prefix === prefix;
    } catch (e) {
        return false
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}



module.exports = {
    createDefaultRegistry, MnemonicWallet, makeHdPath, SendCoinMsg, fee, sleep, isAddress, isBech32Address, generateHash,
}