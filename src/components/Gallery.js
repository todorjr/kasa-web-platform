
import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import styles from '../styles/Gallery.module.css';

function Gallery() {
  return (
    <div className={styles.container}>
      {data.map(card => (
        <Card key={card.id} images={card.pictures} title={card.title} />
      ))}
    </div>
  );
}

export default Gallery;
