import React, { useEffect, useRef } from 'react';
import backgroundVideo from '../assets/India-intro.mp4';
import 'animate.css'; // Import Animate.css

function Home2() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        textRef.current.classList.add('animate__fadeIn', 'animate__delay-0.9s', 'animate__duration-1s');
      } else {
        textRef.current.classList.remove('animate__fadeIn', 'animate__delay-0.9s', 'animate__duration-1s');
      }
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-screen w-full relative snap-start">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-serif m-[40px]">
          Discover the <span className="italic text-yellow-500">Heritage</span> of India
        </h1>
        <hr className="w-[500px] border-t-2 border-gray-300 my-4" />
        <div ref={textRef} className="animate__animated">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-20 blur-xl">{/* Adjust blur strength here */}</div>
            <p className="mt-4 text-2xl max-w-2xl font-serif z-10">
              India, a vast and diverse country, is home to one of the world's oldest and most rich civilizations. With a history dating back thousands of years, India has been a melting pot of cultures, religions, and traditions.
            </p>
            <p className='mt-4 text-2xl max-w-2xl font-serif z-10'>
              From the majestic Himalayas to the serene beaches of the Indian Ocean, India boasts breathtaking natural beauty. Its ancient cities, bustling markets, and spiritual centers offer a glimpse into the country's rich heritage.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home2;