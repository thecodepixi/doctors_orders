import React from 'react';
import { Checkbox, Header, Divider} from 'semantic-ui-react'

const ConfirmFollowUp = props => {

  const handleClick = () => {
    props.updateOrderState()
    props.updateOrder({ id: props.order.id })
  }

  const followUpForm = () => {
    return (
      <form>
      <Header as="h3">
        <Checkbox value="false" name="follow_up" onClick={handleClick} color="teal" label="" />
        I followed up with my doctor! <span role="img" aria-label="emoji party blower">🎉</span> 
      </Header>
      <Divider />
    </form>
    )
  }

  if ( props.order.follow_up ) {
    return (
      followUpForm()
    )
  } else {
    return (
      null 
    )
  }

}

export default ConfirmFollowUp 