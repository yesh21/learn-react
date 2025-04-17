const CarouselSlideNumber = (props) => {
    return (
<div className="absolute flex bottom-4 left-4 text-white text-4xl">
    <span id = "currentSlideNumber">
     {props.currentSlideNumber}
    </span>
    <span>
    ‎ / 3
    </span>
   </div>

);
};



export default CarouselSlideNumber;