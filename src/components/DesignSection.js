import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import ColorView from './modules/ColorView';

const DesignSection = ({ designData }) => {
    const colorsPalette = [
        '#383E5F',
        '#3C86A5',
        '#F4F4F8',
        '#2D3346',
        '#CB5E65',
        '#B8C3D0'
    ]

    return (
        <SectionPortfolioLayout idLabel="design" title="Design" icon="Paint" sectionMaxWidth align>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>{designData.description[0].text}</p>
                </div>
                <div className={portfolioStyles.twoColumn}>
                    <blockquote>“{designData.quote[0].text}”</blockquote>
                </div>
            </div>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                {/* <div className={portfolioStyles.twoColumn}>
                    <h3>Typography</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex.</p>
                </div> */}
                <div className={portfolioStyles.twoColumn}>
                    <h3>Color Palette</h3>
                    <ColorView 
                        colors={colorsPalette} />
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;