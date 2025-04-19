import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const BlendCursor = () => {
  const ballRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    gsap.to(ballRef.current, {
      duration: 0.4,
      x: e.pageX,
      y: e.pageY,
      ease: 'power3.out',
    });
  }, [ballRef]);
  
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return (
    <div
      ref={ballRef}
      style={{
        position: 'absolute',
        top: '-15px',
        left: '-15px',
        pointerEvents: 'none',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        mixBlendMode: 'difference',
        zIndex: 1000,
        //transform: 'translate(-50%, -50%)',
      }}
    >      <svg height="30" width="30" className='custom-cursor-svg'>
        <circle cx="15" cy="15" r="12" fill="#f7f8fa" />
      </svg>
    </div>
  );
};

export default BlendCursor;
