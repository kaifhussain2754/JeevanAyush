// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src={logo} alt="Adventure Goa Logo" />
        </a>
      </div>
      <div className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.navbarLinksActive : ''}`}>
        <a href="#home" className={styles.navbarLink}>Home</a>
        <div className={styles.dropdown}>
          <a href="#honeymoon" className={styles.navbarLink}>
            Goa Honeymoon Package <FaChevronDown className={styles.dropdownIcon} />
          </a>
          <div className={styles.dropdownContent}>
            <a href="#package1">Package 1</a>
            <a href="#package2">Package 2</a>
          </div>
        </div>
        <div className={styles.dropdown}>
          <a href="#watersports" className={styles.navbarLink}>
            Water Sports <FaChevronDown className={styles.dropdownIcon} />
          </a>
          <div className={styles.dropdownContent}>
            <a href="#scuba">Scuba Diving</a>
            <a href="#parasailing">Parasailing</a>
          </div>
        </div>
        <div className={styles.dropdown}>
          <a href="#adventure" className={styles.navbarLink}>
            Adventure Tours <FaChevronDown className={styles.dropdownIcon} />
          </a>
          <div className={styles.dropdownContent}>
            <a href="#trekking">Trekking</a>
            <a href="#camping">Camping</a>
          </div>
        </div>
        <a href="#monsoon" className={styles.navbarLink}>Monsoon Tours</a>
      </div>
      <a href="#inquire" className={styles.inquireBtn}>Inquire Now</a>
      <div className={styles.navbarIcon} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
