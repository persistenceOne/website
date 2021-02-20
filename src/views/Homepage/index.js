import React from 'react';
import Products from "../../Containers/Homepage/Products";
import Aims from "../../Containers/Homepage/Aims";
import Backers from "../../Containers/Homepage/Backers";
import Blogs from "../../Containers/Homepage/Blogs";
import Featured from "../../Containers/Homepage/Featured";
import Banner from "../../Containers/Homepage/Banner";
import ScrollToTop from "../../components/ScrollTop";
const Homepage = () => {
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 6000000000000)
    // }, [])
    return (
        <React.Fragment>
            {/*{loading ===true ?*/}
            {/*    <div className="progress-bar-box">*/}
            {/*        <div className="progress">*/}
            {/*            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"*/}
            {/*                 aria-valuemax="100">*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}
                    <Banner/>
                    <Aims/>
                    <Products/>
                    <Backers/>
                    <Blogs/>
                    <Featured/>
                    <ScrollToTop/>
        </React.Fragment>
    );
}

export default Homepage;