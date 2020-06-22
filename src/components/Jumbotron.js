import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import Filters from './filters/Filters'
import fieldImage from '../assets/field_background.jpg';

const Styles = styled.div`
    .jumbtron{
        background:url(${fieldImage}) no-repeat center;
        background-size:cover;
        color:#fcfcfc;
        height:555px;
        position:relative;
        z-index:2;
    }
    .overlay{
        background: #fff;
        opacity: 0.9;
        width: 40%;
        max-width: 450px;
        position: absolute;
        left: 100px;
        padding: 35px;
        color: #000;
        top:100px;
    }
    
   
`;


export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className="jumbtron">
            <div className="overlay">
              <h1>REZERVONI <span className="green">FUSHEN</span></h1>
              <Filters className="filters"/>
            </div>
        </Jumbo>
    </Styles>
)