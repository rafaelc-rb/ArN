import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/';
import About from './Pages/About/'
import Contact from './Pages/Contact/'
import Comodato from './Pages/Comodato';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path='/contact' exact element={<Contact />} />
                <Route path='/comodato' exact element={<Comodato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;