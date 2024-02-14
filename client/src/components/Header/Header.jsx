import { useState } from "react";
import { useDispatch } from "react-redux";
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
} from "./HeaderStyle";
import USAFlag from "../../assets/USA.png";
import palestineFlag from "../../assets/palestine.jpg";
import isrealFlag from "../../assets/isreal.jpg";
import Dove from "../../assets/dove.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import { setLanguage } from "../../Redux/languageSlice.js";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

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

    let flag = USAFlag; // Default flag

    if (language === "English") {
      flag = USAFlag;
      i18n.changeLanguage("en"); // Change language to English
    } else if (language === "Hebrew") {
      flag = isrealFlag;
      i18n.changeLanguage("he"); // Change language to Hebrew
    } else if (language === "Arabic") {
      flag = palestineFlag;
      i18n.changeLanguage("ar"); // Change language to Arabic
    }

    setSelectedFlag(flag);
    setShowList(false);
    setShowFlag(true);

    dispatch(setLanguage(language.toLowerCase()));
  };

  return (
    <HeaderContainer>
      <AppIcon
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="dove" src={Dove} alt="" />
        <img className="ellipse" src={Ellipse3} alt="" />
      </AppIcon>

      <Title>{t("title")}</Title>

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
    </HeaderContainer>
  );
};

export default Header;
