import React from 'react';
//import Navbar from './components/Navbar';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';

function App() {
  return (
    <div className='flex flex-col'>
      <div className='h-[100vh] w-[100vw]'>
        <Home1/>
      </div>
      <div className='h-[100vh] w-[100vw]'>
        <Home2/>
      </div>
    </div>
  );
}

export default App;
