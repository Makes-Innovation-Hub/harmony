import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
  gap: 0.5rem;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  padding: 0.5rem;
  min-height: 100vh;
`;
export { ContentWrapper, PageWrapper };

export const FlexGrowthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-grow: ${(props) => props.$grow};
  padding: ${({ $padding }) => $padding};

  @media screen and (max-width: 768px) and (max-height: 780px) {
    margin-top: ${({ $marginTop }) => $marginTop};
  }
`;

export const MainContainer = styled.main`
  width: 100%;

  @media screen and (min-width: 769px) {
    width: 45%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
`;
export const Img = styled.div`
  width: 350px;
  height: 299px;
  border-radius: 31px;
  border: 1px solid black;

  background: ${({ $background }) => $background};
  @media screen and (max-width: 769px) {
    margin-top: 25px;
    margin-bottom: 30px;
  }
`;
