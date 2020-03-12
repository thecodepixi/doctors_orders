export default function ordersReducer(
  state = { orders: [] }, action ) {
    console.log(action)
    switch ( action.type ) {
      case "ADD_ORDER" :
        console.log(state)
        return { orders: state.orders.concat(`order test ${state.orders.length + 1}`) }
      default: 
        return state 
    }
  }