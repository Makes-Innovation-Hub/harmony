import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function ShareButton({ url, title }) {
  return (
    <main>
      <form className="share-container">
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon size={28} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={28} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={28} round={true} />
        </TwitterShareButton>
        <FacebookMessengerShareButton url={url} title={title}>
          <FacebookMessengerIcon size={28} round={true} />
        </FacebookMessengerShareButton>
      </form>
    </main>
  );
}

export default ShareButton;
