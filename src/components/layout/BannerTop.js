import React, {useState} from "react";
import Alert from "react-bootstrap/Alert";
import close from "../../assets/images1/close_icon.png";


const BannerTop = () => {
    const [banner, setBanner] = useState(true);

    const closeBanner = () => {
        setBanner(false);
    }
    return (
        <div className="container-fluid bannernav-section">
            {banner ?
                <div className="container">
                    <Alert className="nav-banner alert-dismissible">
                        <p>
                            Liquid staking solution for ATOM launching on 8th November
                        </p>
                        <img src={close} alt="close" className="close" onClick={closeBanner}/>
                    </Alert>
                </div>
                : null}


        </div>

    );
};

export default BannerTop;
