import React, {  useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';
import LayoutDefault from './layouts/LayoutDefault';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./views/Homepage";
import Vision from "./views/Vision";
import Products from "./views/Products";
import RoadMap from "./views/RoadMap";
import Ecosystem from "./views/Ecosystem";
import Stakedrop from "./views/Stakedrop";
import XPRTToken from "./views/XPRTToken";
import CosmosStakedrop from "./Containers/Stakedrop/CosmosStakedrop";
import KavaStakedrop from "./Containers/Stakedrop/KavaStakedrop";
import TerraStakedrop from "./Containers/Stakedrop/TerraStakedrop";
import MaticStakedrop from "./Containers/Stakedrop/MaticStakedrop";
import Technology from "./views/Technology";
// Initialize Google Analytics
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
            <AppRoute exact path="/vision" component={Vision} layout={LayoutDefault} />
            <AppRoute exact path="/products" component={Products} layout={LayoutDefault} />
            <AppRoute exact path="/roadmap" component={RoadMap} layout={LayoutDefault} />
            <AppRoute exact path="/ecosystem" component={Ecosystem} layout={LayoutDefault} />
            <AppRoute exact path="/xprttoken" component={XPRTToken} layout={LayoutDefault} />
            <AppRoute exact path="/stakedrop" component={Stakedrop} layout={LayoutDefault} />
          <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropKava" component={KavaStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropTerra" component={TerraStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropMatic" component={MaticStakedrop} layout={LayoutDefault} />
          <AppRoute exact path="/technology" component={Technology} layout={LayoutDefault} />
        </Switch>
  );
};

export default App;