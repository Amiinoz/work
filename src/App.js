import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CustomCursor from './custom-cursor/cursor';

// Page imports
import Home from './pages/Home';
import OneUp from './pages/oneup';
import Tessa from './pages/tessa';
import Posty from './pages/Posty';
import Favetees from './pages/Favetees';
import Covid19Tracker from './pages/Covid19Tracker';
import Portfolio from './pages/Portfolio';
import Garabaldi from './pages/Garabaldi';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <div className="App" id="app">
        <CustomCursor />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mo Magan | Portfolio</title>
          <link rel="canonical" href="https://www.momagan.com/" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/oneup" component={OneUp} />
          <Route exact path="/tessa" component={Tessa} />
          <Route exact path="/Posty" component={Posty} />
          <Route exact path="/Favetees" component={Favetees} />
          <Route exact path="/Covid19Tracker" component={Covid19Tracker} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Garabaldi" component={Garabaldi} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
