import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/home1bg.jpeg';
import 'animate.css'; // Import Animate.css

function Home1() {
  const topImageRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const text1 = " Incredible ";
  const text2 = "India!";

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

  useEffect(() => {
    const typeText = () => {
      if (textIndex < text1.length + text2.length) {
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTyping(false);
      }
    };

    const deleteText = () => {
      if (textIndex > 0) {
        setTextIndex((prevIndex) => prevIndex - 1);
      } else {
        setIsTyping(true);
      }
    };

    const intervalId = setInterval(() => {
      if (isTyping) {
        typeText();
      } else {
        deleteText();
      }
    }, 100); // Adjust speed here

    return () => clearInterval(intervalId);
  }, [textIndex, isTyping]);

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
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-200 ${showOverlay ? 'opacity-40' : 'opacity-0'}`}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white m-[137px] top-1 animate__animated animate__fadeIn animate__delay-0.9s animate__duration-1s filter backdrop-blur-[3px]">
          <span className=" text-cyan-600 text-8xl">{text1.substring(0, textIndex)}</span>
          <span className="italic text-red-500 text-8xl">{text2.substring(0, textIndex - text1.length)}</span>
        </h1>
        <p className="mt-4 text-3xl text-white animate__animated animate__fadeIn animate__delay-1.1s animate__duration-1s filter backdrop-blur-[2px] h-[50px]">  {/* Adjust height as needed */}
          The story of India, in a timeline based storytelling format.
        </p>
      </div>
    </div>
  );
}

export default Home1;