import React, { useEffect, useState } from "react";
import { checkbech32 } from "../../actions/bech32Validation";
import { getContractInstance } from "../../actions/utils";
import { NETWORK_ID } from "../../constants/config";

// import curvelogo from "../../../assets/curve.svg";

const RecordXPRTAddress = ({ notParticipantAddress }) => {
    const [ethAddress, setEthAddress] = useState("");
    const [xprtAddress, setXprtAddress] = useState("");

    // isWalletSuccess & walletStatusMsg pertains to status and message controlling the eth wallet connection
    const [isWalletSuccess, setIsWalletSuccess] = useState(false);
    const [walletStatusMsg, setWalletStatusMsg] = useState("");

    // isXPRTSuccess & xprtStatusMsg pertains to status and message controlling the xprt addr submission form
    const [isXPRTSuccess, setIsXPRTSuccess] = useState(false);
    const [xprtStatusMsg, setXprtStatusMsg] = useState("");
    const [errorStatus, setErrorStatus] = useState('');

    useEffect(() => {
        console.log("inside useEffect");
        if (!window.ethereum) {
            setIsWalletSuccess(false);
            setWalletStatusMsg("Please Install Metamask or other Browser Wallet");
            setErrorStatus("invalid")
            return;
        }

        console.log("window.ethereum: ", window.ethereum);

        console.log(
            "window.ethereum.selectedAddress: ",
            window.ethereum.selectedAddress
        );

        // console.log(isWeb3Unlocked);

        // check the chain ID

        if (!window.ethereum || window.ethereum.chainId !== NETWORK_ID) {
            setIsWalletSuccess(false);
            setWalletStatusMsg("Incorrect Network ID selected");
            setErrorStatus("invalid")
            setIsXPRTSuccess(false);
            return;
        }

        if (window.ethereum.selectedAddress) {
            console.log("inside if condition");
            setEthAddress(window.ethereum.selectedAddress);
            setIsWalletSuccess(true);
            setWalletStatusMsg(
                "Wallet Connected! Continue with XPRT Address addition "
            );
            setErrorStatus("valid")
        } else {
            setIsWalletSuccess(true);
            if (walletStatusMsg === "")
                setWalletStatusMsg("Browser Wallet Found. Click on Connect");
                setErrorStatus("valid")
        }

        // effect;
        return () => {};
    }, [walletStatusMsg]);

    const handleWalletConnect = () => {
        setWalletStatusMsg("Browser Wallet Found. Click on Connect");
        setErrorStatus("valid")

        if (!window.ethereum) {
            setIsWalletSuccess(false);
            setWalletStatusMsg("Please Install Metamask");
            setErrorStatus("invalid")
            return;
        }

        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((addr) => {
                console.log(addr[0], "address");
                setEthAddress(addr[0]);
                setWalletStatusMsg(
                    "Wallet Connected! Continue with XPRT Address addition "
                );
                setErrorStatus("valid")
            })
            .catch((e) => {
                console.log("error in window.ethereum.request(): ", e);
                setWalletStatusMsg("Wallet Error. Refresh and try again");
                setErrorStatus("invalid")
            });

        window.ethereum.on("accountsChanged", (accounts) => {
            console.log(accounts[0]);
            setEthAddress(accounts[0]);
        });

        window.ethereum.on("disconnect", () => {
            //   console.log(accounts[0]);
            setEthAddress("");
        });

        window.ethereum.on("chainChanged", (chainId) => {
            if (chainId !== NETWORK_ID) {
                console.log("ONCHAINCHANGED");
                // setIsWalletSuccess(false);
                setWalletStatusMsg("Incorrect Network ID selected");
                setErrorStatus("invalid")
                setIsXPRTSuccess(false);
            }
        });

        window.ethereum
            .request({ method: "eth_chainId" })
            .then((networkId) => {
                if (networkId !== NETWORK_ID) {
                    //   setIsWalletSuccess(false);
                    setWalletStatusMsg("Incorrect Network ID selected");
                    setErrorStatus("invalid")
                    setIsXPRTSuccess(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });

        /* const checkConnection = (cb) => {
          if (window.ethereum && window.ethereum.isMetaMask) {
            cb(null);
          } else {
            setIsWalletSuccess(false);
            setWalletStatusMsg(<span>Please Install Metamask</span>);
          }
        };


        checkConnection((err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log();
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((addr) => {
              console.log(addr[0], "address");
              this.setState({ account: addr[0] });
            });
        }); */
    };

    const handleXPRTAddressChange = (event) => {
        console.log("inside handleXPRTAddressChange, ", event.target.value);

        setXprtAddress(event.target.value);
        console.log("xprtAddress: ", xprtAddress);

        // check if the XPRT address supplied is Bech32 valid
        let checkBech32 = checkbech32(event.target.value);
        if (!checkBech32) {
            setXprtStatusMsg("Address is Invalid as per Bech32");
            setIsXPRTSuccess(false);
            return;
        }

        // check if the XPRT address supplied is a stakedrop participant
        else if (notParticipantAddress) {
            setXprtStatusMsg(
                "Not a StakeDrop participant address, please send the magic transaction"
            );
            setIsXPRTSuccess(false);
            return;
        }

        // check if the eth address is populated and valid
        else if (!ethAddress) {
            setXprtStatusMsg("Error getting Eth Address. Check wallet connection");
            setWalletStatusMsg("Browser Wallet Found. Click on Connect");
            setErrorStatus("valid")
            setIsXPRTSuccess(false);
            return;
        }

        // if all checks suceed, show success message and enable submit button
        else {
            setXprtStatusMsg(
                <span>&#10003; XPRT Address is valid for StakeDrop</span>
            );
            setIsXPRTSuccess(true);
        }
    };

    const handleXPRTAddressSubmit = async (e) => {
        console.log("inside handleXPRTAddressSubmit");

        e.preventDefault();
        const calAddress = xprtAddress;
        console.log(calAddress, "calAddress");
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
                    console.log(receipt, "  receipt");
                    setXprtStatusMsg("Transaction Submitted. Wait for confirmation");
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
                    //   this.setState({ tcShow: true });
                    console.log(response, "completed");
                })
                .catch((e) => {
                    console.log("Exception occured: ", e);
                    setXprtStatusMsg(
                        "Wallet Transaction Failed. Try again or check connection"
                    );
                    setWalletStatusMsg("Browser Wallet Found. Click on Connect");
                    setErrorStatus("valid")
                    //   setIsWalletSuccess(false);
                });
        } else {
            setXprtStatusMsg("Address is Invalid as per Bech32");
            setErrorStatus("valid")
            setIsXPRTSuccess(false);
        }
    };

    console.log(
        " isWalletSuccess: ",
        isWalletSuccess,
        " walletStatusMsg: ",
        walletStatusMsg,
        " isXPRTSuccess: ",
        isXPRTSuccess,
        " xprtStatusMsg: ",
        xprtStatusMsg
    );

    return (
        <>
            <h6 className={errorStatus}>{walletStatusMsg}</h6>
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
                            <span>Connected</span>
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
                        <h6 className="text-left valid-add">{xprtStatusMsg}</h6>
                        <div className="inputstaking">
                            <h5>Staking Address</h5>
                            <input
                                type="text"
                                name="stakingAddress"
                                id="stakingAddress"
                                value={ethAddress}
                                // onChange={handleAddressChange}
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

                        {/*  {this.state.errorAddress ? (
              <h6 className="valid-add">Enter Valid Address</h6>
            ) : (
              ""
            )}
            {this.state.notParticipantAddress ? (
              <h6 className="valid-add">
                Not a StakeDrop participant address, please send the magic
                transaction
              </h6>
            ) : (
              ""
            )} */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default RecordXPRTAddress;
