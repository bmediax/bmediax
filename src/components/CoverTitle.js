import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const CoverTitle = () => {
    return (
        <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        // maxHeight: 600,
        layout="fullWidth"
        aspectRatio={3 / 1}
        alt=""
        src={
          "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div className={portfolioStyles.coverTitle} style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
        }}>
            <div className={portfolioStyles.text}>
                <h1>Edutainment</h1>
                <h5>PCC Multicultural Center</h5>
                <h5>April 2018</h5>
            </div>
      </div>
    </div>
        // <div className={portfolioStyles.coverTitle}>
        //     <h1> Edutainment </h1>
        //     <span>
        //         <h5>PCC Multicultural Center</h5>
        //         <h5>April 2018</h5>
        //     </span>
        // </div>
    );
};

export default CoverTitle;