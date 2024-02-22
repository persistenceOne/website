import axios from "axios";

const defillamaApi = "https://defillama-datasets.llama.fi/lite/protocols2";
export const STK_ATOM_TVL_URL =
  "https://staging.api.persistence.one/pstake/stkatom/atom_tvu";
export const STK_OSMO_TVL_API =
  "https://staging.api.persistence.one/pstake/stkosmo/osmo_tvu";
export const STK_DYDX_TVL_API =
  "https://staging.api.persistence.one/pstake/stkdydx/dydx_tvu";

export const fetchChainTVL = async () => {
  try {
    const response = await axios.get(defillamaApi);
    if (response && response.data && response.data.protocols) {
      const protocol = response.data.protocols.find(
        (item: any) => item.category === "Dexes" && item.name === "Dexter"
      );
      const liquidStake = response.data.protocols.find(
        (item: any) =>
          item.category === "Liquid Staking" && item.name === "pSTAKE Finance"
      );
      if (protocol) {
        return (
          Number(protocol.chainTvls.Persistence.tvl) +
          Number(liquidStake.chainTvls.Persistence.tvl)
        ).toFixed();
      }
    }
    return 0;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

export const getCosmosTVL = async (prefix: string) => {
  try {
    const res = await axios.get(
      prefix === "cosmos"
        ? STK_ATOM_TVL_URL
        : prefix === "osmo"
        ? STK_OSMO_TVL_API
        : STK_DYDX_TVL_API
    );
    if (res && res.data) {
      return res!.data!.amount!.amount;
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const fetchTokenPrices = async () => {
  let data = {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0
  };
  try {
    const tokens = ["cosmos", "osmosis", "binancecoin", "dydx"];
    const pricesResponse = await axios.get(
      `https://pro-api.coingecko.com/api/v3/simple/price?ids=${tokens.join(
        ","
      )}&vs_currencies=usd`,
      {
        headers: {
          "x-cg-pro-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY
        }
      }
    );
    data.BNB = Number(pricesResponse.data["binancecoin"].usd);
    data.ATOM = Number(pricesResponse.data["cosmos"].usd);
    data.OSMO = Number(pricesResponse.data["osmosis"].usd);
    data.DYDX = Number(pricesResponse.data["dydx"].usd);
    return data;
  } catch (e) {
    return data;
  }
};
