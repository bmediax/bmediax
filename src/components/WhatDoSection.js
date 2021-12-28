import React from "react";
import { Section } from "../layout/SectionLayout";
import Button from "./modules/Button";
import InfoCardModule from "./modules/InfoCardModule";
import { AiOutlineAntDesign } from "react-icons/ai";
// Icons
import { BiCodeAlt } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";

// import * as variables from '../styles/_variables.module.scss'

const WhatDoSection = () => {
  return (
    <Section
      title="What I do"
      subtitle="Skills"
      id="firstSection"
      theme="primary"
    >
      <div className="grid-three sectionMaxWidth">
        <InfoCardModule
          subtitle="Technical"
          title="Web Development"
          descr="From Ecommerce to Blog websites. I design develop and deploy any scale sites."
          icon={<BiCodeAlt />}
        />
        <InfoCardModule
          subtitle="Design"
          title="Digital Design"
          descr="I create and currate online branding identities through logo, asset and social media design."
          icon={<AiOutlineAntDesign />}
        />
        <InfoCardModule
          subtitle="Technical"
          title="Photography"
          descr="Capturing variety of photos from headshots to product photography to be displayed on sites."
          icon={<MdPhotoCamera />}
        />
      </div>
      <Button type="secondary" path="/work" btnSection={true}>
        View All Work
      </Button>
    </Section>
  );
};

export default WhatDoSection;
