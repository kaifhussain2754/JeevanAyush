// src/components/GoaAdventureTours.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './AdventureTours.module.css';

const goaPackages = [
    {
        title: "Goa Package For Couple",
        duration: "4 Day & 3 night",
        price: "₹8999.00 Per Person",
        imageUrl: "/honey1.jpg" // Add the correct image path
    },
    {
        title: "Goa Honeymoon Package From Delhi",
        duration: "4 Day & 3 night",
        price: "₹13533.00 Per Person",
        imageUrl: "/honey2.jpg" // Add the correct image path
    },
    {
        title: "Goa Honeymoon Package For 7 Days",
        duration: "7 Days",
        price: "Get Price Per Person",
        imageUrl: "/honey3.jpg" // Add the correct image path
    },
    {
        title: "Goa Holiday Package",
        duration: "2 Nights 3 Days",
        price: "Get Price Per Person",
        imageUrl: "/honey4.jpg" // Add the correct image path
    },
    {
        title: "Luxury Honeymoon Package In Goa",
        duration: "5 Day & 4 night",
        price: "Get Price Per Person",
        imageUrl: "/honey5.jpg" // Add the correct image path
    },
    {
        title: "Goa Honeymoon Package From Mumbai",
        duration: "5 Day & 4 night",
        price: "₹13700.00 Per Person",
        imageUrl: "/honey6.jpg" // Add the correct image path
    },
    {
        title: "Candle Light Dinner In Candolim, Goa",
        duration: "2 Hours",
        price: "Get Price Per Person",
        imageUrl: "/honey7.jpg" // Add the correct image path
    },
    {
        title: "La Gulls Court Vagator - Per Couple",
        duration: "4 Day & 3 night",
        price: "Get Price Per Person",
        imageUrl: "/honey8.jpg" // Add the correct image path
    }
];

const HoneyMoon = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration (1000ms)
    }, []);
  
    return (
        <div className={styles.adventureTours}>
            <h2>
                <span className={styles.adventureTitle}>GOA HONEYMOON </span>
                <span className={styles.tours}>PACKAGE</span>
            </h2>
            <p style={{color: 'black'}}>Most Bought and Most Rated Tours, Upto 50% Off on Advance Booking.</p>
            <div className={styles.cardContainer}>
                {goaPackages.map((tour, index) => ( // Change 'tours' to 'goaPackages'
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

export default HoneyMoon;
