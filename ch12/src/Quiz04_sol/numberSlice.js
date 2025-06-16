import { createSlice } from '@reduxjs/toolkit'

const numberSlice = createSlice({
   name: 'number',
   initialState: { number: 1 },
   reducers: {
      multiply: (state, action) => {
         state.number *= action.payload
      },
      reset: (state, action) => {
         state.number = 1
      },
   },
})

export default numberSlice.reducer
export const { multiply, reset } = numberSlice.actions
