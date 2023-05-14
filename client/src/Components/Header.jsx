import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { HeaderContainer, Title, AppIcon, LanguageSelect, LanguageOption } from './HeadStyles.jsx';

const Header = () => {
  return (
    <HeaderContainer>
      <AppIcon>
        <FaUser/>
      </AppIcon>
      <Title>harmony</Title>
      <LanguageSelect>
        <LanguageOption value="AR">EN</LanguageOption>
        <LanguageOption value="HE">HE</LanguageOption>
        <LanguageOption value="EN">AR</LanguageOption>
      </LanguageSelect>
    </HeaderContainer>
  );
};

export default Header;
