import Wrapper from "./ThreeLangNames.styled";

function ThreeLangNames({
  arabicName,
  hebrewName,
  englishName,
  fontSize,
  lineHeight,
}) {
  return (
    <>
      <Wrapper style={{ fontSize: `${fontSize}`, lineHeight: `${lineHeight}` }}>
        <p>{englishName}</p>
        <p>{hebrewName}</p>
        <p>{arabicName}</p>
      </Wrapper>
    </>
  );
}

export default ThreeLangNames;
