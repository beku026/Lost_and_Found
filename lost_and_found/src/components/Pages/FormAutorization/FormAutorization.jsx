import React from 'react';
import {Button, Form } from 'react-bootstrap';
import s from './FormAutorization.module.scss';

const FormAutorization = () => {
    return (
        <section>
            <h2 className={s.form_title}>Sign In</h2> 
            <p className={s.description
            }>Welkome to Lost and Found portal</p>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className={s.btnauto}>Sign In</Button>
            </Form>
        </section>
    );
};

export default FormAutorization;