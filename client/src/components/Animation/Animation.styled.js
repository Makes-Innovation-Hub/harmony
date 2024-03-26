import styled from "styled-components";

const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .animation-text {
    font-family: ABeeZee;
  }

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    .animation {
      width: 250px;
      height: 259px;
      margin-bottom: 50px;
    }
  }
  // Mobile phone screen
  @media only screen and (max-width: 480px) {
    .animation {
      margin-top: 20%;
      width: 80vw;
      height: 80vw;
      margin-bottom: 20%;
    }

    .animation-text {
      font-size: 1.2rem;
      text-align: center;
      line-height: 133%;
      color: #333333;
      font-family: ABeeZee;
    }
  }
`;

export default Wrapped;
