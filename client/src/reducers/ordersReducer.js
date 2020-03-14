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
      case "UPDATE_ORDER": 
        let idx = state.orders.indexOf( order => order.id === action.order.id )
        return {
          ...state,
          orders: [...state.orders.slice[0, idx], action.order, ...state.orders.slice[idx, state.orders.length -1 ]],
          fetching: false 
        }
      default: 
        return state 
    }
  }