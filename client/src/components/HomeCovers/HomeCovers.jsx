import { Link } from "react-router-dom";
import {
  CoverBox,
  TitleContainer,
  ByArtist,
  ImgStyles,
} from "./HomeCoversStyle";

function HomeCovers({ id, backgroundImg, artist, state }) {
  return (
    <>
      <CoverBox>
        <Link to={`/cover/${id}`} state={state}>
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

export default HomeCovers;
