import React from 'react';
import Preview from './preview'
import { Grid } from 'semantic-ui-react'

const PreviewList = (props) => {

  let ordersByDate = props.orders.sort( (a,b) => b.appointment_date > a.appointment_date)

  return (
    <Grid columns={3} stackable doubling>
        { ordersByDate.map( order => {
          return <Preview order={order} key={order.id} />
        } ) }
    </Grid>
  )
}

export default PreviewList 