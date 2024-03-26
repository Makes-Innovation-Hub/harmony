import styled from "styled-components";

export const InputContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Wrapped = styled.div`
  width: 100%;

  .search-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    padding-left: 1%;
    margin-right: 2%;
    height: 1.8rem;
    width: 90%;
    font-family: ABeeZee;
    font-size: 1rem;
    border: 1px solid #000000;
  }

  button {
    padding: 0.2rem;
    margin-left: 0.4rem;
    width: 2.1rem;
    height: 2.1rem;
    mix-blend-mode: normal;
    background: rgba(149, 112, 255, 0.19);
    border-radius: 50%;
  }

  .error-message {
    display: ${(props) => (props.isInputError ? "block" : "none")};
    font-size: 1rem;
    color: red;
  }

  .svg-search {
  }

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    max-width: 400px;
    img {
      cursor: pointer;
    }
  }
  // Mobile phone screen
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 480px;
    min-width: 320px;
  }
`;

export default Wrapped;
