import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { motion } from 'framer-motion'
import { slowFadeIn } from '../../data/motionVariants'
import * as legionStyles from './LegionBar.module.scss'

const LegionBar = () => {
    return (
        // Legion Container
        <motion.div 
            variants={slowFadeIn}
            initial="hidden"
            animate="show"
            transition="transition"
            className={legionStyles.container}>
            {/* Legion Wrapper */}
            <ul className={legionStyles.wrapper}>
                {/* Legion Options */}
                <li><AnchorLink to="#overview" title="Overview" /></li>
                <li><AnchorLink to="#design" title="Design" /></li>
                <li><AnchorLink to="#results" title="Results" /></li>
            </ul>
        </motion.div>
    );
};

export default LegionBar;