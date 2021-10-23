module.exports = {
  siteMetadata: {
    title: "Bmediax",
    description:
      "Hi there, my name is Brian Moreno and I am a Digital Designer and Web Developer with over 7+ years of experience designing, prototyping, developing, and deploying large scale pixel-perfect websites and web applications.",
    descriptionHTML:
      "<p>I am a <span className='azure'>Digital Designer</span> and <span className='azure'>Web Developer</span> with over <span className='azure'>7+ years</span> of experience <span className='azure'>designing, prototyping, developing, and deploying</span> large scale pixel-perfect <span className='azure'>websites and web applications</span></p>",
    author: "Brian Moreno",
    // keywords: "Reiko Mia Williams, Reiko For PCC, Reiko, Reiko4PCC, Portland Community College, Zone 7, PCC Zone 7",
    siteUrl: "https://bmediax.dev",
    social: {
      instagram: "bmediax",
      linkedin: "bmediax",
      github: "bmediax",
    },
    socials: [
      {
        platform: "LinkedIn",
        subTitle: "Professional",
        url: "https://linkedin.com/in/bmediax",
      },
      {
        platform: "Github",
        subTitle: "Development",
        url: "https://github.com/bmediax",
      },
      {
        platform: "Instagram",
        subTitle: "Photography",
        url: "https://instagram.com/bmediax",
      },
      {
        platform: "Youtube",
        subTitle: "Video",
        url: "https://www.youtube.com/channel/UCPdDzUu7Mj5GCWtaJtUTQKw",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     exclude: ['/404', '/comingsoon', '/contact'],
    //     query: `
    //     {
    //       allSite {
    //         edges {
    //           node {
    //             siteMetadata {
    //               siteUrl
    //             }
    //           }
    //         }
    //       }
    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //     }
    //     `,
    //     serialize: ({ allSite, allSitePage }) => {
    //       return allSitePage.edges.map(({ node }) => {
    //           return {
    //           url: allSite.node.siteMetadata.siteUrl + node.path,
    //           changefreq: 'daily',
    //           priority: 0.7,
    //         };
    //       });
    //     },
    //   }
    // },
    {
      resolve: "gatsby-source-prismic",
      options: {
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          portfolio: require("./custom_types/portfolio.json"),
          work: require("./custom_types/work.json"),
        },
        repositoryName: "bmediax",
        // shouldNormalizeImage: () => true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bmediax`,
        short_name: `Bmediax`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3c86a5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -75,
        duration: 1500,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "G-WF6QH93GFZ",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0E3CNTLCDF", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: false, // optional parameter to include script in development
    //     id: 2408072,
    //     sv: 6,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PRJJ8ZC",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
      },
    },
  ],
};
