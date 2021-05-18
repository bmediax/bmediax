import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import WorkImage from '../components/workImage';
import TagFilter from '../components/modules/TagFilter';
import { TagContext } from '../contexts/TagContext'

const Work = ({ data }) => {
  const [ tag, setTag ] = useState({
    tagged: "All",
    id: null
  })

  if (!data) return null
  const document = data.allPrismicWork.edges[0].node.data.works

  return (
    <TagContext.Provider value={{tag, setTag}}>
      <Layout title="Work">
          <SectionPageLayout label="page" title="Work">
              <div className="sectionMaxWidth">
                  <TagFilter data={["All", "Graphics", "Illustration", "Photography"]} />
                  <div style={{ maxwidth: "1400px", marginTop: "100px" }}>
                      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                          <Masonry gutter="1em" >
                              {document.filter((tg) => {
                                if (tag.tagged === "All") {
                                  return tg
                                } else {
                                  return tg.tag === tag.tagged
                                }
                              }).map((work, index) => (
                                <motion.div key={index} whileHover={{ y: -3 }}>
                                  <WorkImage 
                                      title={work.title} 
                                      tag={work.tag} 
                                      link={work.link} 
                                      image={work.image.localFile} 
                                      alt={work.image.alt} />
                                </motion.div>
                              ))}
                          </Masonry>
                      </ResponsiveMasonry>
                  </div>
              </div>
          </SectionPageLayout>
      </Layout>
    </TagContext.Provider>
  )
}
export default Work;

export const query = graphql`
query WorkQuery {
  allPrismicWork {
    edges {
      node {
        data {
          works {
            title {
              text
            }
            tag
            link {
              url
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              alt
            }
          }
        }
      }
    }
  }
}
`