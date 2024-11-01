// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/TopBanner';
import HeroCarousel from './components/HeroCarasoul';
import AdventureTours from './components/AdventureTours';
import WaterSportsAdventure from './components/WaterAdevnture';
import HoneyMoon from './components/HoneyMoon';
import WhatsAppButton from './components/WhatsappButton';
import Loader from './components/Loader';
import BookNow from './components/BookNow';
import './global.css';
import TestimonialSlider from './components/Testimonial';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App"> {/* Global background color */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <TopBanner />
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <HeroCarousel />
                  <AdventureTours />
                  <WaterSportsAdventure />
                  <HoneyMoon />
                  <WhatsAppButton />
                  <TestimonialSlider />
                </>
              } />
              <Route path="/book-now" element={<BookNow />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
