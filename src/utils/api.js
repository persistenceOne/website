import axios from "axios";

const defillamaApi = "https://defillama-datasets.llama.fi/lite/protocols2";

export const fetchChainTVL = async () => {
    try{
        const response = await axios.get(defillamaApi)
        console.log(response, "Response")
        if (response && response.data && response.data.protocols){
            const protocol = response.data.protocols.find((item)=> item.category === 'Dexes' && item.name === 'Dexter');
            const liquidStake = response.data.protocols.find((item)=> item.category === 'Liquid Staking' && item.name === 'pSTAKE Finance');
            if (protocol){
                return (Number(protocol.chainTvls.Persistence.tvl)+Number(liquidStake.chainTvls.Persistence.tvl)).toFixed();
            }
        }
        return 0
    }catch (e) {
        console.log(e)
        return 0
    }
}