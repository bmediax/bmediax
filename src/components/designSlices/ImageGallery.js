import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as portfolioStyles from '../../styles/portfolio.module.scss'

const ImageGallery = ({ slice }) => {
    const gridStyles = {
        padding: "30px !important"
    }

    const gridColumn = (col) => {
        if (col === "1 Column") {
            return `${portfolioStyles.column_1}`
        } else if (col === "2 Column") {
            return `${portfolioStyles.column_2}`
        } else if (col === "3 Column") {
            return `${portfolioStyles.column_3}`
        } else if (col === "4 Column") {
            return `${portfolioStyles.column_4}`
        } else if (col === "5 Column") {
            return `${portfolioStyles.column_5}`
        } else if (col === "6 Column") {
            return `${portfolioStyles.column_6}`
        }
    }

    const gridResponsiveColumn = (col) => {
        if (col === "1 Column") {
            return `${portfolioStyles.responsiveColumn_1}`
        } else if (col === "2 Column") {
            return `${portfolioStyles.responsiveColumn_2}`
        } else if (col === "3 Column") {
            return `${portfolioStyles.responsiveColumn_3}`
        }
    }

    const getImages = (slices) => {
        const img = getImage(slices.image.gatsbyImageData)
        return (
            <>
                { img ? (
                    <div className={portfolioStyles.imageWrapper}>
                        <GatsbyImage image={img} draggable="false" alt={slices.image.alt} placeholder="DOMINANT COLOR" imgClassName={portfolioStyles.imageGrid} className={portfolioStyles.imageGridWrap} />
                        <p className={portfolioStyles.caption}>{slices.image.alt}</p>
                    </div>
                ) : null }
            </>
        )

    }

    const isTitle = (title) => {
        if (title.primary.title.text === "" || title.primary.title.text === undefined ) {
            return ""
        } else {
            return <h3>{title.primary.title.text}</h3>
        }
    }

    // Beta Feature
    // const isCaption = (slice) => {
    //     console.log(slice);
    //     if (slice.description === "" || slice.description === undefined) {
    //         return ""
    //     } else{
    //         return ""
    //         <RichText render={slice.description.richText} />
    //         return <RichText render={slice.description.raw} />
    //     }
    // }

    return (
        <>
            <div className={`${portfolioStyles.layoutSection} ${portfolioStyles.columnTop} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    <div className={portfolioStyles.textSection}>
                        {isTitle(slice)}
                    </div>

                    <div className={`${portfolioStyles.columnGallery} sectionMaxWidth ${gridColumn(slice.primary.column)} ${gridResponsiveColumn(slice.primary.responsive_column)}`} style={{ gridStyles }}>
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