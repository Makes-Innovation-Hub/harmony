import {
  LyricsSection,
  SongTitle,
  Status,
  Paragraph,
  SameLineWithSvg,
} from "./LyricsStyle";
import "../Header/Header.css";
import megaPhoneSvg from "../../assets/svgs/megaphone.svg";
import { useTextToSpeechMutation } from "../../api/textToSpeechApi";
import { useRef } from "react";

const Lyrics = ({ lyrics, name, originalLang }) => {
  const [playSongLyrics] = useTextToSpeechMutation();
  const audioRef = useRef(null);

  // Function to remove parentheses from a string
  const removeParentheses = (str) => str.replace(/\([^)]+\)/g, "");
  const originalLyrics = lyrics[originalLang] || lyrics.english;
  const translatedLyrics =
    originalLang === "hebrew" ? lyrics.arabic : lyrics.hebrew;
  const translatedName = originalLang === "hebrew" ? name.arabic : name.hebrew;

  async function playSongInMegaphone(originalOrTranslatedLyrics) {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
      }

      const response = await playSongLyrics({
        lyrics: originalOrTranslatedLyrics,
      });

      if (!response.data || !response.data.audio) {
        console.error("No audio data received.");
        return;
      }

      const base64Audio = response.data.audio;
      audioRef.current = new Audio("data:audio/mp3;base64," + base64Audio);
      audioRef.current.play();
    } catch (error) {
      console.error("Error playing song:", error);
    }
  }
  const renderLyrics = () => {
    const renderedLyrics = [];
    if (translatedLyrics) {
      renderedLyrics.push(
        <div key="hebrew" style={{ height: "100%" }}>
          <SameLineWithSvg>
            <Status>Translation</Status>
            <img
              src={megaPhoneSvg}
              alt="megaphone to read lyrics"
              onClick={() => playSongInMegaphone(translatedLyrics)}
            />
          </SameLineWithSvg>
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
        <div key="arabic" style={{ height: "100%" }}>
          <SameLineWithSvg>
            <Status>Original</Status>
            <img
              src={megaPhoneSvg}
              alt="megaphone to read lyrics"
              onClick={() => playSongInMegaphone(originalLyrics)}
            />
          </SameLineWithSvg>
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

  return (
    <>
      <LyricsSection>{renderLyrics()}</LyricsSection>
    </>
  );
};

export default Lyrics;
