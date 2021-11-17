import React from 'react';
import { RichText } from 'prismic-reactjs'
import ResultsSliceZone from './resultsSliceZone'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';

const DesignSection = (data) => {
    const resultsData = data.results[0]
    return (
        <SectionPageLayout label="lightestSection" idLabel="results" title="Results & Summary" icon="Check Mark" sectionMaxWidth>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <RichText render={resultsData.description.richText} />
                </div>
            </div>
            <ResultsSliceZone sliceZone={data.body} />
        </SectionPageLayout>
    );
};

export default DesignSection;