import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTextReveal = ({ text, className }) => {
  const textRef = useRef(null);
  
  // useEffect(() => {
  //   const el = textRef.current;

  //   gsap.fromTo(
  //     el,
  //     {  yPercent: 100, opacity: 0 },
  //     {
  //       duration: 2.5,
  //       opacity: 1,
  //       yPercent: 0,
  //       ease: "power4",
  //       stagger: 0.1,      
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 80%",
  //         end: "top 30%",
  //         //toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

    return (
      <p ref={textRef} className={className}>
      {text}
      </p>
  );
};

export default ScrollTextReveal;
