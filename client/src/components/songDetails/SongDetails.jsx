import { Image } from "./Image";
import imgSrc from "../../assets/songDetails/Rectangle 3.png";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";
import "./songDetails.css";

function SongDetails() {
  return (
    <div className="songDetailsContainer">
      <div className="photoDetailsContainer">
        <Image src={imgSrc} />
      </div>
      <div className="textDetailsContainer">
        <div>
          <h2>Song Name</h2>
        </div>
        <div>
          <h2 className="artistName">Artist Name</h2>
        </div>
        <div className="translation-div">
          <button className="btn">
            <img src={arabicImg} />
          </button>
          <img src={arrowImg} />
          <button className="btn">
            <img src={hebrewImg} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;