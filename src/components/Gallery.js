
import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import styles from '../styles/Gallery.module.css';


function Gallery() {
  return (
    <div className={styles.container}>
      {data.map(card => (
        <Card className={styles.card} key={card.id} images={card.pictures} title={card.title} id={card.id}/>
      ))}
    </div>
  );
  
}

export default Gallery;
