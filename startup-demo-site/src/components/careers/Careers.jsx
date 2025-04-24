import BlendCurser from '../BlendCurser';
import Header from '../Header';
import BackToTop from '../BackToTop';
import Footer from '../Footer';


function Careers() {
  
    return (
      <>
      <BlendCurser />
      <Header />
      <BackToTop/>
<div class=" mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 relative z-9 bg-white">
   <h1 class="text-5xl sm:text-6xl font-semibold leading-tight mx-auto text-center">
    Discover your place at‎ 
    <span class="text-[#5BA9C6]">
    ‎ MakeInIndia
    </span>
   </h1>

   <div class="flex items-center mt-16 max-w-5xl mx-auto">
    <div class="relative w-48 h-48 flex">
  <svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg" className='p-4'>
  <path d="M50 45 l7 7-7 7" stroke-linecap="round" strokeLinejoin="round"/>

    <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none"/>
    <text>
      <textPath href="#circlePath" startOffset="0%" className='text-sm font-light'>
        LOOKOUT AT OUR CAREERS PORTAL ‎ .
      </textPath>
    </text>
  </svg>
    </div>
    <p class="ml-10 text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
     We’re on a mission to bring everyone the inspiration to create a life they love. Our team is at the heart of this mission, and we’re looking for creative minds to join us.
    </p>
   </div>
   <div class="mt-20 flex justify-center">
    <button class="bg-[#5BA9C6] text-black text-base sm:text-lg font-normal rounded-full px-16 py-4 max-w-md w-full hover:text-white hover:bg-slate-800">
     Explore Current Job Openings
    </button>
   </div>
  </div>
  <Footer/>
  </>
    );
  };
  
  export default Careers
