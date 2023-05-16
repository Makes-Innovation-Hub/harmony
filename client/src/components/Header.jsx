import React from 'react';
import { HeaderContainer, Title, AppIcon, LanguageSelect, LanguageOption } from './HeaderStyles'

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
