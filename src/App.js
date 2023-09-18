import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error';
import Logement from './pages/Logements/Logements';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
                <Route path="/logement/:id" element={<Logement />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;
