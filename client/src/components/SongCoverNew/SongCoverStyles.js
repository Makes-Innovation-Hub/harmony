import styled from "styled-components";
export const TitleContainer = styled.div`
  margin-top: 50px;
`;
export const ByArtist = styled.p`
  font-family: ABeeZee;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  text-decoration: underline;
`;
export const CoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0 2rem;

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
  }
`;
export const ImgStyles = styled.img`
  border-radius: 30px;
  width: 100%;
`;
export const LikesAndViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-bottom: 40px;
  p {
    font-family: ABeeZee;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #333333;
    padding-top: 3px;
  }
`;
