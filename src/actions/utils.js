import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3"; // import web3 v1.0 constructor
import { NETWORK_ID } from "../constants/config";

var web3 = null;

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