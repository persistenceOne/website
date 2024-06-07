import axios from "axios";
import { sdkInstance } from "@/utils/helpers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";

const defillamaApi = "https://defillama-datasets.llama.fi/lite/protocols2";
export const STK_XPRT_TVL_URL =
  "https://api.persistence.one/pstake/stkxprt/xprt_tvu";
export const STK_ATOM_TVL_URL =
  "https://staging.api.persistence.one/pstake/stkatom/atom_tvu";
export const STK_OSMO_TVL_API =
  "https://staging.api.persistence.one/pstake/stkosmo/osmo_tvu";
export const STK_DYDX_TVL_API =
  "https://staging.api.persistence.one/pstake/stkdydx/dydx_tvu";
export const XPRT_POOL_URL = "https://api-osmosis.imperator.co/pools/v2/1101";
export const DEXTER_POOL_URL = "https://api.core-1.dexter.zone/v1/graphql";
export const OSMO_APR_URL =
  "https://public-osmosis-api.numia.xyz/pools_apr?pool=15";
export const OSMO_TVL_URL = "https://api-osmosis.imperator.co/pools/v2/1101";
export const MarketCap_API =
  "https://api.coingecko.com/api/v3/coins/persistence";
export const LATEST_BLOCK_HEIGHT_URL =
  "https://rest.core.persistence.one/cosmos/base/tendermint/v1beta1/blocks/latest";

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
        : prefix === "xprt"
        ? STK_XPRT_TVL_URL
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
    const response = await fetch(`/api/prices`);
    const pricesResponse = await response.json();
    console.log(pricesResponse, "pricesResponse");
    data.BNB = Number(pricesResponse.data["binancecoin"].usd);
    data.ATOM = Number(pricesResponse.data["cosmos"].usd);
    data.OSMO = Number(pricesResponse.data["osmosis"].usd);
    data.DYDX = Number(pricesResponse.data["dydx"].usd);
    data.XPRT = Number(pricesResponse.data["persistence"].usd);
    return data;
  } catch (e) {
    return data;
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

export const fetchDexterPoolInfo = async () => {
  let poolInfos: any = {
    2: {
      tvl: 0,
      apy: 0
    },
    3: {
      tvl: 0,
      apy: 0
    },
    5: {
      tvl: 0,
      apy: 0
    },
    12: {
      tvl: 0,
      apy: 0
    },
    13: {
      tvl: 0,
      apy: 0
    }
  };
  try {
    const res = await fetch(DEXTER_POOL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
           pools(where: {poolAssets_: {identifier_contains: "uxprt"}}) {
            poolId
            poolAssets {
              identifier
            }
          }
          pool_weekly_aggregate_with_apr(where: {pool_id: {_in: [2, 3, 5, 12, 13]}}) {
            pool_id
            total_swap_fee
            current_liquidity_usd
            total_volume
            apr
          }
          pool_current_incentive_apr(where: {pool_id: {_in: [2, 3, 5, 12, 13]}}) {
            incentive_apr
            pool_id
          }
          }`
      })
    });
    const responseJson = await res.json();
    console.log(responseJson, "responseJson-pools");
    if (responseJson && responseJson.data) {
      responseJson.data.pool_weekly_aggregate_with_apr.forEach((item: any) => {
        const poolAggregate = item;
        const poolIncentiveAprList =
          responseJson.data.pool_current_incentive_apr?.filter(
            (incItem: any) => {
              return incItem.pool_id === item.pool_id;
            }
          );
        let poolIncentiveApr = 0;
        if (poolIncentiveAprList && poolIncentiveAprList.length) {
          poolIncentiveAprList.forEach((item: any) => {
            poolIncentiveApr += item.incentive_apr;
          });
        }
        const total_apy = (
          poolIncentiveApr + (poolAggregate.apr ? poolAggregate.apr : 0)
        ).toFixed(2);

        const tvl = poolAggregate.current_liquidity_usd!.toFixed(2);
        const info = {
          apy: total_apy,
          tvl: tvl
        };
        Object.keys(poolInfos).forEach((keyItem: any) => {
          if (Number(keyItem) === item.pool_id) {
            poolInfos[keyItem] = info;
          }
        });
      });
      console.log(poolInfos, "poolInfos");
      return poolInfos;
    }
    return poolInfos;
  } catch (e) {
    console.log(e, "error in fetchDexterInfo");
    return poolInfos;
  }
};

export const fetchOsmosisPoolInfo = async () => {
  let osmoInfo: any = {
    apy: 0,
    tvl: 0
  };
  try {
    const responses = await axios.all([
      axios.get(OSMO_TVL_URL),
      axios.get(OSMO_APR_URL)
    ]);
    const responseOne = responses[0];
    const responseTwo = responses[1];

    if (responseTwo && responseTwo.data) {
      if (responseTwo.data[0].total_apr) {
        osmoInfo.apy = Number(responseTwo.data[0].total_apr).toFixed(2);
      }
    } else {
      osmoInfo.apy = 0;
    }
    if (responseOne && responseOne.data) {
      osmoInfo.tvl = Math.round(responseOne.data[0].liquidity).toFixed(2);
    } else {
      osmoInfo.tvl = 0;
    }
    return osmoInfo;
  } catch (e) {
    console.log(e, "error in fetchOsmoPool2Info");
    return osmoInfo;
  }
};

export const getMarketCap = async () => {
  try {
    const res = await axios.get(MarketCap_API);
    if (res && res.data) {
      return Number(res.data.market_data?.market_cap.usd);
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getBlockNumber = async () => {
  try {
    const res = await axios.get(LATEST_BLOCK_HEIGHT_URL);
    if (res && res.data) {
      console.log(res, "res-block-height");
      return res!.data!.block!.header.height;
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

export const getBondedTokens = async () => {
  try {
    const responses = await axios.all([
      axios.get(
        "https://rest.core.persistence.one/cosmos/staking/v1beta1/pool"
      ),
      axios.get(
        "https://rest.core.persistence.one/cosmos/bank/v1beta1/supply/by_denom?denom=uxprt"
      )
    ]);
    const responseOne = responses[0];
    const responseTwo = responses[1];
    let bondedTokens = 0;
    let supply = 0;
    if (responseOne && responseOne.data) {
      bondedTokens = responseOne.data.pool.bonded_tokens;
    }
    if (responseTwo && responseTwo.data) {
      supply = responseTwo.data.amount.amount;
    }
    const total = (bondedTokens * 100) / supply;
    return total.toFixed(2);
  } catch (e) {
    return 0;
  }
};
