import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";

// Icons
import { EDIcon, AztecEye, Eye, Bone } from "../components/Icons";
import * as homepageStyles from "../styles/homepage.module.scss";
import DropdownModule from "./modules/dropdownModule";
// import { Parallax } from 'react-scroll-parallax'
// External
import { RiInboxFill } from "react-icons/ri";

const Cover = ({ coverData }) => {
  return (
    <div className={homepageStyles.cover}>
      <div className={homepageStyles.head}>
        {/* <Parallax y={[20, -20]} tagOuter="figure"> */}
        <StaticImage
          src="../images/profile/headshot.png"
          alt="Bmediax Headshot"
          width={250}
          placeholder="blurred"
          className="coverheadshot"
          draggable="false"
        />
        <div className={homepageStyles.icons}>
          <span style={{ top: 0, left: 0 }}>
            <EDIcon
              lightBase={homepageStyles.lightBase}
              darkBase={homepageStyles.darkBase}
            />
          </span>
          <span style={{ top: 0, right: 0 }}>
            <Eye
              lightBase={homepageStyles.lightBase}
              darkBase={homepageStyles.darkBase}
            />
          </span>
          <span style={{ bottom: 0, left: 0 }}>
            <AztecEye
              lightBase={homepageStyles.lightBase}
              darkBase={homepageStyles.darkBase}
            />
          </span>
          <span style={{ bottom: 0, right: 0 }}>
            <Bone
              lightBase={homepageStyles.lightBase}
              darkBase={homepageStyles.darkBase}
            />
          </span>
        </div>
      </div>
      <div className={homepageStyles.text}>
        <h1>{coverData.title.text}</h1>
        <RichText render={coverData.description.raw} />
        <div className={homepageStyles.buttonWrapper}>
          <DropdownModule />
          {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
          <Link to="/portfolio" className="btn ghost active clickViewPortfolio">
            <RiInboxFill
              style={{ position: "relative", top: "3px", marginRight: "5px" }}
            />{" "}
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
