import * as homepageStyles from "../styles/homepage.module.scss";

// import DropdownModule from "./modules/dropdownModule";
import Button from "./atoms/Button";
// import { Link } from "gatsby";
import React from "react";
// External
import { RiInboxFill } from "react-icons/ri";
import { RichText } from "prismic-reactjs";
import { StaticImage } from "gatsby-plugin-image";

const CoverCTA = ({ coverData }) => {
  return (
    <div className={homepageStyles.coverCTA}>
      <div className={homepageStyles.coverCTA_wrapper}>
        <div className={homepageStyles.coverImage}>
          {/* Profile Headshot */}
          <StaticImage
            src="../images/profile/brianNotion.png"
            alt="Bmediax Headshot"
            width={300}
            className={homepageStyles.coverHeadshot}
            placeholder="blurred"
            draggable="false"
          />
        </div>
        <div className={homepageStyles.coverInfo}>
          {/* Header */}
          <h1>{coverData.title.text}</h1>
          <RichText render={coverData.description.richText} />

          {/* Buttons */}
          <div className={homepageStyles.buttonWrapper}>
            {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
            <Button as="link" to="/casestudy" className="clickViewPortfolio" type="primary" state="active">
              <RiInboxFill
                style={{
                  position: "relative",
                  top: "-1px",
                  marginRight: "5px",
                }}
              />{" "}
              View Portfolio
            </Button>
            {/* <Link
              to="/casestudy"
              className="btn primary-active clickViewPortfolio"
            >
              <RiInboxFill
                style={{
                  position: "relative",
                  top: "-1px",
                  marginRight: "5px",
                }}
              />{" "}
              View Portfolio
            </Link> */}
            {/* <DropdownModule primary={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverCTA;
