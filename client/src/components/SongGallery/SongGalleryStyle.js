import styled from "styled-components";
export const SongGallary = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;
export const TopHSongCountainer = styled.div`
  border-radius: 8px;
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
  }
`;
export const ImageBox = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
export const Image = styled.img`
  @media (min-width: 0px) and (max-width: 700px) {
    object-fit: cover;
    border-radius: 35px;
    width: 180px;
    height: 180px;
  }
`;
export const Title = styled.h2`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
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
    /* & > ${ImageBox} {
      flex: 0 0 calc(100% / 2 - 0.2rem);
    } */
  }
`;
export const TopASongCountainer = styled.div`
  border-radius: 8px;
  margin-top: 4%;
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    height: 20%;
  }
`;
export const Box = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 2rem;
    background: rgba(223, 220, 220, 0.28);
    box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(8px);
    border-radius: 8px 8px 12px 12px;
    margin-top: -3.18rem;
    width: 6rem;
    margin-left: 0.6rem;
  }
`;
export const SongP = styled.p`
  @media (min-width: 0px) and (max-width: 700px) {
    font-size: 0.65rem;
    font-weight: 300;
    color: #ffff;
    font-style: italic;
    margin-left: 2%;
    margin-top: 4%;
    padding: 0.43rem;
    line-height: 1.081rem;
    font-family: "ABeeZee";
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Songartist = styled.p`
  @media (min-width: 0px) and (max-width: 700px) {
    font-size: 0.4rem;
    font-weight: 50;
    font-style: italic;
    margin-left: 0.6rem;
    line-height: 0.831rem;
    color: #ffff;
    font-family: "ABeeZee";
    margin-top: -0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SectionTitle = styled.h1`
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 23px;
    color: #333333;
    font-style: italic;
    margin-left: 8%;
    line-height: 1.912;
    font-family: "ABeeZee";
    text-decoration: underline;
    padding-bottom: 15px;
  }
`;

export const NoCoversContainer = styled.div`
  width: 92%;
  display: flex;
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
