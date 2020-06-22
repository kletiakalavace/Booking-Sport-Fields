import React from 'react';
import styled from 'styled-components';
import fieldLogo from '../assets/ball_logo.png';
import socialFacebook from '../assets/fcb.png';
import socialInstagram from '../assets/insta.png';
import socialTwitter from '../assets/twt.png';
import socialLinkedin from '../assets/linkedin.png';
import { Nav, Navbar} from 'react-bootstrap';

const Styles = styled.div`
    .footer{
        background:#333;
        padding:20px;
        color:white;
        text-align:center;
    }
    .footer_menu{
        max-width: 340px;
        text-align: center;
        margin: 10px auto;
    }
    .nav-link{
        color:white;

        &:hover{
            color:#9ce25e;
        }
    }
    .footer_social{
        max-width: 254px;
        text-align: center;
        margin:auto;
    }
    
   `;


export const Footer = () =>(
    <Styles>
        <div className="footer">
            
            <img className="footer_logo" src={fieldLogo}/>
            <Nav className="footer_menu">
                <Nav.Item><Nav.Link href="/">Kryefaqja</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">Rreth nesh</Nav.Link></Nav.Item>    
                <Nav.Item><Nav.Link href="/contact">Na kontaktoni</Nav.Link></Nav.Item>
            </Nav>
            <Nav className="footer_social">
                <Nav.Item><Nav.Link href="/about">
                    <img className="social_icons" src={socialFacebook}/>
                 </Nav.Link></Nav.Item>    
                <Nav.Item><Nav.Link href="/contact">
                    <img className="social_icons" src={socialInstagram}/>
                </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">
                    <img className="social_icons" src={socialTwitter}/>
                </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">
                    <img className="social_icons" src={socialLinkedin}/>
                </Nav.Link></Nav.Item>
            </Nav>
         </div>
    </Styles>
)