const {buildQuery} = require("@cosmjs/tendermint-rpc/build/tendermint33/requests");
const tendermint34Client = require("@cosmjs/tendermint-rpc");
const config = require("./config")

function txSearchParams(recipientAddress, pageNumber, perPage) {
    return {
        query: buildQuery({
            tags: [
                {key: "transfer.recipient", value: recipientAddress},
            ],
        }), page: pageNumber, per_page: perPage, prove: true, memo:''
    }
}

async function run(){
    let totalCount = 110;
    const tmClient = await tendermint34Client.Tendermint34Client.connect(config.chainRPCURL);
   // console.log("tmClient: ", tmClient )
    const pages = Math.ceil( totalCount / config.per_page)
    for (let page = 1; page <= pages; page++) {
        let perPageResults;
        perPageResults = await tmClient.txSearch(txSearchParams(config.depositAddress, page, config.per_page));

       console.log("perPageResults: ", perPageResults )
        if(perPageResults.txs[0].result.log && perPageResults.txs[0].result.log){
          // console.log("perPageResults: ", perPageResults.txs[0].result.log );
            let p = JSON.parse(perPageResults.txs[0].result.log);
            if(p[0].events[0].attributes[0].value === "send" && p[0].events[1].type === "transfer"){
                if(p[0].events[1].attributes[0].key === "recipient" && p[0].events[1].attributes[0].value === config.depositAddress){
                   // console.log("perPageResults: ", perPageResults);
                }
            }

        }
    }
}

run()