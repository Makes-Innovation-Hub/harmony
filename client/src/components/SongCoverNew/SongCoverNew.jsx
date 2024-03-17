import { Link } from "react-router-dom";
import {
  CoverBox,
  TitleContainer,
  ByArtist,
  ImgStyles,
} from "./SongCoverStyles";

function SongCoverNew({ backgroundImg, artist, state, likes, views }) {
  return (
    <>
      <CoverBox>
        <Link to={"/cover"} state={state}>
          <ImgStyles
            width="560"
            height="255"
            src={`https://img.youtube.com/vi/${backgroundImg}/maxresdefault.jpg`}
            alt="Song cover"
          ></ImgStyles>
        </Link>
        <TitleContainer>
          <ByArtist>By {artist}</ByArtist>
        </TitleContainer>
      </CoverBox>
    </>
  );
}

export default SongCoverNew;
