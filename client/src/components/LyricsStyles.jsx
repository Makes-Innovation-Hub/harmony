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
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 50%;
    order: 1; 
  }
`;

export const SongTitle = styled.h2`
  font-weight:400;
  font-size: 1rem;
  text-align: right;
  font-family: 'Aclonica';
  font-style: normal;
  text-decoration: underline;
  line-height: 154%;
  margin-bottom: 1.5rem;
`;

export const Status = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: 'Aclonica';
  font-style: normal;
  text-decoration: underline;
  line-height: 154%;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  text-align: center;
  font-family: 'Aclonica';
  font-style: normal;
  line-height: 154%;
  font-size: 1rem;
  margin-bottom: 2rem;
`;
