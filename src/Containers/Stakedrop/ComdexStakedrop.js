import React, {useState} from 'react';
import Icon from "../../components/Icon";
import 'react-rangeslider/lib/index.css'
import { withRouter } from 'react-router-dom';
import KeplrWallet from "../../utils/keplr";
import {checkbech32} from "../../actions/bech32Validation";
import {getContractInstance} from "../../actions/utils";
import {NETWORK_ID} from "../../constants/config";

const ComdexStakedrop = () =>{
    const [error, setError] = useState('');
    const [keplrError, setKeplrError] = useState('');
    const [xprtAddress, setXprtAddress] = useState("");
    const [address, setAddress] = useState(localStorage.getItem("keplrAddress"));
    const [metamaskAddress, setMetamaskAddress] = useState(localStorage.getItem("ethAddress"));

   const keplrConnect = () => {
        const keplrResponse = KeplrWallet();
       keplrResponse.then(function () {
           const keplrAddress = localStorage.getItem("keplrAddress");
           console.log(keplrAddress, "keplrAddress");
           setAddress(keplrAddress);
       }).catch(err => {
           setKeplrError(err.message);
       });
    };

    const metamaskConnect = () => {
        const checkConnection = (cb) => {
            console.log("window.ethereum.chainId: ", window.ethereum.chainId)
            console.log("NETWORK_ID: ", NETWORK_ID)
            if (window.ethereum && window.ethereum.isMetaMask){
                cb(null);
            } else {
               // this.setState({ metamaskShow: true });
                //this.setState({ disableBtn: true });
            }
        };
        checkConnection((err) => {
            if (err) {
                return;
            }
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((addr) => {
                   // this.setState({ account: addr[0] });
                    setMetamaskAddress(addr[0]);
                });
        });
    };

    const handleXPRTAddressChange = (event) => {
        let checkBech32 = checkbech32(event.target.value);
        setXprtAddress(event.target.value);
        if (!checkBech32) {
            setError("Enter Valid Persistence Address");
            return;
        }else {
            setError("");
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const persistenceAddress = evt.target.xprtAddress.value;
        const stakeAddress = evt.target.stakingAddress.value;
        const ethAddress = evt.target.ethAddress.value;
        console.log("persistenceAddress: ", persistenceAddress);
        console.log("stakeAddress: ", stakeAddress);
        console.log("ethAddress: ", ethAddress);

        let checkBech32 = checkbech32(stakeAddress);
        if (checkBech32) {
            const comdexAirdrop = await getContractInstance("comdexAirdrop");

            await comdexAirdrop.methods
                .MagicTx(persistenceAddress, stakeAddress)
                .send({
                    from: ethAddress,
                    // gas: 100000,
                })
                .on("transactionHash", (receipt) => {
                    console.log("receipt: ", receipt)
                })
                .then((response) => {
                    console.log("response: ", response)
                })
                .catch((e) => {
                    console.log("error: ", e)
                });
        } else {

        }

        }

        return (
            <div className="section-participate">
                <section className="participate-stakedrop">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-lg-4 section-campaign">
                                    <div className="row campaign-maintwo">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">xxxxxxxx</h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content campaign-card">
                                                <div className="card-inner">
                                                    <h6>Rewards Claim Window</h6>
                                                    <h1>XXXXX Days</h1>
                                                </div>
                                                <Icon viewClass="social_icon_imgg" icon="participate" />

                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Tokens to distribute</h6>
                                                    <h1>XXXXX XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Start Date (Tentative)</h6>
                                                    <h1>XX XX XXXX <span>Block Height: XXXXX</span></h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>End Date (Tentative)</h6>
                                                    <h1>XX XX XXXX<span>Block Height: XXXXX</span></h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    {address === null ?
                                        <h6 className="error invalid">{keplrError}</h6>
                                        : <h6 className="error valid">"Connected to Keplr"</h6>}
                                    <div className="col-lg-12 matic-tutorial-section metmask-status">
                                        <p className="">Connect to Keplr</p>
                                        <div className="btn-calculate mr-2">
                                            <button type="submit" onClick={keplrConnect} className="btn">  {address === null ? <span>Connect</span> : <span>Connected</span>}</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 matic-tutorial-section metmask-status">
                                        <p className="">Connect to Metamask</p>
                                        <div className="btn-calculate mr-2">
                                            <button type="submit" onClick={metamaskConnect} className="btn">  {metamaskAddress === null ? <span>Connect</span> : <span>Connected</span>}</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">Provide Persistence Address for Rewards</h5>
                                        </div>
                                        <div className="body-section">
                                            <form onSubmit={handleSubmit}>
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
                                                <div className="inputstaking">
                                                    <h5>Staking Address</h5>
                                                    <input
                                                        type="text"
                                                        name="stakingAddress"
                                                        id="stakingAddress"
                                                        placeholder="--"
                                                        value={address !== null ? address : "" }
                                                        required
                                                        disabled
                                                    />
                                                </div>
                                                <div className="inputstaking">
                                                    <h5>Eth Address</h5>
                                                    <input
                                                        type="text"
                                                        name="ethAddress"
                                                        id="ethAddress"
                                                        placeholder="--"
                                                        value={metamaskAddress !== null ? metamaskAddress : "" }
                                                        required
                                                        disabled
                                                    />
                                                </div>
                                                <h6 className={"text-left error invalid"}>
                                                    {error}
                                                </h6>
                                                <div className="inputstaking">
                                                    <div className="btn-calculate mr-2">
                                                        <button
                                                            type="submit"
                                                            className="btn"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        )
};

export default withRouter(ComdexStakedrop);

