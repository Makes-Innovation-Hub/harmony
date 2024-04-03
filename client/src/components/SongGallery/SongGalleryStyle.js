import styled from "styled-components";

export const SongGallary = styled.div`
  font-family: ABeeZee;

  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;
export const TopHSongCountainer = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    padding-bottom: 30px;
  }
  @media (min-width: 701px) {
    width: 70%;
    max-width: 1050px;
    margin: 0 auto;
  }
`;

export const TopASongCountainer = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 701px) {
    width: 70%;
    max-width: 1050px;
    margin: 0 auto;
  }
`;

export const ImageBox = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  border-radius: 35px;
  @media (min-width: 0px) and (max-width: 700px) {
    width: 180px;
    height: 180px;
  }

  @media (min-width: 701px) {
    width: 180px;
    overflow: hidden;
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: #333333;
  font-style: italic;
  margin-left: 8%;
  line-height: 1.912;
  font-family: "ABeeZee";

  @media (min-width: 701px) {
    margin-left: 5%;
    padding-bottom: 20px;
  }
`;
export const ImageBoxContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-left: 5%;
  overflow-y: hidden;
  padding-right: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > ${ImageBox} {
    margin-right: -0.25rem;
  }

  @media (max-width: 700px) {
    display: flex;
    gap: 1.2rem;
    flex-direction: row;
    margin-top: 4%;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 701px) {
    display: flex;
    gap: 24px;
    padding-bottom: 20px;
    overflow: auto;
    white-space: nowrap;
    cursor: grab;
    max-width: 1000px;
    width: fit-content;
  }
`;

export const Box = styled.div`
  font-family: ABeeZee;
  min-height: 2rem;
  background: rgba(223, 220, 220, 0.28);
  box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(8px);
  border-radius: 8px 8px 12px 12px;
  margin-top: -3.18rem;
  width: 6rem;
  margin-left: 0.6rem;

  @media (min-width: 701px) {
    color: white;
    font-size: 0.8rem;
    width: 160px;
    margin-top: -30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const SongP = styled.p`
  font-family: "ABeeZee";

  @media (min-width: 0px) and (max-width: 700px) {
    font-size: 0.65rem;
    font-weight: 300;
    color: #ffff;
    font-style: italic;
    margin-left: 2%;
    margin-top: 4%;
    padding: 0.43rem;
    line-height: 1.081rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 701px) {
    font-size: 0.65rem;
    font-weight: 300;
    color: #ffff;
    font-style: italic;
    margin-left: 2%;
    margin-top: 4%;
    padding: 0.43rem;
    line-height: 1.081rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SongArtist = styled.p`
  font-family: "ABeeZee";
  @media (min-width: 0px) and (max-width: 700px) {
    font-size: 0.65rem;
    font-weight: 50;
    font-style: italic;
    margin-left: 0.6rem;
    line-height: 0.831rem;
    color: #ffff;
    margin-top: -0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 701px) {
    font-size: 0.65rem;
    font-weight: 50;
    font-style: italic;
    margin-left: 0.6rem;
    line-height: 0.831rem;
    color: #ffff;
    margin-top: -0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 400;
  font-size: 23px;
  color: #333333;
  font-style: italic;
  margin-left: 8%;
  line-height: 1.912;
  font-family: "ABeeZee";
  text-decoration: underline;
  padding-bottom: 20px;

  @media (min-width: 701px) {
    margin-left: 5%;
    margin-top: 70px;
  }
`;

export const NoCoversContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #00000075;
  border-radius: 8px;
  box-shadow: 0 0 10px #00000045;
  margin-left: 5%;
`;

export const NoCoverSvg = styled.img`
  width: 330px;

  @media (max-width: 400px) {
    transform: scale(0.9);
  }
`;
