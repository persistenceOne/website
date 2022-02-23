import React, {  useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';
import LayoutDefault from './layouts/LayoutDefault';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./views/Homepage";
import Grant from "./views/Grant";
import "react-multi-carousel/lib/styles.css";
import CosmosStakedrop from "./Containers/Stakedrop/CosmosStakedrop";

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        })
    },[]);

    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        trackPage(page);
    }, [location]);

  return (

        <Switch>
          <AppRoute exact path="/" component={Homepage} layout={LayoutDefault} />
            <AppRoute exact path="/faq" component={Grant} layout={LayoutDefault} />
            {/*<AppRoute exact path="/products" component={Products} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/roadmap" component={RoadMap} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/ecosystem" component={Ecosystem} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/xprttoken" component={XPRTToken} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/stakedrop" component={Stakedrop} layout={LayoutDefault} />*/}
          <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />
          {/*  <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />*/}
          {/*  <AppRoute exact path="/StakeDropKava" component={KavaStakedrop} layout={LayoutDefault} />*/}
          {/*  <AppRoute exact path="/StakeDropTerra" component={TerraStakedrop} layout={LayoutDefault} />*/}
          {/*  <AppRoute exact path="/StakeDropMatic" component={MaticStakedrop} layout={LayoutDefault} />*/}
          {/*<AppRoute exact path="/technology" component={Technology} layout={LayoutDefault} />*/}
        </Switch>
  );
};

export default App;