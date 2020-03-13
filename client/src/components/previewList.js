import React from 'react';
import Preview from './preview'
import FollowUp from './followup'
import OrderShow from '../components/order'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const PreviewList = ({ orders, followUpOrders }) => {
  return (
    <div>
      
       { followUpOrders.length > 0 ? <FollowUp orders={followUpOrders} /> : null }

        { orders.map( order => {
          return <Preview order={order} key={order.id}/>
        } ) }

    </div>
  )
}

export default PreviewList 