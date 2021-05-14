import React from 'react';
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
import { BsArrowRightShort } from 'react-icons/bs'
import * as CTACardStyles from './CTACard.module.scss'

const CTACardModule = ({ title, raw, cover, url, work, shortDescr, isLight }) => {
    const image = getImage(cover ? cover : "https://images.unsplash.com/photo-1543872981-b148af6c5f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80")
    return (
        <div className={`${CTACardStyles.CTACard} ${isLight ? CTACardStyles.isLight : '' }`}>
            <GatsbyImage image={image} alt={`${raw} Cover`} style={{ display: "block", padding: "30px 0px" }} className={CTACardStyles.coverImage} draggable="false" />
            <div className={CTACardStyles.text}>
                <span className={CTACardStyles.headerText}>
                    <h5>{work ? work : "work"}</h5>
                    <h3>{title ? title : "Title"}</h3>
                </span>
                <motion.span transition={{ duration: 0.6 }} exit={{ opacity: 0 }}>
                    <p>{shortDescr ? shortDescr : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mattis dui. Etiam vel volutpat ipsum, vitae molestie odio. Nam sed iaculis nisl. Phasellus mattis nulla sit amet suscipit eleifend." }</p>
                    <Link to={`/portfolio/${url}`} className="btn primary">Learn More <BsArrowRightShort /></Link>
                </motion.span>
            </div>
        </div>
    );
};

export default CTACardModule;