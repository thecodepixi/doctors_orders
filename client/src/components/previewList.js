import React from 'react';
import Preview from './preview'
import FollowUp from './followup'

const PreviewList = (props) => {
  return (
    <div>

        { props.followUpOrders ? <FollowUp orders={props.followUpOrders} /> : null }

        { props.orders.map( order => {
          return <Preview order={order} key={order.id} />
        } ) }

    </div>
  )
}

export default PreviewList 