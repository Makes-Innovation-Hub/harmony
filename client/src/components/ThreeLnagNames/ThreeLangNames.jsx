import Wrapper from "./ThreeLangNames.styled";
import { useNavigate } from "react-router-dom";

function ThreeLangNames({
  arabicName,
  hebrewName,
  englishName,
  fontSize,
  lineHeight,

  artistEnglishName,
}) {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(
      `/song?song=${encodeURIComponent(name)}&artist=${encodeURIComponent(
        artistEnglishName
      )}`
    );
  };
  return (
    <Wrapper style={{ fontSize: `${fontSize}`, lineHeight: `${lineHeight}` }}>
      <p onClick={() => handleClick(englishName)}>{englishName}</p>
      <p onClick={() => handleClick(hebrewName)}>{hebrewName}</p>
      <p onClick={() => handleClick(arabicName)}>{arabicName}</p>
    </Wrapper>

  );
}

export default ThreeLangNames;
