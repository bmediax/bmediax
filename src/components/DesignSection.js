import React from 'react';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPortfolioLayout from '../layout/SectionPortfolioLayout';
import ColorView from './modules/ColorView';

/*
    1. Check if we have colour slice in our prismic cms
        - We will have to have a in the page if colour slice, if not then don't render anything for that section
    2. If we do, then return the ColorView Component and Map through each item within the specific colour slice.

*/

const DesignSection = ({ designData, colourSlice }) => {
    // const [isColour, setIsColour] = useState(false)
    console.log(colourSlice.items)

    // const colorsPalette = [
    //     '#383E5F',
    //     '#3C86A5',
    //     '#F4F4F8',
    //     '#2D3346',
    //     '#CB5E65',
    //     '#B8C3D0'
    // ]

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
                <div className={portfolioStyles.twoColumn}>
                    <h3>Color Palette</h3>
                    {/* <ColorView 
                        colors={colorsPalette} /> */}
                    {colourRender(colourSlice.items)}
                </div>
            </div>
        </SectionPortfolioLayout>
    );
};

export default DesignSection;