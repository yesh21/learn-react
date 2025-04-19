import Header from './Header'; 
import Carousel from './Carousel'; 
import IntroContainer from './IntroContainer'; 
import ProductsContainer from './ProductsContainer'; 
import StatsContainer from './StatsContainer';
import TestimonialsContainer from './TestimonialsContainer';
import SubjectContainer from './SubjectContainer';
import BackToTop from './BackToTop';
import Footer from './Footer';
import ParallaxImageDiv from './ParallaxImageDiv';
import BlendCurser from './BlendCurser';

function Index() {
  
    return (
      <>  
      <BlendCurser />
      <Header />
      <BackToTop/>
      <Carousel />
      <ParallaxImageDiv/>
      <IntroContainer />
      <StatsContainer />
      <ProductsContainer/>
      <TestimonialsContainer/>
      <SubjectContainer/>
      <Footer/>
      </>
    )
  }
  
  export default Index
  