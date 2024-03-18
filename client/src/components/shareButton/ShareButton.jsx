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
import { ShareLinks } from "../../pages/CoverPage/CoverPage.styles";

function ShareButton({ coverData }) {
  const url = `https://youtu.be/${coverData?.youtubeUrl}`;
  const title = `Check out this cover song that has been created on this song: ${coverData?.originalSongName}`;
  return (
    <ShareLinks>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={75} round />
      </FacebookShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={75} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={75} round />
      </TwitterShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={75} round />
      </EmailShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={75} round />
      </TelegramShareButton>
    </ShareLinks>
  );
}

export default ShareButton;
