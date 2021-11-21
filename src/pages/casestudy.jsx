import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import SectionPageLayout from "../layout/SectionPageLayout";
import CTACardModule from "../components/modules/CTACardModule";

const casestudy = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicPortfolio.nodes;
  return (
    <Layout title="Case Study">
      <SectionPageLayout title="Case Study" label="page lighterSection">
        <div className="pageColumnLayout grid-three sectionMaxWidth">
          {document.map((portfolio, index) => (
            <CTACardModule
              isLight
              key={index}
              title={portfolio.data.cover_title[0].name.text}
              raw={portfolio.data.cover_title[0].client.text}
              cover={
                portfolio.data.cover_title[0].background_image
                  .gatsbyImageData
              }
              url={portfolio.uid}
              work={portfolio.data.overview[0].short_tags.text}
              shortDescr={
                portfolio.data.overview[0].short_description.text
              }
            />
          ))}
        </div>
      </SectionPageLayout>
    </Layout>
  );
};

export default casestudy;

export const query = graphql`
  query portfolioQuery {
    allPrismicPortfolio(filter: { data: { is_displayed: { eq: true } } }) {
      nodes {
        url
        uid
        data {
          is_displayed
          cover_title {
            title {
              text
            }
            name {
              text
            }
            client {
              text
            }
            date {
              text
            }
            background_image {
              gatsbyImageData(width: 2000)
            }
          }
          overview {
            short_description {
              text
            }
            role {
              text
            }
            short_tags {
              text
            }
          }
        }
      }
    }
  }
`;