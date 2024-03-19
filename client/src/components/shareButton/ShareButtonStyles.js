import styled from "styled-components";

export const ShareLinks = styled.div`
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ShareLinksChild = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
