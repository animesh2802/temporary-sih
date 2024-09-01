import React from 'react';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home4 from './Components/Home4';
import Home5 from './Components/Home5';
import Home6 from './Components/Home6';
import Chatbot from './Components/Chatbot';
//import './App.css';
//import Sidebarcontainer from './Components/Sidebarcontainer';

function App() {
  return (
    <div className='relative h-screen'>
      {/*<div>
        <Sidebarcontainer />
      </div>*/}
      <div className='flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll'>
        <div className='home1 h-[100vh] w-[100vw]'>
          <Home1 />
        </div>
        <div className='home2 h-[100vh] w-[100vw]'>
          <Home2 />
        </div>
        <div id="section3" className="snap-start h-screen w-full">
          <Home3 />
        </div>
        <div id="section4" className="snap-start h-screen w-full">
          <Home4 />
        </div>
        <div id="section5" className="snap-start h-screen w-full">
          <Home5 />
        </div>
        <div id="section6" className="snap-start h-screen w-full">
          <Home6 />
        </div>
        <div id='chatbot' className='App'>
          <Chatbot/>
        </div>
      </div>
    </div>
  );
}

export default App;
