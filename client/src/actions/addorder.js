export function addOrder(order) {
  return(dispatch) => {
    dispatch({type: "START_FETCHING_ORDERS"});
    fetch("/orders", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     }, 
     body: JSON.stringify(order) })
      .then( resp => resp.json())
      .then( order => dispatch({ type: "ADD_ORDER", order }))
  }
}