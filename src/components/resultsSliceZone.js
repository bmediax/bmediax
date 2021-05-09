import React from 'react'
import ImageGallery from './designSlices/ImageGallery'

const ResultsSliceZone = ({ sliceZone }) => {
    const sliceComponents = {
        overview__image_gallery: ImageGallery,
    }

    const sliceZoneContent = sliceZone.map((slice, index) => {
        const SliceComponent = sliceComponents[slice.slice_type]
        if (SliceComponent) {
            return <SliceComponent slice={slice} key={`slice-${index}`} />
        }
        return null
    })

    return <>{sliceZoneContent}</>
}

export default ResultsSliceZone