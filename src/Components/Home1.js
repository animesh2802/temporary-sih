import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/home1bg.jpeg'; 

function Home1() {
  const topImageRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const movementStrength = 50; 
      const width = movementStrength / window.innerWidth;
      const height = movementStrength / window.innerHeight;

      const pageX = e.pageX - (window.innerWidth / 2);
      const pageY = e.pageY - (window.innerHeight / 2);

      const newvalueX = width * pageX * -1 - 15;
      const newvalueY = height * pageY * -1 - 30;

      if (topImageRef.current) {
        topImageRef.current.style.backgroundPosition = `${newvalueX}px ${newvalueY}px`;
      }
    };

    const topImageDiv = topImageRef.current;
    if (topImageDiv) {
      topImageDiv.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (topImageDiv) {
        topImageDiv.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 800); // Delay for 0.7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={topImageRef}
      className="h-screen w-full bg-no-repeat bg-cover snap-start relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'calc(100% + 50px)',
        transition: 'background-position 0.6s ease-out',
      }}
    >
      {/* White smoke-like filter overlay */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-20 ${showOverlay ? 'opacity-20' : 'opacity-0'}`}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white m-[137px] top-1">
          <span className=" text-black">Incredible </span>
          <span className="italic text-black ">India!</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          The story of India, in a beautiful artistic presentation.
        </p>
      </div>
    </div>
  );
}

export default Home1;
