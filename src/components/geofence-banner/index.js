import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Alert from "react-bootstrap/Alert";

const countries = ["CM", "UM", "US", "GB", "CU", "CA"];

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
              Starting 15/01/2024, this site won&apos;t be accessible anymore
              from your location. See more details&nbsp;
              <a
                className="link"
                href="https://geofence-notice.pages.dev/?ref=persistence"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>here</b>
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
