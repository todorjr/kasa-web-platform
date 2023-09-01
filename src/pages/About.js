// About.js
import React from 'react';
import Navbar from '../components/Navbar';
import Landscape from '../components/Landscape';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import bannerSrc from '../assets/banner.jpg';


  function About(){
    return (
      <>
      <Navbar />
      <Landscape image={bannerSrc} />
      <Dropdown />
      <Footer />
      </>
    );
  };

export default About;
