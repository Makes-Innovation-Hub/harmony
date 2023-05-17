import styled from 'styled-components';

export const LyricsSection = styled.section`
  display: flex;
  
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LyricsWrapper = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    order: 2; 
  }
`;

export const TranslationWrapper = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    order: 1; 
  }
`;

export const SongTitle = styled.h2`
  font-weight:400;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;

export const Status = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;
