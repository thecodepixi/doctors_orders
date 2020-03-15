import React from 'react';

const ConfirmFollowUp = props => {

  const handleClick = () => {
    props.updateOrder({ id: props.order.id })
    props.updateOrderState()
  }

  const followUpForm = () => {
    return (
      <form>
      <label>Did You Follow Up With Your Doctor?</label>
      <input type="checkbox" value="false" name="follow_up" onClick={handleClick}/>
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