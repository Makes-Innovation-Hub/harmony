import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
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

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 18.2rem;
    height: 2.5rem;
    left: 0.7rem;
    top: 15%;
    transform: translateY(-50%);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  overflow-x: auto;
  padding-bottom: 1rem;
`;

export const SearchBar = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #eee;
  border: 1px solid #000000;
  border-radius: 0.3125rem;
  width: 20rem;
  max-width: 25rem;
  height: 2.5rem;

  @media screen and (max-width: 767px) {
    width: 70%;
    margin: 5rem 0 0 0;
    flex-grow: 1;
  }

  @media screen and (max-width: 280px) {
    margin: 5rem 0 2rem 0;
  }
`;

export const SearchIcon = styled.img`
  margin-left: 0.5rem; 
  font-size: 1.25rem;
  background-color: rgba(149, 112, 255, 0.19);
  padding: 0.666rem;
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  line-height: 133%;
  font-family: 'ABeeZee';
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 2.5rem 0 0; 
  text-align: center;


  &:focus {
    outline: none;
  }
`;
