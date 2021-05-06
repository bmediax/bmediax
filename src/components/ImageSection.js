import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const ImageSection = () => {
    return (
        <StaticImage
                    style={{
                        gridArea: "1/1",
                        padding: "30px 0px"
                    }}
                    className="imageSection"
                    // maxHeight: 600,
                    layout="fullWidth"
                    aspectRatio={4 / 1}
                    alt=""
                    src={
                        "https://images.unsplash.com/photo-1459664018906-085c36f472af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80"
                    }
                    formats={["auto", "webp", "avif"]}
                />
    );
};

export default ImageSection;