module.exports = {
  siteMetadata: {
    title: 'Filip Derenowski',
    author: 'Filip Derenowski',
    link: 'https://www.fderenowski.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Filip Derenowski',
        short_name: 'fderen-dev',
        start_url: '/',
        background_color: '#242424',
        theme_color: '#242424',
        display: 'standalone',
        icon: 'src/images/icon-yellow.png',
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        }
      }
    }
  ],
};
