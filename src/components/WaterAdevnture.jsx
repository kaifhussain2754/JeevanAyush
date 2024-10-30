// src/components/WaterAdventure.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'aos/dist/aos.css'; // Import the AOS CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './WaterAdventure.module.css';

const watersports = [
  {
    title: "Combo Scuba Diving with Water Sports Malvan",
    duration: "8 Hours",
    price: "₹1850.00 Per Person",
    imageUrl: "/water1.jpg",
  },
  {
    title: "Scuba Diving at Grand Island Goa",
    duration: "20 Minutes",
    price: "₹2499.00 Per Person",
    imageUrl: "/water2.jpg",
  },
  {
    title: "Para Motoring and Paragliding",
    duration: "2 Hours",
    price: "₹3500.00 Per Person",
    imageUrl: "/water3.jpg",
  },
  {
    title: "Scuba diving + 5 Water Sports at Grand Island Combo",
    duration: "20 Minutes",
    price: "₹2499.00 Per Person",
    imageUrl: "/water4.jpg",
  },
  {
    title: "FlyBoarding in North Goa",
    duration: "30 Minutes",
    price: "₹2499.00 Per Person",
    imageUrl: "/water5.jpg",
  },
  {
    title: "Watersports Combo Packages",
    duration: "1 Day",
    price: "₹1300.00 Per Person",
    imageUrl: "/water6.jpg",
  },
  {
    title: "Scuba Diving + 5 Watersports Combo at Paradise Beach",
    duration: "8 Hours",
    price: "₹2350.00 Per Person",
    imageUrl: "/water7.jpg",
  },
  {
    title: "Combo Scuba Diving with Water Sports Malvan",
    duration: "8 Hours",
    price: "₹1850.00 Per Person",
    imageUrl: "/water8.jpg",
  },
];

const WaterAdventure = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards in a row
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.adventureTours}>
            {/* Background Video */}
            <video autoPlay loop muted className={styles.videoBackground}>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h2>
                <span className={styles.adventureTitle}>WATER SPORTS </span>
                <span className={styles.tours}>ADVENTURE</span>
            </h2>
            <p>Get the best out of best Scuba experience with Our trained Professional.</p>
            <Slider {...settings}>
                {watersports.map((tour, index) => (
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
            </Slider>
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

export default WaterAdventure;