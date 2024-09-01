import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/chatbot-bg.jpeg';

function Home6() {
  const fullText = "Discover Our Chatbot";
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      if (textIndex < fullText.length) {
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

  const displayedText = fullText.slice(0, textIndex);

  return (
    <div className="h-screen w-full relative snap-start">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt='chatbot bg'
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <p className='text-7xl'>
          {displayedText.slice(0, 12)} {/* "Discover Our" */}
          <span className='text-red-500'>{displayedText.slice(12)}</span> {/* "Chatbot" */}
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home6;
