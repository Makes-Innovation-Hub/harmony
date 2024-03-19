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
  padding: 45px;
  width: 80%;
  height: auto;
  top: 25%;

  @media screen and (min-width: 768px) {
    top: 20%;
    width: 100%;
    max-width: 900px;
    min-width: 580px;
    height: 25%;
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
  top: 10px;
  right: 15px;
  font-family: ABeeZee;
  font-style: italic;
  color: black;
  &:hover {
    color: red;
  }
`;
