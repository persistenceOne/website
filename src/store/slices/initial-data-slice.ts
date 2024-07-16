import { StateCreator } from "zustand";

export interface ValidatorInfo {
  identity: string;
  name: string;
  weight: string;
  delegationAmount: string;
  targetDelegation: string;
}

export interface ValidatorsInfo {
  osmo: ValidatorInfo[];
  dydx: ValidatorInfo[];
}

type AvailablePools = 2 | 3 | 5 | 12 | 13;

type OsmosisAvailablePools = 1101 | 1773;

export type PoolInfo = {
  tvl: number;
  apy: number;
};

export type OsmosisPoolsInfo = {
  [key in OsmosisAvailablePools]: PoolInfo;
};

export type DexterPoolsInfo = {
  [key in AvailablePools]: PoolInfo;
};

export interface InitialDataSliceState {
  dexterInfo: {
    total_volume: number;
    tvl: number;
    allTimeUsers: number
  };
  tvl: number;
  ibcVolume: number;
  transactionCost: number;
  transactions: string;
  marketCap: number;
  blocks: number;
  ibcConnections: number;
  audits: number;
  stakedXPRT: number;
  inflationDate: string;
  tokenPrices: {
    BNB: number;
    ATOM: number;
    OSMO: number;
    DYDX: number;
    XPRT: number;
  };
  dexterPoolsInfo: DexterPoolsInfo;
  osmoPoolsInfo: OsmosisPoolsInfo;
}

export interface InitialDataSliceActions {
  setDexterTVl: (value: any) => void;
  setDexterTotalVolume: (value: any) => void;
  setDexterUsers: (value: any) => void;
  setTokenPrices: (value: any) => void;
  setPersistenceTvl: (value: any) => void;
  setPersistenceMarketCap: (value: any) => void;
  setPersistenceChainBlock: (value: any) => void;
  setStakedXprt: (value: any) => void;
  setDexterPoolInfo: (value: any) => void;
  setOsmoPoolInfo: (value: any) => void;
}

const initialState: InitialDataSliceState = {
  dexterInfo: {
    total_volume: 0,
    tvl: 0,
    allTimeUsers: 0
  },
  tvl: 0,
  ibcVolume: 11084000,
  transactionCost: 0.005,
  transactions: "4M+",
  marketCap: 0,
  blocks: 0,
  ibcConnections: 45,
  audits: 5,
  stakedXPRT: 0,
  inflationDate: "April 2025",
  tokenPrices: {
    BNB: 0,
    ATOM: 0,
    OSMO: 0,
    DYDX: 0,
    XPRT: 0
  },
  dexterPoolsInfo: {
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
  },
  osmoPoolsInfo: {
    1101: {
      tvl: 0,
      apy: 0
    },
    1773: {
      tvl: 0,
      apy: 0
    }
  }
};

export type InitialDataSlice = InitialDataSliceState & InitialDataSliceActions;

export const createInitialDataSlice: StateCreator<InitialDataSlice> = (
  set
) => ({
  ...initialState,
  setDexterTVl: (value) =>
    set((state) => ({
      dexterInfo: {
        ...state.dexterInfo,
        tvl: value
      }
    })),
  setDexterTotalVolume: (value) =>
    set((state) => ({
      dexterInfo: {
        ...state.dexterInfo,
        total_volume: value
      }
    })),
  setTokenPrices: (value) =>
    set((state) => ({
      tokenPrices: value
    })),
  setPersistenceTvl: (value) =>
    set((state) => ({
      tvl: value
    })),
  setPersistenceMarketCap: (value) =>
    set((state) => ({
      marketCap: value
    })),
  setPersistenceChainBlock: (value) =>
    set((state) => ({
      blocks: value
    })),
  setStakedXprt: (value) =>
    set((state) => ({
      stakedXPRT: value
    })),
  setDexterPoolInfo: (value) =>
    set((state) => ({
      dexterPoolsInfo: value
    })),
  setDexterUsers: (value) =>
    set((state) => ({
      dexterInfo: {
        ...state.dexterInfo,
        allTimeUsers: value
      }
    })),
  setOsmoPoolInfo: (value) =>
    set((state) => ({
      osmoPoolsInfo: value
    }))
});
