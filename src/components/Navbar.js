import React from "react";
import styles from '../styles/Navbar.module.css';
import logoSrc from '../assets/LOGO.jpg';


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logoSrc} alt="Logo" />
            </div>
            <div className={styles.links}>
                <a href="#" className={styles.link}>Accueil</a>
                <a href="#" className={styles.link}>A propos</a>
            </div>
        </div>
    )
}

export default Navbar;