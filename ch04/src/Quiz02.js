import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz02() {
   const [displayStates, setDisplayStates] = useState({
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1,
   })

   const { display1, display2, display3, level } = displayStates

   const evolve = (display, levelVal) => {
      setDisplayStates({
         display1: 'none',
         display2: 'none',
         display3: 'none',
      })

      setDisplayStates((prevState) => ({
         ...prevState,
         [display]: 'block',
         level: levelVal,
      }))
   }

   return (
      <div>
         <img src={step1} width="150" style={{ display: display1 }} />
         <img src={step2} width="150" style={{ display: display2 }} />
         <img src={step3} width="150" style={{ display: display3 }} />

         <br />

         {level === 1 && <button onClick={() => evolve('display2', 2)}>이상해씨 진화!</button>}
         {level === 2 && <button onClick={() => evolve('display3', 3)}>이상해풀 진화!</button>}
         {level === 3 && <p>진화 끝!</p>}
      </div>
   )
}

export default Quiz02
