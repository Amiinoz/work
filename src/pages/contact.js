import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Mo Magan Portfolio | 404 </title>
        <meta name="description" content="Not Found" />
      </Helmet>
      <main className="container">
        <div className="error-container">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <a href="/" target="Home">
            Back home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
