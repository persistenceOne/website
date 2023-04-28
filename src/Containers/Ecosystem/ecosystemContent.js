import React, { useEffect, useState } from "react";
import { netwrokData } from "../Ecosystem/netwoks";
import Icon from "../../components/Icon";

const EcosystemContent = () => {
  const [availableNetwork, setAvailableNetwork] = useState();
  const [active, setActive] = useState("1");
  const handleClick = (event) => {
    setActive(event.target.id);
    if (event.target.id === "1") {
      setAvailableNetwork(netwrokData);
    }
    if (event.target.id === "2") {
      setAvailableNetwork(
        netwrokData.filter(function (item) {
          return item.name === "dApp";
        })
      );
    }
    if (event.target.id === "3") {
      setAvailableNetwork(
        netwrokData.filter(function (item) {
          return item.name === "Explorer";
        })
      );
    }
    if (event.target.id === "4") {
      setAvailableNetwork(
        netwrokData.filter(function (item) {
          return item.name === "Wallet";
        })
      );
    }
    if (event.target.id === "5") {
      setAvailableNetwork(
        netwrokData.filter(function (item) {
          return item.name === "Defi";
        })
      );
    }
    if (event.target.id === "6") {
      setAvailableNetwork(
        netwrokData.filter(function (item) {
          return item.name === "Tools";
        })
      );
    }
  };
  useEffect(() => {
    setAvailableNetwork(netwrokData);
  }, []);

  return (
    <section className="home-ecosystem-section ecosystem-section ecos">
      <div className="container">
        <h3 className="section-title">Persistence Ecosystem</h3>
        <p className="sub-heading">
          Discover the suite of applications, wallets, explores, and tools
          across the ecosystem.
        </p>
        <div className={"sortbuttons"} id={"myDIV"}>
          <button
            key={1}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            onClick={handleClick}
          >
            All
          </button>
          <button
            key={2}
            className={active === "2" ? "active" : undefined}
            id={"2"}
            onClick={handleClick}
          >
            DAPPS
          </button>
          <button
            key={3}
            className={active === "3" ? "active" : undefined}
            id={"3"}
            onClick={handleClick}
          >
            EXPLORER
          </button>
          <button
            key={4}
            className={active === "4" ? "active" : undefined}
            id={"4"}
            onClick={handleClick}
          >
            WALLETS
          </button>
          <button
            key={5}
            className={active === "5" ? "active" : undefined}
            id={"5"}
            onClick={handleClick}
          >
            DEFI
          </button>
          <button
            key={6}
            className={active === "6" ? "active" : undefined}
            id={"6"}
            onClick={handleClick}
          >
            TOOLS
          </button>
        </div>
        <div className="network-section">
          {availableNetwork &&
            availableNetwork.map((item, i) => (
              <a href={item.wikilink} target="_blank" rel="noopener noreferrer">
                <div key={i} className="networklist-tiles">
                  <Icon viewClass="social_icon_imgg" icon={item.icon} />
                  <h5>{item.network}</h5>
                  <h6>{item.description}</h6>
                  <span className={"networkname"}>{item.name}</span>

                  <span className={"status"}>
                    {item.status === "ComingSoon" ? (
                      <span className={"nodot"}></span>
                    ) : (
                      <span className={"dot"}></span>
                    )}
                    &nbsp;{item.status}
                  </span>
                </div>{" "}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};
export default EcosystemContent;
