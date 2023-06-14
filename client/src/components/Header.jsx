import { useState } from "react";
import {
  Title,
  HeaderContainer,
  AppIcon,
  Us,
  Option,
  CountryFlag,
  LanguageList,
  LanguageP,
  LanguageHAP,
  // TitleFlag
} from "./HeaderStyle";
import USAFlag from "../assets/USA.png";
import palestineFlag from "../assets/palestine.jpg";
import isrealFlag from "../assets/isreal.jpg";
import Dove from "../assets/dove.png";
import Ellipse3 from "../assets/Ellipse3.png";
import "./Header.css";

const Header = () => {
  const [showFlag, setShowFlag] = useState(true);
  const [showList, setShowList] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFlag, setSelectedFlag] = useState(USAFlag);

  const handleClick = () => {
    setShowFlag(false);
    setShowList(true);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);

    if (language === "English") {
      setSelectedFlag(USAFlag);
    } else if (language === "Hebrew") {
      setSelectedFlag(isrealFlag);
    } else if (language === "Arabic") {
      setSelectedFlag(palestineFlag);
    }

    setShowList(false);
    setShowFlag(true);
  };

  return (
    <HeaderContainer>
      <AppIcon>
        <img className="dove" src={Dove} alt="" />
        <img className="ellipse" src={Ellipse3} alt="" />
      </AppIcon>

      <Title>Harmony</Title>

      {showFlag && (
        <div onClick={handleClick}>
          <Us src={selectedFlag} alt="Flag" />
        </div>
      )}
      {showList && (
        <div className="dropdown">
          <LanguageList>
            <Option onClick={() => handleLanguageSelect("English")}>
              <LanguageP>English (US)</LanguageP>
              <CountryFlag src={USAFlag} alt="English Flag" />
            </Option>
            <Option onClick={() => handleLanguageSelect("Hebrew")}>
              <LanguageHAP>עִברִית</LanguageHAP>
              <CountryFlag src={isrealFlag} alt="Hebrew Flag" />
            </Option>
            <Option onClick={() => handleLanguageSelect("Arabic")}>
              <LanguageHAP>العربية</LanguageHAP>
              <CountryFlag src={palestineFlag} alt="Arabic Flag" />
            </Option>
          </LanguageList>
        </div>
      )}
      {/* <TitleFlag> */}
    </HeaderContainer>
  );
};

export default Header;
