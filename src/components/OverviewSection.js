import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import SideBar from './modules/SideBar'

const OverviewSection = ({ overviewData }) => {
    return (
        <SectionPortfolioLayout idLabel="overview" label="sectionMaxWidth" title="Overview" icon="Check Mark" bgLightDark align>
            <div className={portfolioStyles.columnLayout}>
                <div className={portfolioStyles.twoColumn_2to1}>
                    <p>{overviewData.description.text}</p>
                </div>
                <div className={portfolioStyles.twoColumn_1to2}>
                    <SideBar sidebarData={overviewData} />
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default OverviewSection;