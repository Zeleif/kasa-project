import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const About = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='./' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default About;