import React from 'react';
import { connect } from 'react-redux'
import { addOrder } from '../actions/addorder'
import OrderForm from '../components/orderForm'

class OrderFormContainer extends React.Component {

  render(){
    return(
      <div>
        <OrderForm addOrder={this.props.addOrder} history={this.props.history}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(addOrder(order))
  }
}


export default connect(null, mapDispatchToProps)(OrderFormContainer)