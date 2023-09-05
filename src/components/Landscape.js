import React from 'react';
import styles from '../styles/Landscape.module.css';


function Landscape({image, text}) {
    return (
      <div className={styles.hero}>
        <img src={image} alt="logo"></img>
        {text &&
        <h2 className={styles.text}>{text}</h2> }
      </div>
    );
  }
  export default Landscape;