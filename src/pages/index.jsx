import React from "react";
import { graphql } from "gatsby";
// import RecentProjectsSection from '../components/RecentProjectsSection.js'
import Layout from "../layout/index.js";
import * as homepageStyles from "../styles/homepage.module.scss";
import CoverCTA from "../components/CoverCTA.js";
import RecentCaseSection from "../components/RecentCaseSection.js";
import WhatDoSection from "../components/WhatDoSection";
// import AwardsSection from '../components/AwardsSection.js'
import { BsArrowDown } from "react-icons/bs";

const IndexPage = ({ data }) => {
  if (!data) return null;
  const document = data.allPrismicHomepage.edges[0].node.data;
  // const awards = data.allPrismicHomepage.edges[0].node.data.body
  return (
    <Layout title="Bmediax" darkNav={true}>
      <CoverCTA coverData={document.cover[0]} />
      <a href="#firstSection" className={homepageStyles.scrollSection}>
        <span>Scroll Down</span>
        <BsArrowDown />
      </a>
      <WhatDoSection />
      <RecentCaseSection />
      {/* <RecentProjectsSection /> */}
      {/* <AwardsSection awardsData={awards[1]} /> */}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query homepageQuery {
    allPrismicHomepage {
      edges {
        node {
          data {
            cover {
              title {
                text
              }
              description {
                text
                richText
                html
              }
            }
            body {
              ... on PrismicHomepageDataBodyAwardsSection {
                items {
                  medal
                  sub_text {
                    text
                  }
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
`;
