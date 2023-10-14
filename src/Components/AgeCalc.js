import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: '',
      age: null,
    };
  }

  handleDateChange = (event) => {
    const birthDate = event.target.value;
    this.setState({ birthDate });
  };

  calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    const currentDate = new Date();
    const ageInMillis = currentDate - birthDate;
    const ageDate = new Date(ageInMillis);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    this.setState({ age });
  };

  render() {
    return (
      <div align="center">
        <h1>Age Calculator</h1>
        <label><b>Enter Your Date of Birth</b></label><br />
        <input
          type="date"
          value={this.state.birthDate}
          onChange={this.handleDateChange}
          style={{width:"20%"}}
        />
        <br />
        <button onClick={this.calculateAge} style={{backgroundColor:"blue",color:"white",borderRadius:"15px"}}>Calculate Age</button>
        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
