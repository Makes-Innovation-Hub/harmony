export const fixString = (str) => {
  let newStr = str;
  newStr = newStr.replace("/", " ");
  newStr = newStr.replace("&", "and");
  newStr = newStr.replace("(Commercial)", " ");
  newStr = newStr.replace("(commercial)", " ");
  newStr = newStr.replace("(", "");
  newStr = newStr.replace(")", "");
  return newStr.trim();
};
