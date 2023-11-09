import React, {useEffect, useState} from "react";
import {fetchChainTVL} from "../../utils/api";
import dexterLogo from "../../assets/images1/logos/dexter.svg";
import pstakeLogo from "../../assets/images1/pstake-logo-symbol.svg";
import CountUp from "react-countup";

const Banner = () => {
  const [chainTvl, setChainTvl] = useState("0")
  useEffect(()=>{
    const fetch = async ()=>{
      const res = await fetchChainTVL();
      setChainTvl(res);
    }
    fetch();
  },[])

  return (
    <section className="banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <p className="banner-heading">
              <span>Liquid Staking Hub</span>
            </p>
            <p className="text">
              Persistence is an app chain for Liquid Staking powering an ecosystem<br/>
              of DeFi applications focused on unlocking the liquidity of staked assets.
            </p>
            <div className={"button-section text-center d-inline-block"}>
              <a
                href="https://docs.persistence.one"
                target={"_blank"}
                rel="noopener noreferrer"
                className="button-initial button one"
              >
                Start building
              </a>
              <a
                href="/ecosystem"
                rel="noopener noreferrer"
                className="button-initial button"
              >
                Explore ecosystem
              </a>
            </div>
            <div className={"on-chain"}>
              <h6 className="home-desc">On-chain dApps</h6>
              <div className="stats-section">
                <div>
                  <a
                      href="https://pstake.finance/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                  >
                    <img src={pstakeLogo} alt={"pstake"} width={120} height={50}/>
                  </a>
                  <a
                      href="https://dexter.zone/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                  >
                    <img src={dexterLogo} alt={"dexter"} width={120}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="stats-container text-white row">
              <div className="stats-section col-6">
                <h2>${Number(chainTvl) > 0 ?
                    <CountUp start={0} end={Number(chainTvl)} duration={3}/>
                :
                  0
                }</h2>
                <h6 className="home-desc">Chain TVL</h6>
              </div>
              <div className="stats-section col-6">
                <h2> $<CountUp start={0} end={Number(1155900)} duration={3}/></h2>
                <h6 className="home-desc">IBC volume (30 Days)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
