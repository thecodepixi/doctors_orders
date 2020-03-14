import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOrders } from '../actions/fetchOrders'
import PreviewList from '../components/previewList'

class PreviewContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchOrders()
  }

  render() {

    return (
      <div>
        <Link to={"/orders/new"}>Click to Add Latest Doctor's Orders</Link>
        <PreviewList orders={this.props.orders} followUpOrders={this.props.follow_up_orders} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    follow_up_orders: state.follow_up_orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PreviewContainer)