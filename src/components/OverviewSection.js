import * as portfolioStyles from '../styles/portfolio.module.scss';

import React from 'react';
import { RichText } from 'prismic-reactjs';
import SectionPageLayout from '../layout/SectionPageLayout';
import SideBar from './modules/SideBar';

const OverviewSection = ({ overviewData, projectLinks }) => {
    return (
        <SectionPageLayout idLabel="overview" label="lighterSection" title="Overview" icon="Check Mark" bgLightDark align>
            <div className="sectionMaxWidth">
                <div className={portfolioStyles.layoutSection}>
                    <div className={portfolioStyles.twoColumn_2to1}>
                        <RichText render={overviewData.description.richText} />
                        <hr />
                        <div className={portfolioStyles.textSection}>
                            <h3>Background</h3>
                            {/* <RichText render={overviewData.background.richText} /> */}
                            <RichText render={overviewData.problem.richText} />
                        </div>
                        <hr />
                        <div className={portfolioStyles.textSection}>
                            <h3>Problem</h3>
                            <RichText render={overviewData.problem.richText} />
                        </div>
                        <hr />
                        <div className={portfolioStyles.textSection}>
                            <h3>Solution</h3>
                            <RichText render={overviewData.solution.richText} />
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