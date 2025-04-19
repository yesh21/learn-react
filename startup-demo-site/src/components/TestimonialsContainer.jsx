import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, {useRef, forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const TestimonialsCard = () => {
    return (
        <div class="bg-white overflow-hidden p-4 w-[450px]">
        <img alt="img" class="w-full rounded-t-xl object-cover" src="https://placehold.co/350x300"/>
        <div class="p-4">
         <h2 class="text-lg font-bold">
          Customer Support Outsourcing for a Telecommunications Provider
         </h2>
         <p class="text-gray-600">
          Business Process Outsourcing
         </p>
        </div>
       </div>
    );
};
const TestimonialsSlider = forwardRef((props, ref) => {

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        swipe: true, // Enables swipe functionality
      };
    return (
    <div class="variable-slider flex flex-col p-4">
    <Slider ref={ref} {...settings}>
        <TestimonialsCard/>
        <TestimonialsCard/>
        <TestimonialsCard/>
        <TestimonialsCard/>
        <TestimonialsCard/>
    </Slider>
    </div>
    );
});

const TestimonialsContainer = () => {
    const sliderRef = useRef(null);

    const handleNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const handlePrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    return (
<div>
<div className="container mx-auto py-10">
    <div className="">
        <p className="text-blue-500 uppercase tracking-wide p-4">Our Portfolio</p>
        <div className="flex justify-between items-center p-4 border-t border-gray-300 border-r">
            <h1 className="text-4xl font-semibold text-gray-900">Our featured <span className="font-light">Success Stories</span></h1>
            <div className="flex space-x-4">
                <button onClick={handlePrev} className="slick-slider-prev2 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md slick-arrow">
                <FontAwesomeIcon icon={faArrowLeft} className="text-zinc-700" />
                </button>
                <button onClick={handleNext} className="slick-slider-next2 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md slick-arrow">
                <FontAwesomeIcon icon={faArrowRight} className="text-zinc-700" />
                </button>
            </div>
        </div>
    </div>
</div>
<TestimonialsSlider ref={sliderRef} />
</div>
    );
};


export default TestimonialsContainer;