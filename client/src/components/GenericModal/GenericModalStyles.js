import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.div`
  background-color: white;
  margin: 150px auto;
  border-radius: 8px;
  box-shadow: 0 0 10px #00000066;
  position: relative;
  padding: 45px 30px;
  width: 100%;
  height: auto;
  top: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 300px;
  min-width: 200px;

  @media screen and (min-width: 768px) {
    top: 10%;
    padding-left: 20px;
  }
`;

export const ModalPositionContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 40px;
`;

export const FormContainer = styled.div`
  position: relative;
`;

export const ButtonCover = styled.button`
  font-family: ABeeZee;
  height: 32px;
  width: 93px;
  margin: 0 auto;
  border: none;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
  background: #f4e6d1;
`;
export const XButton = styled.div`
  position: absolute;
  font-family: ABeeZee;
  font-style: italic;
  color: black;
  cursor: pointer;
  top: 10px;
  right: 15px;
  font-size: 20px;

  &:hover {
    color: red;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    top: 10px;
    right: 12px;
  }
`;
