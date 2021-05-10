import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import SideBar from './modules/SideBar'

const OverviewSection = ({ overviewData, projectLinks }) => {
    return (
        <SectionPageLayout idLabel="overview" label="sectionMaxWidth" title="Overview" icon="Check Mark" bgLightDark align>
            <div className={portfolioStyles.columnLayout}>
                <div className={portfolioStyles.twoColumn_2to1}>
                    <p>{overviewData.description.text}</p>
                </div>
                <div className={portfolioStyles.twoColumn_1to2}>
                    <SideBar sidebarData={overviewData} projectLinks={projectLinks} />
                </div>
            </div>
        </SectionPageLayout>
    );
};

export default OverviewSection;