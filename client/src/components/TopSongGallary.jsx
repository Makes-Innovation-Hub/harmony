import { Image, ImageBox, ImageBoxContainer, Title, TopASongCountainer, TopHSongCountainer, } from './TopSongGallaryStyle';
import albumcover from '../assets/eden.jpg'
import cover2 from '../assets/aden.jpg'
import cover3 from '../assets/nasif.jpg'
import cover4 from '../assets/amrdiab.jpg'

export default function TopSongGallary() {
  return (
    <>
    <TopHSongCountainer>
    <Title>Top Hebrow Songs</Title>
    <ImageBoxContainer>
    <ImageBox>
<Image src={albumcover} ></Image>
</ImageBox>
<ImageBox>
<Image src={cover2} ></Image>
</ImageBox>
    </ImageBoxContainer>
    </TopHSongCountainer>
<TopASongCountainer>
<Title>Top Arabic Songs</Title>
<ImageBoxContainer>
    <ImageBox>
<Image src={cover3} ></Image>
</ImageBox>
<ImageBox>
<Image src={cover4} ></Image>
</ImageBox>
    </ImageBoxContainer>
</TopASongCountainer>

    </>
    
  )
}
