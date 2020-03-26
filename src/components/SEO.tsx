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
            link
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href={data.site.siteMetadata.link} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Exo|Mitr|Teko&display=swap"
      ></link>
    </Helmet>
  );
};

export default Header;
