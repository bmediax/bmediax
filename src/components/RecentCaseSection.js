import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import FullTxageModule from './modules/FullTxageModule';
import SectionLink from './SectionLink';

const RecentCaseSection = () => {
    return (
        <SectionLayout isTheme="lightDark-section" title="Recent Case Study" subtitle="Portfolio">
            <FullTxageModule />
            <SectionLink path="/portfolio" type="primary">
                View All Case Study
            </SectionLink>
        </SectionLayout>
    );
};

export default RecentCaseSection;