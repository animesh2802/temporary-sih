import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

function Sidebarcontainer() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const home2Div = document.querySelector('.home2').offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= home2Div) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showSidebar && <Sidebar />}
    </>
  );
}

export default Sidebarcontainer;
