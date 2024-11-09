const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   switch (action.type) {
      case 'increment':
         return { count: state.count + 1 }
      // return { ...state, count: state.count + 1 } 불변성 유지
      case 'decrement':
         return { count: state.count - 1 }
      // return { ...state, count: state.count - 1 } 불변성 유지
      default:
         return state
   }
}

export default counterReducer
