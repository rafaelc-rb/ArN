import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/';
import About from './Pages/About/'
import Contact from './Pages/Contact/'
import Anapolis from './Pages/Anapolis';
import OuroVerde from './Pages/OuroVerde';
import Alexania from './Pages/Alexania';
import Abadiania from './Pages/Abadiania';
import Comodato from './Pages/Comodato';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path='/contact' exact element={<Contact />} />
                <Route path='/anapolis' exact element={<Anapolis />} />
                <Route path='/ouro-verde' exact element={<OuroVerde />} />
                <Route path='/alexania' exact element={<Alexania />} />
                <Route path='/abadiania' exact element={<Abadiania />} />
                <Route path='/comodato' exact element={<Comodato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;