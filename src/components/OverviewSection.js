import React from 'react';
import { RichText } from 'prismic-reactjs'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import SideBar from './modules/SideBar'

const OverviewSection = ({ overviewData, projectLinks }) => {
    return (
        <SectionPageLayout idLabel="overview" title="Overview" icon="Check Mark" bgLightDark align>
            <div className="sectionMaxWidth">
                <div className={portfolioStyles.columnLayout}>
                    <div className={portfolioStyles.twoColumn_2to1}>
                        <RichText render={overviewData.description.raw} />
                        <div className={portfolioStyles.textSection}>
                            <h3>The Problem</h3>
                            <RichText render={overviewData.problem.raw} />
                        </div>
                        <div className={portfolioStyles.textSection}>
                            <h3>The Solution</h3>
                            <RichText render={overviewData.solution.raw} />
                        </div>
                    </div>
                    <div className={portfolioStyles.twoColumn_1to2}>
                        <SideBar sidebarData={overviewData} projectLinks={projectLinks} />
                    </div>
                </div>
            </div>
        </SectionPageLayout>
    );
};

export default OverviewSection;