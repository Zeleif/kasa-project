import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';
import AccordionLogement from '../Logements/AccordionLogement'





const Logement = () => {
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);

    if (!logement) {
        return <div>Logement non trouvé.</div>;
    }
    return (
        <div className="card-container">
            <Navigation />
            <div className="card-banner">
                <img className="photo" src={logement.cover} alt={logement.title} />
                <div className="card-logement">
                    <div className="logement_name">
                        <h1>{logement.title}</h1>
                    </div>
                    <div className="logement-localisation">
                        <p>{logement.location}</p>
                    </div>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <div key={index} className={`tag-container tag-${tag}`}>
                                <p className="tag">{tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card-description">
                        <AccordionLogement title="Description" className="custom-accordion" >
                            Profitez du charme de la vie parisienne dans un magnifique appartement. À 3 minutes à pied du Canal Saint-Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé.
                        </AccordionLogement>
                        <AccordionLogement title="Equipements" className="custom-accordion" >
                            <ul className='equipement-list'>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index} className='equipement'>{equipment}</li>
                                ))}
                            </ul>
                        </AccordionLogement>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Logement;