import React from 'react';
import { motion } from 'framer-motion'
import * as CTACardStyles from './CTACard.module.scss'
// import * as variables from '../../styles/_variables.module.scss'

const CTACardModule = ({ title, raw, cover, url, work, shortDescr }) => {
    return (
        <motion.div className={CTACardStyles.CTACard} whileHover={{ scale: 1.02 }}>
            <img src={cover} alt={`${raw} Cover`} width="100%" className={CTACardStyles.coverImage} />
            <div className={CTACardStyles.text}>
                <span className={CTACardStyles.headerText}>
                    <h5>{work}</h5>
                    <h3>{title}</h3>
                </span>
                <p>{shortDescr}</p>
                <a href={url} className="btn primary">Learn More</a>
            </div>
        </motion.div>
    );
};

export default CTACardModule;