import styled from "styled-components";

const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .animation-text {
    font-family: ABeeZee;
    font-size: 1.2rem;
    text-align: center;
    line-height: 133%;
    color: #333333;
  }
  .animation-text {
    font-family: ABeeZee;
  }

  .animation {
    /* margin-top: 20%; */
    width: 80vw;
    height: 80vw;
    /* margin-bottom: 20%; */
  }

  // Mobile phone screen
  @media only screen and (max-width: 480px) {
    .animation {
      /* margin-top: 20%; */
      width: 80vw;
      height: 80vw;
      /* margin-bottom: 20%; */
    }

    .animation-text {
      font-size: 1.2rem;
      text-align: center;
      line-height: 133%;
      color: #333333;
      font-family: ABeeZee;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    .animation {
      width: 400px;
      height: 400px;
      margin-top: 50px;
    }
  }
`;

export default Wrapped;
