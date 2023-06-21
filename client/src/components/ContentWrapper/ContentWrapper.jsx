import Wrapper from "./ContentWrapper.styled";

function ContentWrapper({
  padding,
  justifyContent,
  flexDirection,
  minHeight,
  children,
  width,
}) {
  return (
    <Wrapper
      style={{
        padding: `${padding}`,
        justifyContent: `${justifyContent}`,
        flexDirection: `${flexDirection}`,
        minHeight: `${minHeight}`,
        width: `${width}`,
      }}
    >
      {children}
    </Wrapper>
  );
}

export default ContentWrapper;
