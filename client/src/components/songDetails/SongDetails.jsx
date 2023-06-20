import { Image } from "./Image";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";
import "./songDetails.css";

function SongDetails({ artistName, songName, imgURL }) {
  return (
    <div className="songDetailsContainer">
      <div className="photoDetailsContainer">
        <Image src={imgURL} />
      </div>
      <div className="textDetailsContainer">
        <div>
          <h2>{songName}</h2>
        </div>
        <div>
          <h2 className="artistName">{artistName}</h2>
        </div>
        <div className="translation-div">
          <button className="btn">
            <img src={arabicImg} alt="Arabic" />
          </button>
          <img src={arrowImg} alt="Arrow" />
          <button className="btn">
            <img src={hebrewImg} alt="Hebrew" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
