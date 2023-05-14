import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { HeaderContainer, Title, AppIcon, LanguageSelect, LanguageOption } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <AppIcon>
        
      </AppIcon>
      <Title>harmony</Title>
      <FaFlag className="flag-icon flag-icon-us" />
    </HeaderContainer>
  );
};

export default Header;
