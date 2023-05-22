import styled from 'styled-components';
import Ellipse2 from '../assets/Ellipse2.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow-x: hidden;
`;

export const Description = styled.h1`
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 133%;
  text-align: center;
  color: #828282;
  margin: 1rem 0;
  max-width: 18.2rem;
  

  @media screen and (min-width:768px) {
    position: absolute;
    width: 18.2rem;
    height: 2.5rem;
    top: 20%;
    transform: translateY(-50%);
  }

  
  @media screen and (min-width:1024px) {
    position: absolute;
    width: 18.2rem;
    height: 2.5rem;
    top: 40%;
    transform: translateY(-50%);
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 4rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.img`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  padding: 0.65rem;
  background-image: url(${Ellipse2}); 
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;


export const Input = styled.input`
  padding:0.4rem 2rem 0.4rem 2rem;
  text-align: center;
`;
