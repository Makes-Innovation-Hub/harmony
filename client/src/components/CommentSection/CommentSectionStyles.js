import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  width: 100%;
`;

export const CommentContentContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentedUser = styled.h3`
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  margin-top: 8px;
  width: 100%;
`;

export const CommentContent = styled.p`
  color: #67727e;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  white-space: pre-line;
  padding-right: 40px;
  overflow-wrap: break-word;
  padding-left: 10px;
`;
