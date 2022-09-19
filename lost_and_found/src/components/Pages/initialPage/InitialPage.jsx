import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import s from './InitialPage.module.scss';

const InitialPage = () => {
    const autorization = true;
    return (
        <nav className={s.nav_block}>
                <NavLink to="lost">
                    <Button variant="primary" size="lg" className={s.btn}>
                        Lost
                    </Button>
                </NavLink>
                <NavLink to="found">
                    <Button variant="secondary" size="lg" className={s.btn}>
                        Found
                    </Button>
                </NavLink>
        </nav>
    );
};

export default InitialPage;