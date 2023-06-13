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
  function onClickLang() {
    console.log("btn clicked");
  }

  return (
    <HeaderContainer>
      <AppIcon>
        <img className="dove" src={Dove} alt="" />
        <img className="ellipse" src={Ellipse3} alt="" />
      </AppIcon>
      {/* <TitleFlag> */}
      <Title>Harmony</Title>
      <button
        onClick={onClickLang}
        className="btn-lang"
        style={{
          backgroundImage: `url(${Flag})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></button>
      <div className="dropdown">
        <div className="inner-dropdown">
          <a href="#">English (US)</a>
          <img className="us" src={Flag} alt="Flag" />
        </div>
        <div className="inner-dropdown">
          <a href="#">עברית</a>
          <img className="us" src={Flag} alt="Flag" />
        </div>
        <div className="inner-dropdown">
          <a href="#">عربيه</a>
          <img className="us" src={Flag} alt="Flag" />
        </div>
      </div>
      {/* <img className="us" src={Flag} alt="Flag" /> */}
      {/* </TitleFlag> */}
    </HeaderContainer>
  );
};

export default Header;
