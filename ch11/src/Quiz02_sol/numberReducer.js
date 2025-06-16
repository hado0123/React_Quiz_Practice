const initialState = {
   number: 1,
}

function numberReducer(state = initialState, action) {
   switch (action.type) {
      case 'MULTIPLY':
         return {
            number: state.number * action.payload,
         }
      case 'RESET':
         return {
            number: 1,
         }
      default:
         return state
   }
}

export default numberReducer
