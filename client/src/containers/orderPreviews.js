import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'

class OrderPreviews extends React.Component {

  componentDidMount = () => {
    this.props.fetchOrders()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders()) 
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(OrderPreviews)