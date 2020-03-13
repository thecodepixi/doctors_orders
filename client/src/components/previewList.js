import React from 'react';
import Preview from './preview'
import FollowUp from './followup'
import { Route } from 'react-router-dom'
import OrderShow from './order'

const PreviewList = ({ orders, followUpOrders, match }) => {
  return (
    <div>
      { followUpOrders.length > 0 ? <FollowUp orders={followUpOrders} /> : null }

      { orders.map( order => {
        return <Preview order={order} key={order.id} match={match}/>
      } ) }

      <Route path={`${match.url}/orders/:id`} render={ routerProps => <OrderShow {...routerProps} orders={orders}/> }/> 
    </div>
  )
}

export default PreviewList 