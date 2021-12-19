module.exports = {
  siteMetadata: {
    siteUrl: "https://www.lorav.co",
    title: "lorav.co",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-plugin-anchor-links",
    // "gatsby-plugin-sass",
    {
        resolve: "gatsby-plugin-sass",
        options: {
          implementation: require("node-sass"),
        }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
