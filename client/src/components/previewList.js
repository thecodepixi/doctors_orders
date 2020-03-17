import React from 'react';
import Preview from './preview'
import { Grid } from 'semantic-ui-react'

const PreviewList = (props) => {
  return (
    <Grid columns={3} stackable doubling>
        { props.orders.map( order => {
          return <Preview order={order} key={order.id} />
        } ) }
    </Grid>
  )
}

export default PreviewList 