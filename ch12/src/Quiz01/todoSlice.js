import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         여기에 코드 작성.push({ id: Date.now(), text: 여기에 코드 작성 })
      },
      removeTodo: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})

export default 여기에 코드 작성
export const { 여기에 코드 작성 } = todoSlice.actions
