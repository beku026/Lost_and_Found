import React from 'react';
import {Form, Button} from 'react-bootstrap';
import s from './FoundItem.module.scss';

const FoundItem = () => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Attach Image</Form.Label>
                <Form.Control type="image" placeholder="Name" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Date Found</Form.Label>
                <Form.Control type="date" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label placeholder="Type here">Example textarea</Form.Label>
                <Form.Control placeholder="Type here" as="textarea" rows={5} />
            </Form.Group>
            <Button className={s.btn}>Submite</Button>
        </div>
    );
};

export default FoundItem;