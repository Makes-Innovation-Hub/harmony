import Div from "./FlexGrowContainer.styled";

function FlexGrowContainer({flexGrow, children}){
    return <Div style={{flexGrow: `${flexGrow}`}}>{children}</Div>
}

export default FlexGrowContainer