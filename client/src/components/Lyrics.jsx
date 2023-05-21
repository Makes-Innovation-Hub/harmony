import React from 'react';
import {LyricsSection, LyricsWrapper, SongTitle, Status, Paragraph} from './LyricsStyles'
import './Header.css'


const Lyrics = () => {
  return (
    <LyricsSection>
      <LyricsWrapper>
        <Status>Translation</Status>
        <SongTitle>Song</SongTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
      </LyricsWrapper>
      <LyricsWrapper>
        <Status>Original</Status>
      <SongTitle>Song</SongTitle>
      <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam veritatis vitae 
        </Paragraph>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
