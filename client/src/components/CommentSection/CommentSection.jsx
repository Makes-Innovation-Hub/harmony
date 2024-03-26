import React from "react";
import * as S from "./CommentSectionStyles";

export default function CommentSection({ arrayToMap }) {
  return (
    <>
      {arrayToMap.map((comment) => {
        return (
          <S.CommentContainer key={comment?._id}>
            <S.CommentContentContainer>
              <S.UserAvatar src={comment?.avatar} alt="user's avatar" />
              <S.CommentedUser>{comment?.name}</S.CommentedUser>
            </S.CommentContentContainer>
            <S.CommentContent>{comment?.content}</S.CommentContent>
          </S.CommentContainer>
        );
      })}
    </>
  );
}
