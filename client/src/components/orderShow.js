import React from 'react';
import { updateOrder } from '../actions/updateOrder'
import { connect } from 'react-redux'
import ConfirmFollowUp from './confirmFollowUp'

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

  congrats = () => {
    setTimeout( () => this.setState({ follow_up_updated: null }), 10000)
    return (
      <p>Great job following up with your doctor!</p>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.state.follow_up_updated ? this.congrats() : null }
        <h2>Doctor's Orders from {this.state.order.appointment_date.split("T")[0]} </h2>
        <hr />
        <p>Doctor: {this.state.order.doctor.name} (Specialty: {this.state.order.doctor.specialty})</p>
        <p>Appointment Type: {this.state.order.appointment_type}</p>
        <p>Test Results: {this.state.order.test_results}</p>
        <p>Treatment Notes: {this.state.order.treatment_info}</p>
        <p>Follow Up Needed? { this.state.order.follow_up ? "Yes": "No" }</p> 
        { this.state.order.follow_up ? < ConfirmFollowUp updateOrder={this.props.updateOrder} orderId={this.state.order.id} updateOrderState={this.updateOrderState} /> : null }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOrder: order => dispatch(updateOrder(order))
  }
}

export default connect(null, mapDispatchToProps)(OrderShow)