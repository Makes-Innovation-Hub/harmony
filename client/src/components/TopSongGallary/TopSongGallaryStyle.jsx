import styled from "styled-components";
export const SongGallary = styled.div`
  @media (min-width: 701px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 6%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12%;
  }
`;

export const TopHSongCountainer = styled.div`
  @media (min-width: 701px) {
    height: 20%;
    border-radius: 8px;
    /* border: 1px solid black; */
    /* background-color: black; */
    /* padding: 30px; */
    margin: 3% 15%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    border-radius: 8px;
  }
`;
export const TopASongCountainer = styled.div`
  @media (min-width: 701px) {
    height: 20%;
    border-radius: 8px;
    /* border: 1px solid black; */
    margin: 3% 15%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    height: 20%;
    border-radius: 8px;
    margin-top: 4%;
  }
`;

export const ImageBox = styled.div`
  @media (min-width: 701px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  @media (min-width: 701px) {
    max-width: 90%;
    max-height: 95%;
    object-fit: cover;
    border-radius: 35px;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    max-width: 90%;
    max-height: 95%;
    object-fit: cover;
    border-radius: 35px;
  }
`;

export const Title = styled.h2`
  @media (min-width: 701px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    /* margin-left: 8%; */
    line-height: 1.912;
    font-family: "ABeeZee";
  }

  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 23px;
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

  overflow-y: hidden;
  & > ${ImageBox} {
    margin-right: -0.25rem;
  }
  @media (min-width: 701px) {
    display: flex;
    gap: 0.2rem;
    flex-direction: row;
    margin-top: 2%;
    &::-webkit-scrollbar {
      display: none;
    }
    & > ${ImageBox} {
      flex: 0 0 calc(100% / 5 + 0.2rem);
    }
  }

  @media (min-width: 0px) and (max-width: 700px) {
    display: flex;
    margin-left: 5%;
    gap: 0.2rem;
    flex-direction: row;
    margin-top: 4%;
    &::-webkit-scrollbar {
      display: none;
    }
    & > ${ImageBox} {
      flex: 0 0 calc(100% / 2 - 0.2rem);
    }
  }
`;

export const Box = styled.div`
  @media (min-width: 701px) {
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(223, 220, 220, 0.28);
    box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(8px);
    border-radius: 8px 8px 12px 12px;
    margin-top: -3.18rem;
    width: 6rem;
    justify-content: center;
  }
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
  @media (min-width: 701px) {
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
  @media (min-width: 701px) {
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
