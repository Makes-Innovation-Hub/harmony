import React from 'react';
import { Header, LyricsSection, LyricsWrapper, Paragraph } from './HeaderStyle';


const Lyrics = () => {
  return (
    <LyricsSection>
      <LyricsWrapper>
        <Header>Translation</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </Paragraph>
      </LyricsWrapper>
      <LyricsWrapper>
        <Header>Original</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </Paragraph>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
