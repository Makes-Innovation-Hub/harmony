import { ModalBody } from "../GenericModal/GenericModalStyles";
import styled from "styled-components";

export const LyricsSection = styled.section`
  display: flex;
  gap: 0.1rem;
  justify-content: space-around;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const SongTitle = styled.h2`
  font-weight: 400;
  text-align: right;
  font-size: 1.1rem;
  font-family: "ABeeZee";
  font-style: normal;
  text-decoration: underline;
  margin-bottom: 1.5rem;
  padding: 0.2rem;
  margin-right: 0.3rem;
`;

export const Status = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: "ABeeZee";
  font-style: normal;
  text-decoration: underline;
  font-size: 12px;
`;

export const Paragraph = styled.p`
  flex: 1 1 50%; /* Take up 50% of the available width without growing or shrinking */
  flex-basis: 50%; /* Set initial width to 50% */
  font-weight: 400;
  text-align: right;
  font-family: "Aclonica";
  font-style: normal;
  font-size: 0.7rem;
  color: black;
  width: 16ch;
  white-space: pre-line;
`;

export const WrapperDiv = styled.div`
  height: 100%;
`;

export const SameLineWithSvg = styled.div`
  display: flex;
  gap: 7px;
  padding-bottom: 1.5rem;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const ModalWidth = styled.div`
  line-height: 1.6;
  letter-spacing: 1px;
  max-width: 40ch;
`;

export const ModalBodyTest = styled(ModalBody)`
  top: -10%;
  left: -1%;
  min-height: fit-content;
  max-width: 390px;
`;

export const LyricsController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
`;
