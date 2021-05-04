import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import { CheckMarkIcon, PaintIcon } from '../components/Icons'

const SectionPortfolioLayout = ({ title, isDark, bgLightDark, icon, children, label, idLabel,  bgColor, align }) => {
    const checkIcon = (icn) => {
        if ( icn === "Check Mark" ) {
            return <CheckMarkIcon />
        } else if ( icn === "Paint") {
            return <PaintIcon  />
        } else {
            console.error("Can't find icon");
        }
    }

    return (
        <section id={idLabel} className={label} style={{ backgroundColor: bgColor }}>
            <div className={`section-title ${isDark ? 'darkTitle' : '' }`}>
                <h2 style={{ textAlign :  align ? 'left' : 'center'}}>
                    {title} <span className={`sectionPortfolioIcon ${bgLightDark ? 'lightdark' : ''}`}>{checkIcon(icon)}</span> 
                </h2>
            </div>
            {children}
        </section>
    );
};

export default SectionPortfolioLayout;