import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { Title, HeaderContainer, AppIcon } from './HeaderStyle';
import Flag from '../assets/Flag.png'
import Dove from '../assets/dove.png'
import Ellipse3 from '../assets/Ellipse3.png'
import './Header.css'

const Header = () => {
  return (
    <HeaderContainer>
      <AppIcon>
        <img className='dove' src={Dove} alt="" />
        <img className='ellipse' src={Ellipse3} alt="" />
      </AppIcon>
      <Title>harmony</Title>
        <img src={Flag} alt="Flag"/>
    </HeaderContainer>
  );
};

export default Header;
