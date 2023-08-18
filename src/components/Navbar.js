import React from "react";
import styles from '../styles/Navbar.module.css';
import logoSrc from '../assets/LOGO.jpg';


function Navbar() {
    return (
        <div class={styles.navbar}>
            <div class={styles.logo}>
                <img src={logoSrc} alt="Logo" />
            </div>
            <div class={styles.links}>
                <a href="#" class={styles.link}>Accueil</a>
                <a href="#" class={styles.link}>A propos</a>
            </div>
        </div>
    )
}

export default Navbar;