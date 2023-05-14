import styled from 'styled-components'

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
 position: relative;
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

export const LyricsSection = styled.section`
  display: flex;
  margin-bottom: 2rem;
`;

export const LyricsWrapper = styled.div`
  width: 100%;
  padding-right: 1rem;

  &:last-child {
    padding-right: 0;
  }
`;

export const Header = styled.h4`
  margin-bottom: 0.5rem;
  font-family: 'ABeeZee', sans-serif;
`;

 export const Paragraph = styled.p`
  font-family: 'ABeeZee', sans-serif;
`

