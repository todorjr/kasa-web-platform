import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';

function Details() {
    const { id } = useParams();
    const selectedData = data.find(item => item.id === id);
    return (
        <div>
            <h1>{selectedData.title}</h1>
        </div>
    )
}

export default Details;
