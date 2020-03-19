export default function ordersReducer(
  state = { orders: [], fetching: false }, action ) {
    console.log(action)
    let idx;
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
          orders: action.orders.orders,
          fetching: false 
        }
      case "ADD_ORDER":
        console.log(action.order)
        return {
            ...state,
            orders: state.orders.concat(action.order)
          }
      case "UPDATE_ORDER": 
        let unchangedOrders = state.orders.filter( order => order.id !== action.order.id)
        return {
          ...state,
          orders: unchangedOrders.concat(action.order)
        }
      case "DELETE_ORDER": 
        return {
          ...state,
          orders: state.orders.filter( order => order.id !== action.order.id)
        }
      default: 
        return state 
    }
  }