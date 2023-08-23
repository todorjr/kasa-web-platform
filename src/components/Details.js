import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Navbar from './Navbar';
import Collaps from './Collaps';
import Footer from './Footer';
import styles from '../styles/Details.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

    const averageRating = Math.round(selectedData.rating);
    const starIcons = Array.from({ length: 5 }, (_, index) => ( //new array with 5 elements
      <span key={index} className={styles.starRating}>
        {index < averageRating ? '★' : '☆'}
      </span>
    ));

    return (
        <>
            <Navbar />
            <div className={styles.centeredContainer}>
                <div className={styles.carousel}>
                { selectedData.pictures.length > 1 && <p className={`${styles.arrows} ${styles.left}`} onClick={ handlePrevClick }>
                    {<FontAwesomeIcon className={styles.icon} icon={faChevronLeft}/>}
                </p>
                }
                <img src={selectedData.pictures[currentIndex]} alt={selectedData.id} className={styles.image} />
                { selectedData.pictures.length > 1 && <p className={`${styles.arrows} ${styles.right}`} onClick={ handleNextClick }>
                    {<FontAwesomeIcon className={styles.icon} icon={faChevronRight}/>}
                </p>
                }
                </div>
                <div className={styles.container}>
                    <div className={styles.informations}>
                        <h1>{selectedData.title}</h1>
                        <p>{selectedData.location}</p>
                        <ul className={styles.list}>
                            {selectedData.tags.map(tag => (
                                <li className={styles.tag} key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.host}>
                            <h1>{selectedData.host.name}</h1>
                            <img src={selectedData.host.picture} alt={selectedData.host.name} className={styles.hostPicture} />
                        </div>
                        <div className={styles.starRatingContainer}>{starIcons}</div>
                    </div>
                </div>
            </div>
            <Collaps />
            <Footer />
        </>
    )
}

export default Details;
