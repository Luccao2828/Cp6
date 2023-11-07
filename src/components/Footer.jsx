import React from 'react';
import styles from '/src/css/Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          <p>&copy; 2023 BookLovers</p>
          <div className={styles['footer-links']}>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
            <a href="/privacidade">Política de Privacidade</a>
          </div>
          <div className={styles['social-media-icons']}>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:seuemail@gmail.com" aria-label="Gmail" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer;
