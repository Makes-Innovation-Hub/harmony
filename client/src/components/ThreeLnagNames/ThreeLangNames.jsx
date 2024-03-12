import Wrapper from "./ThreeLangNames.styled";

function ThreeLangNames({
  arabicName,
  hebrewName,
  englishName,
  fontSize,
  lineHeight,
  gap,
}) {
  return (
    <>
      <Wrapper
        style={{
          fontSize: `${fontSize}`,
          lineHeight: `${lineHeight}`,
          gap: `${gap}`,
        }}
      >
        <p>{englishName}</p>
        <p>{hebrewName}</p>
        <p>{arabicName}</p>
      </Wrapper>
    </>
  );
}

export default ThreeLangNames;
