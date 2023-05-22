import styled from 'styled-components';

export const LyricsSection = styled.section`
  display: flex;
  margin-right:0.5rem;
  justify-content:space-between;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LyricsWrapper = styled.div`
  @media (min-width: 768px) {
    width: 50%; 
  }
`;

export const TranslationWrapper = styled.div`

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const SongTitle = styled.h2`
  font-weight:400;
  text-align: right;
  font-size: 1.1rem;
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
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  text-align: right;
  font-family: 'Aclonica';
  font-style: normal;
  line-height: 150%;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
