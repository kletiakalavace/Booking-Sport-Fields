import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

 
class DateTime extends Component {
  state = {
    date: new Date(),
  }
 
  handleChange = (date) => {
    this.setState({ date });
    console.log('date',date);
  };
 
  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default DateTime;