import { useState, useEffect } from "react";
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

  // Initialize language from localStorage or default to "English"
  const initialLanguage = localStorage.getItem("language") || "English";
  const [showFlag, setShowFlag] = useState(true);
  const [showList, setShowList] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const flagMapping = {
    English: USAFlag,
    Hebrew: isrealFlag,
    Arabic: palestineFlag,
  };
  const [selectedFlag, setSelectedFlag] = useState(
    flagMapping[initialLanguage]
  );

  useEffect(() => {
    // Change i18next language to match stored preference or default
    const languageCode =
      initialLanguage === "English"
        ? "en"
        : initialLanguage === "Hebrew"
        ? "he"
        : "ar";
    i18n.changeLanguage(languageCode);
    dispatch(setLanguage(languageCode)); // Update Redux state with initial or stored language
  }, [dispatch, initialLanguage]);

  const handleClick = () => {
    setShowFlag(!showFlag); // Toggle visibility of the flag
    setShowList(!showList); // Toggle visibility of the language list
  };

  const handleLanguageSelect = (language) => {
    const languageCode =
      language === "English" ? "en" : language === "Hebrew" ? "he" : "ar";
    setSelectedLanguage(language);
    localStorage.setItem("language", language); // Save new language preference
    i18n.changeLanguage(languageCode); // Update i18next language
    dispatch(setLanguage(languageCode)); // Update Redux state with new language

    setSelectedFlag(flagMapping[language]);
    setShowList(false);
    setShowFlag(true);
  };

  return (
    <HeaderContainer>
      <AppIcon onClick={() => navigate("/")}>
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
