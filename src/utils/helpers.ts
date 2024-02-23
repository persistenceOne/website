import { ethers } from "ethers";
import { StkBNBWebSDK } from "@persistenceone/stkbnb-web-sdk";
import { Decimal } from "@cosmjs/math";

export const SPEEDY_NODE_URL = process.env.NEXT_PUBLIC_BNB_CHAIN_RPC_URL;

export const APP_ETHERS_PROVIDER = new ethers.providers.JsonRpcProvider(
  SPEEDY_NODE_URL
);

export const sdkInstance = StkBNBWebSDK.getInstance({
  signerOrProvider: APP_ETHERS_PROVIDER,
  env: 0
});

export const numberFormat = (number: any, decPlaces: number) => {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "M", "T"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      break;
    }
  }

  return number;
};

export const decimalize = (valueString: any, decimals = 6) => {
  console.log(valueString, "valueString");
  let truncate;
  if (typeof valueString === "string") {
    truncate = Number(valueString);
  } else {
    truncate = valueString;
  }
  console.log(valueString, "valueString");
  return Decimal.fromAtomics(
    Math.trunc(truncate).toString(),
    decimals
  ).toString();
};

export const decimalizeRaw = (valueString: any, decimals = 6) => {
  return Decimal.fromAtomics(valueString, decimals).toString();
};
