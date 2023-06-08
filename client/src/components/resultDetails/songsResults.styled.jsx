import React from "react";
import styled from "styled-components";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";

export const SongsDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 2rem 0.5rem 2rem 0;
  padding-left: 0.7rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: 280px) {
    flex-direction: row;
    gap: 0.7rem;
    align-items: flex-start;
    margin: 0.5rem 5rem 0.5rem 2.5rem;
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
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SongName = styled.h2`
  margin-left: 2rem;
  margin-top: 0.3rem;
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
  margin-top: 1.5rem;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
  }
  @media (min-width: 280px) {
    justify-content: center;
    margin-top: 1.5rem;
    margin-left: 2rem;
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  background: #d9d9d9;
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 1rem 0 1rem 0.1rem 0.1rem;
  padding: 0.5em 1em;
  height: 2rem;
`;

export const ResultsImage = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-left: 4.5rem;
  margin-top: 0.5rem;
`;
