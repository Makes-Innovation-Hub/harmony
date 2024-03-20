import styled from "styled-components";

export const SongPageContainer = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
  }
`;

export const UploadCoverButton = styled.button`
  font-family: ABeeZee;

  height: 32px;
  width: 93px;

  margin: 0 auto;
  border: none;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
  background: #f4e6d1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    cursor: pointer;
    margin-top: 50px;
  }
`;

export const SongInfoAndVideoContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SongInfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
