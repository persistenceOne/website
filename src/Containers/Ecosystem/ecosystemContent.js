import React, { useEffect, useState } from 'react';
import { netwrokData } from '../Ecosystem/netwoks';
import Icon from "../../components/Icon";

const EcosystemContent = () => {
    const [availableNetwork, setAvailableNetwork] = useState();

    useEffect(() => {
        setAvailableNetwork(netwrokData);

    }, []);
    const dataAll = () => {
        setAvailableNetwork(netwrokData);
    }
    const dApp = () => {
        setAvailableNetwork(netwrokData.filter(function(item){
            return item.name === "dApp";
        }));
    }
    const explorer = () => {
        setAvailableNetwork(netwrokData.filter(function(item){
            return item.name === "Explorer";
        }));
    }
    const wallet = () => {
        setAvailableNetwork(netwrokData.filter(function(item){
            return item.name === "Wallet";
        }));
    }
    const tools = () => {
        setAvailableNetwork(netwrokData.filter(function(item){
            return item.name === "Tools";
        }));
    }
    const defi = () => {
        setAvailableNetwork(netwrokData.filter(function(item){
            return item.name === "Defi";
        }));

    }
    return (
    <section className="home-ecosystem-section ecosystem-section">
        <div className="container">
            <h3 className="section-title">Persistence Ecosystem</h3>
            <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className={'sortbuttons'}>
            <button onClick={dataAll}>All</button>
            <button onClick={dApp}>DAPPS</button>
            <button onClick={explorer}>EXPLORER</button>
            <button onClick={wallet}>WALLETS</button>
            <button onClick={defi}>DEFI</button>
            <button onClick={tools}>TOOLS</button>
            </div>
            <div className="network-section">
                {availableNetwork && availableNetwork.map((item, i) => (
                    <a href={item.wikilink} target="_blank" rel="noopener noreferrer">
                        <div key={i} className="networklist-tiles">

                            <Icon viewClass="social_icon_imgg" icon={item.icon} />
                            <h5>{item.network}</h5>
                            <h6>{item.description}</h6>
<span className={'networkname'}>{item.name}</span>
<span className={'status'}>{item.status}</span>
                        </div> </a>
                ))}

            </div>

        </div>
    </section>

)
}
export default EcosystemContent;