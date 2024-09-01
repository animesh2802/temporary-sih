import React from 'react';
import backgroundImage from '../assets/mohenjo-daro.jpeg'; 

function Home3() {
  return (
    <div className="h-screen w-full relative snap-start">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt='indus valley map'
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">
          Dawn of <span className="italic text-yellow-500">Civilisation</span>
          <br/>
          - <span className='italic text-yellow-500'>Indus Valley</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
        Imagine a land, lush and fertile, bathed in the golden glow of the Indus River. This was the cradle of one of the world's earliest civilizations—the Indus Valley Civilization. Its cities, built with meticulous planning and precision, were a testament to the ingenuity and sophistication of its people.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home3;
