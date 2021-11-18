import React from 'react';
import Layout from '../components/Layout';
import Link from 'gatsby';
import SEO from '../components/seo';
import CustomCursor from '../CustomCursor/cursor';
const Error = () => {
  return (
    <Layout>
      <CustomCursor />
      <SEO title="404: Not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/" className="btn">
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
