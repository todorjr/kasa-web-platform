import React from 'react';
import styles from '../styles/Banner.module.css';
import bannerSrc from '../assets/banner.jpg';

function Hero() {
  return (
    <div className={styles.banner}>
      <img src={bannerSrc} alt="banner"></img>
    </div>
  );
}
export default Hero;