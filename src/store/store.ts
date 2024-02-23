"use client";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { mountStoreDevtool } from "simple-zustand-devtools";
import {
  createInitialDataSlice,
  InitialDataSlice,
} from "./slices/initial-data-slice";

type StoreState = InitialDataSlice;

export const useAppStore = createWithEqualityFn<StoreState>()(
  (...a) => ({
    ...createInitialDataSlice(...a),
  }),
  shallow
);

mountStoreDevtool("Store", useAppStore);
