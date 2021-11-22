import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/notfound.scss';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Mo Magan Portfolio | 404 </title>
        <meta name="description" content="Not Found" />
      </Helmet>
      <main className="container-notfound">
        <div className="content">
          <h1>404 </h1>
          <h2>NOT FOUND</h2>
          <p>
            You just took an L and hit a route that doesn&#39;t exist... the
            sadness.
          </p>
          <a href="/" target="Home">
            Back home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
