export function fetchOrders() {
  return(dispatch) => {
    dispatch({ type: "START_FETCHING_ORDERS" });
    fetch('/orders')
      .then( resp => resp.json())
      .then( orders => dispatch({ type: "GET_ORDERS", orders}))
  } 
}