export function deleteOrder(order) {
  return(dispatch) => {
    fetch(`/orders/${order.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     }
    })
      .then( resp => resp.json())
      .then( order => dispatch({type: "DELETE_ORDER", order}))
  }
}