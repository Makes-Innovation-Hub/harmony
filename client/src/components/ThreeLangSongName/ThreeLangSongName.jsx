import Wrapper from "./ThreeLangSongName.styled";
import music from "../../assets/music.svg";
function ThreeLangSongName({
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
        isplaying={isPlaying.toString()}
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

export default ThreeLangSongName;
