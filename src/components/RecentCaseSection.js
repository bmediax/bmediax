// Components
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '../layout/SectionLayout'
import FullTxageModule from './modules/FullTxageModule'
import SectionLink from './SectionLink'

const RecentCaseSection = () => {
  const data = useStaticQuery(graphql`
    query recentProjectsQuery(
      $filter: PrismicPortfolioFilterInput = {
        uid: { in: ["reikoforpcc", "chicanxshop", "tedxpcc2018"] }
      }
    ) {
      allPrismicPortfolio(filter: $filter) {
        nodes {
          url
          uid
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
              background_image {
                gatsbyImageData(width: 2000, placeholder: BLURRED)
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
                background_image {
                  gatsbyImageData(width: 2000, placeholder: BLURRED)
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
  `)
  const recentProjectData = data.allPrismicPortfolio.nodes
  return (
    <Section
      title="Recent Case Study"
      subtitle="Portfolio"
      // className="darkerSection"
      theme="secondary"
    >
      {recentProjectData.map((portfolio, index) => (
        <FullTxageModule
          key={index}
          title={portfolio.data.cover_title[0].name.text}
          raw={portfolio.data.cover_title[0].client.text}
          cover={portfolio.data.cover_title[0].background_image.gatsbyImageData}
          url={`/casestudy/${portfolio.uid}`}
          work={portfolio.data.overview[0].short_tags.text}
          shortDescr={portfolio.data.overview[0].short_description.text}
        />
      ))}
      <SectionLink path="/casestudy" type="ghost">
        View All Case Study
      </SectionLink>
    </Section>
  )
}

export default RecentCaseSection
