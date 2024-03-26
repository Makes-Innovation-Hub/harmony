import styled from "styled-components";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterCol = styled(Col)`
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const CenterRow = styled(Row)`
  justify-content: center;
  align-items: ${(props) => (props.aligned ? props.aligned : "center")};
  cursor: ${({ $cursor }) => $cursor && "pointer"};
`;

export default { Col, CenterCol, Row, CenterRow };
