import React from 'react'; 
import {Button, Form} from 'react-bootstrap';
import IconProfile from '../../IconProfile/IconProfile';
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <div>
            <IconProfile/>            
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Display name:</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contact number</Form.Label>
                    <Form.Control type="number" placeholder="10-digits number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Alternative email-ID</Form.Label>
                    <Form.Control type="email" placeholder="alternative-email" />
                </Form.Group>
                <Button variant="primary" type="submit" className={s.btn} >Sign In</Button>
            </Form>
        </div>
    );
};

export default Profile;