export default function ordersReducer(
  state = { orders: [], follow_up_orders: [], fetching: false }, action ) {
    console.log(action)
    let idx;
    switch ( action.type ) {
      case "START_FETCHING_ORDERS" : 
        return {
          ...state,
          orders: [...state.orders],
          follow_up_orders: [...state.follow_up_orders],
          fetching: true 
        }
      case "GET_ORDERS" :
        return {
          ...state,
          orders: action.orders.orders,
          follow_up_orders: action.orders.follow_up_orders,
          fetching: false 
        }
      case "ADD_NEW_ORDER":
        return {
          ...state,
          orders: state.orders.concat(action.order)
        }
      case "UPDATE_ORDER": 
        idx = state.orders.indexOf( order => order.id === action.order.id )
        return {
          ...state,
          orders: [...state.orders.slice(0, idx), action.order, ...state.orders.slice(idx, state.orders.length -1 )],
          follow_up_orders : [...state.follow_up_orders.splice(idx,1)]
        }
      case "DELETE_ORDER": 
        idx = state.orders.indexOf( order => order.id === action.order.id )
        return {
          ...state,
          orders: [...state.orders.splice(idx,1)],
          follow_up_orders:[...state.follow_up_orders.filter( order => order.id !== action.order.id)]
        }
      default: 
        return state 
    }
  }