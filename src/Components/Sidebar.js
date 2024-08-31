import React from 'react';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-[80px] h-full bg-gray-800 text-white flex flex-col justify-center items-center z-20">
      <ul className="space-y-4">
        <li>
          <a href="#section1" className="text-white hover:text-red-500">Home</a>
        </li>
        <li>
          <a href="#section2" className="text-white hover:text-red-500">Diversity</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
