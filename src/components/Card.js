import React, { useState } from 'react';
import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';


function Card({ title, images, id }) {
    const [currentIndex, setCurrentIndex] = useState(0); //currentIndex is the state variable and setCurrentIndex is the function that updates the state variable

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.card}>
            <div className={styles.controls}>
            { images.length > 1 && <p className={styles.arrow} onClick={ handlePrevClick }>←</p> }
            { images.length > 1 && <p className={styles.arrow} onClick={ handleNextClick }>→</p> }
            </div>
            <img className={styles.image} src={images[currentIndex]} alt={images.id} />
            <Link to={`${id}`}>
                <p className={styles.title}>{title}</p>
            </Link>
        </div>
    );
}
export default Card;
