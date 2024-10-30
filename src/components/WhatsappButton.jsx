// src/components/WhatsAppButton.jsx
import React from 'react';
import styles from './WhatsAppButton.module.css'; // Create a CSS file for styling

const WhatsAppButton = () => {
    const whatsappNumber = '9890000119'; // Your WhatsApp number in international format
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <img src="/whatsapp.png" alt="WhatsApp" className={styles.icon} />
            <span>Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
