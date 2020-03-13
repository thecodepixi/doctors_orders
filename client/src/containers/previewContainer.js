import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
        <Router>
          <Route exact path={'/'} component={ routerProps => <PreviewList orders={this.props.orders} followUpOrders={followUpOrders} {...routerProps} /> } />
        </Router>
        

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