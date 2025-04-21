import Index from './components/Index'; 
import DataAi from './components/services/DataAi'; 
import Careers from './components/careers/Careers'; 

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/learn-react/" element={<Index />} />
        <Route path="/learn-react/data-ai" element={<DataAi />} />
        <Route path="/learn-react/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
