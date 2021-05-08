import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as CTACardStyles from './CTACard.module.scss'
// import * as variables from '../../styles/_variables.module.scss'

const CTACardModule = ({ title, raw, cover, url, work, shortDescr }) => {
    const image = getImage(cover)
    return (
        <div className={CTACardStyles.CTACard}>
            <GatsbyImage image={image} alt={`${raw} Cover`} style={{ display: "block", padding: "30px 0px" }} className={CTACardStyles.coverImage} />
            <div className={CTACardStyles.text}>
                <span className={CTACardStyles.headerText}>
                    <h5>{work}</h5>
                    <h3>{title}</h3>
                </span>
                <p>{shortDescr}</p>
                <a href={`/portfolio/${url}`} className="btn primary">Learn More</a>
            </div>
        </div>
    );
};

export default CTACardModule;