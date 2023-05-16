import styled from 'styled-components';

export const LyricsSection = styled.section`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LyricsWrapper = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SongTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;

export const Status = styled.h3`
  font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;

export const Paragraph = styled.p`
  font-weight: bold;
  text-align: center;
  font-family: 'ABeeZee';
  font-style: italic;
`;
