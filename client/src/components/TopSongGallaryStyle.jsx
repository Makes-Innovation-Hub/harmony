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
    font-size: 23px;
    color: #333333;
    margin-bottom: 26vh;
    margin-left:6vw;
    font-style: italic;
    @font-face {
  font-family: "ABeeZee";
  src: url("../../assets/fonts/ABeeZee-Regular.ttf") format("truetype");
}
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
      border: 1px solid black;
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