import React from "react";
import styled from "styled-components";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";

export const ArtistsDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 2rem 10rem 2rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 280px) {
    flex-direction: row;
    gap: 2rem;
    align-items: flex-start;
    margin: 0.5rem 4rem 0.5rem 0;
  }
`;

export const PhotoDetailsContainer = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export const TextDetailsContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SongName = styled.h2`
  margin: 0;
`;

export const ArtistName = styled.h2`
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  color: gray;
  font-size: 0.7rem;
  font-family: "ABeeZee Italic";
  text-align: center;
  line-height: 133%;
`;

export const TranslationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const ResultsImage = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;
