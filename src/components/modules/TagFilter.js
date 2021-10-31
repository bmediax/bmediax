import { TagContext } from "../../contexts/TagContext";
import * as TagFilterStyles from "./TagFilter.module.scss";
import React, { useContext } from "react";

const TagFilter = ({ data }) => {
  const { tag, setTag } = useContext(TagContext);

  const tagAction = (ts, index) => {
    setTag({ id: index, tagged: ts });
  };

  return (
    <div className={TagFilterStyles.container}>
      <ul className={TagFilterStyles.wrapper}>
        {data.map((tagName, index) => (
          <li key={index}>
            <button
              className={index === tag.id ? TagFilterStyles.selectedTag : ""}
              onClick={() => tagAction(tagName, index)}
            >
              {tagName}
            </button>
          </li>
        ))}
        {/* <li><button onClick={() => tagAction("Illustration")}>Illustration</button></li>
                <li><button onClick={() => tagAction("Photography")}>Photography</button></li> */}
      </ul>
    </div>
  );
};

export default TagFilter;
