
import IndiaLogo from '../assets/indialogo.png';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { HeaderLinksData } from './Header';
import { Link } from 'react-router-dom';


const Collapsibles = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <div class="border-b border-gray-300">
      <div className="w-full max-w-md mx-auto">
        <div
          className="flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
      <span class="font-semibold text-2xl px-6">
       {props.name}
      </span>
      <span class="text-2xl p-6 bg-gray-100">
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-gray-600" />
      </span>        
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} mt-2 mb-4 space-y-2 px-6`}>
      {props.subnames.map((item) =>(
              <li>
              <Link to={item.value} className="block px-4 py-2 hover:bg-gray-100" >{item.name}</Link>
              </li>
      ))}     </ul>
      </div>
      </div>
    );
  };

  
const MobileSidebar = ({ onClose }) => {
    return (

<div class="h-full w-full mx-auto fixed bg-white z-10">
   <div class="container mx-auto flex justify-between items-center py-4 px-6">
    <img alt="Company Logo" class="h-10" src={IndiaLogo}/>
    <button onClick={onClose} class="text-2xl">x
    </button>
   </div>
   <div class="border-t border-gray-300 mt-12 ps-6 pb-40 overflow-scroll max-h-screen">
    {HeaderLinksData.map((item) =>(
          <Collapsibles {...item}/>
    ))}
   </div>
  </div>

);
};

export default MobileSidebar;