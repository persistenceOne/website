const {buildQuery} = require("@cosmjs/tendermint-rpc/build/tendermint33/requests");
const tendermint34Client = require("@cosmjs/tendermint-rpc");
const config = require("./config")
const proto = require("@cosmjs/proto-signing");
const util = require("./utilities/util");

const registry = util.createDefaultRegistry();

function txSearchParams(recipientAddress, pageNumber, perPage) {
    return {
        query: buildQuery({
            tags: [
                {key: "transfer.recipient", value: recipientAddress},
            ],
        }), page: pageNumber, per_page: perPage, prove: true
    }
}

async function run(){
    let totalCount = 110;
    let data = [];
    let obj = {};
    const tmClient = await tendermint34Client.Tendermint34Client.connect(config.chainRPCURL);
    const pages = Math.ceil( totalCount / config.per_page)
    for (let page = 1; page <= pages; page++) {
        let perPageResults;
        perPageResults = await tmClient.txSearch(txSearchParams(config.depositAddress, page, config.per_page));
        for (let transaction of perPageResults.txs) {
            const decodedTransaction = proto.decodeTxRaw(transaction.tx);
            if (transaction.result.code === 0) {
                for (let message of decodedTransaction.body.messages) {
                    if (message.typeUrl === "/cosmos.bank.v1beta1.MsgSend") {
                        const body = registry.decode(message);
                        if (body.toAddress === config.depositAddress) {
                           // console.log(body);
                            if (util.isAddress(decodedTransaction.body.memo)) {
                                //console.log(decodedTransaction.body.memo)
                                obj = {
                                    toAddress: body.toAddress,
                                    fromAddress: body.fromAddress,
                                    ethAddress: decodedTransaction.body.memo,
                                    amount: body.amount[0].amount
                                }
                                data.push(obj)
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("data: ", data)
}

run();