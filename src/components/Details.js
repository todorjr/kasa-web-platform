import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Details.module.css';

function Details() {
    const { id } = useParams();
    const selectedData = data.find(item => item.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? selectedData.pictures.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === selectedData.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <Navbar />
            <div>
                <div className={styles.carousel}>
                { selectedData.pictures.length > 1 && <p className={styles.arrows} onClick={ handlePrevClick }>←</p> }
                { selectedData.pictures.length > 1 && <p className={styles.arrows} onClick={ handleNextClick }>→</p> }
                <img src={selectedData.pictures[currentIndex]} alt={selectedData.id} className={styles.image} />
                </div>
                <h1>{selectedData.title}</h1>
                <p>{selectedData.description}</p>
                <p>{selectedData.location}</p>
                <ul className={styles.list}>
                    {selectedData.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Details;
