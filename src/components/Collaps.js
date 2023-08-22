import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Collaps.module.css";
import data from '../data/data.json';

function Collaps() {
    const { id } = useParams();
    const selectedData = data.find(item => item.id === id);

    // State for the first dropdown
    const [selectedDescription, setSelectedDescription] = useState(false);

    // State for the second dropdown
    const [selectedEquipments, setSelectedEquipments] = useState(false);

    const handleDescriptionClick = () => {
        setSelectedDescription(!selectedDescription);
    };

    const handleEquipmentsClick = () => {
        setSelectedEquipments(!selectedEquipments);
    };

    return (
        <div className={styles.container}>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onClick={handleDescriptionClick}>
                    <p className={styles.title}>Description</p>
                    {selectedDescription && (
                        <div className={styles.text}>
                            <p>{selectedData.description}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onClick={handleEquipmentsClick}>
                    <p className={styles.title}>Equipments</p>
                    {selectedEquipments && (
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
