import React from 'react';
import Landscape from '../components/Landscape';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import imgSrc from '../assets/IMG.jpg';


function Home() {
  return (
    <>
    <Navbar />
    <Landscape image={imgSrc} text='Chez vous, partout et ailleurs' />
    <Gallery />
    <Footer />
  </>
  );
}
export default Home;
