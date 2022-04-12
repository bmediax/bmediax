import * as CTACardStyles from './CTACard.module.scss';

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, navigate } from 'gatsby';

import { BsArrowRightShort } from 'react-icons/bs';
import React from 'react';
import { motion } from 'framer-motion';

const CTACardModule = ({ title, raw, cover, img, url, work, shortDescr, isLight }) => {
    const image = getImage(cover)
    return (
        <div className={`${CTACardStyles.CTACard} ${isLight ? CTACardStyles.isLight : '' }`} onClick={ () => navigate(`${url}`)} role="link" tabIndex="0" onKeyUp={() => navigate(`${url}`)}>
            <Link to={`${url}`}>
                {img ?
                    <img src={img} alt={`${raw} Cover`} width="100%"  className={CTACardStyles.coverImage} />
                :
                    <GatsbyImage image={image} alt={`${raw} Cover`} style={{ display: "block", padding: "30px 0px" }} className={CTACardStyles.coverImage} draggable="false" />
                }
            </Link>
            <div className={CTACardStyles.text}>
                <span className={CTACardStyles.headerText}>
                    <h5>{work ? work : "work"}</h5>
                    <h3>{title ? title : "Title"}</h3>
                </span>
                <motion.span transition={{ duration: 0.6 }} exit={{ opacity: 0 }}>
                    <p>{shortDescr ? shortDescr : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mattis dui. Etiam vel volutpat ipsum, vitae molestie odio. Nam sed iaculis nisl. Phasellus mattis nulla sit amet suscipit eleifend." }</p>
                </motion.span>
            </div>
            <div className={CTACardStyles.buttonWrapper}>
                <Link to={`${url}`} className={`btn ${CTACardStyles.button}`}>Learn More <BsArrowRightShort /></Link>
            </div>
        </div>
    );
};

export default CTACardModule;