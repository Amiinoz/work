import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/notfound.scss';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title> 404 | Mo Magan Portfolio </title>
        <meta
          name="description"
          content="The page you are looking for is not found"
        />
      </Helmet>
      <main className="container-notfound">
        <div className="content">
          <h1>404 </h1>
          <h2>NOT FOUND</h2>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <a href="/" target="Home">
            home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
