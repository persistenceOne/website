import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import stkOsmo from "../../assets/images1/stkOsmo.svg";
import Icon from "../Icon";

const countries = [
  "BB",
  "BF",
  "CM",
  "CD",
  "CG",
  "GI",
  "HT",
  "IR",
  "JM",
  "KP",
  "ML",
  "MZ",
  "MM",
  "SN",
  "SS",
  "SY",
  "TZ",
  "UG",
  "YE",
  "UM",
  "US",
  "GB",
  "CU",
  "CA"
];

const BannerTop = () => {
  const [banner, setBanner] = useState(true);
  const workerUrl = "https://worker-geofence.auditdev.workers.dev/";
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch(workerUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country);
      })
      .catch((error) => console.error("Error fetching country:", error));
  }, [workerUrl]);

  const closeBanner = () => {
    setBanner(false);
  };

  if (countries.includes(country)) {
    return (
      <>
        <div
          className={`${
            countries.includes(country) ? "d-flex" : "hidden"
          } container-fluid bannernav-section geo-fence-banner`}
        >
          <div className="container">
            <Alert className="nav-banner alert-dismissible d-flex align-items-center justify-content-center">
              <p>
                <b className={"font-semibold"}>IMPORTANT NOTICE:</b>&nbsp;
                Please note that from 15 January 2024, applications on the
                persistence.one domain will no longer be accessible from your
                location. See more details&nbsp;
                <a
                  className="link"
                  href="https://geofence-notice.pages.dev/?ref=persistence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>here.</b>
                </a>
              </p>
              <div
                onClick={() => {
                  setCountry("");
                }}
                className="close"
              >
                <Icon
                  viewClass="close fill-[#fff] absolute top-[13px] right-[20px] cursor-pointer"
                  icon="close"
                />
              </div>
            </Alert>
          </div>
        </div>
      </>
    );
  }

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
