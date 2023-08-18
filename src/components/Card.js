import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ title }) {
    return <div className={styles.card}>
            <p className={styles.title}>{title}</p>
           </div>;
}

export default Card;