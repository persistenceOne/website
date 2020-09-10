import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/arrow1.png';

class Footer extends React.Component {

    render() {

        return (
            <div className="footer">
                <div className="container">
                    <p className="copyright">© Persistence 2020</p>
                <div className="footer-button">
                <Link className="goto-button" to="/">
                    Go to main website <img src={arrow} alt="go to website arrow" /></Link>
                </div>
                </div>
            </div>
        )
    };
}
export default Footer 
