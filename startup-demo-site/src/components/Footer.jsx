import React, { useLayoutEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import IndiaLogo from '../assets/indialogo.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";

const Footer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const footerRef = useRef(null);

    useLayoutEffect(() => {
      const handleLoad = () => {    
        gsap.set(footerRef.current, { y: -600 });

        gsap.to(footerRef.current    , {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: $('div.top-div'),
              start: "top center",
              //markers: true,
              end: "center top",
              scrub: true, 
            },
          });
            console.log("gsap")  
          };

      // Cleanup
      window.addEventListener('load', handleLoad);

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('load', handleLoad);
      };
    }, []);
  

    return (
    <footer ref={footerRef} className="bg-black text-white">
    <div className="flex flex-col md:flex-row justify-between p-4 border-b border-zinc-700">
   <div className="flex justify-between items-center mb-4">
    <img alt="logo" className="h-12" src={IndiaLogo}/>
    </div>
    <div className="flex space-x-4 max-w-full">
     <a className="flex items-center space-x-1" href="#">
      <i className="fab fa-linkedin">
      </i>
      <span>
       LinkedIn
      </span>
     </a>
     <a className="flex items-center space-x-1" href="#">
      <i className="fab fa-instagram">
      </i>
      <span>
       Instagram
      </span>
     </a>
     <a className="flex items-center space-x-1" href="#">
      <i className="fab fa-twitter">
      </i>
      <span>
       (X) Twitter
      </span>
     </a>
     <a className="flex items-center space-x-1" href="#">
      <i className="fab fa-facebook">
      </i>
      <span>
       Facebook
      </span>
     </a>
    </div>
</div>
   <main className="flex flex-col md:flex-row justify-between items-center">
    <div className="md:w-3/5 p-8 border-r border-zinc-700">
     <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Facing digital transformation challenges? Leverage our expertise to gain
     </h1>
     <h2 className="text-4xl md:text-6xl font-bold mt-4">
        <span className="text-blue-500 underline">Let's Connect.</span>
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-gray-800 rounded-full px-6 py-3">
            <p>info@example.com</p>
        </div>
        <div className="bg-gray-800 rounded-full px-6 py-3">
            <p>+91 9999 999 999</p>
        </div>
    </div>
    </div>
    <div className="md:w-2/5 lg:w-1/3 p-6 md:mt-0">
    <h2 className="text-xl font-semibold mb-4">
      USEFUL LINKS
     </h2>
     <div className="flex gap-10 justify-start">
     <ul className="space-y-2">
      <li>
       <a className="hover:underline" href="#">
        Services
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Innovation
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        About
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Partners
       </a>
      </li>
      </ul>
    <ul>
        <li>
      <a className="hover:underline" href="#">
        Careers
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Job Openings
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Success Stories
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Blog
       </a>
      </li>
      <li>
       <a className="hover:underline" href="#">
        Contact
       </a>
      </li>
     </ul>
    </div>
    <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mt-8 lg:w-4/5">
        <input type="email" placeholder="Type Your Email" className="bg-transparent text-white outline-none w-full"/>
        <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
    </div>
    </div>
   </main>
   <div className="py-8 text-center">
    <p className="text-gray-500">© Copyright 2025 Make in India. All Rights Reserved</p>
</div>
</footer>
    );
};

export default Footer;