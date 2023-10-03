import React from 'react';
import Navigation from '../components/Header/Navigation';
import { Link } from 'react-router-dom';




const Error = () => {
    return (
        <div className='Error404'>
            <Navigation />
            <div className="erreur">
                <h1>404</h1>
            </div>
            <div className="erreurText">
                <p>Oups! La page que vous demandez n'existe pas. </p>
            </div>
            <div className="lienRetour">
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Error;