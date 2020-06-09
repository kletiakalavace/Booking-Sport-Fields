import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Datetime from '../DateTime/Datetime';   
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Styles = styled.div`
.react-datetime-picker{
    width: 100%;
    height: 48px;
  }
  .react-datetime-picker__wrapper{
    border: 1px solid #ced4da;
      padding-left: 14px;
  }
    .green-btn{
        margin-top:20px;
        background:#a3ef5d;
        border:0;
    }
    .green{
        color:#a3ef5d;
    }
`;
function book() {
    window.location.href="/reservation"
  }
export const Filters = () =>(
    <Styles>
    <Form>
        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Zgjidh fushen</Form.Label>
            <Form.Control as="select" size="lg" custom>
                <option></option>
                <option>Fusha 1</option>
                <option>Fusha 2</option>
                <option>Fusha 3</option>
                <option>Fusha 4</option>
            </Form.Control>
            
        </Form.Group>
        <Datetime></Datetime>
        <Button variant="primary" size="lg" block className="green-btn" onClick={book}>
            BOOK NOW
        </Button>
    </Form>
    </Styles>
)