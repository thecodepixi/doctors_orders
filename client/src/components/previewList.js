import React from 'react';
import Preview from './preview'
import { Grid, Segment } from 'semantic-ui-react'

const PreviewList = (props) => {
  return (
    <Grid centered columns={4} stackable>

        { props.orders.map( order => {
          return <Preview order={order} key={order.id} />
        } ) }

    </Grid>
  )
}

export default PreviewList 