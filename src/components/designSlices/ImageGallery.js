import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as portfolioStyles from '../../styles/portfolio.module.scss'

const ImageGallery = ({ slice }) => {
    const gridStyles = {
        padding: "30px !important"
    }

    const gridColumn = (col) => {
        if (col === "1 Column") {
            return `${portfolioStyles.columnone}`
        } else if (col === "2 Column") {
            return `${portfolioStyles.columntwo}`
        } else if (col === "3 Column") {
            return `${portfolioStyles.columnthree}`
        } else if (col === "4 Column") {
            return `${portfolioStyles.columnfour}`
        } else if (col === "5 Column") {
            return `${portfolioStyles.columnfive}`
        } else if (col === "6 Column") {
            return `${portfolioStyles.columnsix}`
        }
    }

    const getImages = (slices) => {
        const img = getImage(slices.image.localFile)
        return <GatsbyImage image={img} alt={slices.image.alt} placeholder="DOMINANT COLOR" imgClassName={portfolioStyles.imageGrid} className={portfolioStyles.imageGridWrap} />
    }

    const isTitle = (title) => {
        if (title.primary.title.text === "") {
            return ""
        } else {
            return <h3>{title.primary.title.text}</h3>
        }
    }
    return (
        <>
            <div className={`${portfolioStyles.columnLayout} ${portfolioStyles.columnTop} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    {isTitle(slice)}

                    <div className={`${portfolioStyles.columnGallery} sectionMaxWidth ${gridColumn(slice.primary.column)}`} style={{ gridStyles }}>
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