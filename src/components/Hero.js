import React from 'react';
import styles from '../styles/Hero.module.css';
import imgSrc from '../assets/IMG.jpg';

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={imgSrc} alt="logo"></img>
      <h2 class={styles.text}>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Hero;