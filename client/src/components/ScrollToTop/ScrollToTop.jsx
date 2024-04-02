import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ refToScroller }) {
  const { pathname } = useLocation();

  useEffect(() => {
    refToScroller.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [pathname]);

  return null;
}
export default ScrollToTop;
