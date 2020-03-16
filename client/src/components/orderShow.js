import React from 'react';
import { updateOrder } from '../actions/updateOrder'
import { deleteOrder } from '../actions/deleteOrder'
import { connect } from 'react-redux'
import ConfirmFollowUp from './confirmFollowUp'
import { Button, Icon, Container, Header, Item } from 'semantic-ui-react'

class OrderShow extends React.Component {

  state = {
    order: this.props.location.state.order,
    follow_up_updated: null 
  }

  formattedDate = (date) => {
    let splitDate = date.split("T")[0].split("-")
    let month = splitDate[1]
    let day = splitDate[2]
    let year = splitDate[0]
    return { day: day, month: month, year: year}
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
      <Header as="h3" color="teal">You're doing amazing, sweetie! 🎉💕</Header>
    )
  }

  render() {
    console.log(this.props)
    let order_date = this.formattedDate(this.state.order.appointment_date)
    return (
      <Container textAlign="center">
        { this.state.order.follow_up ? < ConfirmFollowUp updateOrder={this.props.updateOrder} order={this.state.order} updateOrderState={this.updateOrderState} /> : null }
        { this.state.follow_up_updated ? this.congrats() : null }
        <Item.Group className="order-show">
          <Item>
          <Item.Content>
            <Item.Header as="h2">
           Doctor's Orders from {order_date.month} / {order_date.day} / {order_date.year}
          
        </Item.Header>
        <Button onClick={this.deleteOrder} animated floated="right" icon > 
          <Button.Content visible>
            <Icon name="close"/>
          </Button.Content>
          <Button.Content hidden>delete</Button.Content>
        </Button>  
        <hr />
        
        <Item.Description>
          <p><strong>Doctor:</strong> {this.state.order.doctor.name}</p>
          <p><strong>Specialty:</strong> {this.state.order.doctor.specialty} </p>
          <p><strong>Appointment Type:</strong> {this.state.order.appointment_type}</p>
          <p><strong>Test Results:</strong> {this.state.order.test_results}</p>
          <p><strong>Treatment Notes:</strong> {this.state.order.treatment_info}</p>
        </Item.Description>
        <Item.Extra>
          { this.state.order.follow_up ? "Follow Up Needed": null } 
        </Item.Extra>
        
        </Item.Content>
          
        </Item>
        </Item.Group>
        
        
        
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