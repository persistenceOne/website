import React, { useEffect, useState } from "react";
import { checkbech32 } from "../../actions/bech32Validation";
import { getContractInstance } from "../../actions/utils";
import { NETWORK_ID, NETWORK_NAME } from "../../constants/config";

const RecordXPRTAddress = ({ notParticipantAddress }) => {
  const [ethAddress, setEthAddress] = useState("");
  const [xprtAddress, setXprtAddress] = useState("");

  // isWalletSuccess & walletStatusMsg pertains to status and message controlling the eth wallet connection
  const [isWalletSuccess, setIsWalletSuccess] = useState(false);
  const [walletStatusMsg, setWalletStatusMsg] = useState("");
  const [walletStatusMsgMode, setWalletStatusMsgMode] = useState("");

  // isXPRTSuccess & xprtStatusMsg pertains to status and message controlling the xprt addr submission form
  const [isXPRTSuccess, setIsXPRTSuccess] = useState(false);
  const [xprtStatusMsg, setXprtStatusMsg] = useState("");
  const [xprtStatusMsgMode, setXprtStatusMsgMode] = useState("");

  useEffect(() => {
    if (!window.ethereum) {
      setIsWalletSuccess(false);
      setWalletStatusMsg("Please Install Metamask or other Browser Wallet");
      setWalletStatusMsgMode("invalid");
      return;
    }

    if (window.ethereum.selectedAddress) {
      setEthAddress(window.ethereum.selectedAddress);
      if (!window.ethereum || window.ethereum.chainId !== NETWORK_ID) {
        setIsWalletSuccess(false);
        setWalletStatusMsg(
          `Incorrect Network ID selected. Set network to ${NETWORK_NAME} and refresh`
        );
        setWalletStatusMsgMode("invalid");
        setIsXPRTSuccess(false);
        return;
      } else {
        setIsWalletSuccess(true);
        setWalletStatusMsg(
          "Wallet Connected! Continue with XPRT Address addition "
        );
        setWalletStatusMsgMode("valid");
      }
    } else {
      setIsWalletSuccess(true);
      if (walletStatusMsg === "") {
        setWalletStatusMsg("Browser Wallet Found. Click on Connect");
        setWalletStatusMsgMode("valid");
      }
    }

    return () => {};
  }, [walletStatusMsg]);

  const handleWalletConnect = () => {
    setWalletStatusMsg("Browser Wallet Found. Click on Connect");
    setWalletStatusMsgMode("valid");

    if (!window.ethereum) {
      setIsWalletSuccess(false);
      setWalletStatusMsg("Please Install Metamask");
      setWalletStatusMsgMode("invalid");
      return;
    }

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((addr) => {
        setEthAddress(addr[0]);
        if (!window.ethereum || window.ethereum.chainId !== NETWORK_ID) {
          setIsWalletSuccess(false);
          setWalletStatusMsg(
            `Incorrect Network ID selected. Set network to ${NETWORK_NAME} and refresh`
          );
          setWalletStatusMsgMode("invalid");
          setIsXPRTSuccess(false);
          return;
        } else {
          setWalletStatusMsg(
            "Wallet Connected! Continue with XPRT Address addition "
          );
          setWalletStatusMsgMode("valid");
        }
      })
      .catch((e) => {
        setWalletStatusMsgMode("invalid");
        setWalletStatusMsg("Wallet Error. Refresh and try again");
      });

    window.ethereum.on("accountsChanged", (accounts) => {
      setEthAddress(accounts[0]);
    });

    window.ethereum.on("disconnect", () => {
      setEthAddress("");
    });

    window.ethereum
      .request({ method: "eth_chainId" })
      .then((networkId) => {
        if (networkId !== NETWORK_ID) {
          setIsWalletSuccess(false);
          setWalletStatusMsg(
            `Incorrect Network ID selected. Set network to ${NETWORK_NAME} and refresh`
          );
          setWalletStatusMsgMode("invalid");
          setIsXPRTSuccess(false);
        }
      })
      .catch((error) => {
        setIsWalletSuccess(false);
        setWalletStatusMsg("Network Error. Try connecting again");
        setWalletStatusMsgMode("invalid");
        setIsXPRTSuccess(false);
      });

    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId !== NETWORK_ID) {
        setWalletStatusMsg(
          `Incorrect Network ID selected. Set network to ${NETWORK_NAME} and refresh`
        );
        setWalletStatusMsgMode("invalid");
        setIsXPRTSuccess(false);
      }
    });
  };

  const handleXPRTAddressChange = (event) => {

    setXprtAddress(event.target.value);
    // check if the XPRT address supplied is Bech32 valid
    let checkBech32 = checkbech32(event.target.value);
    if (!checkBech32) {
      setXprtStatusMsg("Address is Invalid as per Bech32");
      setXprtStatusMsgMode("invalid");
      setIsXPRTSuccess(false);
      return;
    }

    // check if the XPRT address supplied is a stakedrop participant
    else if (notParticipantAddress) {
      setXprtStatusMsg(
        "Not a StakeDrop participant address, please send the magic transaction"
      );
      setXprtStatusMsgMode("invalid");

      setIsXPRTSuccess(false);
      return;
    }

    // check if the eth address is populated and valid
    else if (!ethAddress) {
      setXprtStatusMsg("Error getting Eth Address. Check wallet connection");
      setXprtStatusMsgMode("invalid");

      setWalletStatusMsg("Browser Wallet Found. Click on Connect");
      setWalletStatusMsgMode("valid");
      setIsXPRTSuccess(false);
      return;
    }

    // if all checks suceed, show success message and enable submit button
    else {
      setXprtStatusMsg(
        <span>&#10003; XPRT Address is valid for StakeDrop</span>
      );
      setXprtStatusMsgMode("valid");
      setIsXPRTSuccess(true);
    }
  };

  const handleXPRTAddressSubmit = async (e) => {

    e.preventDefault();

    if (
      !window.ethereum ||
      !window.ethereum.isConnected() ||
      window.ethereum.chainId !== NETWORK_ID
    ) {
      setIsWalletSuccess(false);
      setWalletStatusMsg(
        `Incorrect Network ID selected. Set network to ${NETWORK_NAME} and refresh`
      );
      setWalletStatusMsgMode("invalid");
      setIsXPRTSuccess(false);
      return;
    }

    const calAddress = xprtAddress;
    let checkBech32 = checkbech32(calAddress);
    if (checkBech32) {
      const stakeDrop3 = await getContractInstance("StakeDrop3");
      await stakeDrop3.methods
        .MagicTx(calAddress)
        .send({
          from: ethAddress,
          // gas: 100000,
        })
        .on("transactionHash", (receipt) => {
          setXprtStatusMsg("Transaction Submitted. Wait for confirmation");
          setXprtStatusMsgMode("valid");
          setIsXPRTSuccess(false);
        })
        .then((response) => {
          setIsXPRTSuccess(true);

          setXprtStatusMsg(
            <span>
              &#10003; Persistence Address recorded. You will receive the XPRT
              Rewards if you had participated in the StakeDrop Campaign
            </span>
          );
          setXprtStatusMsgMode("valid");

        })
        .catch((e) => {
          setXprtStatusMsg(
            "Wallet Transaction Failed. Try again or check connection"
          );
          setXprtStatusMsgMode("invalid");
          setWalletStatusMsg("Browser Wallet Found. Click on Connect");
          setWalletStatusMsgMode("valid");
        });
    } else {
      setXprtStatusMsg("Address is Invalid as per Bech32");
      setXprtStatusMsgMode("invalid");
      setIsXPRTSuccess(false);
    }
  };

  return (
    <>
      <h6 className={"error valid-add " + walletStatusMsgMode}>
        {walletStatusMsg}
      </h6>
      <div className="col-lg-12 matic-tutorial-section metmask-status">
        <p className="">Connect to Metamask or other Browser Wallet</p>
        <div className="btn-calculate mr-2">
          <button
            type="submit"
            disabled={!isWalletSuccess}
            onClick={handleWalletConnect}
            className="btn"
          >
            {!isWalletSuccess ? (
              <span>Not Connected</span>
            ) : (
              <span>Connect Wallet</span>
            )}
          </button>
        </div>
      </div>

      <div className="col-lg-12 stakerow">
        <div className="col-lg-12  header-section">
          <h5 className="heading-participate">
            Provide Persistence Address for Rewards
          </h5>
        </div>
        <div className="body-section">
          <h6 className="note-text mt-4">
            <span>Note:</span> Submit your Persistence Address (XPRT) and
            Staking Address (ETH) you used for MATIC Staking, to receive XPRT
            StakeDrop
          </h6>

          <form onSubmit={handleXPRTAddressSubmit}>
            <div className="inputstaking">
              <h5>Persistence Address</h5>
              <input
                type="text"
                name="xprtAddress"
                id="xprtAddress"
                value={xprtAddress}
                onChange={handleXPRTAddressChange}
                placeholder="Enter Address"
                required
              />
            </div>
            <h6 className={"text-left error valid-add " + xprtStatusMsgMode}>
              {xprtStatusMsg}
            </h6>
            <div className="inputstaking">
              <h5>Staking Address</h5>
              <input
                type="text"
                name="stakingAddress"
                id="stakingAddress"
                value={ethAddress}
                placeholder="--"
                required
                disabled
              />
            </div>

            <div className="inputstaking left-align-calculate">
              <h5>&nbsp;</h5>
              <div className="btn-calculate mr-2">
                <button type="submit" disabled={!isXPRTSuccess} className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecordXPRTAddress;
