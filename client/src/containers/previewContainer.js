import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import PreviewList from '../components/previewList'
import FollowUp from '../components/followup'
import { Container } from 'semantic-ui-react'
class PreviewContainer extends React.Component {

  componentDidMount = () => {
    if ( this.props.orders.length === 0 ) {
      this.props.fetchOrders()
    }
  }

  render() {

    return (
      <Container>
        { this.props.follow_up_orders.length > 0 ? <FollowUp orders={this.props.follow_up_orders} /> : null }
        <PreviewList orders={this.props.orders} followUpOrders={this.props.follow_up_orders} />
      </Container>
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