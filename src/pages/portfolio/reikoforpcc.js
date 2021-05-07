import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const reikoforpcc = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <PortfolioTemplate data={document} />
    );
};

export default reikoforpcc;

export const query = graphql`
query reikoforpccPortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "reikoforpcc"}}) {
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
              items {
                colour
              }
            }
          }
        }
      }
    }
  }
}
`