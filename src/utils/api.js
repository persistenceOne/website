import axios from "axios";

const defillamaApi = "https://defillama-datasets.llama.fi/lite/protocols2";

export const fetchChainTVL = async () => {
    try{
        const response = await axios.get(defillamaApi)
        console.log(response, "Response")
        if (response && response.data && response.data.protocols){
            const protocol = response.data.protocols.find((item)=> item.name === 'Dexter');
            if (protocol){
                return (protocol.chainTvls.Persistence.tvl).toFixed();
            }
        }
        return 0
    }catch (e) {
        console.log(e)
        return 0
    }
}