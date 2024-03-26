import styled from "styled-components";

const Wrapped = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 364px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 79px;

    p {
      font-family: ABeeZee;
      font-size: 17px;
      font-style: italic;
      font-weight: 400;
      text-align: center;
      color: #828282;
      margin-top: 1.6rem;
    }
  }
`;
export default Wrapped;
