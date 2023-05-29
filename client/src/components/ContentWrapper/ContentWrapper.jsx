import Wrapper from "./ContentWrapper.styler"

function ContentWrapper ({padding, justifyContent, children}){
    return <Wrapper style={{padding: `${padding}`, justifyContent: `${justifyContent}`}}>{children}</Wrapper>
}

export default ContentWrapper