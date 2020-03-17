import React from 'react';
import { Redirect } from 'react-router-dom'
import { Container, Form } from 'semantic-ui-react'

class OrderForm extends React.Component {

  state = {
    doctor_name: undefined,
    doctor_specialty: undefined,
    appointment_date: undefined,
    appointment_type: undefined,
    test_results: undefined,
    treatment_info: undefined,
    follow_up: undefined
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
        submitted: true 
      })
  }
  
  render() {
    if( this.state.submitted ) {
      return <Redirect to={"/"} />
    } 
    return (
    <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label id="appointment_date">Date: </label>
          <input type="date" name="appointment_date" id="appointment_date" onChange={this.handleChange}  />
        </Form.Field>
        <Form.Field>
          <label id="doctor_name">Doctor's Name: </label>
          <input type="text" name="doctor_name" id="doctor_name" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label id="doctor_specialty">Doctor's Specialty: </label>
          <input type="text" name="doctor_specialty" id="doctor_specialty" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label id="appointment_type">Appointment Type: </label>
          <select id="appointment_type" name="appointment_type" onChange={this.handleChange} >
            <option value=""></option>
            <option value="sick visit">Sick Visit</option>
            <option value="checkup">Checkup</option>
            <option value="treatment">Treatment</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label id="test_results">Test Results: </label>
          <input type="text" name="test_results" id="test_results" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label id="treatment_info">New Treatment Updates: </label>
          <textarea id="treatment_info" name="treatment_info" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          Follow Up Needed?: 
          <label id="follow_up"> Yes</label>
          <input type="radio" id="follow_up" name="follow_up" value="true"onChange={this.handleChange}/>
          <label id="follow_up"> No</label>
          <input type="radio" id="follow_up" name="follow_up" value="false"onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Button type="submit">Submit</Form.Button>
        </Form.Field>
      </Form>
    </Container>
    )
  }
}

export default OrderForm