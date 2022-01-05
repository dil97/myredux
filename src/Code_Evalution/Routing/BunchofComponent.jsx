import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Footer } from './Footer';
import Header from './Header';
import MainBody from './MainBody';

const BunchofComponent = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={Header} />
            <Route path ="/Main" element={MainBody} />
            <Route path ="/Footer" element={Footer} />
        </Routes>
        </BrowserRouter>
            
    );
};

export default BunchofComponent;