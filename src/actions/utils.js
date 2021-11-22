import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3"; // import web3 v1.0 constructor
import { NETWORK_ID } from "../constants/config";
import BigNumber from "bignumber.js";

var web3 = null;
const decimalPlaces = 6;

export const getWeb3 = () => {
    const web3 = new Web3(Web3.givenProvider)
    return web3;
};

export const setWeb3 = (web3Object) => {
    web3 = web3Object;
};

export const isWeb3Unlocked = async () => {
    console.log("inside isweb3unlocked");
    const provider = await detectEthereumProvider();
    if (provider === window.ethereum) {
        const web3Obj = new Web3(provider);
        let network = await web3Obj.eth.net.getId();
        console.log("network ID: ", network);
        if (network === NETWORK_ID) {
            let accountList = await web3Obj.eth.getAccounts();
            console.log("accountlist: ", accountList);
            // if account is unlocked, check if the correct network is selected
            if (accountList.length !== 0) {
                if (!web3) web3 = web3Obj;
                return true;
            }
        }
    }
    return false;
};

export const unDecimalize = (valueString, decimals = decimalPlaces) => {
    // since BN.js doesn't accept decimals, we'll use BigNumber.js
    console.log("valueString: ", valueString)
    let bnValueString = valueString
        ? new BigNumber(valueString.toString())
        : new BigNumber(0);
    let bnDecimalPlaces = new BigNumber(decimals);
    let bnBase = new BigNumber(10);
    let bnMultiplier = bnBase.pow(bnDecimalPlaces);
    let bnResult = bnValueString.multipliedBy(bnMultiplier).toFixed(0);

    let bnFinalValueToBN = web3.utils.toBN(bnResult.toString());
    return bnFinalValueToBN;
};

export const autoExponentiation = (valueString, fixed = decimalPlaces) => {
    let bnFinalValue;
    let valueStringBN = new BigNumber(valueString);
    let valueStringBNDP = valueStringBN.decimalPlaces(6, 1);
    let denominator = new BigNumber(10 ** decimalPlaces);
    let one = new BigNumber(1);
    let minVal = one.dividedBy(denominator);
    console.log(
        "valueStringBN: ",
        valueStringBN.toString(),
        " valueStringBNDP: ",
        valueStringBNDP.toString()
    );
    if (valueStringBN.isGreaterThanOrEqualTo(one)) {
        bnFinalValue = valueStringBN.toFixed(Number(fixed), 1);
    } else {
        if (valueStringBN > valueStringBNDP) {
            bnFinalValue = valueStringBN.toExponential(Number(fixed), 1);
        } else {
            bnFinalValue = valueStringBN.toFixed(Number(fixed), 1);
        }
    }

    // return valueStringBN;
    return bnFinalValue.toString();
};

export const decimalize = (
    valueString,
    decimals = decimalPlaces,
    fixed = decimalPlaces
) => {
    // BigNumber.set({ DECIMAL_PLACES: decimalPlaces, ROUNDING_MODE: 5 });
    let bnValueString = valueString
        ? new BigNumber(valueString.toString())
        : new BigNumber(0);
    let bnDecimalPlaces = new BigNumber(decimals);
    let bnBase = new BigNumber(10);
    let bnDenominator = bnBase.pow(bnDecimalPlaces);
    let bnFinalValueToBNString;
    bnFinalValueToBNString = bnValueString.div(bnDenominator);
    return autoExponentiation(bnFinalValueToBNString.toString(), fixed);
};

export const getContractInstance = async (contractName) => {
    const artifactJSON = require(`../abi/${contractName}.json`);
    //   console.log("artifactJSON: ", artifactJSON);
    const web3Local = getWeb3();
    console.log("web3 inside getContractInstance: ", getWeb3());
    const network = await web3Local.eth.net.getId();
    const deployedAddress = artifactJSON.networks[network].address;
    // console.log("deployedAddress: ", deployedAddress, " ", network);
    const instance = new web3Local.eth.Contract(
        artifactJSON.abi,
        deployedAddress
    );
    instance.setProvider(web3Local);
    return instance;
};