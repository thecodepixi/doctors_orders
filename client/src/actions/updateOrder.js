export function updateOrder(order) {
  return (dispatch) => {
    fetch(`/orders/${order.id}`, {
    method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     }, 
     body: JSON.stringify({ id: order.id, follow_up: false })
    })
    .then( resp => resp.json())
    .then( order => dispatch({type: "UPDATE_ORDER"}, order))
  } 
}