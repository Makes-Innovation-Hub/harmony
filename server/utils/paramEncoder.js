export const fixString = (str) => {
  let newStr = str;
  newStr = newStr.replace("/", " ");
  newStr = newStr.replace("&", "and");
  newStr = newStr.replace("(Commercial)", " ");
  newStr = newStr.replace("(commercial)", " ");
  return newStr.trim();
};
