import React, {useState, useEffect} from 'react'
import logo from "../images/lamhan-logo.png"
import {Popover} from '@headlessui/react'

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="text-white bg-gray-800 p-4 text-center" style={{position: 'fixed', width: '100%'}}>
      {!scrolling && (
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
          <img src={logo} alt="Logo" style={{width: '60px', height: '60px',}} />
        </div>
      )}
      
      <div className="flex justify-center space-x-4">
        <div>Home</div>
        <div>About</div>
        <div>Gallery</div>
        <div>Hours</div>
      </div>
    </div>
  );
};


export default Header