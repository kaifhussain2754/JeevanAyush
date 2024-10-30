// src/components/HeroCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import styles from './HeroCarousel.module.css'; // Custom styles for the carousel

// Import images
import hero1 from '/hero1.jpg'; // Adjust the path as necessary
import hero2 from '/hero2.jpg';
import hero3 from '/hero3.jpg';
import logo from '/logo.png'

const HeroCarousel = () => {
  return (
    <Carousel
      className={styles.carousel}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      style={{ width: '1200px', height: '461px' }} // Set carousel width and height
    >
      <div
        className={styles.slide}
        style={{
          backgroundImage: `url(${hero1})`,
          height: '461px', // Set slide height
          width: '100%', // Set slide width
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.caption}>
        <img src={logo} alt="Logo" className={styles.logo} />
          <h3>Welcome to Jeevan Aayush</h3>
          <p>Experience the beauty of Goa with our exclusive packages!</p>
        </div>
      </div>
      <div
        className={styles.slide}
        style={{
          backgroundImage: `url(${hero2})`,
          height: '461px', // Set slide height
          width: '100%', // Set slide width
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.caption}>
          <h3>Goa Honeymoon Packages</h3>
          <p>Enjoy a romantic getaway with our specially curated packages.</p>
        </div>
      </div>
      <div
        className={styles.slide}
        style={{
          backgroundImage: `url(${hero3})`,
          height: '461px', // Set slide height
          width: '100%', // Set slide width
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.caption}>
          <h3>Water Sports Adventures</h3>
          <p>Get your adrenaline pumping with thrilling water sports!</p>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
