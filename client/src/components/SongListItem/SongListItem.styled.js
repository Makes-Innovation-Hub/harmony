import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 769px) {
    width: 30%;
    margin-left: 35%;
  }
`;

export default ContentWrapper;
