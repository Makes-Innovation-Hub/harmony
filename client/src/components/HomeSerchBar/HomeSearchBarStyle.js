import styled from "styled-components";

const Wrapped = styled.div`
  width: 100%;
  margin: 0 2% 8% 3%;

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
    /* margin-top: -13%; */
    height: 1.8rem;
    width: 72%;
    font-family: ABeeZee;
    font-size: 1rem;
    border: 1px solid #000000;
  }

  button {
    padding: 0.2rem;
    margin-left: 0.4rem;
    /* margin-top: -13%; */
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

  // Mobile phone screen
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 480px;
    min-width: 320px;
  }
`;

export default Wrapped;
