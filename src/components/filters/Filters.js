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
    constructor(props) {
        super(props);
        this.state = {
            dataFields: [],
            oldField:''
        };
      }
    componentDidMount = () => {
        db.collection("fields")
        .get()
        .then(querySnapshot => {
           this.setState({dataFields : querySnapshot.docs.map(doc => doc.data())});
        });
    };

    handleChange = (event) => {
          this.setState({oldField: event.target.value});
          console.log('change',  event.target.value);
    };

    handleSubmit = (event) => {
        console.log('Your favorite field is: ', this.state.oldField);
     event.preventDefault();
    //this.props.history.push('/reservation');
      };
      
    render(){

        const { dataFields } = this.state;

        let dataFieldsList = dataFields.length > 0
    	&& dataFields.map((item, i) => {
            return (
            <option key={i} value={item.label}>{item.label}</option>
        )
        }, this);
        console.log('fushat', dataFields);
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
                                      {dataFieldsList}
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