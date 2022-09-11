import { RichText } from "prismic-reactjs";

const useFieldCheck = (field) => {
  const checkFieldEmpty = (field) => {
    if (RichText.asText(field).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return checkFieldEmpty(field);
};

export default useFieldCheck;
