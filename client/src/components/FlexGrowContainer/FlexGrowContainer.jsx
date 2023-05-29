import Div from "./FlexGrowContainer.styled";

function FlexGrowContainer({flexGrow, minHeight, children}){
    return <Div style={{flexGrow: `${flexGrow}`, minHeight:`${minHeight}`}}>{children}</Div>
}

export default FlexGrowContainer