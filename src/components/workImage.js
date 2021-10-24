import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'

const WorkImage = ({ title, link, tag, image, alt }) => {
    const img = getImage(image)
    return (
            <GatsbyImage alt={alt} image={img} draggable="false" imgClassName="galleryImg" />
    );
};

WorkImage.propTypes = {
    title: PropTypes.object,
    link: PropTypes.object,
    tag: PropTypes.string,
    image: PropTypes.object,
    alt: PropTypes.string
}

export default WorkImage;