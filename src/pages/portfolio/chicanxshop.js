import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const chicanxshop = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <PortfolioTemplate data={document} />
    );
};

export default chicanxshop;

export const query = graphql`
query chicanxshopPortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "chicanxshop"}}) {
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
                  gatsbyImageData(width: 1440)
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
                gatsbyImageData(width: 1440)
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
            }
          }
          results_image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1440)
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
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            ... on PrismicPortfolioBodyResultsImageGallery {
              slice_type
              items {
                image {
                  url
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              slice_label
            }
          }
        }
      }
    }
  }
}
`