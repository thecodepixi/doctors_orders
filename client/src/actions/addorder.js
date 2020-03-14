export function addOrder(order) {
  return(dispatch) => {
    fetch("/orders", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     }, 
     body: JSON.stringify(order) })
      .then( resp => resp.json())
      .then( order =>{ 
        if( order.status === "error" ) {
          alert( order.errors )
        } else {
          dispatch({ type: "ADD_ORDER", order })
        }
      })
      .catch( error => console.log(error))
  }
}