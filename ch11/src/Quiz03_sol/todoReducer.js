const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   // action = { type: 'addTodo', payload: '흑백요리사보기' }
   // action = { type: 'deleteTodo', payload: 2 }

   switch (action.type) {
      case 'addTodo':
         // 기존에 있던 데이터를 유지 + 불변성을 유지를 위해 새로운 객체를 만들어서 반환
         /*
         {
            todos: [{id:1 , text:'운동하기'}]
         }
         
         {
            todos: [{id:1 , text:'운동하기'}, {id:2, text: '공부하기'}]
         }
         
        { 
            todos: [{id:1 , text:'운동하기'}, {id:2, text: '공부하기'}, {id:3, text: '흑백요리사보기'}]  
        }
         */
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      case 'deleteTodo':
         // 선택된 데이터를 삭제 + 불변성을 유지를 위해 새로운 객체를 만들어서 반환

         /*
         { 
            todos: [{id:1 , text:'운동하기'}, {id:2, text: '공부하기'}, {id:3, text: '흑백요리사보기'}]  
         }
         */

         /*
          { todos: [{id:1, text:'운동하기'}, {id:3, text: '흑백요리사보기'}] }
         */
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      default:
         return state
   }
}

export default todoReducer
