import styled from "styled-components";

export const AllCommentContainer = styled.div`
  padding-bottom: 30px;
`;

export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 40px;
  @media screen and (max-width: 400px) and (max-height: 900px) {
    margin-left: 10px;
  }
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
`;

export const SendButton = styled.button`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;

  color: #ffffff;
  background: #4285f4;
  border: none;
  width: 87px;
  height: 29px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 66.5%;
  margin-top: 20px;

  @media screen and (max-height: 900px) {
    margin-left: 69%;
  }

  @media screen and (max-width: 400px) and (min-height: 800px) {
    margin-left: 66%;
  }
`;
