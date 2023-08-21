import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Navbar from './Navbar';
import Footer from './Footer';

function Details() {
    const { id } = useParams();
    const selectedData = data.find(item => item.id === id);
    return (
        <>
            <Navbar />
            <div>
                <h1>{selectedData.title}</h1>
                <h2>Apartment Details for ID: {id}</h2>
                <p>{selectedData.description}</p>
            </div>
            <Footer />
        </>
    )
}

export default Details;
