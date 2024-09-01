import React from 'react';
import backgroundImage from '../assets/mohenjo-ruins.jpeg';
import priestImage from '../assets/priest.jpeg';

function Home4() {
  return (
    <div className="h-screen w-full relative snap-start">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt='Mohenjo-daro ruins'
      />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="flex flex-col space-y-4 mx-10">
          <p className="text-3xl max-w-2xl">
            Mohenjo-daro, one of the most renowned cities of this civilization, was a marvel of urban planning. Its streets were laid out in a grid pattern, with houses made of brick and equipped with advanced sanitation systems. The Great Bath, a massive rectangular pool, was a testament to the city's focus on hygiene and communal gatherings.
          </p>
        </div>
        <img src={priestImage} alt="Priest from Mohenjo-daro" className="mt-4 rounded-md mx-10" />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home4;