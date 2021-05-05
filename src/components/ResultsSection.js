import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';

const DesignSection = () => {
    return (
        <SectionPortfolioLayout idLabel="results" title="Results" icon="Check Mark" sectionMaxWidth>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex vel leo fermentum.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex vel leo fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex vel leo fermentum.</p>
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;