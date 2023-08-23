import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import errorSrc from '../assets/404.jpg';
import styles from '../styles/Error.module.css';

function Error() {
    return (
        <>
        <Navbar />
        <div className={styles.errorContainer}>
            <img className={styles.error} src={errorSrc} alt="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </p>
        </div>
        </>
    );
}

export default Error;