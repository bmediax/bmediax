import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const ImageSection = ({ image }) => {
    const coverimg = getImage(image.localFile)
    return (
        <GatsbyImage
            style={{
                gridArea: "1/1",
                padding: "30px 0px",
                display: "block"
            }}
            className="imageSection"
            // maxHeight: 600,
            layout="fullWidth"
            // aspectRatio={4 / 1}
            alt=""
            image={coverimg} />
    );
};

export default ImageSection;