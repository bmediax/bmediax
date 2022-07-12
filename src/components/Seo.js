import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import React from "react"

// Use iOS 15 Meta Custom Banner Color
// 1. Import the variables to use 
// Setup the Meta
// Connect the variables to the meta

function SEO({ description, lang, meta, image: metaImage, title }) {
  const isHome = (homes) => {
    if (homes === "Bmediax") {
      return "Bmediax | Digital Designer & Frontend Developer"
    } else {
      return `%s | ${site.siteMetadata.title}`
    }
  }
  const { site } = useStaticQuery(
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
  )
  const metaDescription = description || site.siteMetadata.description
  const image = metaImage 
      // && metaImage.src
      // ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      // : null
  // console.log(metaImage);
  // const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={isHome(title)}
      // link={[
      //   { rel: 'apple-touch-icon', sizes: '180x180', href: `${appleTouchIcon}`},
      //   { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}`},
      //   { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}`},
      //   { rel: 'mask-icon', href: `${maskIcon}`, color: '#5bbad5'},
      // ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: "theme-color",
        //   content: `${variableStyles.midnight}`,
        //   media: "(prefers-color-scheme: light)"
        // },
        // {
        //   name: "theme-color",
        //   content: `${variableStyles.masOscuro}`,
        //   media: "(prefers-color-scheme: dark)"
        // },
        // {
        //   name: "keywords",
        //   content: site.siteMetadata.keywords.join(","),
        // },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}
export default SEO