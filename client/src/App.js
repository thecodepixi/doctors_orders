import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ordersReducer from './reducers/ordersReducer'
import PreviewContainer from './containers/previewContainer'
import OrderShow from './components/order'

const store = createStore(ordersReducer, applyMiddleware(thunk))

function App (){
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <PreviewContainer />
            </Route>
            <Route path='/orders/:orderId' children={ < OrderShow /> } />
          </Switch>
        </Router>
      </Provider>
    )
}

export default App;
