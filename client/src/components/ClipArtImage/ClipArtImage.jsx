import Image from "./ClipArtImage.styled"

function ClipArtImage({height, width, imgURL}){
    return <Image style={{width: `${width}`, height: `${height}`,  background: `url(${imgURL}) no-repeat center center cover`}}/>
}

export default ClipArtImage