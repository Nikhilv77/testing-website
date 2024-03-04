import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/new-images/homepage-images/section-1-1.png';
import image2 from '../assets/new-images/homepage-images/section-1-2.png';
import image3 from '../assets/new-images/homepage-images/section-1-4.png';
import image4 from '../assets/new-images/homepage-images/section-1-3.png';
import './HeroSection.css';

const Header = () => {
  return (
    <section className="header-section">
      <div className="image-container">
        <motion.img
          className="image1"
          initial={{ left: '-150%', scale: 0.3 }}
          animate={{ opacity: 1, left: '15%', scale: 1 }}
          transition={{ delay: 1, duration: 1.4 }}
          src={image1}
          alt="Image 1"
        />
        <motion.img
          className="image2"
          initial={{ right: '-40%', scale: 0.3 }}
          animate={{ opacity: 1, right: '15%', scale: 1 }}
          transition={{ delay: 1, duration: 1.4 }}
          src={image2}
          alt="Image 2"
        />
      </div>
      <motion.img
        className="background-image1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image3}
        alt="Background Image 1"
      />
      <motion.img
        className="background-image2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image4}
        alt="Background Image 2"
      />
      <div className="title">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.4 }}
        >
          Discover, Connect & Share Your World on Tags Social
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.4 }}
        >
          Embark on a journey of discovery, as Tags Social connects you with like-minded individuals at new locations
        </motion.h2>
      </div>
    </section>
  );
};

export default Header;
