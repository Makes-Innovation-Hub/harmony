import styled, { keyframes } from "styled-components";
const shrinkAndMoveAnimation = keyframes`
  from {
    transform: scale(1) translateX(0);
    transform-origin: left center;
 
  }
  to {
    transform: scale(0) translateX(160px);  
    transform-origin: left center;
  }
`;

const MoveUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0); 
  }
`;
export const MusicPlayerContainer = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  height: 90px;
  width: 100%;
  background-color: rgb(254, 254, 254, 1);
  padding: 10px;
  border-top: solid 2px gray;
  position: sticky;
  bottom: -2px;
  overflow: hidden;
  animation: ${(props) =>
      props.animate === "true" ? shrinkAndMoveAnimation : MoveUpAnimation}
    0.5s ease-out forwards;
  @media (min-width: 768px) {
    bottom: 0;
  }
`;

export const PlayBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ButtonImage = styled.img`
  /* Add your image styles here */
  outline: 0; /* Initially no outline */
  &:active {
    outline: 2px solid blue; /* Add outline when button is active */
  }
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      outline: 2px solid black; /* Add outline on hover */
    }
  }
`;

export const PreviousButtonImage = styled(ButtonImage)`
  background: #f4e6d1;
  padding: 6px;
`;
const scrollText = keyframes`
    0% {
        transform: translateX(100%); /* Start offscreen to the right */
    }
    100% {
        transform: translateX(-100%); /* Scroll to the left completely */
    }
`;

export const CyclicScroll = styled.div`
  color: ${(props) => (props.isplaying === "true" ? "#498af4" : "#333333")};
  font-family: "ABeeZee Italic";
  text-align: center;
  font-style: italic;
  font-weight: 400;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow text */
  box-sizing: border-box;
  min-width: 100%;
  height: 30px;
  padding: 2px;
  animation: ${scrollText} 10s linear infinite;
  @media (min-width: 768px) {
    animation: ${scrollText} 30s linear infinite;
  }
`;

export const MinusButton = styled.button`
  width: 20px;
  height: 20px;
  background: #f4e6d1;
`;

const imageAnimation = keyframes`
  from {
    transform: scale(0);/* Start at normal size and original position */
  }
  to {
    transform: scale(1);  /* Scale down and move to bottom left */
  }
`;

export const PlayingSongImg = styled.img`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  /* z-index: 1000; */
  /* animation: ${imageAnimation} 0.5s linear; */
`;

export const MusicIicon = styled.img`
  position: absolute;
  top: 0;
  left: 70px;
  width: 24px;
  height: 24px;
`;

export const PlayingSongContainer = styled.div`
  position: fixed;
  bottom: 5px;
  width: 80px;
  height: 80px;
  padding: 5px;
  z-index: 1000;
  animation: ${imageAnimation} 0.5s linear;
`;

export const MinusXButton = styled.div`
  position: absolute;
  font-family: "ABeeZee";
  font-style: italic;
  color: black;
  cursor: pointer;
  top: 10px;
  left: 15px;
  font-size: 30px;

  &:hover {
    color: blue;
  }
`;

export const XButton = styled.div`
  position: absolute;
  font-family: "ABeeZee";
  font-style: italic;
  color: black;
  cursor: pointer;
  top: 10px;
  right: 15px;
  font-size: 20px;

  &:hover {
    color: red;
  }
`;
