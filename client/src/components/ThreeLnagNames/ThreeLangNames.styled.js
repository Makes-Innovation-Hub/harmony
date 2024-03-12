import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  gap: 7px;

  @media screen and (min-width: 769px) {
    /* display: relative; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  p {
    color: #333333;
    font-family: ABeeZee;
    font-style: italic;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export default Wrapper;
