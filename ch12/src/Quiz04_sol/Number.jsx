import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { multiply, reset } from './numberSlice'

function Number() {
   const number = useSelector((state) => state.number.number)
   const dispatch = useDispatch()

   return (
      <div>
         <h1>현재 숫자: {number}</h1>
         <button onClick={() => dispatch(multiply(2))}>2배</button>
         <button onClick={() => dispatch(multiply(3))}>3배</button>
         <button onClick={() => dispatch(multiply(10))}>10배</button>
         <button onClick={() => dispatch(reset())}>초기화</button>
      </div>
   )
}

export default Number
