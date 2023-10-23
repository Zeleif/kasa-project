import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error404/Error';
import Logement from './pages/Logements/Logements';





const App = () => {
    return (

        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path="/logement/:id" element={<Logement />} />
        </Routes>


    );
};

export default App;
