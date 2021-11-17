import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../layout";
import SectionPageLayout from "../layout/SectionPageLayout";
import CTACardModule from "../components/modules/CTACardModule";

const portfolio = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicPortfolio.edges;
  return (
    <Layout title="Portfolio">
      <SectionPageLayout title="Portfolio" label="page lighterSection">
        <div className="pageColumnLayout grid-three sectionMaxWidth">
          {document.map((portfolio, index) => (
            <CTACardModule
              isLight
              key={index}
              title={portfolio.node.data.cover_title[0].name.text}
              raw={portfolio.node.data.cover_title[0].client.text}
              cover={
                portfolio.node.data.cover_title[0].background_image
                  .gatsbyImageData
              }
              url={portfolio.node.uid}
              work={portfolio.node.data.overview[0].short_tags.text}
              shortDescr={
                portfolio.node.data.overview[0].short_description.text
              }
            />
          ))}
        </div>
      </SectionPageLayout>
    </Layout>
  );
};

portfolio.propTypes = {
  data: PropTypes.shape({
    allPrismicPortfolio: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              cover_title: PropTypes.arrayOf(
                PropTypes.shape({
                  title: PropTypes.shape({
                    text: PropTypes.string,
                  }),
                  name: PropTypes.shape({
                    text: PropTypes.string,
                  }),
                  client: PropTypes.shape({
                    text: PropTypes.string,
                  }),
                  date: PropTypes.shape({
                    text: PropTypes.string,
                  }),
                  background_image: PropTypes.shape({
                    gatsbyImageData: PropTypes.object,
                  }),
                })
              ),
            }),
          }),
        })
      ),
    }),
  }),
};

export default portfolio;

export const query = graphql`
  query portfolioQuery {
    allPrismicPortfolio {
      edges {
        node {
          data {
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
          uid
        }
      }
    }
  }
`;
