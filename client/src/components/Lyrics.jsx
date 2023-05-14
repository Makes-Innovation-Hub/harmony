import React from 'react';
import styled from 'styled-components';

const LyricsSection = styled.section`
  display: flex;
  margin-bottom: 2rem;
`;

const LyricsWrapper = styled.div`
  width: 100%;
  padding-right: 1rem;

  &:last-child {
    padding-right: 0;
  }
`;

const Header = styled.h4`
  margin-bottom: 0.5rem;
  font-family: 'ABeeZee', sans-serif;
`;

const Paragraph = styled.p`
  font-family: 'ABeeZee', sans-serif;
`

const Lyrics = () => {
  return (
    <LyricsSection>
      <LyricsWrapper>
        <Header>Translation</Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </p>
      </LyricsWrapper>
      <LyricsWrapper>
        <Header>Original</Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </p>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
