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
`;

export const ModalPositionContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 40px;
`;

export const FormContainer = styled.div`
  position: relative;
`;
