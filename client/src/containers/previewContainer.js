import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/fetchOrders'
import PreviewList from '../components/previewList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Preview from '../components/preview'
import OrderShow from '../components/order'

class PreviewContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchOrders()
  }

  render() {

    const followUpOrders = this.props.orders.filter( order => order.follow_up === true )
    const orders = this.props.orders 

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <PreviewList orders={this.props.orders} followUpOrders={followUpOrders} />
            </Route>
            <Route path='/orders/:orderId' children={ < OrderShow /> } />
          </Switch>
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