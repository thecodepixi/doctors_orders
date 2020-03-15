import React from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

let initialState = {
  doctor_name: null,
  doctor_specialty: null,
  appointment_date: null,
  appointment_type: null,
  test_results: null,
  treatment_info: null,
  follow_up: null,
  submitted: false 
}

class OrderForm extends React.Component {

  state = {
    ...initialState
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addOrder(this.state)
    this.setState({
     ...initialState,
     submitted: true 
    })
  }
  
  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label id="appointment_date">Date: </label>
          <input type="date" name="appointment_date" id="appointment_date" onChange={this.handleChange}/>
        </p>
        <p>
          <label id="doctor_name">Doctor's Name: </label>
          <input type="text" name="doctor_name" id="doctor_name" onChange={this.handleChange}/>
        </p>
        <p>
          <label id="doctor_specialty">Doctor's Specialty: </label>
          <input type="text" name="doctor_specialty" id="doctor_specialty" onChange={this.handleChange}/>
        </p>
        <p>
          <label id="appointment_type">Appointment Type: </label>
          <select id="appointment_type" name="appointment_type" onChange={this.handleChange} >
            <option value=""></option>
            <option value="sick visit">Sick Visit</option>
            <option value="checkup">Checkup</option>
            <option value="treatment">Treatment</option>
          </select>
        </p>
        <p>
          <label id="test_results">Test Results: </label>
          <input type="text" name="test_results" id="test_results" onChange={this.handleChange}/>
        </p>
        <p>
          <label id="treatment_info">New Treatment Updates: </label>
          <textarea id="treatment_info" name="treatment_info" onChange={this.handleChange}/>
        </p>
        <p>
          Follow Up Needed?: 
          <label id="follow_up"> Yes</label>
          <input type="radio" id="follow_up" name="follow_up" value="true"onChange={this.handleChange}/>
          <label id="follow_up"> No</label>
          <input type="radio" id="follow_up" name="follow_up" value="false"onChange={this.handleChange}/>
        </p>
        <p>
          <input type="submit" value="Add Orders" />
        </p>
      </form>
    </div>
    )
  }
}

export default OrderForm