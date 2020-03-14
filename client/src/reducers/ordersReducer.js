export default function ordersReducer(
  state = { orders: [], fetching: false }, action ) {
    console.log(action)
    switch ( action.type ) {
      case "START_FETCHING_ORDERS" : 
        return {
          ...state,
          orders: [...state.orders],
          fetching: true 
        }
      case "GET_ORDERS" :
        return {
          ...state,
          orders: action.orders,
          fetching: false 
        }
      case "ADD_NEW_ORDER":
        return {
          ...state,
          orders: [ ...state.orders.concat(action.order) ],
          fetching: false
        }
      default: 
        return state 
    }
  }