import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

const Header: FunctionComponent = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet title={data.site.siteMetadata.title}>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
      />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="url" content={data.site.siteMetadata.siteUrl} />
      <meta name="identifier-URL" content={data.site.siteMetadata.siteUrl} />
      <html lang="en" />
    </Helmet>
  );
};

export default Header;
