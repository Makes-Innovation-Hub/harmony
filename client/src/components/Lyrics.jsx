import React from 'react';
import {LyricsSection, LyricsWrapper, SongTitle, Status, Paragraph} from './LyricsStyles'
import './Header.css'


const Lyrics = () => {
  return (
    <LyricsSection>
      <LyricsWrapper>
        <SongTitle>Song</SongTitle>
        <Status>Translation</Status>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </Paragraph>
      </LyricsWrapper>
      <LyricsWrapper>
      <SongTitle>Song</SongTitle>
        <Status>Original</Status>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ab
          quod iure magni ut vitae dicta iste ad accusantium at.
        </Paragraph>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
