import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`;

export const Title = styled.h1`
  font-family: ABeeZee, sans-serif;
  font-style: italic;
  font-weight: 400;
  width: 35%;
  font-size: 28px;
  margin-right: 6rem;
  margin-left: 1rem;
  padding-left: 0;

  @media screen and (max-width: 767px) {
    width: auto;
    margin-right: 1rem;
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
  @media screen and (max-width: 280px) {
    width: auto;
    margin-right: 2.7rem;
  }
  @media screen and (max-width: 1280px) {
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
  /* border: 2px solid red; */
  width: 120px;
  margin-top: 1.2rem;
  margin-left: -0.8rem;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid #dcdcdc;
  border-radius: 0.5rem;
`;
export const LanguageP = styled.p`
  font-size: 0.7rem;
  font-family: ABeeZee;
  margin-left: 5%;
  font-weight: bold;
`;
export const LanguageHAP = styled.p`
  font-size: 0.7rem;
  font-family: ABeeZee;
  margin-left: 40%;
  font-weight: bold;
`;
