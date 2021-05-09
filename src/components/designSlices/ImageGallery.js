import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as portfolioStyles from '../../styles/portfolio.module.scss'

const ImageGallery = ({ slice }) => {
    console.log(slice)
    const getImages = (slices) => {
        const img = getImage(slices.image.localFile)
        return <GatsbyImage image={img} alt={slices.image.alt} placeholder="DOMINANT COLOR" imgClassName={portfolioStyles.imageGrid} className={portfolioStyles.imageGridWrap} />
    }
    return (
        <>
            <div className={`${portfolioStyles.columnLayout} ${portfolioStyles.columnTop} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    {slice.primary.title && 
                        <h3> {slice.primary.title.text} </h3>
                    }

                    <div className={`${portfolioStyles.columnLayout} sectionMaxWidth`}>
                    {slice.items.map((slices, index) => (
                        <React.Fragment key={index}>
                            {getImages(slices)}
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGallery