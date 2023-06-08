import React from "react";
import Wrapper from "./ThreeLangNames.styled";
import { useNavigate } from "react-router-dom";

function ThreeLangNames({
  arabicName,
  hebrewName,
  englishName,
  artistEnglishName,
  fontSize,
  lineHeight,
}) {
  const navigate = useNavigate();

  const languageNames = {
    english: {
      name: englishName,
      handleClick: () => handleClick(englishName),
    },
    hebrew: {
      name: hebrewName,
      handleClick: () => handleClick(hebrewName),
    },
    arabic: {
      name: arabicName,
      handleClick: () => handleClick(arabicName),
    },
  };

  const handleClick = (name) => {
    navigate(
      `/song?song=${encodeURIComponent(name)}&artist=${encodeURIComponent(
        artistEnglishName
      )}`
    );
  };

  return (
    <Wrapper style={{ fontSize, lineHeight }}>
      {Object.keys(languageNames).map((key) => (
        <p key={key} onClick={languageNames[key].handleClick}>
          {languageNames[key].name}
        </p>
      ))}
    </Wrapper>
  );
}

export default ThreeLangNames;
