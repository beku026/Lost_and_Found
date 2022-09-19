import React from 'react';
import Header from '../Header/Header';
import s from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={s.container}>
                {children}
            </div>
        </>
        
    );
};

export default Layout;