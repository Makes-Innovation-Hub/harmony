import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`;

export const Description = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 0.3125rem;
  width: 100%;
  max-width: 25rem;
  height: 2.5rem;
  margin-top: 0.625rem;
`;

export const SearchIcon = styled.img`
  margin-right: 0.625rem;
  font-size: 1.25rem;
  background-color: rgba(149, 112, 255, 0.19);
  padding: 0.666rem;
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0 0.625rem;
  &:focus {
    outline: none;
  }
`;
