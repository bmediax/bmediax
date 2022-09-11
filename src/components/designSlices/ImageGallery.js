import * as styles from "../../styles/portfolio.module.scss";

// import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const ImageGallery = ({ slice }) => {
  const checkFieldEmpty = (field) => {
    if (field.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const gridStyles = {
    padding: "30px !important",
  };

  const gridColumn = (col) => {
    if (col === "1 Column") {
      return `${styles.column_1}`;
    } else if (col === "2 Column") {
      return `${styles.column_2}`;
    } else if (col === "3 Column") {
      return `${styles.column_3}`;
    } else if (col === "4 Column") {
      return `${styles.column_4}`;
    } else if (col === "5 Column") {
      return `${styles.column_5}`;
    } else if (col === "6 Column") {
      return `${styles.column_6}`;
    }
  };

  const gridResponsiveColumn = (col) => {
    if (col === "1 Column") {
      return `${styles.responsiveColumn_1}`;
    } else if (col === "2 Column") {
      return `${styles.responsiveColumn_2}`;
    } else if (col === "3 Column") {
      return `${styles.responsiveColumn_3}`;
    }
  };

  const getImages = (slices) => {
    const img = getImage(slices.image.gatsbyImageData);
    return (
      <>
        {img ? (
          <div className={styles.imageWrapper}>
            <GatsbyImage
              image={img}
              draggable="false"
              alt={slices.image.alt}
              placeholder="DOMINANT COLOR"
              imgClassName={styles.imageGrid}
              className={styles.imageGridWrap}
            />
            {slices.image.alt && (
              <blockquote className={styles.caption}>
                {slices.image.alt}
              </blockquote>
              //   styles.caption
              //   <p className={styles.caption}>{slices.image.alt}</p>
            )}
            {checkFieldEmpty(slices.description.text) && (
              <PrismicRichText
                field={slices.description.richText}
                components={{
                  paragraph: ({ children }) => (
                    <p className={styles.description}>{children}</p>
                  ),
                }}
              />
              //   styles.caption
              //   <p className={styles.caption}>{slices.image.alt}</p>
            )}
          </div>
        ) : null}
      </>
    );
  };

  const isTitle = (title) => {
    if (
      title.primary.title.text === "" ||
      title.primary.title.text === undefined
    ) {
      return "";
    } else {
      return <h3>{title.primary.title.text}</h3>;
    }
  };

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
      <div
        className={`${styles.layoutSection} ${styles.columnTop} sectionMaxWidth`}
      >
        <div className={styles.twoColumn}>
          <div className={styles.textSection}>{isTitle(slice)}</div>

          <div
            className={`${styles.columnGallery} sectionMaxWidth ${gridColumn(
              slice.primary.column
            )} ${gridResponsiveColumn(slice.primary.responsive_column)}`}
            style={{ gridStyles }}
          >
            {slice.items.map((slices, index) => (
              <React.Fragment key={index}>{getImages(slices)}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
