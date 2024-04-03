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
  flex: 1 1 50%;
  flex-basis: 50%;
  font-weight: 400;
  text-align: right;
  font-family: "Aclonica";
  font-style: normal;
  font-size: 0.7rem;
  color: black;
  width: 16ch;
  white-space: pre-line;
  line-height: 1.7;
  letter-spacing: 0.5px;
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
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PlayAudioModal = styled(ModalBody)`
  top: -10%;
  min-height: fit-content;
  max-width: 350px;
  width: 85%;
  flex-wrap: nowrap;
  direction: rtl;
  white-space: break-spaces;
  max-height: 90%;

  overflow-x: hidden;
  .animation {
    width: 100%;
  }
`;

export const LyricsController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;

  img {
    cursor: pointer;
  }
`;
