import React from 'react';
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';

const OverviewSection = () => {
    return (
        <SectionPortfolioLayout idLabel="overview" title="Overview" icon="Check Mark" bgLightDark align>
            <div className="column-layout">
                <div className="two-column_2-1">2</div>
                <div className="two-column_1-2">1</div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default OverviewSection;