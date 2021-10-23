import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const edutainment = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <>
          <PortfolioTemplate data={document} pageTitle="Edutainment" />
        </>
    );
};

export default edutainment;

export const query = graphql`
query edutainmentPortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "edutainment"}}) {
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
            design_tools {
              text
              raw
              html
            }
            development_tools {
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
              }
            }
          }
        }
      }
    }
  }
}

`