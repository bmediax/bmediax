import React from 'react';
import ResultsSliceZone from './resultsSliceZone'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';

const DesignSection = (data) => {
    const resultsData = data.results[0]
    return (
        <SectionPortfolioLayout idLabel="results" title="Results" icon="Check Mark" sectionMaxWidth>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>{resultsData.description.text}</p>
                </div>
            </div>
            <ResultsSliceZone sliceZone={data.body} />
        </SectionPortfolioLayout>
    );
};

export default DesignSection;