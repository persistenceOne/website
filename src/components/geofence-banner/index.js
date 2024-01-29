import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Alert from "react-bootstrap/Alert";

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

const GeofenceNotice = () => {
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
              <span className={"font-semibold"}>IMPORTANT NOTICE:</span>&nbsp;
              Please note that from 1 March 2024, applications on the
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
};

export default GeofenceNotice;
