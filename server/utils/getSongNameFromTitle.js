const getSongNameFromTitle = (title, lang) => {
  let result;
  let array;
  switch (lang) {
    case "AR":
      array = title.split(/[|/]/);
      result = array[1].split("-")[1];
      break;
    case "HE":
      if (title.includes("|")) {
        array = title.split(/[|/]/);
        result = array[1].split("-")[1];
      } else {
        array = title;
        result = array.split("-")[1];
      }

      break;
    default:
      break;
  }
  return result.trim();
};

export default getSongNameFromTitle;
