import React from 'react';
import { Routes, Route } from "react-router-dom";
import Found from '../Found/Found';
import Lost from '../Lost/Lost';
import InitialPage from '../initialPage/InitialPage';
import Layout from '../../Layout/Layout';
import FormAutorization from '../FormAutorization/FormAutorization';
import Profile from '../Profile/Profile';

const Content = () => {
    return (
        <Layout>
            <main>
                <Routes>
                    <Route path="/" element={<InitialPage/>} />
                    <Route path="/lost" element={<Lost/>}/>
                    <Route path="/found" element={<Found/>}/>
                    <Route path="/autorizaton" element={<FormAutorization/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </main>
        </Layout>
        
    );
};

export default Content;
