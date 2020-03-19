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

    let followUpOrders = this.props.orders.filter( order => order.follow_up === true )
    return (
      <Container>
        { followUpOrders.length > 0 ? <FollowUp orders={followUpOrders} /> : null }
        <PreviewList orders={this.props.orders} />
      </Container>
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
    fetchOrders: () => dispatch(fetchOrders()),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PreviewContainer)