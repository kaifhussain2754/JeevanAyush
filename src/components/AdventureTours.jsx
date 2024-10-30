// src/components/GoaAdventureTours.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './AdventureTours.module.css';

const tours = [
        {
          title: "Evening Cruise in Goa",
          duration: "1 Day",
          price: "₹449.00 Per Person",
          imageUrl: "/goacard1.jpg", // Corrected image path (ensure the file exists)
        },
        {
          title: "Dudhsagar Waterfall Trip from North Goa",
          duration: "6-7 hours",
          price: "₹1799.00 Per Person",
          imageUrl: "/goacard2.jpg", // Ensure to add the correct file extension
        },
        {
          title: "South Goa Tour Package",
          duration: "10 Hours",
          price: "₹349.00 Per Person",
          imageUrl: "/goacard3.jpg", // Ensure to add the correct file extension
        },
        {
          title: "North Goa City Tour",
          duration: "11 Hours",
          price: "₹469.00 Per Person",
          imageUrl: "/goacard1.jpg", // Ensure to add the correct file extension
        },
        {
          title: "Grand Island Tours",
          duration: "7 Hours",
          price: "₹1300.00 Per Person",
          imageUrl: "/goacard2.jpg", // Ensure to add the correct file extension
        },
        {
          title: "Dolphin Trips - Goa",
          duration: "1 Day",
          price: "₹449.00 Per Person",
          imageUrl: "/goacard3.jpg", // Ensure to add the correct file extension
        },
        {
          title: "Hop on hop off bus trip",
          duration: "2 Days",
          price: "₹699.00 Per Person",
          imageUrl: "/goacard1.jpg", // Ensure to add the correct file extension
        },
        {
          title: "South Goa Tour - Old Goa Churches",
          duration: "12 Hours",
          price: "₹2500.00 Per Person",
          imageUrl: "/goacard2.jpg", // Ensure to add the correct file extension
        },
      ];

      const GoaAdventureTours = () => {
        useEffect(() => {
          AOS.init({ duration: 1000 }); // Initialize AOS with animation duration (1000ms)
        }, []);
      
        return (
          <div className={styles.adventureTours}>
            <h2>
              <span className={styles.adventureTitle}>GOA ADVENTURE </span>
              <span className={styles.tours}>TOURS</span>
            </h2>
            <p style={{color: 'black'}}>Most Bought and Most Rated Tours, Upto 50% Off on Advance Booking.</p>
            <div className={styles.cardContainer}>
              {tours.map((tour, index) => (
                <div className={styles.card} key={index} data-aos="fade-up">
                  <img src={tour.imageUrl} alt={tour.title} className={styles.cardImage} />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{tour.title}</h3>
                    <p className={styles.cardDuration}>
                      <FontAwesomeIcon icon={faClock} className={styles.icon} />
                      {tour.duration}
                    </p>
                    <div className={styles.cardActions}>
                      <p className={styles.cardPrice}>{tour.price}</p>
                      <button className={styles.bookNowBtn}>
                        <span>BOOK NOW</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* New buttons below the tour cards */}
            <div className={styles.actionButtons}>
              <button className={styles.viewAllBtn}>
                <span>VIEW ALL</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </button>
              <button className={styles.inquireNowBtn}>
                <span>INQUIRE NOW</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </button>
            </div>
          </div>
        );
      };
      
      export default GoaAdventureTours;
