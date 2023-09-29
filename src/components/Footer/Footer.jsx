import React from 'react';
import LogoWhite from '../Header/LogoWhite';

const Footer = () => {

    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <LogoWhite />
            </div>
            <div className="footer-text">
                © {new Date().getFullYear()} Kasa. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
