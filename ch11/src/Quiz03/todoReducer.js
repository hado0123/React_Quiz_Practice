const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'addTodo':
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      case 'deleteTodo':
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      default:
         return state
   }
}

export default todoReducer
