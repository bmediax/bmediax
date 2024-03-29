import * as portfolioStyles from '../styles/portfolio.module.scss'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React from 'react';

const CoverTitle = ({ coverData }) => {
    const image = getImage(coverData.background_image.gatsbyImageData)
    return (
        <div style={{ display: "grid" }}>
        <GatsbyImage
          // style={{
          //   gridArea: "1/1",
          // }}
          className={portfolioStyles.coverImgs}
          // maxHeight: 600,
          // layout="fullWidth"
          layout="fullWidth"
          objectFit="cover"
          draggable="false"
          loading="eager"
          alt=""
          image={image}
        />
        {/* <div className={portfolioStyles.coverTitle} style={{
              gridArea: "1/1",
              position: "relative",
              display: "grid"}}> */}
              {/* <div className={portfolioStyles.text}>
                  <motion.h1 variants={slowSlideUp} initial="hidden" animate="show" transition="transition">
                      {coverData.title.text}
                    </motion.h1>
                  <motion.div variants={slowSlideUp} transition={{ delay:.2 }} initial="hidden" animate="show"
                    style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h5>{coverData.client.text}</h5>
                    <h5 style={{ marginLeft: "25px"}}>{coverData.date.text}</h5>
                  </motion.div>
              </div> */}
        {/* </div> */}
      </div>
    );
};

export default CoverTitle;