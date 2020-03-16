import React from 'react';
import Preview from './preview'
import { Header, Icon, Divider, Grid } from 'semantic-ui-react'

const FollowUp = (props) => {

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="exclamation circle" circular color="red"/>
        <Header.Content>Follow Up Needed:</Header.Content>
      </Header>
      <Grid columns={3} stackable doubling>
        { props.orders.map( order => {
        return <Preview order={order} key={order.id} />
      }) }
      </Grid>
      <Divider section />
    </div>  
  )
}

export default FollowUp