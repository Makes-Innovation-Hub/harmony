import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import * as S from "./ShareButtonStyles";

function ShareButton({ updatedCoverSong, closeModal }) {
  const url = `https://youtu.be/${updatedCoverSong?.youtubeUrl}`;
  const title = `Check out this cover song that has been created on this song: ${updatedCoverSong?.originalSongName}`;
  return (
    <S.ShareLinks>
      <S.ShareLinksChild>
        <WhatsappShareButton url={url} title={title} onClick={closeModal}>
          <WhatsappIcon size={75} round />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title} onClick={closeModal}>
          <TwitterIcon size={75} round />
        </TwitterShareButton>

        <FacebookShareButton url={url} title={title} onClick={closeModal}>
          <FacebookIcon size={75} round />
        </FacebookShareButton>

        <TelegramShareButton url={url} title={title} onClick={closeModal}>
          <TelegramIcon size={75} round />
        </TelegramShareButton>
      </S.ShareLinksChild>
    </S.ShareLinks>
  );
}

export default ShareButton;
