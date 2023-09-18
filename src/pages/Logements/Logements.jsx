import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';



const Logement = () => {
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    if (!logement) {
        return <div>Logement non trouvé.</div>;
    }

    return (
        <div className="card-container">
            <Navigation />
            <div className="card-banner">
                <img className="photo" src={logement.cover} alt={logement.title} />
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <button onClick={() => setDescriptionVisible(!descriptionVisible)}>
                    {descriptionVisible ? 'Masquer la description' : 'Afficher la description'}
                </button>
                {descriptionVisible && <p>{logement.description}</p>}
            </div>
        </div>
    );
};
export default Logement;