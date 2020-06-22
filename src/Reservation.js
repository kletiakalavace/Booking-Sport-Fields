import React from 'react';
import {Slider} from './components/Slider/Slider';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import Maps from './components/Maps';

const Styles = styled.div`
    .form_reservation{
        display:flex;
    }
    .form-group-contact{
        width: 49%;
        display: inline-block;
        margin: 20px 0;
    }
    .form-group-contact.left{
        float:left;
    }
    .form-group-contact.right{
        float:right;
    }
    .header_reservation{
        margin:50px auto;
        text-align:center
    }
    .reservation_contact{
        margin: 50px auto;
        display: block;
        float: left;
        width: 100%;
    }
    .form-control{
        width:88%
    }
`;

export const Reservation = () =>(
    
    <Styles>
         <div className="header_reservation">
            <h2>Ju keni zgjedhur :{this.props.label}  </h2>
            <h3>Adresa:Tirane</h3>
            <h3>Data: 14.10.2020, Ora: 17:30, Kohezgjatja: 60min</h3>
         </div>
         {/* <div class="reservation_address">
             test
            <Maps/>
         </div> */}
    <Form className="form_reservation">
    <Layout>
    <Slider/>
    <div className="reservation_contact">
        <h3>Ju lutem plotesoni fushat e listuar me poshte </h3>
        <Form.Group controlId="formBasicEmail" className="form-group-contact left">
            <Form.Label>Adresa e E-mail</Form.Label>
            <Form.Control type="email" placeholder="Vendosni adresen e E-mail" />
        </Form.Group>
        <Form.Group controlId="formBasicName" className="form-group-contact right">
            <Form.Label>Emer, Mbiemer</Form.Label>
            <Form.Control type="text" placeholder="Vendosni emrin tuaj te plote" />
        </Form.Group>
        <Form.Group controlId="formBasicPhone" className="form-group-contact left">
            <Form.Label>Numri Telefonit</Form.Label>
            <Form.Control type="tel" placeholder="Vendosni numrin e telefonit" />
        </Form.Group>
        <Form.Group controlId="formBasicPersons" className="form-group-contact right">
            <Form.Label>Numri i Personave</Form.Label>
            <Form.Control type="number" placeholder="Vendosni numrin e personave qe do te luajne" />
        </Form.Group>
    </div>
        </Layout>
    </Form>
  
    </Styles>
)