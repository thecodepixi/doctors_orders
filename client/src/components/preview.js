import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Card, Icon } from 'semantic-ui-react'
import Moment from 'react-moment'
 
const Preview = ({ order }) => {
  return (
      <Grid.Column>
        <Card color="teal">
          <Card.Content>
            
            <Card.Header><Moment format="dddd, LL">{ order.appointment_date.split("T")[0] }</Moment></Card.Header>
            <Card.Meta> 
              <p className="titlecase">{order.doctor.name} ({order.doctor.specialty})</p> 
              <p className="titlecase">{order.appointment_type}</p>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
          <Icon name="clipboard outline"/>
          <Link to={{ pathname: `/orders/${order.id}`, state: { order }}} > See Details </Link>
          </Card.Content>
        </Card>
      </Grid.Column>
  )
}

export default Preview