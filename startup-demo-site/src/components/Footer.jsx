import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import IndiaLogo from '../assets/indialogo.png';

const Footer = () => {
    return (
    <footer class="bg-black text-white">
    <div class="flex flex-col md:flex-row justify-between p-4 border-b border-zinc-700">
   <div class="flex justify-between items-center mb-4">
    <img alt="Company logo with an infinity symbol and text 'LEITTBEX AI'" class="h-12" src={IndiaLogo}/>
    </div>
    <div class="flex space-x-4 max-w-full">
     <a class="flex items-center space-x-1" href="#">
      <i class="fab fa-linkedin">
      </i>
      <span>
       LinkedIn
      </span>
     </a>
     <a class="flex items-center space-x-1" href="#">
      <i class="fab fa-instagram">
      </i>
      <span>
       Instagram
      </span>
     </a>
     <a class="flex items-center space-x-1" href="#">
      <i class="fab fa-twitter">
      </i>
      <span>
       (X) Twitter
      </span>
     </a>
     <a class="flex items-center space-x-1" href="#">
      <i class="fab fa-facebook">
      </i>
      <span>
       Facebook
      </span>
     </a>
    </div>
</div>
   <main class="flex flex-col md:flex-row justify-between">
    <div class="md:w-3/5 p-8 border-r border-zinc-700">
     <h1 class="text-4xl md:text-6xl font-bold leading-tight">
      Facing digital transformation challenges? Leverage our expertise to gain
     </h1>
     <h2 class="text-4xl md:text-6xl font-bold mt-4">
        <span class="text-blue-500 underline">Let's Connect.</span>
    </h2>
    <div class="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
        <div class="bg-gray-800 rounded-full px-6 py-3">
            <p>info@example.com</p>
        </div>
        <div class="bg-gray-800 rounded-full px-6 py-3">
            <p>+91 9999 999 999</p>
        </div>
    </div>
    </div>
    <div class="md:w-1/3 p-6 md:mt-0">
    <h2 class="text-xl font-semibold mb-4">
      USEFUL LINKS
     </h2>
     <div class="flex justify-between">
     <ul class="space-y-2">
      <li>
       <a class="hover:underline" href="#">
        Services
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Innovation
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        About
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Partners
       </a>
      </li>
      </ul>
    <ul>
        <li>
      <a class="hover:underline" href="#">
        Careers
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Job Openings
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Success Stories
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Blog
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Contact
       </a>
      </li>
     </ul>
    </div>
    <div class="flex items-center bg-gray-800 rounded-full px-4 py-2 mt-4 w-4/5 mx-auto">
        <input type="email" placeholder="Type Your Email" class="bg-transparent text-white outline-none w-full"/>
        <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
    </div>
    </div>
   </main>
   <div class="py-8 text-center">
    <p class="text-gray-500">© Copyright 2025 Make in India. All Rights Reserved</p>
</div>
</footer>
    );
};

export default Footer;