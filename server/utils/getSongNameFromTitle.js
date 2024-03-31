const getSongNameFromTitle = (title) => {
  let result;
  let array;

  if (title.includes("|") || title.includes("/")) {
    array = title.split(/[|/]/);
    result = array[1]?.split("-")[1];
  } else {
    array = title;
    result = array.split("-")[1];
  }

  return result?.trim();
};

export default getSongNameFromTitle;
