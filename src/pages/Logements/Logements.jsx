import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../data/data.json';



const Logement = () => {
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);

    if (!logement) {
        return <div>Logement non trouvé.</div>;
    }

    return (
        <div className="card-container">
            <h1>{logement.title}</h1>
            <img src={logement.imageUrl} alt={logement.title} />
            <p>{logement.description}</p>
        </div>
    );
};

export default Logement;