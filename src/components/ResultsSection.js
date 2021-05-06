import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';

const DesignSection = ({ resultsData }) => {
    return (
        <SectionPortfolioLayout idLabel="results" title="Results" icon="Check Mark" sectionMaxWidth>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>{resultsData.description[0].text}</p>
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;