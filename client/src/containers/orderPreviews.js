import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import Preview from '../components/preview'
import FollowUp from '../components/followup'

class OrderPreviews extends React.Component {

  componentDidMount = () => {
    this.props.fetchOrders()
  }
  
  getFollowUpOrders = () => {
    return this.props.orders.filter( order => order.follow_up === true )
  }

  render() {

    const followUpOrders = this.getFollowUpOrders()

    return (
      <div>
        
        { followUpOrders ? <FollowUp orders={followUpOrders} /> : null }

        { this.props.orders.map( order => {
          return <Preview order={order} key={order.id}/>
        })}

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