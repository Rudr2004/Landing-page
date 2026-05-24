import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 1500, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    let animationFrameId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTimestamp = null;
          
          // Parse numerical value (e.g. 10,000 becomes 10000)
          const rawString = value.toString();
          const cleanNumberString = rawString.replace(/[^0-9]/g, '');
          const numericValue = parseInt(cleanNumberString, 10) || 0;
          const hasCommas = rawString.includes(',');

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress * (2 - progress); // easeOutQuad
            const currentVal = Math.floor(easedProgress * numericValue);

            if (hasCommas) {
              setCount(currentVal.toLocaleString());
            } else {
              setCount(currentVal);
            }

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          
          if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
          }
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

