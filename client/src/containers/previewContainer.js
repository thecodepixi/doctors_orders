import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import PreviewList from '../components/previewList'

class PreviewContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchOrders()
  }

  render() {

    const followUpOrders = this.props.orders.filter( order => order.follow_up === true )

    return (
      <div>
        <PreviewList orders={this.props.orders} followUpOrders={followUpOrders} />
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


export default connect(mapStateToProps,mapDispatchToProps)(PreviewContainer)