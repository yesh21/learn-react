import Header from './components/Header'; 
import Carousel from './components/Carousel'; 
import IntroContainer from './components/IntroContainer'; 
import ProductsContainer from './components/ProductsContainer'; 
import StatsContainer from './components/StatsContainer';
import TestimonialsContainer from './components/TestimonialsContainer';
import SubjectContainer from './components/SubjectContainer';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import ParallaxImageDiv from './components/ParallaxImageDiv';

import './App.css'

function App() {
  
  return (
    <>
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

export default App
