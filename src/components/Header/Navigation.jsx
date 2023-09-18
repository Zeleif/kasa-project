import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <Link to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </Link>
                <Link to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;