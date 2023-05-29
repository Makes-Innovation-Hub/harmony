import Image from "./ClipArtImage.styled"

function ClipArtImage({height, width, imgURL, border}){
    return <Image style={{width: `${width}`, height: `${height}`, border: `${border}`,  background: `url('${imgURL}') no-repeat center center/cover`}}/>
}

export default ClipArtImage