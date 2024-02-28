import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
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
const PlaylistTitle = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    line-height: 1.2rem;
    font-family: "ABeeZee";
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
`;
export { ContentWrapper, PageWrapper, PlaylistTitle };
