import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Card } from 'semantic-ui-react'

function formattedDate(date) {
  let splitDate = date.split("T")[0].split("-")
  let month = splitDate[1]
  let day = splitDate[2]
  let year = splitDate[0]
  return { day: day, month: month, year: year}
}

const Preview = ({ order }) => {
  let date = formattedDate(order.appointment_date)
  return (
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>{date.month} / {date.day} / {date.year}</Card.Header>
            <Card.Meta> {order.doctor.name} ({order.doctor.specialty})</Card.Meta>
            <Card.Description><Link to={{ pathname: `/orders/${order.id}`, state: { order }}} > See Details </Link></Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
  )
}

export default Preview