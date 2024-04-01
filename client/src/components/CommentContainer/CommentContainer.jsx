import * as S from "../../pages/CoverPage/CoverPage.styles";
import AddComment from "../AddComment/AddComment";
import CommentSection from "../CommentSection/CommentSection";

export default function CommentContainer({
  updatedCoverSongSuccess,
  updatedCoverSong,
  isCommenting,
  currentUser,
  commentRef,
  handleAddComment,
}) {
  return (
    <S.CommentSection>
      {updatedCoverSongSuccess && (
        <CommentSection arrayToMap={updatedCoverSong?.comments} />
      )}

      {isCommenting && (
        <AddComment
          avatar={currentUser?.avatar}
          commentRef={commentRef}
          handleAddComment={handleAddComment}
        />
      )}
    </S.CommentSection>
  );
}
