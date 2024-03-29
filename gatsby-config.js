module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.doktor-sentek.de',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.jsx`,
        enableIdentityWidget: true,
        htmlTitle: 'CMS',
        htmlFavicon: `${__dirname}/static/images/favicon.svg`,
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
