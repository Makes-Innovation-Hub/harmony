import { useState, useEffect, useRef } from "react";
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
  TaglineSetup,
  TitleContainer,
} from "./HeaderStyle";

import { setLanguage } from "../../Redux/languageSlice.js";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";
import { useNavigate } from "react-router-dom";
import * as S from "./HeaderStyle.jsx";
import Image from "../Image/Image.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Initialize language from localStorage or default to "English"
  const initialLanguage = localStorage.getItem("language") || "English";
  const [showFlag, setShowFlag] = useState(true);
  const [showList, setShowList] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [usaFlag, isrealFlag, palestineFlag] = [
    "USAFlag",
    "isrealFlag",
    "palestineFlag",
  ];
  const topScroller = useRef();
  const flagMapping = {
    English: usaFlag,
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
    <HeaderContainer ref={topScroller}>
      <ScrollToTop refToScroller={topScroller} />
      <TitleContainer>
        <AppIcon onClick={() => navigate("/")}>
          <Image name={"dove"} alt={"dove"} styles={S.DoveImg} />
          <Image name={"Ellipse3"} alt={"Ellipse3dove"} styles={S.EllipseImg} />
        </AppIcon>
        <Title>{t("title")}</Title>
      </TitleContainer>
      <TaglineSetup>
        <p>
          {t("tagline_1")} <br /> {t("tagline_2")}
        </p>
      </TaglineSetup>

      {showFlag && (
        <div onClick={handleClick}>
          <Image name={selectedFlag} alt={`${selectedFlag}`} styles={Us} />
        </div>
      )}
      {showList && (
        <div className="dropdown">
          <LanguageList>
            <Option onClick={() => handleLanguageSelect("English")}>
              <LanguageP>English (US)</LanguageP>
              <Image name={usaFlag} alt={"English Flag"} styles={CountryFlag} />
            </Option>
            <Option onClick={() => handleLanguageSelect("Hebrew")}>
              <LanguageHAP>עִברִית</LanguageHAP>
              <Image
                name={isrealFlag}
                alt={"Hebrew Flag"}
                styles={CountryFlag}
              />
            </Option>
            <Option onClick={() => handleLanguageSelect("Arabic")}>
              <LanguageHAP>العربية</LanguageHAP>
              <Image
                name={palestineFlag}
                alt={"Arabic Flag"}
                styles={CountryFlag}
              />
            </Option>
          </LanguageList>
        </div>
      )}
    </HeaderContainer>
  );
};
export default Header;
