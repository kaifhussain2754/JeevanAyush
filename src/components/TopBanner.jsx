// src/components/TopBanner.jsx
import React, { useState } from 'react';
import styles from './TopBanner.module.css';
import Marquee from 'react-fast-marquee';

const TopBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className={styles.topBanner}>
      <div className={styles.marqueeContainer}>
        <Marquee pauseOnHover={true} speed={50}>
          📞 Call Us Now at +91 98900 00119 | Exclusive Offers Available! 🔥 
        </Marquee>
      </div>
      <button className={styles.closeButton} onClick={handleCloseBanner}>×</button>
    </div>
  );
};

export default TopBanner;
