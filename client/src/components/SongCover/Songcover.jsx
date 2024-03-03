import { Link } from "react-router-dom";
import {
  CoverBox,
  TitleContainer,
  ByArtist,
  ImgStyles,
  LikesAndViewsContainer,
} from "./SongCoverStyles";

function Songcover({ backgroundImg, artist, state, likes, views }) {
  return (
    <>
      <TitleContainer>
        <ByArtist>By {artist}</ByArtist>
      </TitleContainer>
      <CoverBox>
        <Link to={"/cover"} state={state}>
          <ImgStyles
            width="560"
            height="255"
            src={`https://img.youtube.com/vi/${backgroundImg}/maxresdefault.jpg`}
            alt="Song cover"
          ></ImgStyles>
        </Link>
      </CoverBox>
      <LikesAndViewsContainer>
        <p>{views} views</p>
        <p>{likes} likes</p>
      </LikesAndViewsContainer>
    </>
  );
}

export default Songcover;
