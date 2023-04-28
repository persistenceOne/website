import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon";
import { ecosystemList } from "./netwoks";

const EcosystemContent = () => {
  const [availableNetwork, setAvailableNetwork] = useState();
  const [active, setActive] = useState("All");
  const handleClick = (name) => {
    setActive(name);
    if (name === "All") {
      setAvailableNetwork(ecosystemList);
    } else if (name === "builtOnPersistence") {
      setAvailableNetwork(
        ecosystemList.filter(function (item) {
          return item.builtOnPersistence === true;
        })
      );
    } else {
      setAvailableNetwork(
        ecosystemList.filter(function (item) {
          return item.name === name;
        })
      );
    }
  };
  useEffect(() => {
    setAvailableNetwork(ecosystemList);
  }, []);

  return (
    <section className="home-ecosystem-section ecosystem-section ecos">
      <div className="container">
        <h3 className="section-title">Persistence Ecosystem</h3>
        <p className="sub-heading">
          <span className="d-block">
            Discover the suite of applications, wallets, explores, and tools
            across the ecosystem. <br /> Are you building something cool?
          </span>
          <a
            href={"https://docs.persistence.one/build/grants"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-center d-inline-block grants-text"
          >
            Apply for grant.
          </a>
        </p>

        <div className={"sortbuttons"} id={"myDIV"}>
          <button
            className={active === "All" ? "active" : undefined}
            onClick={() => handleClick("All")}
          >
            All
          </button>
          <button
            className={active === "builtOnPersistence" ? "active" : undefined}
            onClick={() => handleClick("builtOnPersistence")}
          >
            Built on Persistence
          </button>
          <button
            className={active === "dApp" ? "active" : undefined}
            onClick={() => handleClick("dApp")}
          >
            DAPPS
          </button>
          <button
            className={active === "Explorer" ? "active" : undefined}
            onClick={() => handleClick("Explorer")}
          >
            EXPLORER
          </button>
          <button
            className={active === "Wallet" ? "active" : undefined}
            onClick={() => handleClick("Wallet")}
          >
            WALLETS
          </button>
          <button
            className={active === "Defi" ? "active" : undefined}
            onClick={() => handleClick("Defi")}
          >
            DEFI
          </button>
          <button
            className={active === "Tools" ? "active" : undefined}
            onClick={() => handleClick("Tools")}
          >
            TOOLS
          </button>
        </div>
        <div className="network-section">
          {availableNetwork &&
            availableNetwork.map((item, i) => (
              <a
                href={item.wikilink}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="networklist-tiles">
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
