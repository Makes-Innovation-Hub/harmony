import styled from "styled-components";
export const SongGallary = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 50%;
  width: 100%;
  display:flex;
  flex-direction:column;
  margin-top:50%;
  }`;
export const TopHSongCountainer = styled.div`
  border-radius: 8px;
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 0px) and (max-width: 700px) {
  width: 100%;
  }`;
export const ImageBox = styled.div`
  @media(min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }`;
export const Image = styled.img`
  @media(min-width: 0px) and (max-width: 700px) {
    max-width: 100%;
    max-height: 95%; 
    object-fit: cover;
    border-radius: 35px;
  }`;
export const Title = styled.h2`
@media(min-width: 0px) and (max-width: 700px){
    font-weight: 400;
  font-size: 1.2rem;
  color: #333333;
  font-style: italic;
  margin-left: 4%;
  line-height:30.59px;
  @font-face {
font-family: "ABeeZee";
src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
}`;
export const ImageBoxContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-left: 2%;
  & > ${ImageBox} {
    margin-right: -1rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    margin-top: 4%;
    &::-webkit-scrollbar {
      display: none;
    }
    & > ${ImageBox} {
      flex: 0 0 calc(100% / 2 - 0.2rem);
    }
  }`;
export const TopASongCountainer = styled.div`
border-radius: 8px;
margin-top: 4%;
@media (min-width: 701px) {
    display: none;
  }
@media(min-width: 0px) and (max-width: 700px) {
  height:20%
}`;
export const Box = styled.div`
  @media (min-width: 0px) and (max-width: 700px) {
    min-height: 3.40rem;
    background: rgba(234, 234, 234, 0.28);
    box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(8px);
    border-radius: 8px 8px 18px 18px;
    margin-top: -4.040rem;
    width: 8.1rem;
    margin-left: 0.6rem;
  }`;
export const SongP = styled.p`
@media(min-width: 0px) and (max-width: 700px) {
  font-size: 0.8125rem;
font-weight:400;
color: #ffff;
font-style:italic;
margin-left: 0.1%;
margin-top: 3%;
padding: 0.4rem;
line-height: 17.29px;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
}`;
export const Songartist = styled.p`
@media(min-width: 0px) and (max-width: 700px) {
  font-size: 0.5rem;
font-weight:300;
font-style:italic;
margin-left:0.6rem;
line-height: 13.3px;
color: #ffff;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
}`;
