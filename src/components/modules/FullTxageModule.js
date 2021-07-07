import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as txageStyles from './FullTxage.module.scss'

const FullTxageModule = ({ title, raw, cover, url, work, shortDescr }) => {
    const image = getImage(cover)
    return (
        <div className={txageStyles.txageContainer}>
            <div className={txageStyles.fullTxage}>
                {/* <StaticImage 
                    alt="A Placeholder Image"
                    src="https://images.unsplash.com/photo-1519989041117-c6bf935facde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" 
                    loading="lazy"
                    className={txageStyles.txageImage}
                /> */}
                <GatsbyImage 
                    image={image} 
                    alt={`${raw} Cover`} 
                    loading="lazy"
                    className={txageStyles.txageImage} 
                    draggable="false" 
                />
                <div className={txageStyles.txageText}>
                    <h4>{work}</h4>
                    <h3>{title}</h3>
                    <p>{shortDescr}</p>
                    <Link to={`/portfolio/${url}`}>
                        <button className="btn outline-inverse">
                            View Case Study
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FullTxageModule;