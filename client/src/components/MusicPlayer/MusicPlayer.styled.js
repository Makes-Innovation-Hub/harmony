import styled from "styled-components";

export const MusicPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
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
