import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {

  handleClick = event => {
    this.props.addOrder()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Store Check</button>
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
    addOrder: () => dispatch({ type: "ADD_ORDER" })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
