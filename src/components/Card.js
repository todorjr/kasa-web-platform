import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ title, image }) {
    
    return (
            <div className={styles.card}>
                <img className={styles.image} src={image} alt="image" />
                <p className={styles.title}>{title}</p>
            </div>
    )
}

export default Card;