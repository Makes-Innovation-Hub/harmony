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
const PlaylistTitle = styled.h1`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    margin-left: 8%;
    line-height: 30.59px;
    font-family: "ABeeZee";
  }
`;
export { ContentWrapper, PageWrapper, PlaylistTitle };
