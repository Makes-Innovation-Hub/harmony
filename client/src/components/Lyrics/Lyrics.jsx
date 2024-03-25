import * as S from "./LyricsStyle";
import megaPhoneSvg from "../../assets/svgs/megaphone.svg";
import { useTextToSpeechMutation } from "../../api/textToSpeechApi";
import { useRef, useState } from "react";
import GenericModal from "../GenericModal/GenericModal";
import stopTtsSvg from "../../assets/musicPlayer/stop.svg";
import playTtsSvg from "../../assets/musicPlayer/play.svg";
import pauseTtsSvg from "../../assets/musicPlayer/pause.svg";
import translatingGif from "../../assets/animations/translating-animation.gif";
import Animation from "../Animation/Animation.component";

const Lyrics = ({ lyrics, name, originalLang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLyrics, setModalLyrics] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef(null);

  const [playSongLyrics, { isLoading: playSongLyricsIsLoading }] =
    useTextToSpeechMutation();

  // Function to remove parentheses from a string
  const removeParentheses = (str) => str.replace(/\([^)]+\)/g, "");
  const originalLyrics = lyrics[originalLang] || lyrics.english;
  const translatedLyrics =
    originalLang === "hebrew" ? lyrics.arabic : lyrics.hebrew;
  const translatedName = originalLang === "hebrew" ? name.arabic : name.hebrew;

  async function playSongInMegaphone(
    originalOrTranslatedLyrics,
    megaphoneSide
  ) {
    try {
      setIsModalOpen(true);
      setModalLyrics(
        originalOrTranslatedLyrics === translatedLyrics
          ? translatedLyrics
          : originalLyrics
      );

      if (audioRef.current) {
        audioRef.current.audio.currentTime = 0;
        audioRef.current.audio.pause();
      }

      if (megaphoneSide === audioRef.current?.megaphoneSide) {
        return;
      }

      const response = await playSongLyrics({
        lyrics: originalOrTranslatedLyrics,
      });

      if (!response.data || !response.data.audio) {
        console.error("No audio data received.");
        return;
      }

      const base64Audio = response.data.audio;
      audioRef.current = {
        megaphoneSide,
        audio: new Audio("data:audio/mp3;base64," + base64Audio),
      };
    } catch (error) {
      console.error("Error playing song:", error);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    if (audioRef.current) {
      audioRef.current.audio.currentTime = 0;
      audioRef.current.audio.pause();
    }
    setIsAudioPlaying(false);
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
              alt="megaphone to read translated lyrics"
              onClick={() => playSongInMegaphone(translatedLyrics, "left")}
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
              alt="megaphone to read original lyrics"
              onClick={() => playSongInMegaphone(originalLyrics, "right")}
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
        ModalBodyStyles={S.PlayAudioModal}
      >
        {playSongLyricsIsLoading ? (
          <Animation
            animationGif={translatingGif}
            animationText={["Loading Audio"]}
          />
        ) : (
          <>
            <S.LyricsController>
              <img
                onClick={() => {
                  audioRef.current.audio.currentTime = 0;
                  audioRef.current.audio.pause();
                  setIsAudioPlaying(false);
                }}
                src={stopTtsSvg}
                alt="stop playing lyrics"
              />
              {!isAudioPlaying ? (
                <img
                  onClick={() => {
                    audioRef.current.audio.play();
                    setIsAudioPlaying(true);
                  }}
                  src={playTtsSvg}
                  alt="play lyrics"
                />
              ) : (
                <img
                  onClick={() => {
                    audioRef.current.audio.pause();
                    setIsAudioPlaying(false);
                  }}
                  src={pauseTtsSvg}
                  alt="stop playing lyrics"
                />
              )}
            </S.LyricsController>
            <S.ModalWidth>{modalLyrics}</S.ModalWidth>
          </>
        )}
      </GenericModal>
    </>
  );
};

export default Lyrics;
