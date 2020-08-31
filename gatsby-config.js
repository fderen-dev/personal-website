module.exports = {
  siteMetadata: {
    title: 'Filip Derenowski - full-stack developer - personal website',
    description: 'Full-stack developer, focusing on JavaScript, real React.js fanboy - Filip Derenowski.',
    author: 'Filip Derenowski',
    siteUrl: 'https://fderenowski.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        ErrorDocument: `ErrorDocument 404 /404.html`,
       }
    },
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
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Exo', 'Mitr', 'Teko'],
      }
    },
    'gatsby-plugin-robots-txt',
  ],
};
