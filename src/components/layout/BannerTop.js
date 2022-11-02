import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
import close from "../../assets/images1/close_icon.png";
import stkATOM from "../../assets/images1/stkAtom.svg";

const BannerTop = () => {
    const [banner, setBanner] = useState(true);

    const closeBanner = () => {
        setBanner(false);
    }
    return (
        banner ?
        <div className="container-fluid bannernav-section">
                <div className="container">
                    <Alert className="nav-banner alert-dismissible d-flex align-items-center justify-content-center">
                        <img src={stkATOM} alt={"stkATOM"} width={"26px"} className="pr-2"/>
                        <p>
                            Liquid staking solution for ATOM launching on 8th November.
                        </p>
                        <img src={close} alt="close" className="close" onClick={closeBanner}/>
                    </Alert>
                </div>
        </div>
                : null

    );
};

export default BannerTop;
