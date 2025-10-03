"use client";

import { useEffect, useState } from "react";
import { TopArrow } from "./Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to top"
    >
      <span className="font-medium text-xl leading-130 text-white">
        Back to top
      </span>
      <TopArrow className="back-to-top-arrow" />
    </button>
  ) : null;
};

export default BackToTop;
