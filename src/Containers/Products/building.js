import React from "react";
import {useTranslation} from "react-i18next";
import {Button} from "react-bootstrap";

const Building = () => {
    const {t} = useTranslation();
    return (
        <section className="build-section">
            <div className="">
                <div className="row">
                    <div className="col-md-3 comdex-info">
                        <div className="content">
                        <div className="content-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="comdex-logo"/>
                        <Button className="button-primary">Explorer</Button>
                        </div>
                    </div>
                    <div className="col-md-3 comdex-info">
                        <div className="content">
                            <div className="content-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="comdex-logo"/>
                        <Button className="button-primary">Explorer</Button>
                        </div>
                    </div>
                    <div className="col-md-3 comdex-info">
                        <div className="content">
                            <div className="content-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="comdex-logo"/>
                        <Button className="button-primary">Explorer</Button>
                        </div>
                    </div>
                    <div className="col-md-3 comdex-info">
                        <div className="content">
                            <div className="content-overlay"></div>
                        <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="comdex-logo"/>
                        <Button className="button-primary">Explorer</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Building;