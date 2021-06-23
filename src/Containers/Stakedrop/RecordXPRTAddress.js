
import React, {useEffect, useState} from 'react'
import { Modal } from "react-bootstrap";
import { NETWORK_ID } from "../../constants/config";
import { getContractInstance } from "../../actions/utils";
import { checkbech32 } from "../../actions/bech32Validation"

const RecordXPRTAddress = () => {

    const [metamaskShow, setMetamaskShow] = useState(false);
    const [account, setAccount] = useState('');
    const [disableBtn, setDisableBtn] = useState(false);
    const [errorxprtAddress, setErrorxprtAddress] = useState(false);
    const [tcShow, setTcShow] = useState(false);
    const [msgShowAlert, setMsgShowAlert] = useState(false);
    const [xprtAddress, setXprtAddress] = useState('');


    const handlexprtAddressChange = (event) => {
        event.preventDefault();
        console.log("event.target.value: ", event.target.value)

      let checkBech32 = checkbech32(event.target.value);
      if (checkBech32) {
          setErrorxprtAddress(false);
      } else {
          setErrorxprtAddress(true);
      }
  }
    const rewardStakingAddress = async e => {
        e.preventDefault();

        const _calAddress = e.target.xprtAddress.value;
        setXprtAddress(_calAddress)
        console.log(_calAddress, '_calAddress')
        let checkBech32 = checkbech32(_calAddress);
        if (checkBech32) {

            const stakeDrop3 = await getContractInstance("StakeDrop3");
            await stakeDrop3.methods
                .MagicTx(_calAddress)
                .send({
                    from: account,
                    // gas: 100000,
                })
                .on("transactionHash", (receipt) => {
                    console.log(receipt, "  receipt");
                })
                .then((response) => {
                    setTcShow(true)
                    console.log(response, "completed");
                })
                .catch((e) => {
                    console.log("Exception occured: ", e)
                });

        } else {
            setErrorxprtAddress(true);
        }

    }
    const handleCancelTerms = () => {
        setTcShow(false)
        setMetamaskShow(false);
        setDisableBtn(true);
    };

    const metamaskConnect = () => {
        const checkConnection = (cb) => {
            if (window.ethereum && window.ethereum.isMetaMask) {
                cb(null)
            } else {
                setMetamaskShow(true)
                setDisableBtn(true)
            }
        };
        checkConnection((err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log()
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then((addr) => {
                    console.log(addr[0], 'address')
                    setAccount(addr[0])

                });
        });
    }

    useEffect(() => {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((addr) => {
                console.log(addr[0], 'address')
                setAccount(addr[0])
            });

        window.ethereum.on('accountsChanged', (accounts) => {
            console.log(accounts[0])
            setAccount(accounts[0])
        });
        window.ethereum.on('chainChanged', (chainId) => {
            if (chainId === NETWORK_ID) {
                setMsgShowAlert(true)
            } else {
                setMsgShowAlert(false)
            }
        });
        window.ethereum.request({ method: 'eth_chainId' })
            .then((networkId) => {
                if (networkId === NETWORK_ID) {
                    setMsgShowAlert(true)
                } else {
                    setMsgShowAlert(false)
                }

            }).catch((error) => {
            console.log(error)
        })

        return () => {};
    });

    return (

        <>
            {account ?
                <>
                    {!msgShowAlert ?
                        <h6 className="error valid-add">"Network ID mismatch. Select Ethereum Mainnet in your Metamask / Browser Wallet and Refresh Page"</h6>
                        : <h6 className="error valid-add green">"Connected to Browser Wallet"</h6>}
                </>
                : null}
            <div className="col-lg-12 matic-tutorial-section metmask-status">
                <p className="">Connect to Metamask or other Browser Wallet</p>
                <div className="btn-calculate mr-2">
                    <button type="submit" disabled={disableBtn} onClick={metamaskConnect} className="btn">  {!account ? <span>Connect</span> : <span>Connected</span>}</button>
                </div>
            </div>


            <div className="col-lg-12 stakerow">
                <div className="col-lg-12  header-section">
                    <h5 className="heading-participate">Provide Persistence Address for Rewards</h5>
                </div>
                <div className="body-section">
                    <h6 className="note-text mt-4"><span>Note:</span> Submit your Persistence Address (XPRT) and Staking Address (ETH) you used for MATIC Staking, to receive XPRT StakeDrop</h6>

                    <form onSubmit={rewardStakingAddress}>
                        <div className="inputstaking">
                            <h5>Persistence Address</h5>
                            <input
                                type="text"
                                name="xprtAddress"
                                id="xprtAddress"
                                value={xprtAddress}
                                onChange={handlexprtAddressChange}
                                placeholder="Enter Address"
                                required
                            />

                        </div>
                        {errorxprtAddress ?
                            <h6 className="text-left valid-add">Enter Valid Persistence Address</h6>
                            :
                            ""
                        }


                        <div className="inputstaking">
                            <h5>Staking Address</h5>
                            <input
                                type="text"
                                name="stakingAddress"
                                id="stakingAddress"
                                value={account}
                                //onChange={handleAddressChange}
                                placeholder="--"
                                required
                                disabled
                            />
                        </div>

                        <div className="inputstaking left-align-calculate">
                            <h5>&nbsp;</h5>
                            <div className="btn-calculate mr-2">
                                <button type="submit" disabled={!account || !msgShowAlert} className="btn">Submit</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
            <Modal
                show={tcShow}
                onHide={handleCancelTerms}
                className="accountInfoModel"
                centered
            >
                <Modal.Body>
                    <p className="tc">Persistence Address recorded. You will receive the XPRT Rewards if you had participated in the StakeDrop Campaign
                    </p>
                    <div className="button-section">

                        <button className="btn decline" onClick={handleCancelTerms} >Ok</button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                show={metamaskShow}
                onHide={handleCancelTerms}
                className="accountInfoModel"
                centered
            >
                <Modal.Body>
                    <p className="tc">Please install metamask
                    </p>
                    <div className="button-section">

                        <button className="btn decline" onClick={handleCancelTerms} >Ok</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )

}

export default RecordXPRTAddress;