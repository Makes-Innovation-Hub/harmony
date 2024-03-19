import styled from "styled-components";

export const CoversTitle = styled.p`
  font-family: ABeeZee;
  font-size: 12px;
  text-decoration: underline;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  color: #333333;
  letter-spacing: 0em;
  text-align: center;
  padding-bottom: 0px;
  padding-top: 10px;
`;

export const SongCoverVideoContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
