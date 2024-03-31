import Image from "../Image/Image";
import * as S from "../../pages/CoverPage/CoverPage.styles";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";

export default function VideoInfo({
  openModal,
  updatedCoverSong,
  handleShowComment,
  likesCount,
  updateLikes,
  userHasLiked,
}) {
  return (
    <S.VideoInfo>
      <S.SameLine onClick={openModal}>
        <S.HoverCursor>
          <Image name={"shareCover"} alt={"share  svg"} />

          <p>Share</p>
        </S.HoverCursor>
      </S.SameLine>
      <p>{updatedCoverSong?.views} Views</p>
      <S.SameLine onClick={handleShowComment}>
        <S.HoverCursor>
          <Image name={"commentCover"} alt={"comment svg"} />
        </S.HoverCursor>
      </S.SameLine>
      <S.SameLine>
        <p className="likes">{likesCount} Likes</p>
        <div onClick={updateLikes}>
          <S.LikedCoverButton
            $likedCover={userHasLiked}
            src={userHasLiked ? likedSvg : likeSvg}
            alt="like svg"
          />
        </div>
      </S.SameLine>
    </S.VideoInfo>
  );
}
