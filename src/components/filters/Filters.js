import React, {Component} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Datetime from '../DateTime/Datetime';   
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import {db}  from '../../Firestore';

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



class Filters extends Component{
    state = {
        fields: [],
        date:null,
        error:false
    };
    componentDidMount = () => {
        // db.collection("fields").doc("field_1").update({
        //     location: "Tirane"
        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });


        db.collection("fields")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); // array of cities objects
        });

      
    };

    // constructor(props) {
    //     super(props);
    //     this.state = ' ';
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    handleChange(event) {
        this.setState({label: event.target.value});
        
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.fields);
    event.preventDefault();
    this.props.history.push('/reservation');
      }
    // bookContinuedHandler = () =>{
    //     this.props.history.push('/reservation');
    // }
    render(){

        // return Object.keys(this.state.fields).map( (key) => {
        //     return <p>{key} => {this.state.fields[key]}</p>;
        // });
    
		return(
			<div>
				<Styles>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Label>Zgjidh fushen</Form.Label>
                                <Form.Control
                                 as="select" 
                                 size="lg" 
                                 custom value={this.state.value} 
                                 onChange={this.handleChange}>
                                     <option
                                        label={this.state.value}>{this.state.value}
                                    </option> */}

{/* Object.keys(this.state.fields).map( (key) => {
         return <option {key} =>
        label={this.state.fields[key]}>{this.state.fields[key]}</option> })

 
                                    
                                    {/* {this.state.fields.map(ctrl =>( <option
                                                label={this.state.fields}>{this.state.fields}</option>
                                        ))}

                                        ))} */}

                                </Form.Control>
                        </Form.Group>
                        <Datetime></Datetime>
                        <Button variant="primary" size="lg" block className="green-btn" type="submit" value="Submit" >
                            BOOK NOW
                        </Button>
                    </Form>
                </Styles>
                
			</div>
		);
	}

}  
export default withRouter(Filters);