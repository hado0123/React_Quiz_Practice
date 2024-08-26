import React, { useMemo } from 'react'

const Quiz02_2_sol = ({ numbers }) => {
   // useMemo를 사용하여 홀수만 필터링하고 그 합계를 계산합니다.
   const oddSum = useMemo(() => {
      console.log('Calculating odd numbers sum...')
      return numbers.filter((num) => num % 2 !== 0).reduce((acc, curr) => acc + curr)
   }, [numbers])

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {oddSum}</p>
      </div>
   )
}

export default Quiz02_2_sol
