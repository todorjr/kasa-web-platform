import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function NewCollaps({text, content, open, title}) {
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
            <div className={styles.dropdown} onClick={() => handleItemClick(open)}>
                <div className={styles.titleInfo}>
                <p className={styles.title}>{title}</p>
                { isItemSelected(content) ? <FontAwesomeIcon icon={faChevronUp} className={styles.icon} /> : <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />}{' '}
                </div>
                {isItemSelected(content) && (
                    <div className={styles.text}>
                        <span>{text}</span>
                    </div>
                )}
            </div>
    </div>
    )
}

export default NewCollaps;




//Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.

//La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.

// Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.

// La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.

