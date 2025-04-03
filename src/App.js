import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DigitalDivide from './pages/DigitalDivide';
import TheBrdge from './pages/TheBrdge';
import OneUp from './pages/oneup';
import Posty from './pages/Posty';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/404';
import CustomCursor from './custom-cursor/cursor';

function App() {
  return (
    <>
      <div className="App" id="#app">
        <CustomCursor />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mo Magan | Portfolio</title>
          <link rel="canonical" href="https://www.momagan.com/" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/DigitalDivide" component={DigitalDivide} />
          <Route exact path="/TheBrdge" component={TheBrdge} />
          <Route exact path="/oneup" component={OneUp} />

          <Route exact path="/Posty" component={Posty} />

          <Route exact path="/Portfolio" component={Portfolio} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
