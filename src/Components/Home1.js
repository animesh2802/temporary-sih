import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/home1-bg.jpg'; 

function Home1() {
  const topImageRef = useRef(null);

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

  return (
    <div
      ref={topImageRef}
      className="h-screen w-full bg-no-repeat bg-cover snap-start"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'calc(100% + 50px)',
        transition: 'background-position 0.6s ease-out',
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          The <span className="italic text-red-500">Incredible</span> India!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The story of India, in a beautiful artistic presentation.
        </p>
        <p className="mt-8 text-sm font-medium text-gray-700 uppercase tracking-wide">
          Scroll Down
        </p>
        <div className="mt-2 animate-bounce text-red-500 text-2xl">
          ⬇️
        </div>
      </div>
    </div>
  );
}

export default Home1;
