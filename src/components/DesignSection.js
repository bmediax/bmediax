import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import ColorView from './modules/ColorView';

const DesignSection = (data) => {
    const designData = data.design[0]
    const isColourRender = (isColour) => {
        if (isColour.body === undefined) {
            return null
        } else {
            if (isColour.body[0] !== undefined) {
                return (
                    <div className={portfolioStyles.twoColumn}>
                        <h3>Color Palette</h3>
                        <ColorView colors={isColour.body[0].items} />
                    </div>
                )
            }
             else {
                 return null
             }
        }
    }

    return (
        <SectionPortfolioLayout idLabel="design" title="Design" icon="Paint" sectionMaxWidth align>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>{designData.description.text}</p>
                </div>
                <div className={portfolioStyles.twoColumn}>
                    <blockquote>“{designData.quote.text}”</blockquote>
                </div>
            </div>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                {/* <div className={portfolioStyles.twoColumn}>
                    <h3>Typography</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex.</p>
                </div> */}

                {/* Color Palette */}
                {/* {data.body[0] &&
                    isColourRender(data.body)
                } */}

                {isColourRender(data)}
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;