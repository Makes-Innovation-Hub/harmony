import styled from "styled-components";

const Wrapped = styled.div`
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

  .animation {
    margin-top: 20%;
    width: 80vw;
    height: 80vw;
    margin-bottom: 20%;
  }
`;

export default Wrapped;
