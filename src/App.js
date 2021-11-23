import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favetees from './pages/Favetees';
import Covid19Tracker from './pages/Covid19Tracker';
import Portfolio from './pages/Portfolio';
import Garabaldi from './pages/Garabaldi';
import MosDev from './pages/MosDev';
import Weather from './pages/Weather';
import Airbnb from './pages/Airbnb';
import NotFound from './pages/404';
import Layout from './components/Layout';

const routes = [
  { path: '/', component: Home },

  { path: '/Favetees', component: Favetees },
  { path: '/Covid19Tracker', component: Covid19Tracker },
  { path: '/Portfolio', component: Portfolio },
  { path: '/Garabaldi', component: Garabaldi },
  { path: '/MosDev', component: MosDev },
  { path: '/Weather', component: Weather },
  { path: '/Airbnb', component: Airbnb },
  { path: '*', component: NotFound },
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
      <Layout>
        <Router>{routeComponents}</Router>
      </Layout>
    </div>
  );
}

export default App;
