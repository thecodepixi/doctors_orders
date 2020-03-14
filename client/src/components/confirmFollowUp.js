import React from 'react';

const ConfirmFollowUp = props => {

  const handleClick = () => {
    props.updateOrder({ id: props.orderId })
    props.updateOrderState()
  }

  return (
    <form>
      <label>Did You Follow Up With Your Doctor?</label>
      <input type="checkbox" value="false" name="follow_up" onClick={handleClick}/>
    </form>
  )
}

export default ConfirmFollowUp 