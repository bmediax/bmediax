import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { StaticImage } from 'gatsby-plugin-image'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const CoverTitle = ({ coverData }) => {
    const image = getImage(coverData.background_image.localFile)
    return (
        <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        // maxHeight: 600,
        layout="fullWidth"
        // aspectratio={3 / 1}
        alt=""
        image={image}
      />
      <div className={portfolioStyles.coverTitle} style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
            background: "rgba(0, 0, 0, 0.4)"
        }}>
            <div className={portfolioStyles.text}>
                <h1>{coverData.title.text}</h1>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <h5>{coverData.client.text}</h5>
                  <h5 style={{ marginLeft: "25px"}}>{coverData.date.text}</h5>
                </div>
            </div>
      </div>
    </div>
    );
};

export default CoverTitle;