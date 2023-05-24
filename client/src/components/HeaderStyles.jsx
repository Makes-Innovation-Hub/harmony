import styled from 'styled-components'
<style>
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');
</style>

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background-color: #f2f2f2;

  @media screen and (min-width: 768px) {
    padding: 1.2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const AppIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.8rem;
`;

export const LanguageSelect = styled.select`
  font-size: 1rem;
  border: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const LanguageOption = styled.option`
  color: #333;
`;

export const SongTitle = styled.h3`
  font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
`;

export const Status = styled`
   font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee', sans-serif;
  font-style: italic;
`