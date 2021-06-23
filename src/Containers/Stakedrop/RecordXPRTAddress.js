
import React, { Component } from 'react'
import { Modal } from "react-bootstrap";
import { NETWORK_ID } from "../../constants/config";
import { getContractInstance } from "../../actions/utils";
import { checkbech32 } from "../../actions/bech32Validation"
export class RecordXPRTAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metamaskShow: false,
            account: '',
            disableBtn: '',
        }
        this.metamaskConnect = this.metamaskConnect.bind(this)
        this.handlexprtAddressChange = this.handlexprtAddressChange.bind(this)
    }
    handlexprtAddressChange = (event) => {
        
       
        let calAddress =  event.target.value
      console.log(this.state.calAddress)
      let checkBech32 = checkbech32(calAddress);
      if (checkBech32) {
          this.setState({ errorxprtAddress: false })
      } else {
          this.setState({ errorxprtAddress: true })
      }
  }
    rewardStakingAddress = async e => {
        e.preventDefault();

        const calAddress = e.target.xprtAddress.value;
        console.log(calAddress, 'calAddress')
        console.log(this.props.address, ' this.props.address')
        let checkBech32 = checkbech32(calAddress);
        if (checkBech32) {

            const stakeDrop3 = await getContractInstance("StakeDrop3");
            await stakeDrop3.methods
                .MagicTx(calAddress)
                .send({
                    from: this.state.account,
                    // gas: 100000,
                })
                .on("transactionHash", (receipt) => {
                    console.log(receipt, "  receipt");
                })
                .then((response) => {
                    this.setState({ tcShow: true });
                    console.log(response, "completed");
                })
                .catch((e) => {
                    console.log("Exception occured: ", e)
                });

        } else {
            this.setState({ errorxprtAddress: true })
        }

    }
    handleCancelTerms = () => {
        this.setState({ tcShow: false });
        this.setState({ metamaskShow: false });
        this.setState({ disableBtn: true });
        this.props.history.push('/StakeDropMatic');
    };
    metamaskConnect = () => {
        alert('coming')
        const checkConnection = (cb) => {
            if (window.ethereum && window.ethereum.isMetaMask) {
                cb(null)
            } else {
                this.setState({ metamaskShow: true });
                this.setState({ disableBtn: true });
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
                    this.setState({ account: addr[0] })

                });
        });
    }
    componentDidMount = () => {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((addr) => {
                console.log(addr[0], 'address')
                this.setState({ account: addr[0] })
            });

        window.ethereum.on('accountsChanged', (accounts) => {
            console.log(accounts[0])
            this.setState({ account: accounts[0] })
        });
        window.ethereum.on('chainChanged', (chainId) => {
            this.setState({ networkName: chainId })
            if (chainId === NETWORK_ID) {
                this.setState({ msgShowAlert: true })
            } else {
                this.setState({ msgShowAlert: false })
            }
        });
        window.ethereum.request({ method: 'eth_chainId' })
            .then((networkId) => {
                this.setState({ networkName: networkId })
                if (networkId === NETWORK_ID) {
                    this.setState({ msgShowAlert: true })
                } else {
                    this.setState({ msgShowAlert: false })
                }

            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (

            <>
                {this.props.maticstakeaddress ?
                    <>
                        {!this.state.msgShowAlert ?
                            <h6 className="error valid-add">"Network ID mismatch. Select Ethereum Mainnet in your Metamask / Browser Wallet and Refresh Page"</h6>
                            : <h6 className="error valid-add green">"Connected to Browser Wallet"</h6>}
                    </>
                    : null}
                <div className="col-lg-12 matic-tutorial-section metmask-status">
                    <p className="">Connect to Metamask or other Browser Wallet</p>
                    <div className="btn-calculate mr-2">
                        <button type="submit" disabled={this.state.disableBtn} onClick={this.metamaskConnect} className="btn">  {!this.props.maticstakeaddress ? <span>Connect</span> : <span>Connected</span>}</button>
                    </div>
                </div>


                <div className="col-lg-12 stakerow">
                    <div className="col-lg-12  header-section">
                        <h5 className="heading-participate">Provide Persistence Address for Rewards</h5>
                    </div>
                    <div className="body-section">
                        <h6 className="note-text mt-4"><span>Note:</span> Submit your Persistence Address (XPRT) and Staking Address (ETH) you used for MATIC Staking, to receive XPRT StakeDrop</h6>

                        <form onSubmit={this.rewardStakingAddress}>
                            <div className="inputstaking">
                                <h5>Persistence Address</h5>
                                <input
                                    type="text"
                                    name="xprtAddress"
                                    id="xprtAddress"
                                    value={this.state.xprtAddress}
                                    onChange={this.handlexprtAddressChange}
                                    placeholder="Enter Address"
                                    required
                                />

                            </div>
                            {this.state.errorxprtAddress ?
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
                                    value={this.state.account}
                                    onChange={this.handleAddressChange}
                                    placeholder="--"
                                    required
                                    disabled
                                />
                            </div>

                            <div className="inputstaking left-align-calculate">
                                <h5>&nbsp;</h5>
                                <div className="btn-calculate mr-2">
                                    <button type="submit" disabled={!this.state.account || !this.state.msgShowAlert} className="btn">Submit</button>
                                </div>

                            </div>
                            {this.state.errorAddress ?
                                <h6 className="valid-add">Enter Valid Address</h6>
                                :
                                ""
                            }
                            {this.state.notParticipantAddress ?
                                <h6 className="valid-add">Not a StakeDrop participant address, please send the magic transaction</h6>
                                :
                                ""
                            }

                        </form>





                    </div>

                </div>
                <Modal
                    show={this.state.metamaskShow}
                    onHide={this.handleClose}
                    className="accountInfoModel"
                    centered
                >
                    <Modal.Body>
                        <p className="tc">Please install metamask
                        </p>
                        <div className="button-section">

                            <button className="btn decline" onClick={this.handleCancelTerms} >Ok</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default RecordXPRTAddress