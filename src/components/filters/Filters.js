import React, {Component} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import {db}  from '../../Firestore';
import DateTimePicker from 'react-datetime-picker';
import Reservation from '../../Reservation';


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
            oldField:'',
            date:new Date()
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
   
    handleChangeDate = (date) => {
        console.log('date',date);
        this.setState({date});
      };
      
      bookingButton = (event) => {
        let dataBooking = [];
        let selectedDate = '';
        dataBooking = this.state.oldField;
        selectedDate = this.state.date;
        console.log('Your favorite field is: ', this.state.oldField);
        console.log('Your favorite date is: ', this.state.date);
        this.setState({ dataBooking });
        this.setState({ selectedDate });
        this.props.history.push({
            pathname: '/reservation',
            state: { some: this.state.oldField, selectedDate: this.state.date}
          });
      };
      addReservation = (e) => {
        e.preventDefault();
            this.setState({
                dataFields: [],
             });
      };
     
    render(){

        const { dataFields } = this.state;

        let dataFieldsList = dataFields.length > 0
    	&& dataFields.map((item, i) => {
            return (
            <option key={i} value={item.label}>{item.label}</option>
            
        )
        }, this);

        // this.setState({currentDate: this.state.date});
        console.log('fushat', dataFields);
        //let dbData  = this.state.date
        //console.log('dataDB', new Date(dbData).toString());
       // const timestamp = new Date();
       // const timestamp = this.state.dataFields.new Date();
        //const ourDate= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);
        //console.log('data return', new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp));
      

		return(
            
			<div>
				<Styles>
                    <Form onSubmit={this.addReservation}>
                        <Form.Group>
                            <Form.Label>Zgjidh fushen</Form.Label>
                                <Form.Control
                                 as="select" 
                                 size="lg" 
                                 custom value={this.state.value} 
                                 onChange={this.handleChange}>
                                 {dataFieldsList}
                                </Form.Control>
                        </Form.Group>
                        <DateTimePicker
                           selected={this.state.newDate}
                           onChange={this.handleChangeDate}
                           value={this.state.date}>
                            </DateTimePicker>
                        <Button onClick={this.bookingButton} variant="primary" size="lg" block className="green-btn" type="submit" value="Submit" >
                            BOOK NOW
                        </Button>
                    </Form>
                </Styles>
                
			</div>
		);
	}

}  
export default withRouter(Filters);