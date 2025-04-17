// function CarouselPrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function CarouselNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }


const CarouselButtons = ({ sliderRef }) => {
    const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };
    return (
   <div className="absolute bottom-0 right-0 bg-white text-black text-lg flex space-x-8 rounded-tl-full py-6 px-3">
    <div className="absolute bg-transparent -left-8 bottom-0 rotate-180">
        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#fff"></path>
        </svg>
    </div>
    <button onClick={handlePrev} className="slick-prev1 ml-8 text-sm focus:outline-none">
     PREV
    </button>
    <span className="text-sm">
     /
    </span>
    <button onClick={handleNext} className="slick-next1 text-sm focus:outline-none">
     NEXT
    </button>
    <div className="absolute bg-transparent -top-10 right-0 rotate-180">
        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#fff"></path>
        </svg>
    </div>
   </div>

);
};



export default CarouselButtons;