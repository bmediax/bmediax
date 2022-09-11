import CaseTemplate from "../layout/CaseTemplate";
import React from "react";
import { graphql } from "gatsby";

const Portfolio = ({ data }) => {
  if (!data) return null;
  const document = data.prismicPortfolio.data;
  return (
    <CaseTemplate
      data={document}
      pageTitle={document.cover_title[0].name.text}
      uid={`${data.prismicPortfolio.uid}`}
    />
  );
};

export default Portfolio;

export const query = graphql`
  query AllPortfolioQuery($id: String) {
    prismicPortfolio(id: { eq: $id }) {
      uid
      data {
        is_displayed
        cover_title {
          name {
            text
          }
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
            url
          }
        }
        design {
          description {
            text
            richText
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
          background {
            richText
          }
          problem {
            richText
          }
          solution {
            richText
          }
          # Doesn't Exist anymore
          # project_link {
          #   url
          # }
          role {
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
              text_color
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
              responsive_column
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
                gatsbyImageData(width: 2000)
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
`;
