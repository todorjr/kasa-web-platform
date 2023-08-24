import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Navbar from '../components/Navbar';
import Collaps from '../components/Collaps';
import Footer from '../components/Footer';
import Error from '../pages/Error';
import styles from '../styles/Details.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Details() {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0); //currentIndex of the picture setCurrentIndex is a function to update currentIndex

    const validIds = data.map(item => item.id);    
    if (!validIds.includes(id)) {
        return (
            <>
                <Error />
            </>
        );
    }
    const selectedData = data.find(item => item.id === id);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? selectedData.pictures.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === selectedData.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const averageRating = Math.round(selectedData.rating);
    const starIcons = Array.from({ length: 5 }, (_, index) => ( //new array with 5 elements
        <span key={index} className={styles.starRating}>
            {index < averageRating ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={faStarRegular} />}
        </span>
    ));

    return (
        <>
            <Navbar />
            <div className={styles.centeredContainer}>
                <div className={styles.carousel}>
                    {selectedData.pictures.length > 1 && <p className={`${styles.arrows} ${styles.left}`} onClick={handlePrevClick}>
                        {<FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />}
                    </p>
                    }
                    <img src={selectedData.pictures[currentIndex]} alt={selectedData.id} className={styles.image} />
                    {selectedData.pictures.length > 1 && <p className={`${styles.arrows} ${styles.right}`} onClick={handleNextClick}>
                        {<FontAwesomeIcon className={styles.icon} icon={faChevronRight} />}
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
