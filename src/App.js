import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favetees from './pages/Favetees';
import Covid19Tracker from './pages/Covid19Tracker';
import Portfolio from './pages/Portfolio';
import Garabaldi from './pages/Garabaldi';
import MosDev from './pages/MosDev';
import Weather from './pages/Weather';
import Airbnb from './pages/Airbnb';
import NotFound from './pages/404';
import CustomCursor from './custom-cursor/cursor';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="App" id="#app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mo Magan | Portfolio</title>
          <link rel="canonical" href="https://www.momagan.com/" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Favetees" component={Favetees} />
          <Route exact path="/Covid19Tracker" component={Covid19Tracker} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Garabaldi" component={Garabaldi} />
          <Route exact path="/MosDev" component={MosDev} />
          <Route exact path="/Weather" component={Weather} />
          <Route exact path="/Airbnb" component={Airbnb} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
