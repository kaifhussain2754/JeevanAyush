// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/TopBanner';
import HeroCarousel from './components/HeroCarasoul';
import AdventureTours from './components/AdventureTours';
import WaterSportsAdventure from './components/WaterAdevnture';
import HoneyMoon from './components/HoneyMoon';
import WhatsAppButton from './components/WhatsappButton';
import Loader from './components/Loader';
import './global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="App"> {/* Global background color */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopBanner />
          <Navbar />
          <HeroCarousel />
          <AdventureTours />
          <WaterSportsAdventure />
          <HoneyMoon />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;
