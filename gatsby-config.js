module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "Bmediax",
    description: "Hi there, my name is Brian Moreno and I am a Digital Designer and Web Developer with over 7+ years of experience designing, prototyping, developing, and deploying large scale pixel-perfect websites and web applications.",
    descriptionHTML: "<p>I am a <span className='azure'>Digital Designer</span> and <span className='azure'>Web Developer</span> with over <span className='azure'>7+ years</span> of experience <span className='azure'>designing, prototyping, developing, and deploying</span> large scale pixel-perfect <span className='azure'>websites and web applications</span></p>",
    author: "Brian Moreno",
    // keywords: "Reiko Mia Williams, Reiko For PCC, Reiko, Reiko4PCC, Portland Community College, Zone 7, PCC Zone 7",
    siteUrl: "https://bmediax.dev",
    social: {
      instagram: 'bmediax',
      linkedin: 'bmediax',
      github: 'bmediax',
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
  ],
};
