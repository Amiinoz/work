import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from './pages/contact';
import Favetees from './pages/Favetees';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/Favetees', component: Favetees },
];

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mo Magan | Portfolio</title>
        <link rel="canonical" href="http://momagan.com" />
      </Helmet>
      <BrowserRouter>{routeComponents}</BrowserRouter>;
    </div>
  );
}

export default App;
