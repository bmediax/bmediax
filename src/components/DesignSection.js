import React from 'react';
import DesignSliceZone from '../components/designSliceZone'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
// import ColorView from './modules/ColorView';

const DesignSection = (data) => {
    const designData = data.design[0]

    const isQuote = (quoteMessage) => {
        if (quoteMessage.quote.text === undefined || quoteMessage.quote.text === "") {
            return null
        } else {
            return (
                <div className={portfolioStyles.twoColumn}>
                    <blockquote>{designData.quote.text}</blockquote>
                </div>
            )
        }
    }
    return (
        <SectionPageLayout idLabel="design" title="Design" label="lighterSection" icon="Paint" sectionMaxWidth align>
            <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <p>{designData.description.text}</p>
                </div>
                {isQuote(designData)}
            </div>
            
            {/* <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}> */}
                {/* {isColourRender(data)} */}
                {/* <div className={portfolioStyles.twoColumn}>
                    <h3>Typography</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies dignissim elit, ac lobortis leo fermentum pulvinar. Fusce quis hendrerit mauris, ac elementum urna. Sed vel ex.</p>
                </div> */}
            {/* </div> */}
            {/* Slice Zone */}
            <DesignSliceZone sliceZone={data.body} />
        </SectionPageLayout>
    );
};

export default DesignSection;