// components/HarmonyCovers/HarmonyCovers.styles.js
import styled from "styled-components";

export const SongGallery = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const Cover = styled.h1`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    margin-left: 8%;
    line-height: 1.912;
    font-family: "ABeeZee";
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    // margin-top:2.5%;
    margin-left: 8%;
    line-height: 1.912;
    font-family: "ABeeZee";
  }
`;

export const ImageBoxContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-left: 5%;
  overflow-y: hidden;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    gap: 25px;
    // margin-top: 4%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CoverCard = styled.div`
  // Add your styles for each cover card
`;

export const CoverImage = styled.img`
  // Add your styles for cover images
`;
