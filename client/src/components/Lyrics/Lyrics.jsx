import React from "react";
import {
  LyricsSection,
  SongTitle,
  Status,
  HebrewParagraph,
  ArabicParagraph,
} from "./LyricsStyle.jsx";

const Lyrics = ({ lyrics, name }) => {
  // Function to remove parentheses from a string
  const removeParentheses = (str) => str.replace(/\([^)]+\)/g, "");

  const renderLyrics = () => {
    const renderedLyrics = [];

    if (lyrics && lyrics.hebrew) {
      const hebrewLyrics = lyrics.hebrew;
      renderedLyrics.push(
        <div key="hebrew">
          <Status>Translation</Status>
          <div>
            <SongTitle>{name && removeParentheses(name.hebrew)}</SongTitle>
            {Array.isArray(hebrewLyrics) ? (
              hebrewLyrics.map((lyric, index) => (
                <HebrewParagraph key={index}>{lyric}</HebrewParagraph>
              ))
            ) : (
              <HebrewParagraph>{hebrewLyrics}</HebrewParagraph>
            )}
          </div>
        </div>
      );
    }

    if (lyrics && lyrics.arabic) {
      const arabicLyrics = lyrics.arabic;
      renderedLyrics.push(
        <div key="arabic">
          <Status>Original</Status>
          <div>
            <SongTitle>{name && removeParentheses(name.arabic)}</SongTitle>
            {Array.isArray(arabicLyrics) ? (
              arabicLyrics.map((lyric, index) => (
                <ArabicParagraph key={index}>{lyric}</ArabicParagraph>
              ))
            ) : (
              <ArabicParagraph>{arabicLyrics}</ArabicParagraph>
            )}
          </div>
        </div>
      );
    }

    return renderedLyrics;
  };

  return <LyricsSection>{renderLyrics()}</LyricsSection>;
};

export default Lyrics;
