import React from 'react';
import { updateOrder } from '../actions/updateOrder'
import { deleteOrder } from '../actions/deleteOrder'
import { connect } from 'react-redux'
import ConfirmFollowUp from './confirmFollowUp'
import { Button, Icon, Container, Header } from 'semantic-ui-react'

class OrderShow extends React.Component {

  state = {
    order: this.props.location.state.order,
    follow_up_updated: null 
  }

  updateOrderState = () => {
    this.setState( prevState => {
      return {
        order: {
          ...prevState.order, 
          follow_up: false 
        },
        follow_up_updated: true 
      }
    })
  }

  deleteOrder = () => {
    this.props.deleteOrder(this.state.order)
    this.props.history.goBack()
  }

  congrats = () => {
    return (
      <Header as="h3" color="teal">Great job following up with your doctor! </Header>
    )
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        { this.state.order.follow_up ? < ConfirmFollowUp updateOrder={this.props.updateOrder} order={this.state.order} updateOrderState={this.updateOrderState} /> : null }
        { this.state.follow_up_updated ? this.congrats() : null }
        <Header as="h2">
           Doctor's Orders from {this.state.order.appointment_date.split("T")[0]}
          <Button onClick={this.deleteOrder} animated floated="right" icon > 
            <Button.Content visible>
              <Icon name="close"/>
            </Button.Content>
            <Button.Content hidden>delete</Button.Content>
          </Button> 
        </Header>
        <hr />
        <p>Doctor: {this.state.order.doctor.name} (Specialty: {this.state.order.doctor.specialty})</p>
        <p>Appointment Type: {this.state.order.appointment_type}</p>
        <p>Test Results: {this.state.order.test_results}</p>
        <p>Treatment Notes: {this.state.order.treatment_info}</p>
        <p>Follow Up Needed? { this.state.order.follow_up ? "Yes": "No" }</p> 
        
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOrder: order => dispatch(updateOrder(order)),
    deleteOrder: order => dispatch(deleteOrder(order))
  }
}

export default connect(null, mapDispatchToProps)(OrderShow)