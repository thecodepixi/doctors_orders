import React from 'react';
import { Checkbox, Icon, Header, Divider} from 'semantic-ui-react'

const ConfirmFollowUp = props => {

  const handleClick = () => {
    props.updateOrder({ id: props.order.id })
    props.updateOrderState()
  }

  const followUpForm = () => {
    return (
      <form>
      <Header as="h3">
        <Checkbox value="false" name="follow_up" onClick={handleClick} color="teal" label="" />
        I followed up with my doctor! 🎉
      </Header>
      <Divider />
    </form>
    )
  }

  if ( props.order.follow_up ) {
    return (
      followUpForm()
    )
  }

}

export default ConfirmFollowUp 