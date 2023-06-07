import Div from "./FlexGrowContainer.styled";

function FlexGrowContainer({ flexGrow, minHeight, children, padding }) {
  return (
    <Div
      style={{
        flexGrow: `${flexGrow}`,
        minHeight: `${minHeight}`,
        padding: `${padding}`,
      }}
    >
      {children}
    </Div>
  );
}

export default FlexGrowContainer;
