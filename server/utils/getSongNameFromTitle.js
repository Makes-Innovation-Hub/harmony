const getSongNameFromTitle = (title) => {
  let result;
  let array;
  title = title.replace(/\([^()]*\)/g, "");
  if (title.includes("|") || title.includes("/")) {
    array = title.split(/[|/]/);
    if (array[0] && /[א-ת]/.test(array[0])) {
      result = array[0]?.split("-")[1];
    } else {
      result = array[1]?.split("-")[1];
    }
  } else {
    array = title;
    result = array.split("-")[1];
  }

  if (result && /[א-ת]/.test(result)) {
    const regex = /[א-ת]+/g;
    const match = result.match(regex);
    result = match ? match.join(" ") : null;
  }

  if (result && /[\u0600-\u06FF\u0750-\u077F]/.test(result)) {
    // Check if title contains Arabic characters
    // Regular expression to match Arabic characters
    const regex = /[\u0600-\u06FF\u0750-\u077F]+/g;
    const match = result.match(regex);
    result = match ? match.join(" ") : null;
  }

  return result?.trim();
};

export default getSongNameFromTitle;
