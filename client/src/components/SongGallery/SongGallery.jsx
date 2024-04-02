import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
  SectionTitle,
  NoCoverSvg,
  NoCoversContainer,
} from "./SongGalleryStyle.js";
import NoCoversSvg from "../../assets/svgs/no-covers.svg";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function SongGallery({
  smallTitle,
  dataToMap1,
  dataToMap2,
  sectionTitle,
}) {
  const { t } = useTranslation();
  const [title1, title2] = smallTitle;

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // The number here determines the speed of the scroll
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <SongGallary>
        <TopHSongCountainer>
          <SectionTitle>{t(sectionTitle)}</SectionTitle>
          <Title>{t(title1)}</Title>

          {dataToMap1?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}

          <ImageBoxContainer
            ref={containerRef1}
            onMouseDown={(e) => startDragging(e, containerRef1)}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={(e) => onDrag(e, containerRef1)}
          >
            {dataToMap1}
          </ImageBoxContainer>
        </TopHSongCountainer>

        <TopASongCountainer>
          <Title>{t(title2)}</Title>
          {dataToMap2?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}

          <ImageBoxContainer
            ref={containerRef2}
            onMouseDown={(e) => startDragging(e, containerRef2)}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={(e) => onDrag(e, containerRef2)}
          >
            {dataToMap2}
          </ImageBoxContainer>
        </TopASongCountainer>
      </SongGallary>
    </>
  );
}
