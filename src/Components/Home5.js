import React from 'react';
import backgroundImage from '../assets/vedic-bg.jpg'; 

function Home5() {
  return (
    <div className="h-screen w-full relative snap-start">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt='vedic-painting'
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white font-samarkan">
        <p className='max-w-4xl text-3xl'>
        As the Indus Valley Civilization flourished, the seeds of another significant Indian culture were being sown. To the east, the Vedic people were migrating from Central Asia, bringing with them their unique language, traditions, and religious beliefs. The clash and fusion of these two cultures would shape the course of Indian history for centuries to come.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Home5;