import React from 'react';
import { Link } from "react-router-dom";

const Preview = ({ order }) => {
  return (
      <ul>
      <li>Appoinment Date: {order.appointment_date.split("T")[0]}</li>
      <li>Doctor Name: {order.doctor.name} ({order.doctor.specialty})</li>
      <Link to={{ pathname: `/orders/${order.id}`, state: { order }}} > See Details </Link>
      </ul>
  )
}

export default Preview