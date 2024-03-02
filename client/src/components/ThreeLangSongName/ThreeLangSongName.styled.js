import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

  p {
    color: ${(props) => (props.isplaying === "true" ? "#498af4" : "#333333")};
    font-family: "ABeeZee Italic";
    text-align: center;
    margin: 0.3rem;
    font-style: italic;
    font-weight: 400;
  }
`;
export default Wrapper;

// color: ${({ playing }) => (playing ? "#498af4" : "#333333")};
