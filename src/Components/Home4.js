import React from 'react';
import backgroundVideo from '../assets/video.mp4'; 

function Home4() {
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
        <h1 className="text-5xl font-bold">
          Experience the <span className="italic text-yellow-500">Diversity</span>
        </h1>
        <p className="mt-4 text-lg">
          Discover the vast and vibrant cultures of India.
        </p>
        <p className="mt-8 text-sm font-medium uppercase tracking-wide">
          Continue Exploring
        </p>
        <div className="mt-2 animate-bounce text-yellow-500 text-2xl">
          ⬇️
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home4;
