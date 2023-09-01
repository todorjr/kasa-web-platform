import React from "react";
import styles from '../styles/Navbar.module.css';
import logoSrc from '../assets/LOGO.jpg';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/'><img src={logoSrc} alt="Logo" /></NavLink>
            </div>
            <nav className={styles.links}>
                <NavLink style={({ isActive }) => { return { textDecoration: isActive ? "underline" : "none",}}} to="/">Accueil</NavLink>
                <NavLink style={({ isActive }) => { return { textDecoration: isActive ? "underline" : "none",}}} to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}
export default Navbar;


