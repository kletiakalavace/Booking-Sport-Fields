import React from 'react';
import {Slider} from './components/Slider/Slider';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const Styles = styled.div`

`;

export const Reservation = () =>(
    
    <Styles>
        <h2>you have choice:  </h2>
    <Form>
    <Slider/>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>
    </Form>
    </Styles>
)