import styled from "styled-components";

export const FormLabel = styled.label`
  display: block;
  font-family: ABeeZee;
  font-size: 12px;
  font-style: italic;
  letter-spacing: 0em;
  margin-bottom: 8px;
  padding-bottom: 10px;

  font-size: 16px;
  color: #333;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  background-color: #f4e6d1;

  color: #333;
  font-family: ABeeZee;
  margin: auto;
  font-size: 12px;
  font-style: italic;
  letter-spacing: 0em;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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

export const ErrorMsg = styled.p`
  font-family: ABeeZee;
  color: red;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const CreateCoverButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;
