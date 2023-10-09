import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';
import Accordion from '../../components/Accordion/Accordion';
import StarRating from './StarRating';
import Slider from '../../components/Slider/Slider';






const Logement = () => {
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);

    if (!logement) {
        return (
            <Navigate to='error404' />
        );
    }
    const rating = parseInt(logement.rating);
    const hostName = logement.host.name;
    const hostPicture = logement.host.picture;

    return (
        <div className="card-container">
            <Navigation />
            {/* <img className="photo" src={logement.cover} alt={logement.title} /> */}
            <Slider pictures={logement.pictures} />
            <div className="card-banner">
                <div className="card-logement-toPart">
                    <div className="card-logement">
                        <div className="logement-name">
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
                    </div>
                    <div className="card-logement-partTo">
                        <div className="card-logement-rating">
                            <div className="rating">
                                <StarRating rating={rating} />
                            </div>
                        </div>
                        <div className="host-infos">
                            <img className="host" src={hostPicture} alt={hostName} />
                            <h2 className='host-name'>{hostName}</h2>
                        </div>
                    </div>
                </div>
                <div className="card-description">
                    <Accordion title="Description" isLogement={true} className="custom-accordion" >
                        Profitez du charme de la vie parisienne dans un magnifique appartement. À 3 minutes à pied du Canal Saint-Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé.
                    </Accordion>
                    <Accordion title="Equipements" isLogement={true} className="custom-accordion" >
                        <ul className='equipement-list'>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index} className='equipement'>{equipment}</li>
                            ))}
                        </ul>
                    </Accordion>
                </div>
            </div>
        </div>

    );
}


export default Logement;