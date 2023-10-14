import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error';
import Logement from './pages/Logements/Logements';





const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
                <Route path="/logement/:id" element={<Logement />} />
            </Routes>
        </HashRouter>

    );
};

export default App;
