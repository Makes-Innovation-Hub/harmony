import styled from "styled-components";

export const LyricsSection = styled.section`
  display: flex;
  gap: 0.1rem;
  justify-content: space-around;
  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SongTitle = styled.h2`
  font-weight: 400;
  text-align: right;
  font-size: 1.1rem;
  font-family: "Aclonica";
  font-style: normal;
  text-decoration: underline;
  /* line-height: 154%; */
  margin-bottom: 1.5rem;
`;

export const Status = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: "ABeeZee";
  font-style: normal;
  text-decoration: underline;
  /* line-height: 154%; */
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  flex: 1 1 50%; /* Take up 50% of the available width without growing or shrinking */
  flex-basis: 50%; /* Set initial width to 50% */
  font-weight: 400;
  text-align: right;
  font-family: "Aclonica";
  font-style: normal;
  /* line-height: 150%; */
  font-size: 0.7rem;
  margin-bottom: 1.5rem;
  color: black;
  width: 16ch;
  height: 5ch;
`;