import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import AboutUs from './pages/aboutUs/AboutUs';
import HowItWorks from './pages/howItWorks/HowItWorks';
import Landing from './pages/landing/Landing';
import HeaderNavbar from "./pages/landing/navbar/HeaderNavbar";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <HeaderNavbar />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
