import * as homepageStyles from "../styles/homepage.module.scss";
import DropdownModule from "./modules/dropdownModule";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import React from "react";
// External
import { RiInboxFill } from "react-icons/ri";

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
            <DropdownModule />
            {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
            <Link to="/casestudy" className="btn outline clickViewPortfolio">
              <RiInboxFill
                style={{ position: "relative", top: "3px", marginRight: "5px" }}
              />{" "}
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverCTA;
