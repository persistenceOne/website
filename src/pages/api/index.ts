import axios from "axios";
import { sdkInstance } from "@/utils/helpers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";

const defillamaApi = "https://defillama-datasets.llama.fi/lite/protocols2";
export const STK_ATOM_TVL_URL =
  "https://staging.api.persistence.one/pstake/stkatom/atom_tvu";
export const STK_OSMO_TVL_API =
  "https://staging.api.persistence.one/pstake/stkosmo/osmo_tvu";
export const STK_DYDX_TVL_API =
  "https://staging.api.persistence.one/pstake/stkdydx/dydx_tvu";
export const XPRT_POOL_URL = "https://api-osmosis.imperator.co/pools/v2/15";
export const DEXTER_POOL_URL = "https://api.core-1.dexter.zone/v1/graphql";

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
    DYDX: 0,
    XPRT: 0
  };
  try {
    const tokens = ["cosmos", "osmosis", "binancecoin", "dydx", "persistence"];
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
    data.DYDX = Number(pricesResponse.data["persistence"].usd);
    return data;
  } catch (e) {
    return data;
  }
};

export const fetchOsmosisPoolInfo = async () => {
  try {
    const response = await axios.get(XPRT_POOL_URL);
    let osmoTvl = 0;
    if (response && response.data) {
      osmoTvl = Math.round(response.data[0].liquidity);
    } else {
      osmoTvl = 0;
    }
    return osmoTvl;
  } catch (e) {
    return 0;
  }
};

export const getBnbTVL = async () => {
  try {
    const tvl = await sdkInstance.getTvl();
    return Number(StkBNBWebSDK.format(tvl, 2));
  } catch (e) {
    console.log(e);
    return 0;
  }
};

export const fetchDexterInfo = async () => {
  try {
    const res = await fetch(DEXTER_POOL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          pool_weekly_aggregate_with_apr {
            pool_id
            current_liquidity_usd
          }
          swap_volume_lifetime_aggregate {
            total_swap_volume
          }
          }`
      })
    });

    const responseJson = await res.json();
    let total_liquidity;
    let volume_usd = 0;
    if (responseJson && responseJson.data) {
      total_liquidity = responseJson.data.pool_weekly_aggregate_with_apr.reduce(
        (acc: any, pool: any) => {
          const { current_liquidity_usd } = pool;

          acc.current_liquidity_usd += current_liquidity_usd;
          return acc;
        },
        { current_liquidity_usd: 0 }
      );
      volume_usd =
        responseJson.data.swap_volume_lifetime_aggregate[0].total_swap_volume;
    }

    return {
      tvl: total_liquidity.current_liquidity_usd || 0,
      volume: volume_usd
    };
  } catch (e) {
    console.log(e, "error in fetchDexterInfo");
    return {
      tvl: 0,
      volume: 0
    };
  }
};
