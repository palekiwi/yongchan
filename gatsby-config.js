const path = require("path");
const siteMetadata = require("./src/data/siteMetadata");

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/images/logos/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "valen-international",
        short_name: "valen",
        start_url: "/",
        background_color: "#336699",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/logos/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          "Number.isInteger",
          "Object.entries",
          "Set",
          "String.prototype.startsWith",
          "Array.prototype.findIndex",
          "Array.prototype.includes",
        ],
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/projects/`,
        name: "projects",
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: [
        {
          resolve: "gatsby-remark-relative-images-v2",
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 590,
          },
        },
      ],
    },
  ],
};
