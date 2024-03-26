import styled from "styled-components";

export const AllCommentContainer = styled.div`
  padding-bottom: 30px;
`;

export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentInput = styled.textarea`
  border: 1px solid #80808054;
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 60px;
  padding-right: 20px;
  width: 285px;
  resize: none;
  width: 100%;
`;

export const SendButton = styled.button`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  color: #ffffff;
  background: #4285f4;
  border: none;
  width: 87px;
  height: 29px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const CommentAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
`;
