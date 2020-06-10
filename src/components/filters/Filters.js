import React, {Component} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Datetime from '../DateTime/Datetime';   
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

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
        this.state = {value: ' '};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        alert('Your favorite field is: ' + this.state.value);
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    bookContinuedHandler = () =>{
        this.props.history.push('/reservation');
    }
    
    render(){
		return(
			<div>
				<Styles>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Label>Zgjidh fushen</Form.Label>
                            <Form.Control as="select" size="lg" custom value={this.state.value} onChange={this.handleChange}>
                                <option value="fusha1">Fusha 1</option>
                                <option value="fusha2">Fusha 2</option>
                                <option value="fusha3">Fusha 3</option>
                                <option value="fusha4">Fusha 4</option>
                            </Form.Control>
                            
                        </Form.Group>
                        <Datetime></Datetime>
                        <Button variant="primary" size="lg" block className="green-btn" type="submit" value="Submit" onClick={this.bookContinuedHandler}>
                            BOOK NOW
                        </Button>
                    </Form>
                </Styles>
                
			</div>
		);
	}

}  
export default withRouter(Filters);