import Wrapper from "./ContentWrapper.styled"

function ContentWrapper ({padding, justifyContent, flexDirection, minHeight, children}){
    return <Wrapper style={{padding: `${padding}`, justifyContent: `${justifyContent}`, flexDirection: `${flexDirection}`, minHeight: `${minHeight}`}}>{children}</Wrapper>
}

export default ContentWrapper