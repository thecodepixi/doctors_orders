import React from 'react';
import PreviewContainer from './containers/previewContainer'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App (){
    return (
      <Router>
        <Route exact path="/" render={ routerProps => < OrderPreviews {...routerProps} /> }/>
      </Router>
    )
}

export default App;
