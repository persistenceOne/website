import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgSend } from "@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx";
import { KeplerWallet } from "./keplr";
import {Keplr_CONFIG} from "../../../constants/config";

export const handleKeplr = async (address, memo) => {
  try {
    const configChainID = Keplr_CONFIG.chainID;
    const toAddress = Keplr_CONFIG.depositAddress;
    const txFee = Keplr_CONFIG.transactionFee;

    console.log("configChainID: ", configChainID)
    await KeplerWallet();

    await window.keplr.enable(configChainID);
    let keplrAddress = address;
    let amount = 1

    let sendMsg = await SendMsg(
        keplrAddress,
        toAddress,
        amount.toString(),
    );
    let checkFee = await fee(0, txFee);
    let response = await TransactionWithKeplr([sendMsg], checkFee, memo, configChainID);
    return response;
  } catch (e) {
    let errorMsg = "";
    console.log("Error in handleKeplr: ", e);
    if (e && e.toString().indexOf("key not found") !== -1)
      errorMsg = "Error: Uninitialized or zero balance account selected!";
    else if (e && e.toString().indexOf("Request rejected") !== -1)
      errorMsg = "Transaction has been cancelled.";
    else if (e && e.toString().indexOf("Extension context invalidated") !== -1)
      errorMsg = "Keplr Extension not found or corrupted";
    else errorMsg = "Error in Keplr configuration. Txn might have been halted.";
    console.log("errorMsg: ", errorMsg)
  }
};

const TransactionWithKeplr = async (
    msgs,
    fee,
    memo,
    chainID,
) => {
  if(!chainID){
    chainID = Keplr_CONFIG.chainID;
  }
  console.log("")
  const [wallet, address] = await KeplrWallet(chainID);
  return Transaction(wallet, address, msgs, fee, memo);
};

const KeplrWallet = async (chainID) => {
  if(!chainID){
    chainID = Keplr_CONFIG.chainID;
  }
  await window.keplr.enable(chainID);
  const offlineSigner = window.getOfflineSigner(chainID);
  const accounts = await offlineSigner.getAccounts();
  return [offlineSigner, accounts[0].address];
};

const Transaction = async (
    wallet,
    signerAddress,
    msgs,
    fee,
    memo,
) => {
  const tendermintRPCURL = Keplr_CONFIG.chainRPCURL;

  const cosmJS = await SigningStargateClient.connectWithSigner(
      tendermintRPCURL,
      wallet
  );
  return await cosmJS.signAndBroadcast(signerAddress, msgs, fee, memo);
};

const fee = async (amount, gas = 250000) => {
  const coinDenom = Keplr_CONFIG.coinDenom

  return {
    amount: [{ amount: String(amount), denom: coinDenom }],
    gas: String(gas),
  };
};

const SendMsg = async (fromAddress, toAddress, amount) => {

  const msgSendTypeUrl = Keplr_CONFIG.msgType;
  const coinDenom = Keplr_CONFIG.coinDenom

  return {
    typeUrl: msgSendTypeUrl,
    value: MsgSend.fromPartial({
      fromAddress: fromAddress,
      toAddress: toAddress,
      amount: [
        {
          denom: coinDenom,
          amount: String(amount),
        },
      ],
    }),
  };
};
