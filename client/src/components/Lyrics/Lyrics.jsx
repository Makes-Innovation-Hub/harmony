import { LyricsSection, SongTitle, Status, Paragraph } from "./LyricsStyle";
import "../Header/Header.css";

const Lyrics = ({ lyrics, name, originalLang }) => {
  // Function to remove parentheses from a string
  const removeParentheses = (str) => str.replace(/\([^)]+\)/g, "");
  const originalLyrics = lyrics[originalLang] || lyrics.english;
  const translatedLyrics =
    originalLang === "hebrew" ? lyrics.arabic : lyrics.hebrew;
  const translatedName = originalLang === "hebrew" ? name.arabic : name.hebrew;

  const renderLyrics = () => {
    const renderedLyrics = [];
    if (translatedLyrics) {
      renderedLyrics.push(
        <div key="hebrew">
          <Status>Translation</Status>
          <div>
            <SongTitle>{name && removeParentheses(translatedName)}</SongTitle>
            {Array.isArray(translatedLyrics) ? (
              translatedLyrics.map((lyric, index) => (
                <Paragraph key={index}>{lyric}</Paragraph>
              ))
            ) : (
              <Paragraph>{translatedLyrics}</Paragraph>
            )}
          </div>
        </div>
      );
    }

    if (originalLyrics) {
      renderedLyrics.push(
        <div key="arabic">
          <Status>Original</Status>
          <div>
            <SongTitle>
              {name && removeParentheses(name[originalLang])}
            </SongTitle>
            {Array.isArray(originalLyrics) ? (
              originalLyrics.map((lyric, index) => (
                <Paragraph key={index}>{lyric}</Paragraph>
              ))
            ) : (
              <Paragraph>{originalLyrics}</Paragraph>
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
