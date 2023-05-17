import {
  Title,
  HeaderContainer,
  AppIcon,
  // TitleFlag
} from "./HeaderStyle";
import Flag from "../assets/Flag.png";
import Dove from "../assets/dove.png";
import Ellipse3 from "../assets/Ellipse3.png";
import "./Header.css";

const Header = () => {
  return (
    <HeaderContainer>
      <AppIcon>
        <img className="dove" src={Dove} alt="" />
        <img className="ellipse" src={Ellipse3} alt="" />
      </AppIcon>
      {/* <TitleFlag> */}
      <Title>Harmony</Title>
      <img className="us" src={Flag} alt="Flag" />
      {/* </TitleFlag> */}
    </HeaderContainer>
  );
};

export default Header;
