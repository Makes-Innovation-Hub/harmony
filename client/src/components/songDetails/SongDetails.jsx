import { Image } from "./Image";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";
import "./songDetails.css";
import { useGetArtistDataQuery } from "../../api/artistApiSlice";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SongDetails({ artist, songName, img }) {
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);
  const { data, isLoading } = useGetArtistDataQuery(artist, {
    skip: !isQueryExecuted,
  });
  const navigate = useNavigate();

  const handleArtistClick = () => {
    setIsQueryExecuted(true);
  };

  useEffect(() => {
    if (!isLoading && data) {
      navigate("/Artist", { state: { artistData: data } });
    }
  }, [data, isLoading, navigate]);

  return (
    <div className="songDetailsContainer">
      <div className="photoDetailsContainer" onClick={handleArtistClick}>
        <Image src={img} />
      </div>
      <div className="textDetailsContainer">
        <div>
          <h2>{songName}</h2>
        </div>
        <div>
          <h2 className="artistName" onClick={handleArtistClick}>{artist}</h2>
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
