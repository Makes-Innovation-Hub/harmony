import Image from "./ClipArtImage.styled"

function ClipArtImage({height, width, imgURL, border, borderRadius}){
    return <Image style={{width: `${width}`, height: `${height}`, border: `${border}`, borderRadius:`${borderRadius}`, background: `url('${imgURL}') no-repeat center center/cover`}}/>
}

export default ClipArtImage