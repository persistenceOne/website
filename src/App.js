import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Views
import Homepage from "./views/Homepage";
import Vision from "./views/Vision";
import Products from "./views/Products";
import RoadMap from "./views/RoadMap";
import Ecosystem from "./views/Ecosystem";
import Stakedrop from "./views/Stakedrop";
import CosmosStakedrop from "./Containers/Stakedrop/CosmosStakedrop";
import KavaStakedrop from "./Containers/Stakedrop/KavaStakedrop";
import TerraStakedrop from "./Containers/Stakedrop/TerraStakedrop";
import MaticStakedrop from "./Containers/Stakedrop/MaticStakedrop";
import ScrollReveal from './utils/ScrollReveal';
import Technology from "./views/Technology";
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

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

    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

  return (
      <ScrollReveal
          ref={childRef}
          children={() => (
        <Switch>
          <AppRoute exact path="/" component={Homepage} layout={LayoutDefault} />
            <AppRoute exact path="/vision" component={Vision} layout={LayoutDefault} />
            <AppRoute exact path="/products" component={Products} layout={LayoutDefault} />
            <AppRoute exact path="/roadmap" component={RoadMap} layout={LayoutDefault} />
            <AppRoute exact path="/ecosystem" component={Ecosystem} layout={LayoutDefault} />
            <AppRoute exact path="/stakedrop" component={Stakedrop} layout={LayoutDefault} />
          <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropCosmos" component={CosmosStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropKava" component={KavaStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropTerra" component={TerraStakedrop} layout={LayoutDefault} />
            <AppRoute exact path="/StakeDropMatic" component={MaticStakedrop} layout={LayoutDefault} />
          <AppRoute exact path="/technology" component={Technology} layout={LayoutDefault} />
        </Switch>
          )} />
  );
}

export default App;