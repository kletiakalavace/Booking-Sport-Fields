import React, {Component} from 'react';
import Slider from './components/Slider/Slider';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import Button from 'react-bootstrap/Button';
import {db}  from './Firestore';
import { NotificationManager } from "react-notifications";
//\simport { render } from '@testing-library/react';

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
    .green-btn{
        margin:20px auto;
        background:#a3ef5d;
        border:0;
        max-width:350px;
    }
`;

class Reservation extends Component{
    constructor(){
        super()

        this.state ={
            formValues: {
                email: '',
                fullName:'',
                noPhone:'',
                noPerson:'',
            },
            formErrors: {
                email: "",
                fullName: "",
                noPhone: "",
                noPerson: "",
              },
            formValidity: {
                email: false,
                fullName: false,
                noPhone: false,
                noPerson: false,
            },
            isSubmitting: false
        }
    }

    addReservation =() =>{
        const data ={
            ...this.state.formValues,
            uid: new Date().getTime()
        }
        db.collection("reservationForm")
        .doc(data.uid.toString())
        .set(data)
        .then(() => {
            NotificationManager.success("A new reservation has been added", "Success");
            window.location = "/";
        })
        .catch(error => {
            NotificationManager.error(error.message, "Create reservation failed");
            this.setState({ isSubmitting: false });
        });
        console.log(data);
    };
    formReservation = (event) => {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        const { formValues, formValidity } = this.state;
        
        if (Object.values(formValidity).every(Boolean)) {
            this.addReservation();
          } else {
            for (let key in formValues) {
              let target = {
                name: key,
                value: formValues[key]
              };
              this.handleValidation(target);
            }
            NotificationManager.error(
              "Please check on the validation message below form fields",
              "Validation error"
            );
            this.setState({ isSubmitting: false });
          }
            
      };

    handleChange = ({ target }) =>{
        const { formValues } = this.state;
        formValues[target.name] = target.value;
        this.setState({ formValues });
        this.handleValidation(target);
    }
    
    handleValidation = target => {
        const { name, value } = target;
        const fieldValidationErrors = this.state.formErrors;
        const validity = this.state.formValidity;
        const isImage = name === "image";
    
        if (!isImage) {
          validity[name] = value.length > 0;
          fieldValidationErrors[name] = validity[name]
            ? ""
            : `${name} is required and cannot be empty`;
        }
    
        this.setState({
          formErrors: fieldValidationErrors,
          formValidity: validity
        });
      };
     render(){
        //console.log(this.props);
        //console.log('fusha e zgjedhur ne rezervim',this.props.location.state.some);
        //console.log('data e zgjedhur ne rezervim',this.props.location.state.selectedDate);
        const { formValues, formErrors, isSubmitting } = this.state;
        const bookFields = this.props.location.state.some;
        const bookDate = this.props.location.state.selectedDate;
        return(
            <Styles>
                <div className="header_reservation">
                    <h2>Ju keni zgjedhur {bookFields} </h2>
                    <h3>{new Date(bookDate).toString()}</h3>
                </div>
                <div className="reservation_address"></div>
                <Form className="form_reservation">
                <Layout>
                <Slider/>
                <div className="reservation_contact">
                    <h3>Ju lutem plotesoni fushat e listuar me poshte </h3>

                    <Form.Group controlId="formBasicEmail" className="form-group-contact left">
                        <Form.Label>
                            Adresa e E-mail</Form.Label>
                        <Form.Control
                            className={`form-control ${
                                formErrors.role ? "is-invalid" : ""
                            }`}
                            type="email"
                            name="email"
                            placeholder="Vendosni adresen e E-mail"
                            onChange={this.handleChange}
                            value={formValues.email} />
                            <div className="invalid-feedback">{formErrors.email}</div>
                    </Form.Group>
                    <Form.Group controlId="formBasicName" className="form-group-contact right">
                        <Form.Label>Emer, Mbiemer</Form.Label>
                        <Form.Control
                            className={`form-control ${
                                formErrors.role ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="fullName"
                            placeholder="Vendosni emrin tuaj te plote"
                            onChange={this.handleChange}
                            value={formValues.fullName} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone" className="form-group-contact left">
                        <Form.Label>Numri Telefonit</Form.Label>
                        <Form.Control
                            className={`form-control ${
                                formErrors.role ? "is-invalid" : ""
                            }`} 
                            type="tel"
                            name="noPhone"
                            placeholder="Vendosni numrin e telefonit" 
                            onChange={this.handleChange}
                            value={formValues.noPhone}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPersons" className="form-group-contact right">
                        <Form.Label>Numri i Personave</Form.Label>
                        <Form.Control
                            className={`form-control ${
                                formErrors.role ? "is-invalid" : ""
                            }`} 
                            type="number"
                            name="noPerson"
                            placeholder="Vendosni numrin e personave qe do te luajne" 
                            onChange={this.handleChange}
                            value={formValues.noPerson}/>
                    </Form.Group>
                    <Button 
                        onClick={this.formReservation} 
                        variant="primary" 
                        size="lg" 
                        block 
                        className="green-btn" 
                        type="submit" 
                        value="Submit"
                        disabled={isSubmitting}>
                            BOOK NOW
                    </Button>
                    {isSubmitting ? "Please wait..." : "Submit"}
                </div>
                    </Layout>
                </Form>
            
                </Styles>
        );
     }
     
    
 }
    
export default Reservation;
    