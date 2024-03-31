import { Link } from "react-router-dom";
import * as S from "../topPlaylist/PlaylistStyle";

function HomeCovers({ id, backgroundImg, artist, state }) {
  return (
    <>
      <S.ImageBox>
        <Link to={`/cover/${id}`} state={state}>
          <S.Image
            src={`https://img.youtube.com/vi/${backgroundImg}/maxresdefault.jpg`}
            alt="Song cover"
          ></S.Image>
        </Link>
        <S.Box>
          <S.SongP>By {artist}</S.SongP>
        </S.Box>
      </S.ImageBox>
    </>
  );
}

export default HomeCovers;
