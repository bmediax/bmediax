import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WorkImage = ({ title, link, tag, image, alt }) => {
    const img = getImage(image)
    return (
        <GatsbyImage alt={alt} image={img} draggable="false" imgClassName="galleryImg" />
    );
};

export default WorkImage;