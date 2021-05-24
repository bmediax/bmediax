import React, { useState } from 'react';
import { Link, graphql } from 'gatsby'
import { motion } from 'framer-motion'
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import WorkImage from '../components/workImage';
import TagFilter from '../components/modules/TagFilter';
import { TagContext } from '../contexts/TagContext'
import bmediaxResume from '../assets/files/Bmediax_Resume.pdf'

const Work = ({ data }) => {
  const [ tag, setTag ] = useState({
    tagged: "All",
    id: 0
  })

  // const [isOpen, setIsOpen] = useState(false)
  // const [photoIndex, setPhotoIndex] = useState(0)
  
  
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
                                  {/* {isOpen && (
                                    <Lightbox 
                                      mainSrc={document[photoIndex].image.localFile.childImageSharp.fluid.src}
                                      nextSrc={document[(photoIndex + 1) % (document.length)].image.localFile.childImageSharp.fluid.src}
                                      prevSrc={document[(photoIndex + document.length - 1) % document.length].image.localFile.childImageSharp.fluid.src}
                                      onCloseRequest={() => setIsOpen(false)}
                                      onMovePrevRequest={() =>
                                          setPhotoIndex((photoIndex + document.length - 1) % document.length)
                                      }
                                      onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % document.length)
                                      } 
                                      />
                                  )} */}
                                </motion.div>
                              ))}
                          </Masonry>
                      </ResponsiveMasonry>
                  </div>
              </div>
          </SectionPageLayout>
          <SectionPageLayout idLabel="meetBrian">
              <div className="pageColumnLayout sectionMaxWidth" style={{ gridGap: "2em"}}>
                  <div className="cardLink_wrapper" style={{ flex: "1" }}>
                      <h1>View Resume</h1>
                      {/* <a href={bmediaxResume} download="Bmediax_Resume" className="btn primary clickDownloadResume">Download Resume <HiArrowCircleDown style={{ position: 'relative', top: '2px' }}/></a> */}
                      <a href={bmediaxResume} download="Bmediax_Resume" className="btn outline-active">Download Resume</a>
                  </div>
                  <div className="cardLink_wrapper" style={{ flex: "1" }}>
                      <h1>View Portfolio</h1>
                      <Link to="/portfolio/edutainment" className="btn outline-active clickViewPortfolioFromAbout">View a Case Study</Link>
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
                  id
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