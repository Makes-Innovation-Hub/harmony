import React from 'react';
import {LyricsSection, LyricsWrapper,TranslationWrapper ,SongTitle, Status, Paragraph} from './LyricsStyles'
import { useEffect, useState } from 'react';
import './Header.css'


const Lyrics = ({artist, title}) => {

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch(`https://localhost5000/api/v1/topArabicSongs/${artist}/${title}`);
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchLyrics();
  }, [artist, title]);

  return (
    <LyricsSection>
      <LyricsWrapper>
        <SongTitle>Title</SongTitle>
        <Paragraph>{lyrics}</Paragraph>
      </LyricsWrapper>
      <LyricsWrapper>
        <SongTitle>Title</SongTitle>
        <Paragraph>{lyrics}</Paragraph>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
