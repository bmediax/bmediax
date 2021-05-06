import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import ColorView from './modules/ColorView';

const DesignSection = ({ designData, colourSlice }) => {
    const colourRender = (colour) => {
        return (
            <ColorView colors={colour} />
        )
    }

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

                {/* Color Palette */}
                {colourSlice && (
                        <div className={portfolioStyles.twoColumn}>
                            <h3>Color Palette</h3>
                            {colourRender(colourSlice.items)}
                        </div>
                    )
                }
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;