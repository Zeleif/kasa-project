import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Header/Logo';


const Navigation = () => {
    return (
        <div className="navigation">
            <Logo />
            <ul>
                <li>
                    <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;