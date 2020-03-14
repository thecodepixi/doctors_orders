export function updateOrder(order) {
  return (dispatch) => {
    fetch(`orders/${order.id}`, {
    method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     }, 
     body: JSON.stringify({ id: order.id, follow_up: order.follow_up })
    })
    .then( resp => resp.json())
    .then( order => dispatch({ type: "UPDATE_ORDER", order }))
  } 
}