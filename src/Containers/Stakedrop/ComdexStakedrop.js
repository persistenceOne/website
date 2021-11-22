import React, {useState} from 'react';
import Icon from "../../components/Icon";
import 'react-rangeslider/lib/index.css'
import {checkAddressChecksum} from 'ethereum-checksum-address';
import { withRouter } from 'react-router-dom';
import KeplrWallet from "../../utils/keplr";
import {CHAIN} from "../../constants/config";
import {handleKeplr} from "./keplr/handleKeplr";

const ComdexStakedrop = () =>{
    const [error, setError] = useState('');
    const [keplrError, setKeplrError] = useState('');
    const [txMsg, setTxMsg] = useState('');
    const [address, setAddress] = useState(localStorage.getItem("keplrAddress"));
    const [ifBool, setIfBool] = useState(false);

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

    const handleETHAddressChange = (event) => {

        let checkAddress = checkAddressChecksum(event.target.value)
        console.log("checkAddress: ", checkAddress);
        if(checkAddress){
            setError("");
            setIfBool(true);
        }else{
            setError("Enter Valid Address");
            setIfBool(false);
            return;
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const fromAddress = evt.target.stakingAddress.value;
        const memo = evt.target.ethAddress.value;

        let response = await handleKeplr(fromAddress, memo);
        if (
            response &&
            response.rawLog &&
            response.rawLog.indexOf("events") !== -1
        ) {
            setTxMsg("Transaction successful!")
        }else{
            setTxMsg("Transaction failed!")
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

                                <div className="col-lg-12 stakerow">
                                    <div className="col-lg-12  header-section">
                                        <h5 className="heading-participate">Provide Eth Address for Rewards</h5>
                                    </div>
                                    <div className="body-section">
                                        <form onSubmit={handleSubmit}>
                                            <div className="inputstaking">
                                                <h5> {CHAIN} Address</h5>
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
                                                    onChange={handleETHAddressChange}
                                                    placeholder="Enter Address"
                                                    required
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
                                                        disabled={!ifBool}
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                            <h6 className={"text-left error invalid"}>
                                                {txMsg}
                                            </h6>
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

