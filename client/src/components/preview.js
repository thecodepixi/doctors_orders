import React from 'react';

const Preview = (props) => {
  console.log(props.order)
  return (
    <ul>
      <li>Appoinment Date: {props.order.appointment_date.split("T")[0]}</li>
      <li>Doctor Name: {props.order.doctor.name} ({props.order.doctor.specialty})</li>
    </ul>
  )

}

export default Preview