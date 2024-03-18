import React from "react";
import * as S from "./AddCommentStyles";

export default function AddComment({ avatar, commentRef, handleAddComment }) {
  return (
    <S.AllCommentContainer>
      <S.CommentContainer>
        <S.UserAvatar src={avatar} alt="user's avatar" />
        <S.CommentInput
          name="comment"
          id="comment"
          type="text"
          placeholder={`Add a comment…${"\n"}Maximum 130 chars`}
          ref={commentRef}
          required
          maxLength={130}
        ></S.CommentInput>
      </S.CommentContainer>
      <S.SendButton onClick={handleAddComment}>SEND</S.SendButton>
    </S.AllCommentContainer>
  );
}
