import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import fieldLogo from '../assets/ball_logo.png';

const Styles = styled.div`
    .navbar{
        background-color:#333;
    }
    .navbar-brand{
        padding-left:47px;
    }
    .nav-link{
        padding-left: 25px;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color:white;

        &:hover{
            color:#9ce25e;
        }
    }
`;

export const NavigationBar =() =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={ fieldLogo } width="60"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Kryefaqja</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">Rreth nesh</Nav.Link></Nav.Item>    
                    <Nav.Item><Nav.Link href="/contact">Na kontaktoni</Nav.Link></Nav.Item>    
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)