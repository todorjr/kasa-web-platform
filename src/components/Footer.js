import React from "react";
import styles from "../styles/Footer.module.css";
import logoSrc from '../assets/LOGO-FOOTER.svg';

function Footer(){
    return (
        <footer>
            <div className={styles.footer}>
                <img src={logoSrc} alt="logo" className={styles.logo}></img>
                <p className={styles.text}>© 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}
export default Footer;