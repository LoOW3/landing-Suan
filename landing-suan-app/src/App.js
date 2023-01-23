import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import AboutUs from './pages/aboutUs/AboutUs';
import HowItWorks from './pages/howItWorks/HowItWorks';
import Landing from './pages/landing/Landing';
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <Landing />
            } />  
            <Route path="/about_us" element={
                <AboutUs />
            } />  
            <Route path="/how_it_works" element={
                <HowItWorks />
            } />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
