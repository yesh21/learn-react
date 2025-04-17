import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CIRCUMFERENCE = 307.919; // From your SVG's stroke-dasharray
const MIN_OFFSET = 0;          // When scrolled to bottom
const MAX_OFFSET = 307.919;    // When at the top

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [dashOffset, setDashOffset] = useState(MAX_OFFSET);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      // Calculate offset: at top = MAX_OFFSET, at bottom = MIN_OFFSET
      const offset = MAX_OFFSET - scrollPercent * (MAX_OFFSET - MIN_OFFSET);
      setDashOffset(offset);
      setVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 100,
          padding: 0,
        }}
        aria-label="Back to top"
      >

        <svg
          width="50"
          height="50"
          viewBox="-1 -1 102 102"
        >                
        <FontAwesomeIcon icon={faAngleUp} x="25" y="25" width="45" height="45" className="ml-2 text-slate-500" />

          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 0.1s linear",
              strokeDasharray: `${CIRCUMFERENCE}, ${CIRCUMFERENCE}`,
              strokeDashoffset: dashOffset,
              stroke: "#616161",
              strokeWidth: 4,
              fill: "none",
            }}
          />
        </svg>
      </button>
    )
  );
}

export default BackToTop;
