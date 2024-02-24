import Wrapper from "./ThreeLangNames.styled";
import music from "../../assets/music.png";
function ThreeLangNames({
  arabicName,
  hebrewName,
  englishName,
  fontSize,
  lineHeight,
  isPlaying,
}) {
  return (
    <>
      <Wrapper
        isPlaying={isPlaying}
        style={{ fontSize: `${fontSize}`, lineHeight: `${lineHeight}` }}
      >
        <p>
          {isPlaying && (
            <img
              src={music}
              alt="Icon"
              style={{ width: "24px", height: "24px" }}
            />
          )}
          {englishName}
        </p>
        <p>{hebrewName}</p>
        <p>{arabicName}</p>
      </Wrapper>
    </>
  );
}

export default ThreeLangNames;
