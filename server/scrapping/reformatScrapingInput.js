const reformatScrapingInput = (firstInput, secondInput) => {
  const joinedString = `${firstInput} ${secondInput}`;
  return joinedString.split(" ").join("-").toLowerCase();
};

export default reformatScrapingInput;
