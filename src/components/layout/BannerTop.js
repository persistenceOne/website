import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import stkOsmo from "../../assets/images1/stkOsmo.svg";
import Icon from "../Icon";

const BannerTop = () => {
  const [banner, setBanner] = useState(true);

  const closeBanner = () => {
    setBanner(false);
  };

  return banner ? (
    <div className="container-fluid bannernav-section">
      <div className="container">
        <Alert className="nav-banner alert-dismissible d-flex align-items-center justify-content-center">
          <img src={stkOsmo} alt={"stkOsmo"} className="pr-2 logo" />
          <p>
            stkOsmo is LIVE on pSTAKE. Liquid Stake your OSMO with 75
            validators&nbsp;
            <a
              className="link"
              href={
                "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>now</b>
            </a>
          </p>
          <div onClick={closeBanner} className="close">
            <Icon
              viewClass="close fill-[#fff] absolute top-[13px] right-[20px] cursor-pointer"
              icon="close"
            />
          </div>
        </Alert>
      </div>
    </div>
  ) : null;
};

export default BannerTop;
