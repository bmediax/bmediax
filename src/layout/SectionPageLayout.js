import React from 'react';
import { motion } from 'framer-motion'
import { titleTextFadeIn } from '../data/motionVariants'
// import * as portfolioStyles from '../styles/portfolio.module.scss'
import { CheckMarkIcon, PaintIcon } from '../components/Icons'

const SectionPageLayout = ({ title, isDark, bgLightDark, icon, children, label, idLabel,  bgColor, align, sectionMaxWidth }) => {
    const checkIcon = (icn) => {
        if ( icn === "Check Mark" ) {
            return <CheckMarkIcon />
        } else if ( icn === "Paint") {
            return <PaintIcon  />
        }
    }

    return (
        <section id={idLabel} className={label} style={{ backgroundColor: bgColor }}>
            <div className={`section-title ${isDark ? 'darkTitle' : '' } sectionMaxWidth ${sectionMaxWidth ? 'sectionMaxWidth' : ''}`}>
                <motion.h2 initial="hidden" animate="show" exit="exit" variants={titleTextFadeIn} style={{ textAlign :  align ? 'left' : 'center'}}>
                    {title} <span className={`sectionPortfolioIcon ${bgLightDark ? 'lightdark' : ''}`}>{checkIcon(icon)}</span> 
                </motion.h2>
            </div>
            {children}
        </section>
    );
};

export default SectionPageLayout;