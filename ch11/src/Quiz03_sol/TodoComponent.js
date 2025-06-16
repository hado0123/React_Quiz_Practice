import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoComponent = () => {
   const [inputValue, setInputValue] = useState('')

   /* state = { 
            todos: [{id:1 , text:'운동하기'}, {id:2, text: '공부하기'}, {id:3, text: '흑백요리사보기'}]  
    }
   */

   // todos = [{id:1 , text:'운동하기'}, {id:3, text: '흑백요리사보기'}]
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()

   const handleAddTodo = () => {
      if (inputValue.trim()) {
         // inputValue = '흑백요리사보기'
         dispatch({ type: 'addTodo', payload: inputValue }) // action객체는 reducer의 action 매개변수로 전달
         setInputValue('')
      }
   }

   const handleDeleteTodo = (id) => {
      dispatch({ type: 'deleteTodo', payload: id })
   }

   return (
      <div>
         <h1>Todo List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할 일 추가" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {/* 
             todos = [{id:1 , text:'운동하기'}, {id:3, text: '흑백요리사보기'}]
            */}
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponent
