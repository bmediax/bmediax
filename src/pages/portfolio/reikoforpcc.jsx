import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const reikoforpcc = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <PortfolioTemplate data={document} pageTitle="Reiko for PCC" />
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
              gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
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
            gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
          }
          next_project {
            uid
          }
          overview {
            deliverables {
              text
              richText
              html
            }
            description {
              text
              richText
              html
            }
            problem {
              richText
            }
            solution {
              richText
            }
            project_link {
              url
            }
            role {
              text
              richText
              html
            }
            work {
              text
              richText
              html
            }
            design_tools {
              text
              richText
              html
            }
            development_tools {
              text
              richText
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
              richText
            }
          }
          results_image {
            gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
            alt
          }
          body {
            ... on PrismicPortfolioDataBodyDesignColorPalette {
              slice_type
              items {
                colour
              }
            }
            ... on PrismicPortfolioDataBodyDesignImageGallery {
              slice_type
              items {
                image {
                  alt
                  gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
                }
              }
              primary {
                title {
                  text
                }
                column
              }
            }
            ... on PrismicPortfolioDataBodyDesignVideo {
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
            ... on PrismicPortfolioDataBodyResultsImageGallery {
              slice_type
              items {
                image {
                  alt
                  gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
                }
              }
              primary {
                title {
                  text
                }
                column
              }
            }
          }
        }
      }
    }
  }
}
`