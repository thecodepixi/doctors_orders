import React from 'react';

const OrderShow = ( props ) => {
  let order = props.location.state.order
  console.log(order)

  return (
    <div>
      <h2>Doctor's Orders from {order.appointment_date.split("T")[0]} </h2>
      <hr />
      <p>Doctor: {order.doctor.name} (Specialty: {order.doctor.specialty})</p>
      <p>Appointment Type: {order.appointment_type}</p>
      <p>Test Results: {order.test_results}</p>
      <p>Treatment Notes: {order.treatment_info}</p>
      <p>Follow Up Needed? { order.follow_up ? "Yes": "No" }</p> 
    </div>
  )
}

export default OrderShow