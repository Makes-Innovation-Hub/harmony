// useDragScroll.js
import { useRef, useEffect } from "react";

export const useDragScroll = () => {
  const ref = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
      };

      const handleMouseLeave = () => {
        isDown = false;
      };

      const handleMouseUp = () => {
        isDown = false;
      };

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 3; // The speed of scroll
        el.scrollLeft = scrollLeft - walk;
      };

      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseup", handleMouseUp);
      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mouseup", handleMouseUp);
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return ref;
};
