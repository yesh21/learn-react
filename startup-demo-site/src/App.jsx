import { useState } from 'react'
import Header from './components/Header'; // Import the Header component
import Carousel from './components/Carousel'; // Import the Header component
import IntroContainer from './components/IntroContainer'; // Import the Header component
import ProductsContainer from './components/ProductsContainer'; // Import the Header component
import StatsContainer from './components/StatsContainer'; // Import the Header component
import TestimonialsContainer from './components/TestimonialsContainer'; // Import the Header component
import SubjectContainer from './components/SubjectContainer'; // Import the Header component
import BackToTop from './components/BackToTop'; // Import the Header component
import Footer from './components/Footer'; // Import the Header component
import $ from 'jquery';
import React, {useRef, useEffect } from 'react';

import './App.css'

function App() {
    const imageRef = useRef(null);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!containerRef.current) return;
        const offsetTop = $(containerRef.current).offset().top;
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (offsetTop < scrollTop + windowHeight) {
          const difference = scrollTop - offsetTop;
          const translate = difference / 2; // Adjust for slower/faster effect
          $(imageRef.current).css('transform', `translateY(${translate}px)`);
        } else {
          $(imageRef.current).css('transform', 'translateY(0)');
        }
      };
  
      $(window).on('scroll', handleScroll);
      return () => {
        $(window).off('scroll', handleScroll);
      };
    }, []);
  
  return (
    <>
    <Header />
    <BackToTop/>
    <Carousel />

    <div class="flex max-w-[1440px] mx-auto py-10 px-6 gap-10 items-center" ref={containerRef}>
    <div class="">
      <img src="https://placehold.co/300x500" alt="" class="w-full h-auto object-cover" width="400" height="600"/>
    </div>
    <div class="" style={{ height: '600px', position: 'relative', overflow: 'hidden', width: '400px' }}>
      <img ref={imageRef} src="https://placehold.co/400x600" alt="" class="w-full h-auto object-cover" width="600" height="600"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', willChange: 'transform' }}
      />
    </div>
    <div class="flex flex-col gap-8">
      <img src="https://placehold.co/400x250" alt="" class="w-full h-auto object-cover" width="500" height="250"/>
      <img src="https://placehold.co/400x250" alt="" class="w-full h-auto object-cover" width="500" height="350"/>
    </div>
  </div>

    <IntroContainer />
    <StatsContainer />
    <ProductsContainer/>
    <TestimonialsContainer/>
    <SubjectContainer/>
    <Footer/>
    </>
  )
}

export default App
