import React, { useState } from "react";
import styles from "../styles/Collaps.module.css";
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