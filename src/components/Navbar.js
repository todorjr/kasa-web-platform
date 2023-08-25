import React, { useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css';
import logoSrc from '../assets/LOGO.jpg';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

    const [currentPage, setCurrentPage] = useState(false);
    const location = useLocation(); // Get the current location using react-router's useLocation hook

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location.pathname]);

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'><img src={logoSrc} alt="Logo" /></Link>
            </div>
            <div className={styles.links}>
                <Link to="/" className={`${styles.link} ${currentPage === '/' ? styles.active : ''}`}>Accueil</Link>
                <Link to="/about" className={`${styles.link} ${currentPage === '/about' ? styles.active : ''}`}>A propos</Link>
            </div>
        </div>
    )
}
export default Navbar;