import styled from "styled-components";

export const TitleContainer = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 2rem;
    background: rgba(223, 220, 220, 0.28);
    box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(8px);
    border-radius: 8px 8px 12px 12px;
    margin-top: -3.18rem;
    width: 6rem;
    margin-left: 0.6rem;
    padding-bottom: 0.8rem;
  }
`;

export const ByArtist = styled.p`
  @media (min-width: 0px) and (max-width: 700px) {
    font-size: 0.65rem;
    font-weight: 300;
    color: #ffff;
    font-style: italic;
    margin-left: 2%;
    margin-top: 3%;
    padding: 0.43rem;
    line-height: 1.081rem;
    font-family: "ABeeZee";
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CoverBox = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    width: 150%;
    height: 60%;
    padding: 18px;
    padding-right: 55px;
    margin-left: -18px;
  }
`;

export const ImgStyles = styled.img`
  @media (min-width: 0px) and (max-width: 700px) {
    max-width: 100%;
    max-height: 120%;
    object-fit: cover;
    border-radius: 30px;
  }
`;
