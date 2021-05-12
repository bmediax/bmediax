import React, { useEffect } from 'react'
import Video from "../video"
import * as portfolioStyles from '../../styles/portfolio.module.scss'

const VideoGallery = ({ slice }) => {
    const gridStyles = {
        padding: "30px !important"
    }

    const gridColumn = (col) => {
        if (col === "1 Column" || col === "Column 1") {
            return "1fr"
        } else if (col === "2 Column" || col === "Column 2") {
            return "repeat(2, 1fr)"
        } else if (col === "3 Column" || col === "Column 3") {
            return "repeat(3, 1fr)"
        } else if (col === "4 Column" || col === "Column 4") {
            return "repeat(4, 1fr)"
        } else if (col === "5 Column" || col === "Column 5") {
            return "repeat(5, 1fr)"
        } else if (col === "6 Column" || col === "Column 6") {
            return "repeat(6, 1fr)"
        }
    }

    const getVideo = (slices) => {
        const vid = slices.video_url.url
        return <Video videoSrcURL={vid.replace("watch?", "embed/")} videoHeight={slices.video_height.text} />
    }

    const isTitle = (title) => {
        if (title.primary.title.text === "") {
            return ""
        } else {
            return <h3>{title.primary.title.text}</h3>
        }
    }

    useEffect(() => {
        document.addEventListener("touchstart", function(e) {
            console.log(e.defaultPrevented);  // will be false
            e.preventDefault();   // does nothing since the listener is passive
            console.log(e.defaultPrevented);  // still false
          }, {passive: true});
    }, [])

    return (
        <>
            <div className={`${portfolioStyles.columnLayout} ${portfolioStyles.columnTop} sectionMaxWidth`}>
                <div className={portfolioStyles.twoColumn}>
                    {isTitle(slice)}
                    <div className={`${portfolioStyles.columnGallery} sectionMaxWidth`} style={{ gridTemplateColumns: `${gridColumn(slice.primary.column)}`, gridStyles }}>
                    {slice.items.map((slices, index) => (
                        <React.Fragment key={index}>
                            {getVideo(slices)}
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGallery