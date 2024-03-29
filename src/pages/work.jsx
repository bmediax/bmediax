import { Link, graphql } from "gatsby";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useState } from "react";

import Layout from "../layout/index.js";
import PropTypes from "prop-types";
import SectionPageLayout from "../layout/SectionPageLayout";
import { TagContext } from "../contexts/TagContext";
import TagFilter from "../components/modules/TagFilter";
import WorkImage from "../components/workImage";
import bmediaxResume from "../assets/files/Bmediax_Resume.pdf";
import { motion } from "framer-motion";

const Work = ({ data }) => {
  const [tag, setTag] = useState({
    tagged: "All",
    id: 0,
  });

  // const [isOpen, setIsOpen] = useState(false)
  // const [photoIndex, setPhotoIndex] = useState(0)

  if (!data) return null;
  const document = data.allPrismicWork.edges[0].node.data.works;
  return (
    <TagContext.Provider value={{ tag, setTag }}>
      <Layout title="Work">
        <SectionPageLayout label="page lighterSection" title="Work">
          <div className="sectionMaxWidth">
            <TagFilter
              data={["All", "Graphics", "Illustration", "Photography"]}
            />
            <div style={{ maxwidth: "1400px", marginTop: "clamp(30px, 5vw, 70px)" }}>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="1em">
                  {document
                    .filter((tg) => {
                      if (tag.tagged === "All") {
                        return tg;
                      } else {
                        return tg.tag === tag.tagged;
                      }
                    })
                    .map((work, index) => (
                      <motion.div key={index} whileHover={{ y: -3 }}>
                        <WorkImage
                          title={work.title}
                          tag={work.tag}
                          link={work.link}
                          image={work.image.gatsbyImageData}
                          alt={work.image.alt}
                        />
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
        <SectionPageLayout label="darkerSection">
          <div
            className="pageColumnLayout sectionMaxWidth"
            style={{ gridGap: "2em" }}
          >
            <div className="cardLink_wrapper" style={{ flex: "1" }}>
              <h1>View Resume</h1>
              {/* <a href={bmediaxResume} download="Bmediax_Resume" className="btn primary clickDownloadResume">Download Resume <HiArrowCircleDown style={{ position: 'relative', top: '2px' }}/></a> */}
              <a
                href={bmediaxResume}
                download="Bmediax_Resume"
                className="btn outline-active"
              >
                Download Resume
              </a>
            </div>
            <div className="cardLink_wrapper" style={{ flex: "1" }}>
              <h1>View Portfolio</h1>
              <Link
                to="/portfolio/edutainment"
                className="btn outline-active clickViewPortfolioFromAbout"
              >
                View a Case Study
              </Link>
            </div>
          </div>
        </SectionPageLayout>
      </Layout>
    </TagContext.Provider>
  );
};
export default Work;

Work.propTypes = {
  data: PropTypes.shape({
    allPrismicWork: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              works: PropTypes.arrayOf(
                PropTypes.shape({
                  title: PropTypes.shape({
                    text: PropTypes.string.isRequired,
                  }),
                  tag: PropTypes.string,
                  link: PropTypes.shape({
                    url: PropTypes.string,
                  }),
                  image: PropTypes.shape({
                    alt: PropTypes.string.isRequired,
                    gatsbyImageData: PropTypes.object.isRequired,
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
                alt
                gatsbyImageData(width: 2000)
              }
            }
          }
        }
      }
    }
  }
`;
