// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/TopBanner';
import HeroCarousel from './components/HeroCarasoul';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Navbar />
      <HeroCarousel />
      {/* Add other components here */}
    </div>
  );
}

export default App;
