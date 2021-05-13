import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const chicanoalliance = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <PortfolioTemplate data={document} pageTitle="Willamette Chicano Alliance" />
    );
};

export default chicanoalliance;

export const query = graphql`
query chicanoalliancePortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "chicanoalliance"}}) {
    edges {
      node {
        data {
          cover_title {
            client {
              text
            }
            date {
              text
            }
            title {
              text
            }
            background_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 2000
                    placeholder: DOMINANT_COLOR
                    webpOptions: {quality: 100}
                  )
                }
              }
              alt
            }
          }
          design {
            description {
              text
            }
            quote {
              text
            }
          }
          design_image {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 550
                  placeholder: DOMINANT_COLOR
                  webpOptions: {quality: 100}
                )
              }
            }
          }
          next_project {
            uid
          }
          overview {
            deliverables {
              text
              raw
              html
            }
            description {
              text
              raw
              html
            }
            problem {
              raw
            }
            solution {
              raw
            }
            project_link {
              url
            }
            role {
              text
              raw
              html
            }
            work {
              text
              raw
              html
            }
          }
          project_links {
            label {
              text
            }
            link {
              url
            }
          }
          results {
            description {
              text
              raw
            }
          }
          results_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 550
                  placeholder: DOMINANT_COLOR
                  webpOptions: {quality: 100}
                )
              }
            }
            alt
          }
          body {
            ... on PrismicPortfolioBodyDesignColorPalette {
              slice_type
              items {
                colour
              }
            }
            ... on PrismicPortfolioBodyDesignImageGallery {
              slice_type
              items {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData (
                        width:2000
                        placeholder: DOMINANT_COLOR
                        webpOptions: {quality: 100}
                      )
                    }
                  }
                }
              }
              primary {
                title {
                  text
                }
                column
              }
            }
            ... on PrismicPortfolioBodyDesignVideo {
              slice_type
              primary {
                column
                title {
                  text
                }
              }
              items {
                video_url {
                  url
                }
                video_height {
                  text
                }
              }
            }
            ... on PrismicPortfolioBodyResultsImageGallery {
              slice_type
              items {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData (
                        width:2000
                        placeholder: DOMINANT_COLOR
                        webpOptions: {quality: 100}
                      )
                    }
                  }
                }
              }
              primary {
                title {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
}
`