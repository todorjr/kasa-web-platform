import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";

function Dropdown() {
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
            <div className={styles.dropdown} onClick={() => handleItemClick("Fiabilité")}>
                <p className={styles.title}>Fiabilité</p>
                {isItemSelected("Fiabilité") && (
                    <div className={styles.text}>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Respect")}>
                <p className={styles.title}>Respect</p>
                {isItemSelected("Respect") && (
                    <div className={styles.text}>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Service")}>
                <p className={styles.title}>Service</p>
                {isItemSelected("Service") && (
                    <div className={styles.text}>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Sécurité")}>
                <p className={styles.title}>Sécurité</p>
                {isItemSelected("Sécurité") && (
                    <div className={styles.text}>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                )}
            </div>
    </div>
    )
}

export default Dropdown;
