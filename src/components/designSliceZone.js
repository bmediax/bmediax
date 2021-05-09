import React from 'react'
import ColorPalette from './designSlices/ColorPalette'
import ImageGallery from './designSlices/ImageGallery'

const DesignSliceZone = ({ sliceZone }) => {
    const sliceComponents = {
        design__color_palette: ColorPalette,
        design__image_gallery: ImageGallery,
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

export default DesignSliceZone