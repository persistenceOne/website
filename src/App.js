import React, { useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ReactGA from "react-ga4";
import LayoutDefault from "./layouts/LayoutDefault";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "./pages/Homepage";
import Ecosystem from "./pages/Ecosystem";
import Terms from "./pages/Terms";
import Privacy from "./pages/privacy";
import "react-multi-carousel/lib/styles.css";
import Faq from "./pages/Faq";
import Xprt from "./pages/Xprt";
import Summary from "./pages/Summary";

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.send(page);
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    trackPage(page);
  }, [location]);

  return (
    <Switch>
      <AppRoute exact path="/" component={Homepage} layout={LayoutDefault} />
      <AppRoute exact path="/xprt" component={Xprt} layout={LayoutDefault} />
      <AppRoute
        exact
        path="/ecosystem"
        component={Ecosystem}
        layout={LayoutDefault}
      />
      <AppRoute exact path="/faq" component={Faq} layout={LayoutDefault} />
      <AppRoute
        exact
        path="/summary"
        component={Summary}
        layout={LayoutDefault}
      />
      <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />
      <AppRoute
        exact
        path="/privacy"
        component={Privacy}
        layout={LayoutDefault}
      />
    </Switch>
  );
};

export default App;
