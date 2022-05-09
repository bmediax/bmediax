import * as learnStyles from "../styles/learnSection.module.scss";
import * as portfolioStyles from "../styles/portfolio.module.scss";

import React from "react";
// import ResultsSliceZone from "./resultsSliceZone";
// import { RichText } from "prismic-reactjs";
import SectionPageLayout from "../layout/SectionPageLayout";

const LearnSection = (data) => {
  //   const resultsData = data.results[0];
  return (
    <SectionPageLayout
      bgColor={"var(--clr-triground)"}
      idLabel="learn"
      title="Learned"
      sectionMaxWidth
      isDark={true}
      align
    >
      <div className={`${portfolioStyles.layoutSection} sectionMaxWidth`}>
        <div className={`${portfolioStyles.twoColumn} ${learnStyles.learnWrapper}`}>
          <div className={learnStyles.learnItem}>
            <h3>Getting out my Comfort Zone</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              illo, quia voluptates doloremque nesciunt delectus illum quod,
              quidem similique sit pariatur nam quibusdam. Explicabo eos soluta
              inventore quibusdam maiores quidem.
            </p>
          </div>
          <div className={learnStyles.learnItem}>
            <h3>Effeciency over Time</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              illo, quia voluptates doloremque nesciunt delectus illum quod,
              quidem similique sit pariatur nam quibusdam. Explicabo eos soluta
              inventore quibusdam maiores quidem.
            </p>
          </div>
          <img src="http://via.placeholder.com/1200x500" alt="Placeholder" />
          <div className={learnStyles.learnItem}>
            <h3>Getting hit by a car maybe lol</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              illo, quia voluptates doloremque nesciunt delectus illum quod,
              quidem similique sit pariatur nam quibusdam. Explicabo eos soluta
              inventore quibusdam maiores quidem.
            </p>
          </div>
          <div className={learnStyles.learnItem}>
            <h3>Getting hit by a car maybe lol</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              illo, quia voluptates doloremque nesciunt delectus illum quod,
              quidem similique sit pariatur nam quibusdam. Explicabo eos soluta
              inventore quibusdam maiores quidem.
            </p>
          </div>
          {/* <RichText render={resultsData.description.richText} /> */}
        </div>
      </div>
    </SectionPageLayout>
  );
};

export default LearnSection;
