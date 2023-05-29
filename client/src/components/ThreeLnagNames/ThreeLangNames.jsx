import Wrapper from "./ThreeLangNames.styled";

function ThreeLangNames({arabicName, hebrewName, englishName}){
    return (
        <>
        <Wrapper>
            <h2>{englishName}</h2>
            <h2>{hebrewName}</h2>
            <h2>{arabicName}</h2>
        </Wrapper>
        </>
    )
}

export default ThreeLangNames