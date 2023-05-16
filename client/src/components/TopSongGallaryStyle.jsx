import styled from "styled-components";
export const TopHSongCountainer = styled.div`
border-radius: 8px;
@media(min-width: 350px) and (max-width: 700px) {
  width: 98%;
margin-top: -24%;
height: 30%;
position: absolute;
}
`;
 export const Title = styled.h2`
  font-weight: 400;
;
  @media(min-width: 350px) and (max-width: 700px){
    font-size: 1.375rem;
    color: #333333;
    margin-bottom: 38%;
    margin-left:6%;
    font-style: italic;
    @font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
  }
  :hover {
    text-decoration: underline #4aa4e0;
}`;
 export const ImageBox = styled.div`
  @media(min-width: 350px) and (max-width: 700px) {
    width: 29.8%;
height: 48.3%;
margin-top: -38%;
    margin-left:4%;
    position:relative
  }
  :hover {
      border: 2px solid #9570FF;
  }
`;
export const ImageBoxContainer = styled.div`
@media(min-width: 350px) and (max-width: 700px) {
 display: flex;
 justify-content:center;
 margin-right:7%
}
`;
export const Image = styled.img`
@media(min-width: 350px) and (max-width: 700px) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:25px
}
`;
export const TopASongCountainer = styled.div`
border-radius: 8px;
@media(min-width: 350px) and (max-width: 700px) {
  width: 98%;
margin-top:22%;
  height:30%;
  position:absolute;
}
`;
export const Box = styled.div`
@media(min-width: 350px) and (max-width: 700px) {
  position: absolute;
  height: 28%;
left: 7%;
right: 0px;
bottom: -1%;
width: 85%;
background: rgba(255, 255, 255, 0.28);
box-shadow: 0px -18px 49px rgba(0, 0, 0, 0.09);
backdrop-filter: blur(8px);
border-radius: 8px 8px 0px 0px;
}
:hover {
      border: 2px solid #9570FF;
  }
`;
export const SongP = styled.p`
@media(min-width: 350px) and (max-width: 700px) {
  font-size: 0.8125rem;
font-weight:400;
font-style:italic;
margin-left: 0.2%;
margin-top: 0.125%;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
}
`;
export const Songartist = styled.p`
@media(min-width: 350px) and (max-width: 700px) {
  font-size: 0.625rem;
font-weight:400;
font-style:italic;
margin-top:-12%;
margin-left:2%;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
}
`;