import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;

  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 5px 34px;
  }
`;

export const Title = styled.h1`
  font-family: ABeeZee;
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;

  color: #333333;

  @media screen and (max-width: 767px) {
    /* margin-right: 1rem; */
    width: auto;
    flex-grow: 1;
  }
  @media screen and (max-width: 280px) {
    width: auto;
    margin-right: 1rem;
  }
`;

export const AppIcon = styled.div`
  position: relative;
  font-size: 1.5rem;
  margin-right: 2rem;
  width: 2%;
  cursor: pointer;
  .dove {
    top: 27px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    margin-right: 2.7rem;
  }
`;

export const LanguageSelect = styled.select`
  font-size: 1rem;
  border: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const LanguageOption = styled.option`
  color: #333;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 4%;
  left: 80%;
  /* Other styles */
`;
export const Us = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  border-radius: 70%;
  display: ${({ dropdownvisible }) => (dropdownvisible ? "none" : "block")};
`;
export const CountryFlag = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 3%;
`;
export const Option = styled.li`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  padding: 1.1%;
`;

export const LanguageList = styled.ul`
  width: 120px;
  margin-top: 1.2rem;
  margin-left: -0.8rem;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid #dcdcdc;
  border-radius: 0.5rem;
  z-index: 999;
`;
export const LanguageP = styled.p`
  font-size: 0.7rem;
  font-family: "ABeeZee";
  margin-left: 5%;
  font-weight: bold;
`;
export const LanguageHAP = styled.p`
  font-size: 0.7rem;
  font-family: "ABeeZee";
  margin-left: 40%;
  font-weight: bold;
`;

export const TaglineSetup = styled.div`
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
  padding-bottom: 20px;

  width: 364px;
  height: 46px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const DoveImg = styled.img`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 1.5rem;
  z-index: 1;
`;

export const EllipseImg = styled.img`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  margin-left: 1.5rem;
`;
