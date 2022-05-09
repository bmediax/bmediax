import * as portfolioStyles from '../styles/portfolio.module.scss';

import React from 'react';
import ResultsSliceZone from './resultsSliceZone';
import { RichText } from 'prismic-reactjs';
import SectionPageLayout from '../layout/SectionPageLayout';

const DesignSection = (data) => {
    const resultsData = data.results[0]
    return (
      <SectionPageLayout
        label="lightestSection"
        idLabel="results"
        title="Results"
        sectionMaxWidth
        align
      >
        <div className={`${portfolioStyles.layoutSection} sectionMaxWidth`}>
          <div className={portfolioStyles.twoColumn}>
            <RichText render={resultsData.description.richText} />
          </div>
        </div>
        <ResultsSliceZone sliceZone={data.body} />
      </SectionPageLayout>
    );
};

export default DesignSection;