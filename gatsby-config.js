module.exports = {
  siteMetadata: {
    title: `Maria Diniz`,
    description: `Currículo online de Maria Diniz - Estudante de Comunicação Social`,
    position: `Estudante de Comunicação Social`,
    contacts: {
      phone_number: '21 98451-2680',
      email: 'mariapodiniz@gmail.com',
      social: {
        github: 'https://github.com/mariadiniz',
        facebook: 'https://fb.com/mariatemrins',
        twitter: 'https://fb.com/mariatemrins',
      }
    },
    author: `@mariadiniz`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`*`],
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
