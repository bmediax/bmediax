import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import SideBar from './modules/SideBar'

const OverviewSection = () => {
    return (
        <SectionPortfolioLayout idLabel="overview" title="Overview" icon="Check Mark" bgLightDark align>
            <div className={portfolioStyles.columnLayout}>
                <div className={portfolioStyles.twoColumn_2to1}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex vel leo fermentum ultricies et eu dolor. Aliquam id justo id nunc sagittis tincidunt nec non ante. Vestibulum auctor eget ex cursust incidunt nec non ante. Vestibulum.</p>
                </div>
                <div className={portfolioStyles.twoColumn_1to2}>
                    <SideBar />
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default OverviewSection;