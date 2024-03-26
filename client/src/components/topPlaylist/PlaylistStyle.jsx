import styled from "styled-components";

export const SongGallery = styled.div`
  @media (min-width: 701px) {
    min-height: 50%;

    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    margin: 0 15%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;
export const TopHMixCountainer = styled.div`
  @media (min-width: 701px) {
    border-radius: 8px;
    /* margin: 0 15%; */
    width: 100%;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    border-radius: 8px;
    margin-top: 4%;
    width: 100%;
  }
`;

export const TopAMixCountainer = styled.div`
  @media (min-width: 701px) {
    height: 20%;
    border-radius: 8px;
    /* margin-top: 4%; */
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
    padding: 18px;
    margin-left: -18px;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
    padding: 18px;
    margin-left: -18px;
  }
`;
export const Image = styled.img`
  @media (min-width: 701px) {
    max-width: 115%;
    max-height: 120%;
    object-fit: cover;
    border-radius: 30px;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    max-width: 115%;
    max-height: 120%;
    object-fit: cover;
    border-radius: 30px;
  }
`;
export const Title = styled.h2`
  @media (min-width: 701px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    // margin-top:2.5%;
    /* margin-left: 8%; */
    line-height: 1.912;
    font-family: "ABeeZee";
  }
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    margin-top: 2.5%;
    margin-left: 8%;
    line-height: 1.912;
    font-family: "ABeeZee";
  }
`;
export const Playlist = styled.h1`
  @media (min-width: 701px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    margin: 20px 0;
    line-height: 1.912;
    font-family: "ABeeZee";
    text-decoration: underline;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    font-weight: 400;
    font-size: 1.2rem;
    color: #333333;
    font-style: italic;
    margin-left: 8%;
    line-height: 1.912;
    font-family: "ABeeZee";
    text-decoration: underline;
  }
`;
export const ImageBoxContainer = styled.div`
  @media (min-width: 701px) {
    overflow-x: auto;
    white-space: nowrap;
    overflow-y: hidden;
    & > ${ImageBox} {
      margin-right: -0.25rem;
    }
    display: flex;
    flex-direction: row;
    gap: 25px;

    &::-webkit-scrollbar {
    }
    & > ${ImageBox} {
      flex: 0 0 calc(100% / 5 + 0.2rem);
    }
  }

  @media (max-width: 700px) {
    overflow-x: auto;
    white-space: nowrap;
    margin-left: 5%;
    overflow-y: hidden;
    & > ${ImageBox} {
      margin-right: -0.25rem;
    }
    display: flex;
    flex-direction: row;
    gap: 25px;
    // margin-top: 4%;
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
    background: rgba(223, 220, 220, 0.28);
    box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(8px);
    border-radius: 8px 8px 12px 12px;
    margin-top: -3.18rem;
    width: 6rem;
    margin-left: 0.6rem;
    padding-bottom: 0.8rem;
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
    padding-bottom: 0.8rem;
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

export const GenreType = styled.p`
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
