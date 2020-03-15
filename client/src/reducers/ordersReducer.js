export default function ordersReducer(
  state = { orders: [], follow_up_orders: [], fetching: false }, action ) {
    console.log(action)
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
          orders: [ ...state.orders.concat(action.order) ],
          fetching: false
        }
      case "UPDATE_ORDER": 
        let idx = state.orders.indexOf( order => order.id === action.order.id )
        return {
          ...state,
          orders: [...state.orders.slice(0, idx), action.order, ...state.orders.slice(idx, state.orders.length -1 )],
          follow_up_orders : state.follow_up_orders.filter( order => order.id !== action.order.id),
          fetching: false 
        }
      default: 
        return state 
    }
  }