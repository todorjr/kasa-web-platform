import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import styles from '../styles/App.module.css'

function Header() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className={styles.container}>
    {data.map(card => (
      <Card key={card.id} image={card.image} title={card.title} />
    ))}
  </div>
  </>
  );
}
export default Header;
