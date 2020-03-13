import React from 'react';

const OrderShow = ({ match, orders }) => {
  console.log(match)
  const order = orders.find( order => order.id === match.params.id )

  return (
    <div>
      <h1>{ order.doctor.name }</h1>
    </div>
  )
}

export default OrderShow