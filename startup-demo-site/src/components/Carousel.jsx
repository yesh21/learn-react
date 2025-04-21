import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselImage1 from '../assets/istockphoto-132.jpg';
import CarouselImage2 from '../assets/istockphoto-135.jpg';
import CarouselImage3 from '../assets/tech.jpg';
import CarouselButtons from './CarouselButtons'; // Import the Header component
import CarouselSlideNumber from './CarouselSlideNumber'; // Import the Header component
import React, { useState } from "react";

const CarouselSlides = (props) => {
    return (
    <div className="relative">
        <img className="object-cover h-svh w-full opacity-70" src={props.imagescr}/>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-normal text-white">TRANSFORM YOUR BUSINESS</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white">with our AI solutions</h2>
        </div>
    </div>
);
};



const Carousel = () => {
  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        lazyLoad: "ondemand",
        dots: true,
        infinite: true,
        speed: 1000,
        //fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        afterChange: (index) => setCurrentSlide(index+1), // Update state on slide change

          };
    screen
    return (
      <div className="w-full">
        <div className="h-svh min-h-screen w-full m-auto">
        <Slider ref={slider} {...settings}>
            <CarouselSlides imagescr = {CarouselImage1}></CarouselSlides>
            <CarouselSlides imagescr = {CarouselImage2}></CarouselSlides>
            <CarouselSlides imagescr = {CarouselImage3}></CarouselSlides>
        </Slider>
        </div>
            <CarouselSlideNumber currentSlideNumber = {currentSlide} />
            <CarouselButtons sliderRef={slider} />
        </div>

);
};



export default Carousel;