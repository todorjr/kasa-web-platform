import React from "react";
import styles from '../styles/Navbar.module.css';
import logoSrc from '../assets/LOGO.jpg';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logoSrc} alt="Logo" />
            </div>
            <div className={styles.links}>
                <Link to="/home" className={styles.link}>Accueil</Link>
                <Link to="/about" className={styles.link}>A propos</Link>
            </div>
        </div>
    )
}
export default Navbar;