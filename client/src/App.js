import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PreviewContainer from './containers/previewContainer'
import OrderFormContainer from './containers/orderFormContainer'
import OrderShow from './components/orderShow'
import NavBar from './components/navBar'

class App extends React.Component {
  
  render(){
    return(
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={PreviewContainer} />
            <Route exact path="/orders" component={PreviewContainer} />
            <Route exact path="/orders/new" component={OrderFormContainer} />
            <Route to="/orders/:orderId" component={OrderShow} />
          </Switch>
        </Router>
      </div>  
    )
  }
}

export default App