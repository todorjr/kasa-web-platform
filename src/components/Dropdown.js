import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
                <div className={styles.titleInfo}>
                <p className={styles.title}>Fiabilité</p>
                { isItemSelected("Fiabilité") ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected("Fiabilité") && (
                    <div className={styles.text}>
                        <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</span>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Respect")}>
            <div className={styles.titleInfo}>
                <p className={styles.title}>Respect</p>
                { isItemSelected("Respect") ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected("Respect") && (
                    <div className={styles.text}>
                        <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Service")}>
            <div className={styles.titleInfo}>
                <p className={styles.title}>Service</p>
                { isItemSelected("Service") ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected("Service") && (
                    <div className={styles.text}>
                        <span> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</span>
                    </div>
                )}
            </div>
            <div className={styles.dropdown} onClick={() => handleItemClick("Sécurité")}>
            <div className={styles.titleInfo}>
                <p className={styles.title}>Sécurité</p>
                { isItemSelected("Sécurité") ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected("Sécurité") && (
                    <div className={styles.text}>
                        <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
                    </div>
                )}
            </div>
    </div>
    )
}

export default Dropdown;
