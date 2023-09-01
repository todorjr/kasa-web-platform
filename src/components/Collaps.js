import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Collaps.module.css";
import data from '../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collaps() {
    const { id } = useParams();
    const selectedData = data.find(item => item.id === id);


    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selected => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const isItemSelected = (item) => selectedItems.includes(item);


    return (
        <div className={styles.container}>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onClick={handleItemClick('Description')}>
                <div className={styles.titleInfo}>
                    <p className={styles.title}>Description</p>
                    { isItemSelected('Description') ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected('Description') && (
                        <div className={styles.text}>
                            <span>{selectedData.description}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onClick={handleItemClick('Equipments')}>
                <div className={styles.titleInfo}>
                    <p className={styles.title}>Equipments</p>
                    { isItemSelected('Equipments') ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected('Equipments') && (
                        <div className={styles.text}>
                            {selectedData.equipments.map(equipment => (
                                <li className={styles.equipment} key={equipment}>{equipment}</li>
                                
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Collaps;
