import React, { useState, useEffect } from 'react';
import IndiaLogo from '../assets/indialogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileSidebar from './MobileSidebar'; // Import the Header component
import { Link } from 'react-router-dom';


const HoverDropdown = (props) => {
  return (
  <div className="relative inline-block text-left group">
    <button className="px-4 py-2 mb-2 text-black rounded">
      {props.name}
    </button>
    <div className="absolute left-0 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity">
      <ul className="py-1">
        <li>
        <Link to="/data-ai" className="block px-4 py-2 hover:bg-gray-100" >Data-Ai</Link>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 2</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 3</a>
        </li>
      </ul>
    </div>
  </div>
);
};



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.75;
      if (window.scrollY > triggerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <div>
<header className="bg-opacity-75 fixed w-full z-10 border-b-2 backdrop-blur-3xl"
      style={{
        backgroundColor: scrolled ? '#fff' : 'transparent',
      }}
    >
   <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <div className="flex items-center">
     <img alt="Company Logo" className="h-8" src={IndiaLogo}/>
    </div>
    <nav className="hidden md:flex lg:space-x-6">
      <HoverDropdown name = "SERVICES" />
      <HoverDropdown name = "INNOVATION" />
      <HoverDropdown name = "ABOUT" />
      <Link to="/careers" className="relative px-4 py-2 mb-2 text-black rounded" >CAREERS</Link>
      <HoverDropdown name = "INSIGHTS" />
      <HoverDropdown name = "CONTACT" />
    </nav>
    <div className="md:hidden">
     <button onClick={() => setSidebarOpen(true)} className="text-white focus:outline-none">
      <FontAwesomeIcon icon={faBars} className="text-gray-600" />
     </button>
    </div>
   </div>

  </header>
     {sidebarOpen && (
      <MobileSidebar onClose={() => setSidebarOpen(false)} />
    )}
    </div>
    );
  };
  

  export default Header;
