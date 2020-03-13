import React from 'react';
import { Route, Link } from 'react-router-dom'
import OrderShow from './order'

const Preview = ({match, order}) => {
  return (
    <ul>
      <li>Appoinment Date: {order.appointment_date.split("T")[0]}</li>
      <li>Doctor Name: {order.doctor.name} ({order.doctor.specialty})</li>
      <Link to={`/orders/${order.id}`}>View Details</Link>

    </ul>
  )

}

export default Preview