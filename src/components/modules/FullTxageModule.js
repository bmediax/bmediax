import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as txageStyles from './FullTxage.module.scss'

const FullTxageModule = ({ title, raw, cover, url, work, shortDescr }) => {
    const image = getImage(cover)
    return (
        <div className={txageStyles.txageContainer}>
            <div className={txageStyles.fullTxage}>
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
                    <Link to={url}>
                        <button className="btn outline-inverse">
                            View Case Study
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Prop Types
FullTxageModule.propTypes = {
    title: PropTypes.string,
    raw: PropTypes.string,
    cover: PropTypes.object,
    url: PropTypes.string,
    work: PropTypes.string,
    shortDescr: PropTypes.string,
}

export default FullTxageModule;