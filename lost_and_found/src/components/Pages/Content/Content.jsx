import React from 'react';
import { Routes, Route } from "react-router-dom";
import Found from '../Found/Found';
import Lost from '../Lost/Lost';
import InitialPage from '../initialPage/InitialPage';
import Layout from '../../Layout/Layout';
import FormAutorization from '../FormAutorization/FormAutorization';

const Content = () => {
    return (
        <main>
            <Layout>
                <Routes>
                    <Route path="/" element={<InitialPage/>} />
                    <Route path="lost" element={<Lost/>}/>
                    <Route path="found" element={<Found/>}/>
                    <Route path="autorizaton" element={<FormAutorization/>}/>
                </Routes>
            </Layout>
        </main>
        
    );
};

export default Content