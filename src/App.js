import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './css/style.css';
import './App.css';
const Team = React.lazy(() => import('./webpages/components/team'));
const Roadmap = React.lazy(() => import('./webpages/components/roadmap'));
const AppContainer = React.lazy(() => import('./webpages/components/appSection/homePage'));
const poolContainer = React.lazy(() => import('./webpages/components/appSection/poolSection'));
const paymentSection = React.lazy(() => import('./webpages/components/appSection/paymentSection'));
const homepage = React.lazy(() => import('./webpages/homepage'));

class App extends Component {

  render() {

    return (
      <Router>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route path="/team" component={Team} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/app" component={AppContainer} />
            <Route path="/pool" component={poolContainer} />
            <Route path="/payment" component={paymentSection} />
          </Switch>   
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
