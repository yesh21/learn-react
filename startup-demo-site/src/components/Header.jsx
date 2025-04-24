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
    {props.subnames.map((item) =>(
              <li>
              <Link to={item.value} className="block px-4 py-2 hover:bg-gray-100" >{item.name}</Link>
              </li>
      ))}
      </ul>
    </div>
  </div>
);
};

export const HeaderLinksData = [
  {
    name: "SERVICES",
    subnames: [
      { name: "SubName1", value: "/learn-react/data-ai" },
      { name: "SubName2", value: "/learn-react/data-ai" },
      { name: "SubName3", value: "/learn-react/data-ai" }
    ]
  },
  {
    name: "INNOVATION",
    subnames: [
      { name: "SubName4", value: "/learn-react/data-ai" },
      { name: "SubName5", value: "/learn-react/data-ai" },
      { name: "SubName6", value: "/learn-react/data-ai" }
    ]
  },
  {
    name: "ABOUT",
    subnames: [
      { name: "SubName1", value: "/learn-react/data-ai" },
      { name: "SubName2", value: "/learn-react/data-ai" },
      { name: "SubName3", value: "/learn-react/data-ai" }
    ]
  },
  {
    name: "INSIGHTS",
    subnames: [
      { name: "SubName1", value: "/learn-react/data-ai" },
      { name: "SubName2", value: "/learn-react/data-ai" },
      { name: "SubName3", value: "/learn-react/data-ai" }
    ]
  },
  {
    name: "CONTACT",
    subnames: [
      { name: "SubName1", value: "/learn-react/data-ai" },
      { name: "SubName2", value: "/learn-react/data-ai" },
      { name: "SubName3", value: "/learn-react/data-ai" }
    ]
  }
];


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
      {
        HeaderLinksData.map((item, index) =>(
          <HoverDropdown key={index} {...item} />
        ))
      }
      <Link to="/learn-react/careers" className="relative px-4 py-2 mb-2 text-black rounded" >CAREERS</Link>
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
