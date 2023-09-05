// About.js
import React from 'react';
import Navbar from '../components/Navbar';
import Landscape from '../components/Landscape';
import Footer from '../components/Footer';
import bannerSrc from '../assets/banner.jpg';
import Collaps from '../components/Collaps';

  function About(){
    const items = ['Fiabilité','Respect','Service','Sécurité']

    const texts = ['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes', 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`, `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`]

    return (
      <>
        <Navbar />
        <Landscape image={bannerSrc} />
        {items.map((item, index) => (
        <Collaps title={item} content={item} open={item} text={texts[index]} />))}
        <Footer />
      </>
    );
  };

export default About;
