import React, { useEffect, useState } from "react";
import { Section } from "../layout/SectionLayout";
import DropdownModule from "./modules/dropdownModule";

const WorkSection = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let date = new Date().getFullYear();
    setCurrentDate(date);
  }, []);
  return (
    <>
      <Section
        title="Let's Work Together"
        subtitle="Get In Touch"
        theme="midnight"
      >
        <div style={{ maxWidth: "250px", textAlign: "center", margin: "auto" }}>
          <DropdownModule />
        </div>
        <p
          style={{
            lineHeight: "25px",
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          © {currentDate} All rights reserved - Designed and Coded by Brian
          Moreno
        </p>
      </Section>
      <div className="footer-color">
        <span className="footer-color-1" />
        <span className="footer-color-2" />
        <span className="footer-color-3" />
        <span className="footer-color-4" />
      </div>
    </>
  );
};

export default WorkSection;
