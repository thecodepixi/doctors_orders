import React from 'react';
import Preview from './preview'

const FollowUp = (props) => {

  return (
    <div>
      <strong>Follow Up Needed: </strong>
      { props.orders.map( order => {
        return <Preview order={order} key={order.id} />
      }) }
      <hr/>
    </div>  
  )
}

export default FollowUp