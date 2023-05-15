import styled from "styled-components";

export const TopHSongCountainer = styled.div`
border-radius: 8px;
@media(min-width: 350px) and (max-width: 700px) {
  width: 98vw;
margin-top:-22vh;
  height:40vh;
  position:absolute

}

`;
 export const Title = styled.h2`
  font-weight: 400;
;
  @media(min-width: 350px) and (max-width: 700px){
    font-size: 22px;
    color: #333333;
    margin-bottom: 26vh;
    margin-left:6vw;
    font-style: italic;
    @font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
  }
  :hover {
    text-decoration: underline #4aa4e0;


}
  
`;
 export const ImageBox = styled.div`


  @media(min-width: 350px) and (max-width: 700px) {
    width: 149px;
    height: 145px;
    margin-top:-24vh;
    margin-left:4vw;
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
 margin-right:7vw

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
  width: 98vw;
margin-top:13vh;
  height:40vh;
  position:absolute;
  
  

}
`;
export const Box = styled.div`

@media(min-width: 350px) and (max-width: 700px) {
  position: absolute;
height: 52px;
left: 2vw;
right: 0px;
bottom: 0px;
width: 133px;
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
font-size:13px;
font-weight:400;
font-style:italic;
margin-left:2vw;
margin-top:1vh;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}


}
`;
export const Songartist = styled.p`

@media(min-width: 350px) and (max-width: 700px) {
font-size:10px;
font-weight:400;
font-style:italic;
margin-top:-2vh;
margin-left:2vw;
@font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}


}
`;