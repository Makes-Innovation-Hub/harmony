import * as S from "./LyricsStyle";
import "../Header/Header.css";
import megaPhoneSvg from "../../assets/svgs/megaphone.svg";
import { useTextToSpeechMutation } from "../../api/textToSpeechApi";
import { useRef, useState } from "react";
import GenericModal from "../GenericModal/GenericModal";
import playTtsSvg from "../../assets/svgs/playTts.svg";
import stopTtsSvg from "../../assets/svgs/stopTts.svg";
import resetTtsSvg from "../../assets/svgs/resetTts.svg";
import translatingGif from "../../assets/animations/translating-animation.gif";
import Animation from "../Animation/Animation.component";

const Lyrics = ({ lyrics, name, originalLang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLyrics, setModalLyrics] = useState(null);
  const audioRef = useRef(null);

  const [playSongLyrics, { isLoading: playSongLyricsIsLoading }] =
    useTextToSpeechMutation();

  // Function to remove parentheses from a string
  const removeParentheses = (str) => str.replace(/\([^)]+\)/g, "");
  const originalLyrics = lyrics[originalLang] || lyrics.english;
  const translatedLyrics =
    originalLang === "hebrew" ? lyrics.arabic : lyrics.hebrew;
  const translatedName = originalLang === "hebrew" ? name.arabic : name.hebrew;

  async function playSongInMegaphone(originalOrTranslatedLyrics) {
    try {
      setIsModalOpen(true);
      setModalLyrics(
        originalOrTranslatedLyrics === translatedLyrics
          ? translatedLyrics
          : originalLyrics
      );

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

  const closeModal = () => {
    setIsModalOpen(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  };

  const renderLyrics = () => {
    const renderedLyrics = [];
    if (translatedLyrics) {
      renderedLyrics.push(
        <div key="hebrew" style={{ height: "100%" }}>
          <S.SameLineWithSvg>
            <S.Status>Translation</S.Status>
            <img
              src={megaPhoneSvg}
              alt="megaphone to read lyrics"
              onClick={() => playSongInMegaphone(translatedLyrics)}
            />
          </S.SameLineWithSvg>
          <div>
            <S.SongTitle>
              {name && removeParentheses(translatedName)}
            </S.SongTitle>
            {Array.isArray(translatedLyrics) ? (
              translatedLyrics.map((lyric, index) => (
                <S.Paragraph key={index}>{lyric}</S.Paragraph>
              ))
            ) : (
              <S.Paragraph>{translatedLyrics}</S.Paragraph>
            )}
          </div>
        </div>
      );
    }

    if (originalLyrics) {
      renderedLyrics.push(
        <div key="arabic" style={{ height: "100%" }}>
          <S.SameLineWithSvg>
            <S.Status>Original</S.Status>
            <img
              src={megaPhoneSvg}
              alt="megaphone to read lyrics"
              onClick={() => playSongInMegaphone(originalLyrics)}
            />
          </S.SameLineWithSvg>
          <div>
            <S.SongTitle>
              {name && removeParentheses(name[originalLang])}
            </S.SongTitle>
            {Array.isArray(originalLyrics) ? (
              originalLyrics.map((lyric, index) => (
                <S.Paragraph key={index}>{lyric}</S.Paragraph>
              ))
            ) : (
              <S.Paragraph>{originalLyrics}</S.Paragraph>
            )}
          </div>
        </div>
      );
    }

    return renderedLyrics;
  };

  return (
    <>
      <S.LyricsSection>{renderLyrics()}</S.LyricsSection>
      <GenericModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ModalBodyStyles={S.ModalBodyTest}
      >
        {playSongLyricsIsLoading ? (
          <Animation
            animationGif={translatingGif}
            animationText={["Loading Audio..."]}
          />
        ) : (
          <>
            <S.LyricsController>
              <img
                onClick={() => audioRef.current.play()}
                src={playTtsSvg}
                alt="play lyrics"
              />
              <img
                onClick={() => audioRef.current.pause()}
                src={stopTtsSvg}
                alt="stop playing lyrics"
              />
              <img
                onClick={() => {
                  audioRef.current.currentTime = 0;
                  audioRef.current.pause();
                }}
                src={resetTtsSvg}
                alt="stop playing lyrics"
              />
            </S.LyricsController>
            <S.ModalWidth>{modalLyrics}</S.ModalWidth>
          </>
        )}
      </GenericModal>
    </>
  );
};

export default Lyrics;
